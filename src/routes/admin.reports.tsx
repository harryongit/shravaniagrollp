import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, TrendingUp, DollarSign, Package, Users, ShoppingCart, Download } from "lucide-react";
import { formatINR } from "@/lib/catalog";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/admin/reports")({
  component: AdminReports,
});

function AdminReports() {
  const monthlyRevenue = [1420000, 1580000, 1350000, 1720000, 1890000, 2100000, 1950000, 2240000, 2480000, 2350000, 2670000, 2850000];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const maxRev = Math.max(...monthlyRevenue);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-display text-2xl text-ink">Reports & Analytics</h1>
          <p className="text-sm text-ink-soft mt-1">Revenue, orders, and growth metrics</p>
        </div>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-1" />
          Export Report
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {[
          { label: "FY 2025-26 Revenue", value: 24600000, icon: DollarSign, format: "currency" as const },
          { label: "Total Orders (YTD)", value: 2840, icon: ShoppingCart, format: "number" as const },
          { label: "Avg Order Value", value: 8660, icon: TrendingUp, format: "currency" as const },
          { label: "Active Customers", value: 1240, icon: Users, format: "number" as const },
        ].map((s) => (
          <div key={s.label} className="surface-card p-5">
            <div className="flex items-center justify-between">
              <div className="text-xs font-medium text-ink-soft uppercase tracking-wider">{s.label}</div>
              <div className="h-8 w-8 rounded-full bg-primary/10 text-primary grid place-items-center">
                <s.icon className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-3 text-2xl font-bold text-ink">
              {s.format === "currency" ? `₹${(s.value / 100000).toFixed(1)}L` : s.value.toLocaleString("en-IN")}
            </div>
          </div>
        ))}
      </div>

      <div className="surface-card p-6">
        <h3 className="text-base font-medium text-ink mb-6">Monthly Revenue (FY 2025-26)</h3>
        <div className="flex items-end gap-2 h-48">
          {monthlyRevenue.map((rev, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full rounded-t-md bg-primary/80 hover:bg-primary transition-colors"
                style={{ height: `${(rev / maxRev) * 100}%` }}
              />
              <div className="text-[10px] text-ink-soft">{months[i]}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-border flex justify-between text-xs text-ink-soft">
          <span>Low: {formatINR(Math.min(...monthlyRevenue))}</span>
          <span>High: {formatINR(maxRev)}</span>
          <span>Avg: {formatINR(Math.round(monthlyRevenue.reduce((a, b) => a + b, 0) / monthlyRevenue.length))}</span>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="surface-card p-6">
          <h3 className="text-base font-medium text-ink mb-4">Top Categories by Revenue</h3>
          <div className="space-y-4">
            {[
              { name: "Crop Protection", share: 32, revenue: 7872000 },
              { name: "Fertilizers", share: 28, revenue: 6888000 },
              { name: "Seeds", share: 18, revenue: 4428000 },
              { name: "Irrigation", share: 12, revenue: 2952000 },
              { name: "Machinery", share: 10, revenue: 2460000 },
            ].map((c, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-ink">{c.name}</span>
                  <span className="text-ink-soft">{c.share}%</span>
                </div>
                <div className="h-2 rounded-full bg-surface overflow-hidden">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${c.share}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="surface-card p-6">
          <h3 className="text-base font-medium text-ink mb-4">Order Fulfillment</h3>
          <div className="space-y-4">
            {[
              { label: "Delivered", value: 72, color: "bg-success" },
              { label: "In Transit", value: 15, color: "bg-primary" },
              { label: "Processing", value: 8, color: "bg-amber" },
              { label: "Cancelled", value: 5, color: "bg-destructive" },
            ].map((s) => (
              <div key={s.label}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-ink">{s.label}</span>
                  <span className="text-ink-soft">{s.value}%</span>
                </div>
                <div className="h-2 rounded-full bg-surface overflow-hidden">
                  <div className={`h-full rounded-full ${s.color}`} style={{ width: `${s.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
