import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Package, TrendingUp, Users, Truck, IndianRupee, ArrowUpRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatINR } from "@/lib/catalog";

export const Route = createFileRoute("/_auth/distributor")({
  component: DistributorPortal,
});

function DistributorPortal() {
  return (
    <div className="container-x py-8 lg:py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-display text-3xl text-ink">Distributor Portal</h1>
          <p className="text-sm text-ink-soft mt-1">Territory: Maharashtra West · Platinum Partner</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 text-xs">
            <IndianRupee className="h-4 w-4" /> Request Credit
          </Button>
          <Button className="gap-2 text-xs">
            <Package className="h-4 w-4" /> Bulk Order
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4 mb-8">
        {[
          { label: "Monthly Billed (Jul)", value: 1842000, icon: IndianRupee, trend: "+8.2%" },
          { label: "Dealers Under You", value: 24, icon: Users, trend: "+2" },
          { label: "Active SKUs Supplied", value: 186, icon: Package, trend: "+12" },
          { label: "Outstanding Payment", value: 425000, icon: TrendingUp, trend: "" },
        ].map((s) => (
          <div key={s.label} className="surface-card p-5">
            <div className="flex items-center justify-between">
              <div className="text-xs font-medium text-ink-soft uppercase tracking-wider">{s.label}</div>
              <div className="h-8 w-8 rounded-full bg-primary/10 text-primary grid place-items-center">
                <s.icon className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <div className="text-2xl font-bold text-ink">
                {typeof s.value === "number" && s.value > 10000 ? formatINR(s.value) : s.value}
              </div>
              {s.trend && (
                <div className="text-xs font-medium text-success bg-success/10 px-1.5 py-0.5 rounded flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-0.5" /> {s.trend}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="surface-card p-6">
            <h3 className="text-base font-medium text-ink mb-4">My Dealers — Recent Orders</h3>
            <div className="space-y-3">
              {[
                { dealer: "Kisan Agro Centre, Pune", items: 5, total: 23400, date: "Today", status: "Processing" as const },
                { dealer: "Green Fields Supply, Nashik", items: 3, total: 12800, date: "Yesterday", status: "Shipped" as const },
                { dealer: "Shree Ram Seeds, Solapur", items: 8, total: 45200, date: "2 days ago", status: "Pending" as const },
                { dealer: "Bharat Agri, Kolhapur", items: 2, total: 8900, date: "3 days ago", status: "Delivered" as const },
                { dealer: "FarmFresh Inputs, Sangli", items: 6, total: 31200, date: "5 days ago", status: "Delivered" as const },
              ].map((o, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <div>
                    <div className="text-sm font-medium text-ink">{o.dealer}</div>
                    <div className="text-xs text-ink-soft">{o.items} items · {o.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-ink">{formatINR(o.total)}</div>
                    <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${
                      o.status === "Delivered" ? "text-success bg-success/10" :
                      o.status === "Shipped" ? "text-primary bg-primary/10" :
                      o.status === "Processing" ? "text-amber bg-amber/10" :
                      "text-ink-soft bg-surface"
                    }`}>{o.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card p-6">
            <h3 className="text-base font-medium text-ink mb-4">Stock Allocation Requests</h3>
            <div className="space-y-3">
              {[
                { product: "Urea 46% N (50kg)", dealer: "Kisan Agro Centre", qty: 200, status: "Approved" as const },
                { product: "Imidacloprid 17.8% SL (250ml)", dealer: "Green Fields Supply", qty: 500, status: "Pending" as const },
                { product: "Hybrid Cotton Seeds (450g)", dealer: "Shree Ram Seeds", qty: 150, status: "Pending" as const },
              ].map((r, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <div className="flex-1">
                    <div className="text-sm text-ink">{r.product}</div>
                    <div className="text-xs text-ink-soft">{r.dealer} · Qty: {r.qty}</div>
                  </div>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                    r.status === "Approved" ? "text-success bg-success/10" : "text-amber bg-amber/10"
                  }`}>{r.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="surface-card p-6">
            <h3 className="text-base font-medium text-ink mb-4">Territory Map</h3>
            <div className="bg-surface rounded-xl p-6 text-center">
              <MapPin className="h-8 w-8 mx-auto text-primary mb-2" />
              <div className="text-sm font-medium text-ink">Maharashtra West</div>
              <div className="text-xs text-ink-soft mt-1">24 dealers · 6 districts</div>
              <Button variant="outline" size="sm" className="mt-4 w-full text-xs">
                View Territory Details
              </Button>
            </div>
          </div>

          <div className="surface-card p-6">
            <h3 className="text-base font-medium text-ink mb-4">Quick Actions</h3>
            <div className="space-y-2">
              {[
                { label: "Create Purchase Order", icon: Package },
                { label: "View Price List", icon: IndianRupee },
                { label: "Track Shipments", icon: Truck },
                { label: "Download Statement", icon: TrendingUp },
              ].map((a, i) => (
                <button key={i} className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-surface text-sm text-ink-soft hover:text-ink transition-colors">
                  <a.icon className="h-4 w-4 text-primary" />
                  <span className="flex-1 text-left">{a.label}</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
