import { createFileRoute, Outlet, Link, redirect } from "@tanstack/react-router";
import { useAuth } from "@/lib/auth";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Settings,
  LogOut,
  Warehouse,
  FileText,
  BarChart3,
} from "lucide-react";
import { Logo } from "@/components/site/Logo";

export const Route = createFileRoute("/admin")({
  component: AdminLayout,
});

function AdminLayout() {
  const { user, signOut } = useAuth();

  // In a real app we check role, here we just check if user exists for demo
  // if (user?.user_metadata?.role !== 'admin') redirect({ to: '/dashboard' })

  const nav = [
    { label: "Overview", icon: LayoutDashboard, path: "/admin" },
    { label: "Orders", icon: ShoppingCart, path: "/admin/orders" },
    { label: "Catalog", icon: Package, path: "/admin/catalog" },
    { label: "Inventory", icon: Warehouse, path: "/admin/inventory" },
    { label: "Customers", icon: Users, path: "/admin/customers" },
    { label: "Employees", icon: Users, path: "/admin/employees" },
    { label: "Content", icon: FileText, path: "/admin/content" },
    { label: "Reports", icon: BarChart3, path: "/admin/reports" },
    { label: "Settings", icon: Settings, path: "/admin/settings" },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-surface-2">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 border-r border-border bg-background flex flex-col">
        <div className="p-6 border-b border-border">
          <Logo />
          <div className="mt-2 text-xs font-medium text-primary uppercase tracking-widest">
            Admin Console
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {nav.map((item) => (
            <Link
              key={item.label}
              to={item.path as string}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-ink-soft hover:text-ink hover:bg-surface transition-colors"
              activeProps={{
                className: "bg-primary/10 text-primary hover:text-primary hover:bg-primary/15",
              }}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground grid place-items-center text-xs font-medium">
              {user?.email?.charAt(0).toUpperCase() || "A"}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-ink truncate">{user?.email || "Admin"}</div>
              <div className="text-xs text-ink-soft">Super Admin</div>
            </div>
            <button
              onClick={signOut}
              className="text-ink-soft hover:text-clay"
              aria-label="Sign out"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-surface-2 p-8">
        <Outlet />
      </main>
    </div>
  );
}
