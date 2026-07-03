import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Search, Package, CheckCircle2, Truck, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/track")({
  component: OrderTracking,
});

const TIMELINE = [
  { label: "Order Placed", date: "Nov 2, 2026 10:32 AM", done: true, icon: CheckCircle2 },
  { label: "Order Confirmed", date: "Nov 2, 2026 11:45 AM", done: true, icon: CheckCircle2 },
  { label: "Packed & Ready to Ship", date: "Nov 3, 2026 9:00 AM", done: true, icon: Package },
  { label: "Shipped via DTDC", date: "Nov 3, 2026 3:00 PM", done: true, icon: Truck },
  { label: "Out for Delivery", date: "Nov 5, 2026 8:00 AM", done: false, icon: MapPin },
  { label: "Delivered", date: "Estimated: Nov 5, 2026", done: false, icon: CheckCircle2 },
];

function OrderTracking() {
  const [orderInput, setOrderInput] = useState("SA-1018");
  const [tracked, setTracked] = useState(true);

  return (
    <div className="container-x py-12 lg:py-24">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-eyebrow mb-3">Order Tracking</div>
          <h1 className="text-display text-4xl text-ink">Where is my order?</h1>
          <p className="mt-3 text-ink-soft">
            Enter your order number and phone / email to see real-time delivery status.
          </p>
        </div>

        <div className="surface-card p-6 mb-8">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-soft" />
              <Input
                value={orderInput}
                onChange={(e) => setOrderInput(e.target.value)}
                placeholder="Order ID (e.g. SA-1018)"
                className="pl-9"
              />
            </div>
            <Button onClick={() => setTracked(true)}>Track</Button>
          </div>
        </div>

        {tracked && (
          <div className="surface-card p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-border">
              <div>
                <div className="text-eyebrow mb-1">Tracking</div>
                <h2 className="text-xl font-mono font-medium text-ink">Order {orderInput}</h2>
                <div className="text-sm text-ink-soft mt-1">3 items · 1 shipment</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-ink-soft mb-1">Carrier</div>
                <div className="font-medium text-ink">DTDC Express</div>
                <div className="font-mono text-sm text-primary mt-0.5">D-89234102</div>
              </div>
            </div>

            <div className="relative pl-6">
              {/* vertical line */}
              <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-border" />
              <div className="space-y-8">
                {TIMELINE.map((step, i) => {
                  const current = i === TIMELINE.findLastIndex((s) => s.done);
                  return (
                    <div key={step.label} className="relative flex gap-4 items-start">
                      <div
                        className={`relative z-10 h-5 w-5 rounded-full grid place-items-center flex-shrink-0 -ml-[11px] border-2 ${
                          step.done
                            ? "bg-primary border-primary"
                            : current
                              ? "bg-background border-primary"
                              : "bg-background border-border"
                        }`}
                      >
                        {step.done && <div className="h-2 w-2 rounded-full bg-white" />}
                      </div>
                      <div className={`pb-1 ${!step.done ? "opacity-50" : ""}`}>
                        <div
                          className={`font-medium text-sm ${current ? "text-primary" : "text-ink"}`}
                        >
                          {step.label}
                        </div>
                        <div className="text-xs text-ink-soft mt-0.5">{step.date}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border text-center">
              <p className="text-sm text-ink-soft">Need help with this delivery?</p>
              <Link
                to="/contact"
                className="mt-2 inline-block text-sm font-medium text-primary hover:underline"
              >
                Contact Support
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
