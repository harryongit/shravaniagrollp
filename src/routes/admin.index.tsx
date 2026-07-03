import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, TrendingUp, Package, Users, DollarSign } from "lucide-react";
import { formatINR } from "@/lib/catalog";

export const Route = createFileRoute("/admin/")({
  component: AdminDashboard,
});

function AdminDashboard() {
  const stats = [
    { label: "Total Revenue", value: 1425000, trend: "+12.5%", icon: DollarSign },
    { label: "Active Orders", value: 156, trend: "+4.2%", icon: Package },
    { label: "New Customers", value: 48, trend: "+18.1%", icon: Users },
    { label: "Conversion Rate", value: 3.2, trend: "+0.4%", icon: TrendingUp, isPercent: true },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-display text-2xl text-ink">Dashboard Overview</h1>
        <div className="text-sm text-ink-soft">Last updated: Just now</div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="surface-card p-6">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-ink-soft">{s.label}</div>
              <div className="h-8 w-8 rounded-full bg-primary/10 text-primary grid place-items-center">
                <s.icon className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-4 flex items-baseline gap-2">
              <div className="text-2xl font-bold text-ink">
                {s.label === "Total Revenue"
                  ? formatINR(s.value)
                  : s.isPercent
                    ? `${s.value}%`
                    : s.value}
              </div>
              <div className="text-xs font-medium text-success bg-success/10 px-1.5 py-0.5 rounded flex items-center">
                <ArrowUpRight className="h-3 w-3 mr-0.5" />
                {s.trend}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="surface-card p-6">
          <h3 className="text-lg font-medium text-ink mb-4">Recent Orders</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="flex items-center justify-between py-2 border-b border-border last:border-0"
              >
                <div>
                  <div className="text-sm font-medium text-ink">Order #SA-{1000 + i}</div>
                  <div className="text-xs text-ink-soft">Ramesh Kumar · 2 items</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-ink">{formatINR(4500 + i * 150)}</div>
                  <div className="text-xs font-medium text-amber bg-amber/10 px-2 py-0.5 rounded mt-1 inline-block">
                    Processing
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="surface-card p-6">
          <h3 className="text-lg font-medium text-ink mb-4">Low Stock Alerts</h3>
          <div className="space-y-4">
            {[
              { n: "Urea 46% N (50kg)", stock: 12, th: 50 },
              { n: "Imidacloprid 17.8% SL (1L)", stock: 5, th: 20 },
              { n: "Drip Laterals 16mm (400m)", stock: 2, th: 10 },
            ].map((p, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-2 border-b border-border last:border-0"
              >
                <div>
                  <div className="text-sm font-medium text-ink">{p.n}</div>
                  <div className="text-xs text-ink-soft">Threshold: {p.th} units</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-destructive">{p.stock} units left</div>
                  <button className="text-xs font-medium text-primary hover:underline mt-1">
                    Reorder
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
