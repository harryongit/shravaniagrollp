import { createFileRoute, Outlet, Link, useNavigate } from "@tanstack/react-router";
import { useAdminAuth } from "@/lib/admin-auth";
import { useUserStore } from "@/lib/user-store";
import { useState } from "react";
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
  Shield,
  UserCheck,
} from "lucide-react";
import { Logo } from "@/components/site/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/admin")({
  component: AdminLayout,
});

function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { signIn } = useAdminAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const result = await signIn(username, password);
    if (!result.success) {
      setError(result.error || "Login failed");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-2 px-4">
      <div className="w-full max-w-sm surface-card p-8">
        <div className="text-center mb-8">
          <Logo />
          <div className="mt-4">
            <Shield className="h-10 w-10 mx-auto text-primary" />
          </div>
          <h2 className="mt-4 text-display text-2xl text-ink">Admin Console</h2>
          <p className="mt-1 text-sm text-ink-soft">Sign in to manage your store</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="admin"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="text-sm text-destructive font-medium bg-destructive/10 px-3 py-2 rounded-lg">
              {error}
            </div>
          )}

          <Button type="submit" className="w-full h-10" disabled={loading}>
            {loading ? "Signing in..." : "Sign in to Admin"}
          </Button>

          <div className="text-center text-xs text-ink-soft">
            <Link to="/" className="hover:text-primary">
              Back to storefront
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

function AdminLayout() {
  const { isAuthenticated, loading: authLoading, admin, signOut } = useAdminAuth();
  const { pendingUsers } = useUserStore();
  const navigate = useNavigate();

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface-2">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminLoginPage />;
  }

  const nav = [
    { label: "Overview", icon: LayoutDashboard, path: "/admin" },
    { label: "Orders", icon: ShoppingCart, path: "/admin/orders" },
    { label: "Catalog", icon: Package, path: "/admin/catalog" },
    { label: "Inventory", icon: Warehouse, path: "/admin/inventory" },
    { label: "Users", icon: Users, path: "/admin/users", badge: pendingUsers.length },
    { label: "Employees", icon: Users, path: "/admin/employees" },
    { label: "Content", icon: FileText, path: "/admin/content" },
    { label: "Reports", icon: BarChart3, path: "/admin/reports" },
    { label: "Settings", icon: Settings, path: "/admin/settings" },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-surface-2">
      <aside className="w-64 flex-shrink-0 border-r border-border bg-background flex flex-col">
        <div className="p-6 border-b border-border">
          <Link to="/admin" className="block">
            <Logo />
          </Link>
          <div className="mt-2 flex items-center gap-2 text-xs font-medium text-primary uppercase tracking-widest">
            <Shield className="h-3 w-3" />
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
              <item.icon className="h-4 w-4 flex-shrink-0" />
              <span className="flex-1">{item.label}</span>
              {item.badge ? (
                <span className="inline-flex items-center justify-center h-5 min-w-5 px-1.5 text-xs font-bold rounded-full bg-destructive text-destructive-foreground">
                  {item.badge}
                </span>
              ) : null}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground grid place-items-center text-xs font-bold">
              A
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-ink truncate">Administrator</div>
              <div className="text-xs text-ink-soft">Super Admin</div>
            </div>
            <button
              onClick={() => { signOut(); navigate({ to: "/admin" }); }}
              className="text-ink-soft hover:text-clay"
              aria-label="Sign out"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto bg-surface-2 p-8">
        <Outlet />
      </main>
    </div>
  );
}
