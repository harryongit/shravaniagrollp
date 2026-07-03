import { createFileRoute } from "@tanstack/react-router";
import { useAuth } from "@/lib/auth";
import { Megaphone, Ticket, Users, BarChart2, Plus, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_auth/marketing")({
  component: MarketingDashboard,
});

function MarketingDashboard() {
  const { user } = useAuth();

  return (
    <div className="container-x py-8 lg:py-12 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-display text-3xl text-ink">Marketing Hub</h1>
            <span className="bg-primary/10 text-primary border border-primary/20 px-2.5 py-0.5 rounded-full text-xs font-medium uppercase tracking-wider">
              Manager
            </span>
          </div>
          <p className="text-ink-soft">Campaigns, Coupons, and Customer Loyalty</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Mail className="h-4 w-4" /> New Campaign
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" /> Create Coupon
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="surface-card p-6">
          <div className="text-sm font-medium text-ink-soft mb-2 flex items-center gap-2">
            <Megaphone className="h-4 w-4 text-primary" /> Active Campaigns
          </div>
          <div className="text-display text-3xl text-ink">3</div>
        </div>

        <div className="surface-card p-6">
          <div className="text-sm font-medium text-ink-soft mb-2 flex items-center gap-2">
            <Ticket className="h-4 w-4 text-amber" /> Active Coupons
          </div>
          <div className="text-display text-3xl text-ink">12</div>
        </div>

        <div className="surface-card p-6">
          <div className="text-sm font-medium text-ink-soft mb-2 flex items-center gap-2">
            <Users className="h-4 w-4 text-success" /> Loyalty Members
          </div>
          <div className="text-display text-3xl text-ink">8.4k</div>
          <div className="text-xs text-success mt-1">+120 this week</div>
        </div>

        <div className="surface-card p-6">
          <div className="text-sm font-medium text-ink-soft mb-2 flex items-center gap-2">
            <BarChart2 className="h-4 w-4 text-accent" /> Campaign ROI
          </div>
          <div className="text-display text-3xl text-ink">3.2x</div>
          <div className="text-xs text-ink-soft mt-1">Avg return on ad spend</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="surface-card">
          <div className="p-6 border-b border-border flex items-center justify-between">
            <h3 className="text-lg font-medium text-ink flex items-center gap-2">
              <Ticket className="h-5 w-5 text-primary" /> Coupon Codes
            </h3>
            <Button size="sm" variant="ghost">
              View All
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-ink-soft uppercase bg-surface border-b border-border">
                <tr>
                  <th className="px-6 py-4 font-medium">Code</th>
                  <th className="px-6 py-4 font-medium">Discount</th>
                  <th className="px-6 py-4 font-medium">Usage</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { code: "MONSOON20", val: "20% Off", usage: "450 / 1000", status: "active" },
                  { code: "FIRSTORDER", val: "Flat ₹500", usage: "120 / ∞", status: "active" },
                  { code: "DIWALI50", val: "50% Off", usage: "500 / 500", status: "expired" },
                ].map((c) => (
                  <tr key={c.code} className="hover:bg-surface/50">
                    <td className="px-6 py-4 font-mono font-medium text-ink">{c.code}</td>
                    <td className="px-6 py-4 text-ink-soft">{c.val}</td>
                    <td className="px-6 py-4 text-ink-soft">{c.usage}</td>
                    <td className="px-6 py-4">
                      {c.status === "active" ? (
                        <span className="bg-success/10 text-success text-xs font-medium px-2 py-0.5 rounded">
                          Active
                        </span>
                      ) : (
                        <span className="bg-surface-2 text-ink-soft text-xs font-medium px-2 py-0.5 rounded">
                          Expired
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <div className="surface-card p-6">
            <h3 className="text-lg font-medium text-ink mb-4 flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" /> Recent Campaigns
            </h3>
            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-border bg-background flex justify-between items-center">
                <div>
                  <div className="font-medium text-sm text-ink mb-1">
                    Kharif Season Prep (WhatsApp)
                  </div>
                  <div className="text-xs text-ink-soft">Sent to 4,200 farmers · 68% open rate</div>
                </div>
                <Button size="sm" variant="outline">
                  View Stats
                </Button>
              </div>
              <div className="p-4 rounded-xl border border-border bg-background flex justify-between items-center">
                <div>
                  <div className="font-medium text-sm text-ink mb-1">
                    Inactive Customers Re-engagement (Email)
                  </div>
                  <div className="text-xs text-ink-soft">Sent to 1,500 users · 12% click rate</div>
                </div>
                <Button size="sm" variant="outline">
                  View Stats
                </Button>
              </div>
            </div>
          </div>

          <div className="surface-card p-6 bg-gradient-to-br from-surface to-accent/5">
            <h3 className="text-lg font-medium text-ink mb-2">Loyalty Program Settings</h3>
            <p className="text-sm text-ink-soft mb-4">
              Current Rule: 1 point earned per ₹100 spent. 1 point = ₹1 redemption value.
            </p>
            <Button size="sm" variant="outline">
              Configure Rules
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
