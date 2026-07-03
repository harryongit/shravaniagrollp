import { createFileRoute } from "@tanstack/react-router";
import { useAuth } from "@/lib/auth";
import { PackageSearch, ArrowRightLeft, CheckSquare, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/catalog";

export const Route = createFileRoute("/_auth/warehouse")({
  component: WarehouseDashboard,
});

function WarehouseDashboard() {
  const { user } = useAuth();

  return (
    <div className="container-x py-8 lg:py-12 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-display text-3xl text-ink">Warehouse Operations</h1>
            <span className="bg-primary/10 text-primary border border-primary/20 px-2.5 py-0.5 rounded-full text-xs font-medium uppercase tracking-wider">
              WH-West-01
            </span>
          </div>
          <p className="text-ink-soft">Pune Central Hub · Shift: Morning</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <ArrowRightLeft className="h-4 w-4" /> Stock Transfer
          </Button>
          <Button className="gap-2">
            <PackageSearch className="h-4 w-4" /> Intake Stock
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="surface-card p-6 border-l-4 border-l-primary">
          <div className="text-sm font-medium text-ink-soft mb-2">Pending Picks</div>
          <div className="text-display text-3xl text-ink">42</div>
          <div className="text-xs text-ink-soft mt-1">Orders waiting for pack</div>
        </div>

        <div className="surface-card p-6 border-l-4 border-l-accent">
          <div className="text-sm font-medium text-ink-soft mb-2">Inbound Deliveries</div>
          <div className="text-display text-3xl text-ink">3</div>
          <div className="text-xs text-ink-soft mt-1">Scheduled for today</div>
        </div>

        <div className="surface-card p-6 border-l-4 border-l-destructive">
          <div className="text-sm font-medium text-ink-soft mb-2">Low Stock Alerts</div>
          <div className="text-display text-3xl text-ink">14</div>
          <div className="text-xs text-destructive font-medium mt-1">Require immediate PO</div>
        </div>

        <div className="surface-card p-6 border-l-4 border-l-amber">
          <div className="text-sm font-medium text-ink-soft mb-2">Expiring Soon</div>
          <div className="text-display text-3xl text-ink">8</div>
          <div className="text-xs text-amber font-medium mt-1">Batches expiring {"<"} 30 days</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="surface-card">
          <div className="p-6 border-b border-border flex items-center justify-between">
            <h3 className="text-lg font-medium text-ink flex items-center gap-2">
              <CheckSquare className="h-5 w-5 text-primary" /> Pick & Pack Queue
            </h3>
          </div>
          <div className="divide-y divide-border">
            {[
              { id: "SA-2941", items: 3, bin: "A-12, B-04", urgent: true },
              { id: "SA-2942", items: 1, bin: "C-08", urgent: false },
              { id: "SA-2943", items: 12, bin: "Multiple", urgent: false },
              { id: "SA-2944", items: 2, bin: "A-02", urgent: false },
            ].map((task) => (
              <div
                key={task.id}
                className="p-4 flex items-center justify-between hover:bg-surface/50"
              >
                <div>
                  <div className="font-medium text-ink flex items-center gap-2">
                    {task.id}
                    {task.urgent && (
                      <span className="bg-destructive/10 text-destructive text-[10px] uppercase px-1.5 py-0.5 rounded font-bold">
                        Express
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-ink-soft mt-1">
                    {task.items} items · Pick path: {task.bin}
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  Start Pick
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="surface-card">
          <div className="p-6 border-b border-border flex items-center justify-between">
            <h3 className="text-lg font-medium text-ink flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" /> Low Stock & Expiry
            </h3>
          </div>
          <div className="divide-y divide-border">
            {products.slice(0, 4).map((p, i) => (
              <div
                key={p.slug}
                className="p-4 flex items-center justify-between hover:bg-surface/50"
              >
                <div>
                  <div className="font-medium text-ink text-sm">{p.name}</div>
                  <div className="text-xs text-ink-soft mt-1">SKU: {p.slug.slice(0, 8)}</div>
                </div>
                <div className="text-right">
                  {i % 2 === 0 ? (
                    <>
                      <div className="text-sm font-medium text-destructive">2 Units Left</div>
                      <div className="text-xs text-ink-soft mt-0.5">Min Threshold: 20</div>
                    </>
                  ) : (
                    <>
                      <div className="text-sm font-medium text-amber">Batch Exp: 15 Nov</div>
                      <div className="text-xs text-ink-soft mt-0.5">45 Units Affected</div>
                    </>
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
