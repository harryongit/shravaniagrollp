import { createFileRoute } from "@tanstack/react-router";
import { Package, MapPin, Clock, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/_auth/warehouse")({
  component: Warehouse,
});

function Warehouse() {
  const orders = [
    { id: "WH-101", product: "Urea 46% N (50kg)", qty: 200, status: "In transit", eta: "2026-07-20" },
    { id: "WH-102", product: "Drip Laterals 16mm (400m)", qty: 50, status: "Delivered", eta: "2026-07-15" },
    { id: "WH-103", product: "Imidacloprid 17.8% SL", qty: 30, status: "Processing", eta: "2026-07-22" },
    { id: "WH-104", product: "Potassium Sulphate (25kg)", qty: 100, status: "In transit", eta: "2026-07-19" },
  ];

  return (
    <div className="container-x py-12">
      <div className="surface-card p-8">
        <div className="flex items-center gap-3 mb-6">
          <Package className="h-6 w-6 text-primary" />
          <h1 className="text-display text-2xl text-ink">Warehouse & Inventory</h1>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 mb-8">
          <div className="rounded-xl bg-surface p-4">
            <div className="text-2xl font-bold text-ink">1,240</div>
            <div className="text-xs text-ink-soft mt-1">Units in Stock</div>
          </div>
          <div className="rounded-xl bg-surface p-4">
            <div className="text-2xl font-bold text-ink">12</div>
            <div className="text-xs text-ink-soft mt-1">Pending Orders</div>
          </div>
          <div className="rounded-xl bg-surface p-4">
            <div className="text-2xl font-bold text-ink">8</div>
            <div className="text-xs text-ink-soft mt-1">Low Stock Alerts</div>
          </div>
        </div>
        <div className="space-y-3">
          {orders.map((o) => (
            <div key={o.id} className="flex items-center justify-between p-4 rounded-xl border border-border hover:bg-surface/50">
              <div>
                <div className="text-sm font-medium text-ink">{o.product}</div>
                <div className="text-xs text-ink-soft mt-0.5">Order {o.id} · Qty: {o.qty}</div>
              </div>
              <div className="text-right">
                <div className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                  o.status === "Delivered" ? "text-success bg-success/10" :
                  o.status === "In transit" ? "text-primary bg-primary/10" :
                  "text-amber bg-amber/10"
                }`}>{o.status}</div>
                <div className="text-[10px] text-ink-soft mt-1">ETA: {o.eta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
