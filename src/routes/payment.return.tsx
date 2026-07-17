import { createFileRoute, Link, useNavigate, useSearch } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle2, XCircle, Loader2, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatINR } from "@/lib/catalog";
import { useOrderStore, type PaymentStatus } from "@/lib/order-store";
import { PAYMENT_METHOD_LABEL } from "@/lib/cashfree";

type ReturnSearch = {
  order_id?: string;
  order_number?: string;
  cf_payment_id?: string;
  order_status?: string;
};

export const Route = createFileRoute("/payment/return")({
  component: PaymentReturn,
  validateSearch: (search: Record<string, string>): ReturnSearch => ({
    order_id: search.order_id,
    order_number: search.order_number,
    cf_payment_id: search.cf_payment_id,
    order_status: search.order_status,
  }),
});

function PaymentReturn() {
  const { order_id, order_number, cf_payment_id, order_status } = Route.useSearch();
  const { getOrder, updatePaymentStatus, updateOrderStatus } = useOrderStore();
  const navigate = useNavigate();
  const [status, setStatus] = useState<"verifying" | "success" | "failed">("verifying");
  const [order, setOrder] = useState<ReturnType<typeof getOrder>>(undefined);

  useEffect(() => {
    if (order_id) {
      const o = getOrder(order_id);
      setOrder(o);
      if (o) {
        const paid = order_status === "paid" || order_status === "success";
        const newStatus: PaymentStatus = paid ? "paid" : "failed";
        updatePaymentStatus(order_id, newStatus, cf_payment_id);
        if (paid) updateOrderStatus(order_id, "confirmed");
        setStatus(paid ? "success" : "failed");
        return;
      }
    }
    if (order_number) {
      setStatus("success");
      return;
    }
    setStatus("failed");
  }, [order_id, order_number, order_status, cf_payment_id, getOrder, updatePaymentStatus, updateOrderStatus]);

  return (
    <div className="container-x py-24">
      <div className="max-w-lg mx-auto text-center">
        {status === "verifying" && (
          <div>
            <div className="mx-auto h-16 w-16 bg-primary/10 text-primary rounded-full grid place-items-center mb-6">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
            <h1 className="text-display text-3xl mb-4">Verifying Payment</h1>
            <p className="text-ink-soft">Please wait while we confirm your payment with Cashfree...</p>
          </div>
        )}

        {status === "success" && (
          <div>
            <div className="mx-auto h-16 w-16 bg-success/20 text-success rounded-full grid place-items-center mb-6">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h1 className="text-display text-3xl mb-4">Payment Successful!</h1>
            <p className="text-ink-soft mb-2">
              Order <span className="font-semibold text-ink">{order_number || order?.orderNumber}</span> confirmed.
            </p>
            {order && (
              <div className="rounded-xl bg-surface border border-border p-6 mb-6 text-left">
                <div className="flex items-center gap-3 mb-4">
                  <Package className="h-5 w-5 text-primary" />
                  <span className="font-medium text-ink">Order Summary</span>
                </div>
                <div className="space-y-3 text-sm border-b border-border pb-4 mb-4">
                  {order.lines.map((l) => (
                    <div key={l.slug} className="flex justify-between">
                      <span className="text-ink-soft flex-1 pr-4">
                        {l.qty}x {l.name} <span className="text-xs text-ink-soft">({l.packSize})</span>
                      </span>
                      <span className="font-medium text-ink tabular-nums">{formatINR(l.price * l.qty)}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-ink-soft">Payment via Cashfree</span>
                    <span className="font-medium text-ink">{PAYMENT_METHOD_LABEL[order.paymentMethod]}</span>
                  </div>
                  {cf_payment_id && (
                    <div className="flex justify-between">
                      <span className="text-ink-soft">Transaction ID</span>
                      <span className="font-mono text-xs text-ink">{cf_payment_id}</span>
                    </div>
                  )}
                  <div className="flex justify-between pt-2 border-t border-border">
                    <span className="font-medium text-ink">Total Paid</span>
                    <span className="font-bold text-lg tabular-nums">{formatINR(order.total)}</span>
                  </div>
                </div>
              </div>
            )}
            <div className="flex flex-col gap-3">
              <Button onClick={() => navigate({ to: "/dashboard/orders" })} className="w-full">
                View My Orders
              </Button>
              <Button onClick={() => navigate({ to: "/" })} variant="outline" className="w-full">
                Continue Shopping
              </Button>
            </div>
          </div>
        )}

        {status === "failed" && (
          <div>
            <div className="mx-auto h-16 w-16 bg-destructive/10 text-destructive rounded-full grid place-items-center mb-6">
              <XCircle className="h-8 w-8" />
            </div>
            <h1 className="text-display text-3xl mb-4">Payment Failed</h1>
            <p className="text-ink-soft mb-6">
              Your payment could not be processed. Please try again or choose a different payment method.
            </p>
            <div className="flex flex-col gap-3">
              <Button onClick={() => navigate({ to: "/checkout" })} className="w-full">
                Try Again
              </Button>
              <Button onClick={() => navigate({ to: "/" })} variant="outline" className="w-full">
                Back to Home
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
