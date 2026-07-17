import { createFileRoute } from "@tanstack/react-router";
import { Package, MapPin, Clock, CheckCircle2, Truck, Phone, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatINR } from "@/lib/catalog";

export const Route = createFileRoute("/_auth/delivery")({
  component: DeliveryDashboard,
});

function DeliveryDashboard() {
  return (
    <div className="container-x py-8 lg:py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-display text-3xl text-ink">Delivery Dashboard</h1>
          <p className="text-sm text-ink-soft mt-1">{new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-2 text-sm text-success bg-success/10 px-3 py-1.5 rounded-full">
            <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
            Online
          </span>
          <Button variant="outline" size="sm" className="gap-2">
            <Navigation className="h-4 w-4" /> Start Route
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4 mb-8">
        {[
          { label: "Today's Deliveries", value: 12, icon: Package, color: "text-primary" },
          { label: "Completed", value: 5, icon: CheckCircle2, color: "text-success" },
          { label: "In Transit", value: 4, icon: Truck, color: "text-amber" },
          { label: "Pending", value: 3, icon: Clock, color: "text-clay" },
        ].map((s) => (
          <div key={s.label} className="surface-card p-5">
            <div className="flex items-center justify-between">
              <div className="text-xs font-medium text-ink-soft uppercase tracking-wider">{s.label}</div>
              <div className={`h-8 w-8 rounded-full bg-current/10 grid place-items-center ${s.color}`}>
                <s.icon className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-3 text-2xl font-bold text-ink">{s.value}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 surface-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-medium text-ink">Delivery Queue</h3>
            <select className="h-8 rounded-md border border-input bg-background px-2 text-xs">
              <option>All</option>
              <option>Pending</option>
              <option>In Transit</option>
              <option>Today</option>
            </select>
          </div>
          <div className="space-y-4">
            {[
              { id: "SA-1024", customer: "Ramesh Kumar", address: "42, MG Road, Pune — 411001", items: 3, status: "Delivered" as const, eta: "" },
              { id: "SA-1025", customer: "Suresh Patel", address: "Shop 5, Market Yard, Pune — 411037", items: 2, status: "In Transit" as const, eta: "11:30 AM" },
              { id: "SA-1026", customer: "Anita Sharma", address: "Plot 12, Sector 7, Nigdi — 411044", items: 5, status: "In Transit" as const, eta: "12:15 PM" },
              { id: "SA-1027", customer: "Vikram Singh", address: "House 34, Village Road, Shivane — 411023", items: 1, status: "Pending" as const, eta: "" },
              { id: "SA-1028", customer: "Priya Deshmukh", address: "Flat 201, Green Apartments, Kothrud — 411038", items: 4, status: "Pending" as const, eta: "" },
            ].map((d, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-border hover:bg-surface/50 transition-colors">
                <div className={`h-10 w-10 rounded-full grid place-items-center flex-shrink-0 ${
                  d.status === "Delivered" ? "bg-success/10 text-success" :
                  d.status === "In Transit" ? "bg-primary/10 text-primary" :
                  "bg-amber/10 text-amber"
                }`}>
                  <Package className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm text-ink">{d.customer}</span>
                    <span className="font-mono text-xs text-ink-soft">{d.id}</span>
                    <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${
                      d.status === "Delivered" ? "text-success bg-success/10" :
                      d.status === "In Transit" ? "text-primary bg-primary/10" :
                      "text-amber bg-amber/10"
                    }`}>{d.status}</span>
                  </div>
                  <div className="flex items-center gap-1 mt-1 text-xs text-ink-soft">
                    <MapPin className="h-3 w-3" /> {d.address}
                  </div>
                  <div className="text-xs text-ink-soft mt-0.5">{d.items} items · {d.eta ? `ETA: ${d.eta}` : "Not yet assigned"}</div>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                    <Phone className="h-3.5 w-3.5" />
                  </Button>
                  {d.status === "In Transit" && (
                    <Button size="sm" className="h-8 text-xs gap-1">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Mark Delivered
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="surface-card p-6">
            <h3 className="text-base font-medium text-ink mb-4">Today's Stats</h3>
            <div className="space-y-4">
              {[
                { label: "Distance Covered", value: "24 km" },
                { label: "Avg Time Per Stop", value: "18 min" },
                { label: "Fuel Used", value: "3.2 L" },
                { label: "Next Stop ETA", value: "11:30 AM" },
              ].map((s, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <span className="text-sm text-ink-soft">{s.label}</span>
                  <span className="text-sm font-medium text-ink">{s.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card p-6">
            <h3 className="text-base font-medium text-ink mb-4">Route Overview</h3>
            <div className="bg-surface rounded-xl p-6 text-center">
              <MapPin className="h-8 w-8 mx-auto text-primary mb-2" />
              <div className="text-sm text-ink-soft">Route planned for today</div>
              <div className="text-xs text-ink-soft mt-1">5 stops · ~42 km total</div>
              <Button variant="outline" size="sm" className="mt-4 w-full text-xs">
                View Full Route
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
