import { createFileRoute, Link } from "@tanstack/react-router";
import { Package, ChevronRight, RotateCcw, ExternalLink, Clock, CheckCircle, XCircle, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatINR } from "@/lib/catalog";
import { useOrderStore, type OrderStatus, type PaymentStatus } from "@/lib/order-store";
import { useUserStore } from "@/lib/user-store";
import { PAYMENT_METHOD_LABEL } from "@/lib/cashfree";

export const Route = createFileRoute("/_auth/orders")({
  component: OrderHistory,
});

const STATUS_BADGE: Record<string, { color: string; icon: any }> = {
  delivered: { color: "bg-success/10 text-success", icon: CheckCircle },
  shipped: { color: "bg-primary/10 text-primary", icon: Package },
  processing: { color: "bg-amber/10 text-amber", icon: Clock },
  confirmed: { color: "bg-primary/10 text-primary", icon: CheckCircle },
  pending: { color: "bg-amber/10 text-amber", icon: Clock },
  cancelled: { color: "bg-destructive/10 text-destructive", icon: XCircle },
  refunded: { color: "bg-clay/10 text-clay", icon: Wallet },
};

function OrderHistory() {
  const { currentUser } = useUserStore();
  const { getUserOrders } = useOrderStore();
  const orders = currentUser ? getUserOrders(currentUser.id) : [];

  return (
    <div className="container-x py-8 lg:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-display text-3xl text-ink">My Orders</h1>
            <p className="text-sm text-ink-soft mt-1">{orders.length} order{orders.length !== 1 ? "s" : ""}</p>
          </div>
          <Link
            to="/track"
            className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
          >
            Track an order <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        {orders.length === 0 ? (
          <div className="text-center py-24">
            <div className="mx-auto h-16 w-16 bg-surface text-ink-soft rounded-full grid place-items-center mb-4">
              <Package className="h-8 w-8" />
            </div>
            <h2 className="text-xl font-medium text-ink mb-2">No orders yet</h2>
            <p className="text-ink-soft text-sm mb-6">Start shopping to see your orders here.</p>
            <Link to="/products">
              <Button>Browse Products</Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => {
              const sb = STATUS_BADGE[order.orderStatus] || STATUS_BADGE.pending;
              const StatusIcon = sb.icon;
              const ps = order.paymentStatus === "paid" ? "Paid" : order.paymentStatus === "pending" ? "Pending" : order.paymentStatus === "failed" ? "Failed" : "Refunded";
              return (
                <div key={order.id} className="surface-card p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-xl bg-surface grid place-items-center text-ink-soft flex-shrink-0">
                        <Package className="h-6 w-6" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-3 mb-1 flex-wrap">
                          <span className="font-mono font-medium text-ink">{order.orderNumber}</span>
                          <span className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-0.5 rounded ${sb.color}`}>
                            <StatusIcon className="h-3 w-3" /> {order.orderStatus.charAt(0).toUpperCase() + order.orderStatus.slice(1)}
                          </span>
                          <span className={`text-[0.65rem] font-medium px-2 py-0.5 rounded border ${
                            order.paymentStatus === "paid" ? "text-success border-success/30" :
                            order.paymentStatus === "failed" ? "text-destructive border-destructive/30" :
                            "text-amber border-amber/30"
                          }`}>
                            {ps}
                          </span>
                        </div>
                        <div className="text-sm text-ink-soft">
                          {new Date(order.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                          {" · "}{order.lines.length} item{order.lines.length > 1 ? "s" : ""}
                          {" · "}{PAYMENT_METHOD_LABEL[order.paymentMethod]}
                        </div>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {order.lines.slice(0, 3).map((l) => (
                            <span key={l.slug} className="text-xs bg-surface-2 text-ink-soft px-2 py-0.5 rounded truncate max-w-[180px]">
                              {l.qty}x {l.name} ({l.packSize})
                            </span>
                          ))}
                          {order.lines.length > 3 && (
                            <span className="text-xs text-ink-soft">+{order.lines.length - 3} more</span>
                          )}
                        </div>
                        <div className="mt-1 text-sm font-medium text-ink">
                          {formatINR(order.total)}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 ml-16 sm:ml-0 flex-wrap">
                      {order.cfPaymentLink && order.paymentStatus === "pending" && (
                        <a
                          href={order.cfPaymentLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 h-9 px-3 rounded-md bg-primary text-primary-foreground text-xs font-medium hover:opacity-90"
                        >
                          Pay Now <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                      {order.orderStatus === "delivered" && (
                        <Button size="sm" variant="outline" className="gap-2 text-xs">
                          <RotateCcw className="h-3.5 w-3.5" /> Return
                        </Button>
                      )}
                      {order.orderStatus === "shipped" && (
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
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
