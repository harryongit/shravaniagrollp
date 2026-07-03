import { createFileRoute } from "@tanstack/react-router";
import { useAuth } from "@/lib/auth";
import { formatINR, products } from "@/lib/catalog";
import { Briefcase, Download, TrendingUp, Plus, FileText, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_auth/dealer")({
  component: DealerDashboard,
});

function DealerDashboard() {
  const { user } = useAuth();

  return (
    <div className="container-x py-8 lg:py-12 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-display text-3xl text-ink">Dealer Portal</h1>
            <span className="bg-accent/10 text-accent-foreground border border-accent/20 px-2.5 py-0.5 rounded-full text-xs font-medium uppercase tracking-wider">
              Gold Tier
            </span>
          </div>
          <p className="text-ink-soft">Ramesh Agro Centre · GSTIN: 27AAAAA0000A1Z5</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" /> Price List (PDF)
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" /> Bulk Order
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="surface-card p-6">
          <div className="text-sm font-medium text-ink-soft mb-2">Available Credit Limit</div>
          <div className="text-display text-3xl text-ink mb-1">{formatINR(350000)}</div>
          <div className="text-xs text-ink-soft">of {formatINR(500000)} total limit</div>
          <div className="mt-4 w-full bg-surface-2 rounded-full h-2 overflow-hidden">
            <div className="bg-primary h-full" style={{ width: "30%" }}></div>
          </div>
        </div>

        <div className="surface-card p-6">
          <div className="text-sm font-medium text-ink-soft mb-2">Outstanding Balance</div>
          <div className="text-display text-3xl text-ink mb-1">{formatINR(150000)}</div>
          <div className="text-xs text-destructive font-medium flex items-center gap-1">
            <FileText className="h-3 w-3" /> 1 Invoice overdue (3 days)
          </div>
          <Button size="sm" variant="outline" className="mt-4 w-full">
            View Invoices
          </Button>
        </div>

        <div className="surface-card p-6 bg-gradient-to-br from-surface to-accent/10 border-accent/20">
          <div className="text-sm font-medium text-ink-soft mb-2 flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-accent" /> Q3 Target Status
          </div>
          <div className="text-display text-3xl text-ink mb-1">82%</div>
          <div className="text-xs text-ink-soft">₹8.2L achieved / ₹10L target</div>
          <div className="mt-4 text-xs font-medium text-accent-foreground bg-accent/20 px-2 py-1 rounded inline-flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5" /> Unlock 2% bonus at ₹10L
          </div>
        </div>
      </div>

      <div className="surface-card">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <h3 className="text-lg font-medium text-ink flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-primary" /> Dealer-Specific Catalog (Bulk Pricing)
          </h3>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search SKU..."
              className="h-9 rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-ink-soft uppercase bg-surface border-b border-border">
              <tr>
                <th className="px-6 py-4 font-medium">SKU / Product</th>
                <th className="px-6 py-4 font-medium">MRP (per unit)</th>
                <th className="px-6 py-4 font-medium">Dealer Price</th>
                <th className="px-6 py-4 font-medium">MOQ</th>
                <th className="px-6 py-4 font-medium">Stock</th>
                <th className="px-6 py-4 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {products.slice(0, 5).map((p) => {
                const dealerPrice = p.price * 0.75; // 25% margin
                return (
                  <tr key={p.slug} className="hover:bg-surface/50">
                    <td className="px-6 py-4">
                      <div className="font-medium text-ink">{p.name}</div>
                      <div className="text-xs text-ink-soft mt-0.5 uppercase">
                        SKU: {p.slug.slice(0, 8)}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-ink-soft line-through">{formatINR(p.price)}</td>
                    <td className="px-6 py-4 font-medium text-primary">{formatINR(dealerPrice)}</td>
                    <td className="px-6 py-4 text-ink-soft">1 Box (20 units)</td>
                    <td className="px-6 py-4">
                      <span className="text-success font-medium">Available</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <input
                          type="number"
                          defaultValue="1"
                          min="1"
                          className="w-16 h-8 rounded border border-input bg-background px-2 text-center text-sm"
                        />
                        <Button size="sm">Add to PO</Button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
