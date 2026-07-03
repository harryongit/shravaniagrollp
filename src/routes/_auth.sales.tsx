import { createFileRoute } from "@tanstack/react-router";
import { useAuth } from "@/lib/auth";
import { Users, FileText, Target, Plus, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatINR } from "@/lib/catalog";

export const Route = createFileRoute("/_auth/sales")({
  component: SalesDashboard,
});

function SalesDashboard() {
  const { user } = useAuth();

  return (
    <div className="container-x py-8 lg:py-12 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-display text-3xl text-ink">Sales CRM</h1>
            <span className="bg-primary/10 text-primary border border-primary/20 px-2.5 py-0.5 rounded-full text-xs font-medium uppercase tracking-wider">
              Territory Manager
            </span>
          </div>
          <p className="text-ink-soft">Region: West Maharashtra · Assigned Accounts: 42</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <FileText className="h-4 w-4" /> New Quotation
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" /> Create Order
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="surface-card p-6 bg-gradient-to-br from-surface to-primary/5 border-primary/20">
          <div className="text-sm font-medium text-ink-soft mb-2 flex items-center gap-2">
            <Target className="h-4 w-4 text-primary" /> Monthly Target
          </div>
          <div className="text-display text-3xl text-ink mb-1">{formatINR(2450000)}</div>
          <div className="text-xs text-ink-soft">of {formatINR(3000000)} (81%)</div>
          <div className="mt-4 w-full bg-surface-2 rounded-full h-2 overflow-hidden">
            <div className="bg-primary h-full" style={{ width: "81%" }}></div>
          </div>
        </div>

        <div className="surface-card p-6">
          <div className="text-sm font-medium text-ink-soft mb-2">Pending Collections</div>
          <div className="text-display text-3xl text-ink mb-1">{formatINR(420000)}</div>
          <div className="text-xs text-destructive font-medium">3 accounts overdue</div>
        </div>

        <div className="surface-card p-6">
          <div className="text-sm font-medium text-ink-soft mb-2">New Leads</div>
          <div className="text-display text-3xl text-ink mb-1">14</div>
          <div className="text-xs text-success font-medium">From Marketing Campaigns</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="surface-card">
          <div className="p-6 border-b border-border flex items-center justify-between">
            <h3 className="text-lg font-medium text-ink flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" /> Key Accounts
            </h3>
            <Button size="sm" variant="ghost">
              View All
            </Button>
          </div>
          <div className="divide-y divide-border">
            {[
              { name: "Kisan Agro Centre", type: "Dealer", tier: "Gold", loc: "Pune" },
              { name: "Shetkari Krushi Kendra", type: "Dealer", tier: "Silver", loc: "Satara" },
              { name: "Ganesh Farm (Ramesh K.)", type: "Farmer", tier: "Bulk", loc: "Baramati" },
            ].map((acc) => (
              <div
                key={acc.name}
                className="p-4 flex items-center justify-between hover:bg-surface/50"
              >
                <div>
                  <div className="font-medium text-ink">{acc.name}</div>
                  <div className="text-xs text-ink-soft mt-1 flex items-center gap-2">
                    <span className="bg-surface-2 px-1.5 py-0.5 rounded">{acc.type}</span>
                    <span className="text-amber font-medium">{acc.tier}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-ink-soft flex items-center justify-end gap-1 mb-2">
                    <MapPin className="h-3 w-3" /> {acc.loc}
                  </div>
                  <Button size="sm" variant="outline" className="h-7 text-xs">
                    View Profile
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="surface-card">
          <div className="p-6 border-b border-border flex items-center justify-between">
            <h3 className="text-lg font-medium text-ink flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" /> Recent Quotations
            </h3>
          </div>
          <div className="divide-y divide-border">
            {[
              { id: "QT-2091", to: "Shetkari Krushi Kendra", amt: 125000, status: "sent" },
              { id: "QT-2090", to: "Kisan Agro Centre", amt: 340000, status: "approved" },
              { id: "QT-2089", to: "Ramesh K.", amt: 45000, status: "rejected" },
            ].map((qt) => (
              <div
                key={qt.id}
                className="p-4 flex items-center justify-between hover:bg-surface/50"
              >
                <div>
                  <div className="font-medium text-ink">{qt.id}</div>
                  <div className="text-xs text-ink-soft mt-1">To: {qt.to}</div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-sm text-ink mb-1">{formatINR(qt.amt)}</div>
                  {qt.status === "sent" && (
                    <span className="text-[10px] font-medium bg-amber/10 text-amber px-2 py-0.5 rounded uppercase">
                      Pending Approval
                    </span>
                  )}
                  {qt.status === "approved" && (
                    <span className="text-[10px] font-medium bg-success/10 text-success px-2 py-0.5 rounded uppercase">
                      Converted to Order
                    </span>
                  )}
                  {qt.status === "rejected" && (
                    <span className="text-[10px] font-medium bg-destructive/10 text-destructive px-2 py-0.5 rounded uppercase">
                      Declined
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
