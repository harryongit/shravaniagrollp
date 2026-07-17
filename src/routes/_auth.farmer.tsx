import { createFileRoute } from "@tanstack/react-router";
import { useAuth } from "@/lib/auth";
import {
  CloudSun,
  Sprout,
  MessageSquare,
  MapPin,
  CalendarClock,
  Droplets,
  ThermometerSun,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/farmer")({
  component: FarmerDashboard,
});

function FarmerDashboard() {
  const { user } = useAuth();

  return (
    <div className="container-x py-8 lg:py-12 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-display text-3xl text-ink">Farmer Portal</h1>
          <p className="mt-2 text-ink-soft">
            Welcome back. Manage your farm, get advisory, and view local weather.
          </p>
        </div>
        <Button variant="outline" className="gap-2">
          <MapPin className="h-4 w-4" /> Vidarbha, Maharashtra
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Weather Widget */}
        <div className="surface-card p-6 flex flex-col justify-between bg-gradient-to-br from-surface to-primary/5 border-primary/20">
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-medium text-ink flex items-center gap-2">
                <CloudSun className="h-5 w-5 text-primary" /> Local Weather
              </h3>
              <span className="text-xs font-medium bg-background px-2 py-1 rounded text-ink-soft">
                Today
              </span>
            </div>

            <div className="flex items-end gap-4 mb-6">
              <div className="text-display text-5xl text-ink">32°</div>
              <div className="text-sm text-ink-soft mb-1 flex flex-col">
                <span className="text-ink font-medium">Partly Cloudy</span>
                <span>H:34° L:24°</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-sm text-ink-soft">
                <Droplets className="h-4 w-4 text-primary/70" /> 65% Humidity
              </div>
              <div className="flex items-center gap-2 text-sm text-ink-soft">
                <ThermometerSun className="h-4 w-4 text-amber/70" /> UV Index: 8
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border grid grid-cols-5 gap-2 text-center">
            {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day, i) => (
              <div key={day} className="flex flex-col items-center gap-2">
                <span className="text-xs font-medium text-ink-soft">{day}</span>
                <CloudSun className={`h-5 w-5 ${i > 2 ? "text-primary" : "text-ink-soft"}`} />
                <span className="text-xs font-medium text-ink">{30 + i}°</span>
              </div>
            ))}
          </div>
        </div>

        {/* Farm Profile & Crops */}
        <div className="lg:col-span-2 surface-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-medium text-ink flex items-center gap-2">
              <Sprout className="h-5 w-5 text-primary" /> My Crops & Calendar
            </h3>
            <Button variant="ghost" size="sm" onClick={() => toast("Profile editor coming soon.")}>
              Edit Farm Profile
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl border border-border bg-background flex gap-4 items-start">
              <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary grid place-items-center shrink-0">
                <Sprout className="h-5 w-5" />
              </div>
              <div>
                <div className="font-medium text-ink">Bt Cotton (Kharif)</div>
                <div className="text-xs text-ink-soft mt-1">4.5 Acres · Black Soil</div>
                <div className="mt-3 text-xs font-medium text-amber bg-amber/10 px-2 py-1 rounded inline-flex items-center gap-1.5">
                  <CalendarClock className="h-3.5 w-3.5" /> Day 45: Top dressing due
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-border bg-background flex gap-4 items-start">
              <div className="h-10 w-10 rounded-lg bg-accent/10 text-accent-foreground grid place-items-center shrink-0">
                <Sprout className="h-5 w-5" />
              </div>
              <div>
                <div className="font-medium text-ink">Soyabean (Kharif)</div>
                <div className="text-xs text-ink-soft mt-1">2.0 Acres · Black Soil</div>
                <div className="mt-3 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded inline-flex items-center gap-1.5">
                  <CalendarClock className="h-3.5 w-3.5" /> Day 30: Weed management
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface rounded-xl p-4 flex items-center justify-between">
            <div className="text-sm">
              <span className="font-medium text-ink">Recommended for Cotton:</span>
              <span className="text-ink-soft ml-2">NPK 19:19:19 Water Soluble Fertilizer</span>
            </div>
            <Link to="/products/npk-191919">
              <Button size="sm">View Product</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Advisory Requests */}
      <div className="surface-card p-6 lg:p-8">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <h3 className="text-xl font-medium text-ink flex items-center gap-2 mb-2">
              <MessageSquare className="h-5 w-5 text-primary" /> Crop Advisory
            </h3>
            <p className="text-sm text-ink-soft mb-6">
              Notice a pest or disease? Upload a photo and describe the symptoms. Our agronomists
              will respond within 24 hours.
            </p>

            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              toast.success("Advisory request submitted. An expert will reply within 24 hours.");
              (e.target as HTMLFormElement).reset();
            }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Select Crop</Label>
                  <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <option>Bt Cotton</option>
                    <option>Soyabean</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label>Issue Type</Label>
                  <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <option>Pest Attack</option>
                    <option>Disease/Fungus</option>
                    <option>Nutrient Deficiency</option>
                    <option>Growth Issue</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Describe the symptoms</Label>
                <Textarea
                  placeholder="E.g., Leaves are turning yellow from the edges..."
                  className="min-h-[100px]"
                />
              </div>
              <div className="space-y-2">
                <Label>Upload Photos</Label>
                <div className="border-2 border-dashed border-border rounded-xl p-8 text-center bg-background hover:bg-surface cursor-pointer transition-colors">
                  <div className="text-sm text-ink-soft">
                    Drag & drop photos here, or click to browse
                  </div>
                </div>
              </div>
              <Button type="submit">Submit Request</Button>
            </form>
          </div>

          <div className="md:w-80 space-y-4">
            <h4 className="font-medium text-ink mb-4">Recent Requests</h4>
            <div className="p-4 rounded-xl border border-border bg-background space-y-2">
              <div className="flex justify-between items-start">
                <div className="font-medium text-sm text-ink">Whitefly on Cotton</div>
                <span className="text-[10px] font-medium bg-success/10 text-success px-2 py-0.5 rounded">
                  Answered
                </span>
              </div>
              <p className="text-xs text-ink-soft line-clamp-2">
                The photos show early stage whitefly infestation. Recommend spraying...
              </p>
              <button 
                className="text-xs font-medium text-primary hover:underline"
                onClick={() => toast("Full expert reply panel coming soon.")}
              >
                Read expert reply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
