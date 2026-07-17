import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useUserStore } from "@/lib/user-store";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, ShoppingBag, Heart, User, Package, Users, Truck, Warehouse, BarChart3, Megaphone, HeadphonesIcon, FileText, IndianRupee, LogOut, Sprout, Store } from "lucide-react";

export const Route = createFileRoute("/_auth/dashboard")({
  component: Dashboard,
});

function Dashboard() {
  const { currentUser, signOutUser } = useUserStore();
  const navigate = useNavigate();

  const roleLinks = currentUser?.role === "farmer"
    ? [{ label: "Farmer Dashboard", icon: Sprout, path: "/farmer" as const }]
    : currentUser?.role === "dealer"
    ? [{ label: "Dealer Portal", icon: Store, path: "/dealer" as const }]
    : [];

  const sections = [
    {
      title: "My Account",
      links: [
        { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" as const },
        { label: "My Orders", icon: ShoppingBag, path: "/orders" as const },
        { label: "My Wishlist", icon: Heart, path: "/wishlist" as const },
        { label: "My Profile", icon: User, path: "/profile" as const },
      ],
    },
    {
      title: "My Role",
      links: roleLinks,
    },
    {
      title: "Team Tools",
      links: [
        { label: "Sales", icon: BarChart3, path: "/sales" as const },
        { label: "Marketing", icon: Megaphone, path: "/marketing" as const },
        { label: "Support", icon: HeadphonesIcon, path: "/support" as const },
        { label: "Content", icon: FileText, path: "/content" as const },
        { label: "Accounts", icon: IndianRupee, path: "/accounts" as const },
        { label: "Delivery", icon: Truck, path: "/delivery" as const },
        { label: "Warehouse", icon: Warehouse, path: "/warehouse" as const },
        { label: "Distributor", icon: Users, path: "/distributor" as const },
      ],
    },
  ];

  return (
    <div className="container-x py-8 lg:py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-display text-3xl text-ink">My Account</h1>
            <p className="text-ink-soft mt-1">Welcome, {currentUser?.name || currentUser?.email}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full capitalize">
              {currentUser?.role}
            </span>
            <Button variant="outline" size="sm" onClick={() => navigate({ to: "/" })}>
              Storefront
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.filter(s => s.links.length > 0).map((section) => (
            <div key={section.title} className="surface-card p-6">
              <h3 className="text-sm font-medium text-ink-soft uppercase tracking-wider mb-4">{section.title}</h3>
              <div className="space-y-1">
                {section.links.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-ink-soft hover:text-ink hover:bg-surface transition-colors"
                  >
                    <link.icon className="h-4 w-4 text-primary" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <Button variant="destructive" onClick={() => { signOutUser(); navigate({ to: "/" }); }}>
            <LogOut className="h-4 w-4 mr-2" /> Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
}
