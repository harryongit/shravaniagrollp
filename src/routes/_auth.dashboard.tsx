import { createFileRoute } from "@tanstack/react-router";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_auth/dashboard")({
  component: Dashboard,
});

function Dashboard() {
  const { user, signOut } = useAuth();

  return (
    <div className="container-x py-12">
      <div className="surface-card p-8">
        <h1 className="text-display text-2xl mb-2">My Account</h1>
        <p className="text-ink-soft mb-8">Logged in as {user?.email}</p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-border p-6">
            <h3 className="font-medium text-ink mb-2">Order History</h3>
            <p className="text-sm text-ink-soft mb-4">View and track your recent orders.</p>
            <Button variant="outline" className="w-full">
              View Orders
            </Button>
          </div>
          <div className="rounded-xl border border-border p-6">
            <h3 className="font-medium text-ink mb-2">My Profile</h3>
            <p className="text-sm text-ink-soft mb-4">Manage addresses and preferences.</p>
            <Button variant="outline" className="w-full">
              Edit Profile
            </Button>
          </div>
          <div className="rounded-xl border border-border p-6">
            <h3 className="font-medium text-ink mb-2">Support</h3>
            <p className="text-sm text-ink-soft mb-4">Get help with an order or product.</p>
            <Button variant="outline" className="w-full">
              Open Ticket
            </Button>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border">
          <Button variant="destructive" onClick={signOut}>
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
}
