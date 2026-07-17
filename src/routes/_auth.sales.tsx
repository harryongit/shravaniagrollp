import { createFileRoute } from "@tanstack/react-router";
import { TrendingUp, DollarSign, BarChart3, Target } from "lucide-react";
import { formatINR } from "@/lib/catalog";

export const Route = createFileRoute("/_auth/sales")({
  component: Sales,
});

function Sales() {
  return (
    <div className="container-x py-12">
      <div className="surface-card p-8">
        <div className="flex items-center gap-3 mb-6">
          <BarChart3 className="h-6 w-6 text-primary" />
          <h1 className="text-display text-2xl text-ink">Sales Dashboard</h1>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 mb-8">
          <div className="rounded-xl bg-surface p-4">
            <DollarSign className="h-5 w-5 text-primary mb-2" />
            <div className="text-2xl font-bold text-ink tabular-nums">{formatINR(2480000)}</div>
            <div className="text-xs text-ink-soft mt-1">This Month</div>
          </div>
          <div className="rounded-xl bg-surface p-4">
            <TrendingUp className="h-5 w-5 text-success mb-2" />
            <div className="text-2xl font-bold text-ink tabular-nums">{formatINR(18600000)}</div>
            <div className="text-xs text-ink-soft mt-1">FYTD Total</div>
          </div>
          <div className="rounded-xl bg-surface p-4">
            <Target className="h-5 w-5 text-amber mb-2" />
            <div className="text-2xl font-bold text-ink tabular-nums">84%</div>
            <div className="text-xs text-ink-soft mt-1">Target Achieved</div>
          </div>
        </div>
        <div className="p-6 rounded-xl border border-border">
          <h3 className="font-medium text-ink mb-4">Top Selling Products</h3>
          <div className="space-y-3">
            {[
              { name: "Urea 46% N (50kg)", units: 1240, revenue: 1488000 },
              { name: "Imidacloprid 17.8% SL", units: 680, revenue: 1020000 },
              { name: "Drip Irrigation Kit", units: 420, revenue: 1260000 },
              { name: "Hybrid Cotton Seeds", units: 380, revenue: 760000 },
            ].map((p, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <span className="text-sm text-ink">{p.name}</span>
                <div className="text-right">
                  <div className="text-sm font-medium text-ink">{p.units} units</div>
                  <div className="text-xs text-ink-soft">{formatINR(p.revenue)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
