import { createFileRoute, Link } from "@tanstack/react-router";
import { useAuth } from "@/lib/auth";
import { Package, ChevronRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatINR } from "@/lib/catalog";

export const Route = createFileRoute("/_auth/orders")({
  component: OrderHistory,
});

const STATUS_COLORS: Record<string, string> = {
  Delivered: "bg-success/10 text-success",
  Shipped: "bg-primary/10 text-primary",
  Processing: "bg-amber/10 text-amber",
  Cancelled: "bg-destructive/10 text-destructive",
  Returned: "bg-surface-2 text-ink-soft",
};

const mockOrders = [
  { id: "SA-1024", date: "Nov 2, 2026", total: 4500, items: 3, status: "Delivered" },
  { id: "SA-1018", date: "Oct 28, 2026", total: 12800, items: 1, status: "Shipped" },
  { id: "SA-1012", date: "Oct 15, 2026", total: 2200, items: 2, status: "Processing" },
  { id: "SA-0995", date: "Sep 30, 2026", total: 8900, items: 4, status: "Delivered" },
  { id: "SA-0970", date: "Sep 12, 2026", total: 1750, items: 1, status: "Cancelled" },
];

function OrderHistory() {
  return (
    <div className="container-x py-8 lg:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-display text-3xl text-ink">My Orders</h1>
          <Link
            to="/track"
            className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
          >
            Track an order <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="space-y-4">
          {mockOrders.map((order) => (
            <div key={order.id} className="surface-card p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-surface grid place-items-center text-ink-soft flex-shrink-0">
                    <Package className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-mono font-medium text-ink">{order.id}</span>
                      <span
                        className={`text-xs font-medium px-2.5 py-0.5 rounded ${STATUS_COLORS[order.status]}`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <div className="text-sm text-ink-soft">
                      {order.date} · {order.items} item{order.items > 1 ? "s" : ""}
                    </div>
                    <div className="mt-1 text-sm font-medium text-ink">
                      {formatINR(order.total)}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 ml-16 sm:ml-0">
                  {order.status === "Delivered" && (
                    <Button size="sm" variant="outline" className="gap-2 text-xs">
                      <RotateCcw className="h-3.5 w-3.5" /> Return
                    </Button>
                  )}
                  {order.status === "Shipped" && (
                    <Link
                      to="/track"
                      className="inline-flex items-center h-9 px-3 rounded-md border border-input bg-background text-xs font-medium hover:bg-surface transition-colors"
                    >
                      Track Order
                    </Link>
                  )}
                  <Button size="sm" variant="outline" className="text-xs">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
