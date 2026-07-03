import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Shield } from "lucide-react";

export const Route = createFileRoute("/admin/employees")({
  component: AdminEmployees,
});

const ROLES = [
  "Customer",
  "Farmer",
  "Dealer",
  "Warehouse Staff",
  "Support Executive",
  "Content Manager",
  "Inventory Manager",
  "Accounts Manager",
  "Marketing Manager",
  "Admin",
];

const employees = [
  {
    name: "Priya Nair",
    email: "priya@shravaniagro.com",
    role: "Support Executive",
    status: "active",
    lastLogin: "Today, 9:12 AM",
  },
  {
    name: "Arjun Mehta",
    email: "arjun@shravaniagro.com",
    role: "Inventory Manager",
    status: "active",
    lastLogin: "Yesterday",
  },
  {
    name: "Sunita Rao",
    email: "sunita@shravaniagro.com",
    role: "Content Manager",
    status: "active",
    lastLogin: "Today, 10:45 AM",
  },
  {
    name: "Ravi Deshmukh",
    email: "ravi@shravaniagro.com",
    role: "Warehouse Staff",
    status: "active",
    lastLogin: "3 days ago",
  },
  {
    name: "Kavita Joshi",
    email: "kavita@shravaniagro.com",
    role: "Accounts Manager",
    status: "suspended",
    lastLogin: "1 week ago",
  },
];

function AdminEmployees() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-display text-2xl text-ink">Employees & Staff</h1>
        <Button className="gap-2">
          <Plus className="h-4 w-4" /> Invite Staff Member
        </Button>
      </div>

      <div className="surface-card">
        <div className="p-6 border-b border-border flex gap-4">
          <Input placeholder="Search by name or email..." className="max-w-xs" />
          <select className="h-10 rounded-md border border-input bg-background px-3 text-sm">
            <option>All Roles</option>
            {ROLES.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-ink-soft uppercase bg-surface border-b border-border">
              <tr>
                <th className="px-6 py-4 font-medium">Employee</th>
                <th className="px-6 py-4 font-medium">Role</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Last Login</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {employees.map((emp) => (
                <tr key={emp.email} className="hover:bg-surface/50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/20 text-primary grid place-items-center text-xs font-bold flex-shrink-0">
                        {emp.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <div className="font-medium text-ink">{emp.name}</div>
                        <div className="text-xs text-ink-soft">{emp.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-ink-soft">{emp.role}</td>
                  <td className="px-6 py-4">
                    {emp.status === "active" ? (
                      <span className="bg-success/10 text-success text-xs font-medium px-2 py-0.5 rounded">
                        Active
                      </span>
                    ) : (
                      <span className="bg-destructive/10 text-destructive text-xs font-medium px-2 py-0.5 rounded">
                        Suspended
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-ink-soft">{emp.lastLogin}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <Button size="sm" variant="ghost" className="h-8 text-xs">
                        Edit Role
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 text-xs gap-1 text-destructive hover:text-destructive"
                      >
                        <Shield className="h-3.5 w-3.5" />
                        {emp.status === "active" ? "Suspend" : "Reactivate"}
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
