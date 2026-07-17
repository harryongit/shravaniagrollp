import { createFileRoute } from "@tanstack/react-router";
import { useUserStore, type RegisteredUser } from "@/lib/user-store";
import { useState } from "react";
import { Users, UserCheck, Clock, X, Search, Sprout, Store, Mail, Phone, MapPin, Check, Ban, Trash2, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/admin/users")({
  component: AdminUsers,
});

const statusConfig = {
  pending: { label: "Pending", class: "text-amber bg-amber/10 border-amber/20" },
  verified: { label: "Verified", class: "text-success bg-success/10 border-success/20" },
  rejected: { label: "Rejected", class: "text-destructive bg-destructive/10 border-destructive/20" },
};

function AdminUsers() {
  const { users, approveUser, rejectUser } = useUserStore();
  const [tab, setTab] = useState<"all" | "pending" | "verified" | "rejected">("all");
  const [search, setSearch] = useState("");

  const filtered = users.filter((u) => {
    if (tab !== "all" && u.status !== tab) return false;
    if (search) {
      const q = search.toLowerCase();
      return (
        u.name.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q) ||
        u.phone.includes(q) ||
        (u.farmName && u.farmName.toLowerCase().includes(q))
      );
    }
    return true;
  });

  const tabs = [
    { key: "all" as const, label: "All Users", count: users.length },
    { key: "pending" as const, label: "Pending", count: users.filter(u => u.status === "pending").length },
    { key: "verified" as const, label: "Verified", count: users.filter(u => u.status === "verified").length },
    { key: "rejected" as const, label: "Rejected", count: users.filter(u => u.status === "rejected").length },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-display text-2xl text-ink">User Management</h1>
          <p className="text-sm text-ink-soft mt-1">Manage registered users and pending approvals</p>
        </div>
      </div>

      <div className="surface-card p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
          <div className="flex gap-1 bg-surface rounded-lg p-1">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                  tab === t.key
                    ? "bg-background text-ink shadow-sm"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                {t.label}
                {t.count > 0 && (
                  <span className={`ml-1.5 text-xs px-1.5 py-0.5 rounded-full ${
                    tab === t.key ? "bg-primary/10 text-primary" : "bg-surface-2 text-ink-soft"
                  }`}>
                    {t.count}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-soft" />
            <Input
              placeholder="Search users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-12">
            <Users className="h-10 w-10 mx-auto text-ink-soft/50 mb-3" />
            <p className="text-sm text-ink-soft">
              {search ? "No users match your search" : "No users found"}
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((u) => (
              <UserRow key={u.id} user={u} onApprove={approveUser} onReject={rejectUser} />
            ))}
          </div>
        )}

        <div className="mt-4 pt-4 border-t border-border text-xs text-ink-soft">
          Showing {filtered.length} of {users.length} users
        </div>
      </div>
    </div>
  );
}

function UserRow({
  user,
  onApprove,
  onReject,
}: {
  user: RegisteredUser;
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
}) {
  const status = statusConfig[user.status];
  const [confirmReject, setConfirmReject] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl border border-border hover:bg-surface/50 transition-colors">
      <div className="flex items-start gap-3 flex-1 min-w-0">
        <div className={`h-10 w-10 rounded-full grid place-items-center text-sm font-bold flex-shrink-0 ${
          user.role === "farmer" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent-foreground"
        }`}>
          {user.name.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-medium text-ink">{user.name}</span>
            <Badge variant="outline" className={`text-[10px] px-1.5 py-0 h-4 ${status.class}`}>
              {status.label}
            </Badge>
            <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded flex items-center gap-0.5 ${
              user.role === "farmer" ? "text-primary bg-primary/5" : "text-accent-foreground bg-accent/5"
            }`}>
              {user.role === "farmer" ? <Sprout className="h-2.5 w-2.5" /> : <Store className="h-2.5 w-2.5" />}
              {user.role}
            </span>
          </div>
          <div className="flex items-center gap-3 mt-1 text-xs text-ink-soft flex-wrap">
            <span className="flex items-center gap-1">
              <Mail className="h-3 w-3" /> {user.email}
            </span>
            <span className="flex items-center gap-1">
              <Phone className="h-3 w-3" /> {user.phone}
            </span>
            {user.city && (
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3" /> {user.city}{user.state ? `, ${user.state}` : ""}
              </span>
            )}
          </div>
          {user.farmName && (
            <div className="text-xs text-ink-soft mt-0.5">
              {user.role === "farmer" ? "🌾" : "🏪"} {user.farmName}
            </div>
          )}
          <div className="text-[10px] text-ink-soft/60 mt-0.5">
            Registered {new Date(user.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 flex-shrink-0">
        {user.status === "pending" && (
          <>
            <Button
              size="sm"
              className="h-8 px-3 text-xs"
              onClick={() => onApprove(user.id)}
            >
              <Check className="h-3.5 w-3.5 mr-1" />
              Approve
            </Button>
            {confirmReject ? (
              <div className="flex items-center gap-1">
                <Button
                  size="sm"
                  variant="destructive"
                  className="h-8 px-2 text-xs"
                  onClick={() => { onReject(user.id); setConfirmReject(false); }}
                >
                  Confirm
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-8 px-2 text-xs"
                  onClick={() => setConfirmReject(false)}
                >
                  Cancel
                </Button>
              </div>
            ) : (
              <Button
                size="sm"
                variant="outline"
                className="h-8 px-3 text-xs text-destructive border-destructive/30 hover:bg-destructive/10"
                onClick={() => setConfirmReject(true)}
              >
                <Ban className="h-3.5 w-3.5 mr-1" />
                Reject
              </Button>
            )}
          </>
        )}
        {user.status === "verified" && (
          <div className="flex items-center gap-1 text-xs text-success">
            <UserCheck className="h-3.5 w-3.5" />
            Approved
          </div>
        )}
        {user.status === "rejected" && (
          <div className="flex items-center gap-1 text-xs text-destructive">
            <ShieldAlert className="h-3.5 w-3.5" />
            Rejected
          </div>
        )}
      </div>
    </div>
  );
}
