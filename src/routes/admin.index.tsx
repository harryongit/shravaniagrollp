import { createFileRoute, Link } from "@tanstack/react-router";
import { useUserStore } from "@/lib/user-store";
import { ArrowUpRight, TrendingUp, Package, Users, DollarSign, ShoppingCart, Clock, UserCheck, Sprout, IndianRupee } from "lucide-react";
import { formatINR } from "@/lib/catalog";

export const Route = createFileRoute("/admin/")({
  component: AdminDashboard,
});

function AdminDashboard() {
  const { users, pendingUsers, verifiedUsers } = useUserStore();

  const stats = [
    { label: "Total Revenue (MTD)", value: 1842000, trend: "+12.5%", icon: DollarSign, format: "currency" as const },
    { label: "Active Orders", value: 156, trend: "+4.2%", icon: ShoppingCart, format: "number" as const },
    { label: "Registered Users", value: users.length, trend: "+18.1%", icon: Users, format: "number" as const },
    { label: "Pending Approvals", value: pendingUsers.length, trend: "", icon: Clock, format: "number" as const, highlight: pendingUsers.length > 0 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-display text-2xl text-ink">Dashboard Overview</h1>
          <p className="text-sm text-ink-soft mt-1">Welcome back, Administrator</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-xs text-ink-soft bg-background px-3 py-1.5 rounded-full border border-border">
            {new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="surface-card p-5">
            <div className="flex items-center justify-between">
              <div className="text-xs font-medium text-ink-soft uppercase tracking-wider">{s.label}</div>
              <div className={`h-8 w-8 rounded-full grid place-items-center ${
                s.highlight ? "bg-amber/10 text-amber" : "bg-primary/10 text-primary"
              }`}>
                <s.icon className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <div className="text-2xl font-bold text-ink">
                {s.format === "currency" ? formatINR(s.value) : s.value}
              </div>
              {s.trend && (
                <div className="text-xs font-medium text-success bg-success/10 px-1.5 py-0.5 rounded flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-0.5" />
                  {s.trend}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="surface-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-medium text-ink">Pending User Approvals</h3>
            {pendingUsers.length > 0 && (
              <span className="text-xs font-medium text-amber bg-amber/10 px-2 py-0.5 rounded-full">
                {pendingUsers.length} pending
              </span>
            )}
          </div>
          {pendingUsers.length === 0 ? (
            <div className="text-center py-8">
              <UserCheck className="h-8 w-8 mx-auto text-success mb-2" />
              <p className="text-sm text-ink-soft">All clear — no pending approvals</p>
            </div>
          ) : (
            <div className="space-y-3">
              {pendingUsers.slice(0, 5).map((u) => (
                <div key={u.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-amber/10 text-amber grid place-items-center text-xs font-bold">
                      {u.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-ink">{u.name}</div>
                      <div className="text-xs text-ink-soft">{u.email} · {u.role}</div>
                    </div>
                  </div>
                  <div className="text-xs font-medium text-amber bg-amber/10 px-2 py-0.5 rounded">
                    Pending
                  </div>
                </div>
              ))}
              {pendingUsers.length > 5 && (
                <div className="text-center pt-2">
                  <a href="/admin/users" className="text-xs font-medium text-primary hover:underline">
                    View all {pendingUsers.length} pending approvals
                  </a>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="surface-card p-6">
          <h3 className="text-base font-medium text-ink mb-4">Recent Orders</h3>
          <div className="space-y-3">
            {[
              { id: "SA-1001", customer: "Ramesh Kumar", items: 2, total: 4800, status: "Processing" as const },
              { id: "SA-1002", customer: "Suresh Patel", items: 5, total: 12450, status: "Shipped" as const },
              { id: "SA-1003", customer: "Priya Deshmukh", items: 1, total: 2300, status: "Delivered" as const },
              { id: "SA-1004", customer: "Gurpreet Singh", items: 3, total: 6750, status: "Processing" as const },
              { id: "SA-1005", customer: "Lakshmi Devi", items: 4, total: 9200, status: "Pending" as const },
            ].map((o) => (
              <div key={o.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <div>
                  <div className="text-sm font-medium text-ink">Order #{o.id}</div>
                  <div className="text-xs text-ink-soft">{o.customer} · {o.items} items</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-ink">{formatINR(o.total)}</div>
                  <div className={`text-xs font-medium mt-0.5 px-2 py-0.5 rounded inline-block ${
                    o.status === "Delivered" ? "text-success bg-success/10" :
                    o.status === "Shipped" ? "text-primary bg-primary/10" :
                    o.status === "Processing" ? "text-amber bg-amber/10" :
                    "text-ink-soft bg-surface"
                  }`}>
                    {o.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="surface-card p-6">
          <h3 className="text-base font-medium text-ink mb-4">User Overview</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <span className="text-sm text-ink-soft">Total Users</span>
              </div>
              <span className="text-sm font-medium text-ink">{users.length}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <UserCheck className="h-4 w-4 text-success" />
                <span className="text-sm text-ink-soft">Verified</span>
              </div>
              <span className="text-sm font-medium text-ink">{verifiedUsers.length}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-amber" />
                <span className="text-sm text-ink-soft">Pending</span>
              </div>
              <span className="text-sm font-medium text-ink">{pendingUsers.length}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sprout className="h-4 w-4 text-clay" />
                <span className="text-sm text-ink-soft">Farmers</span>
              </div>
              <span className="text-sm font-medium text-ink">{users.filter(u => u.role === "farmer").length}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Store className="h-4 w-4 text-accent" />
                <span className="text-sm text-ink-soft">Dealers</span>
              </div>
              <span className="text-sm font-medium text-ink">{users.filter(u => u.role === "dealer").length}</span>
            </div>
          </div>
        </div>

        <div className="surface-card p-6">
          <h3 className="text-base font-medium text-ink mb-4">Low Stock Alerts</h3>
          <div className="space-y-3">
            {[
              { n: "Urea 46% N (50kg)", stock: 12, th: 50 },
              { n: "Imidacloprid 17.8% SL (1L)", stock: 5, th: 20 },
              { n: "Drip Laterals 16mm (400m)", stock: 2, th: 10 },
              { n: "Potassium Sulphate (25kg)", stock: 8, th: 30 },
            ].map((p, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <div>
                  <div className="text-sm font-medium text-ink">{p.n}</div>
                  <div className="text-xs text-ink-soft">Threshold: {p.th} units</div>
                </div>
                <div className="text-right">
                  <div className={`text-sm font-medium ${p.stock <= 5 ? "text-destructive" : "text-amber"}`}>
                    {p.stock} units
                  </div>
                  <button className="text-xs font-medium text-primary hover:underline mt-0.5">
                    Reorder
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="surface-card p-6">
          <h3 className="text-base font-medium text-ink mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <Link to="/admin/orders" className="flex flex-col items-center gap-2 p-4 rounded-xl border border-border hover:bg-surface transition-colors">
              <ShoppingCart className="h-5 w-5 text-primary" />
              <span className="text-xs font-medium text-ink">New Order</span>
            </Link>
            <Link to="/admin/catalog" className="flex flex-col items-center gap-2 p-4 rounded-xl border border-border hover:bg-surface transition-colors">
              <Package className="h-5 w-5 text-clay" />
              <span className="text-xs font-medium text-ink">Add Product</span>
            </Link>
            <Link to="/admin/users" className="flex flex-col items-center gap-2 p-4 rounded-xl border border-border hover:bg-surface transition-colors">
              <Users className="h-5 w-5 text-amber" />
              <span className="text-xs font-medium text-ink">Manage Users</span>
            </Link>
            <Link to="/admin/settings" className="flex flex-col items-center gap-2 p-4 rounded-xl border border-border hover:bg-surface transition-colors">
              <Settings className="h-5 w-5 text-ink-soft" />
              <span className="text-xs font-medium text-ink">Settings</span>
            </Link>
          </div>
          <div className="mt-4 pt-4 border-t border-border">
            <Link to="/" className="flex items-center justify-center gap-2 text-xs text-ink-soft hover:text-primary transition-colors">
              <Sprout className="h-3 w-3" />
              View storefront
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
