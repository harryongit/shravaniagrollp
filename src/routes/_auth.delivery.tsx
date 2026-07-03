import { createFileRoute } from "@tanstack/react-router";
import { useAuth } from "@/lib/auth";
import { MapPin, Navigation, CheckCircle2, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_auth/delivery")({
  component: DeliveryDashboard,
});

const deliveries = [
  {
    id: "SA-1024",
    customer: "Ramesh Kumar",
    address: "42, MG Road, Pune",
    items: 3,
    status: "out_for_delivery",
    distance: "2.3 km",
  },
  {
    id: "SA-1025",
    customer: "Suresh Patil",
    address: "Survey 18, Baramati",
    items: 1,
    status: "pending",
    distance: "8.1 km",
  },
  {
    id: "SA-1026",
    customer: "Anjali Sharma",
    address: "Plot 5, NIBM Road, Pune",
    items: 2,
    status: "pending",
    distance: "5.7 km",
  },
];

function DeliveryDashboard() {
  const { user } = useAuth();

  return (
    <div className="container-x py-8 lg:py-12 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-display text-3xl text-ink">Delivery Console</h1>
            <span className="bg-success/10 text-success border border-success/20 px-2.5 py-0.5 rounded-full text-xs font-medium uppercase tracking-wider">
              On Shift
            </span>
          </div>
          <p className="text-ink-soft">Assigned Route: Pune Central — {deliveries.length} stops</p>
        </div>
        <Button className="gap-2">
          <Navigation className="h-4 w-4" /> Open Route in Maps
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="surface-card p-6">
          <div className="text-sm font-medium text-ink-soft mb-2">Total Deliveries</div>
          <div className="text-display text-3xl text-ink">{deliveries.length}</div>
        </div>
        <div className="surface-card p-6">
          <div className="text-sm font-medium text-ink-soft mb-2">Delivered Today</div>
          <div className="text-display text-3xl text-ink text-success">4</div>
        </div>
        <div className="surface-card p-6">
          <div className="text-sm font-medium text-ink-soft mb-2">Failed Attempts</div>
          <div className="text-display text-3xl text-ink text-destructive">0</div>
        </div>
      </div>

      {/* Delivery Queue */}
      <div className="surface-card">
        <div className="p-6 border-b border-border">
          <h3 className="text-lg font-medium text-ink">Today's Delivery Queue</h3>
        </div>
        <div className="divide-y divide-border">
          {deliveries.map((d, i) => (
            <div key={d.id} className="p-6 flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="flex items-center gap-4 flex-1">
                <div
                  className={`h-10 w-10 rounded-full grid place-items-center text-sm font-bold flex-shrink-0 ${
                    d.status === "out_for_delivery"
                      ? "bg-primary text-primary-foreground"
                      : "bg-surface-2 text-ink-soft"
                  }`}
                >
                  {i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-mono font-medium text-ink">{d.id}</span>
                    {d.status === "out_for_delivery" && (
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-primary/10 text-primary">
                        Current Stop
                      </span>
                    )}
                  </div>
                  <div className="font-medium text-ink">{d.customer}</div>
                  <div className="text-sm text-ink-soft flex items-center gap-1.5 mt-0.5">
                    <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
                    <span className="truncate">{d.address}</span>
                  </div>
                  <div className="text-xs text-ink-soft mt-1">
                    {d.items} item{d.items > 1 ? "s" : ""} · {d.distance} away
                  </div>
                </div>
              </div>

              <div className="flex gap-2 ml-14 sm:ml-0 flex-shrink-0">
                {d.status === "out_for_delivery" ? (
                  <>
                    <Button size="sm" variant="outline" className="gap-1.5 text-xs">
                      <Camera className="h-3.5 w-3.5" /> Capture POD
                    </Button>
                    <Button size="sm" className="gap-1.5 text-xs">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Mark Delivered
                    </Button>
                  </>
                ) : (
                  <Button size="sm" variant="outline" className="text-xs">
                    Start Delivery
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
