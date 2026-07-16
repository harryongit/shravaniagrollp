import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Save, Globe, Receipt, Truck } from "lucide-react";

export const Route = createFileRoute("/admin/settings")({
  component: AdminSettings,
});

const settingsTabs = [
  { id: "company", label: "Company Profile", icon: Globe },
  { id: "tax", label: "Tax & Currency", icon: Receipt },
  { id: "shipping", label: "Shipping Zones", icon: Truck },
];

function AdminSettings() {
  const [tab, setTab] = useState("company");

  return (
    <div className="space-y-6">
      <h1 className="text-display text-2xl text-ink">Platform Settings</h1>

      <div className="grid lg:grid-cols-[200px_1fr] gap-6 items-start">
        <nav className="surface-card p-2 space-y-1">
          {settingsTabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-3 w-full px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                tab === t.id
                  ? "bg-primary/10 text-primary"
                  : "text-ink-soft hover:text-ink hover:bg-surface"
              }`}
            >
              <t.icon className="h-4 w-4" />
              {t.label}
            </button>
          ))}
        </nav>

        <div className="surface-card p-6 sm:p-8">
          {tab === "company" && (
            <div>
              <h2 className="text-xl font-medium text-ink mb-6">Company Information</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <Label>Registered Business Name</Label>
                  <Input defaultValue="Shravani Agroproducts Enterprises LLP" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>LLP Identification Number (LLPIN)</Label>
                    <Input placeholder="AAA-0000" className="font-mono" />
                  </div>
                  <div className="space-y-2">
                    <Label>GST Identification Number</Label>
                    <Input placeholder="27AAAAA0000A1Z5" className="font-mono uppercase" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Registered Address</Label>
                  <Input defaultValue="Agriculture Hub, Phase 2, Pune, Maharashtra 411001" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Support Email</Label>
                    <Input defaultValue="support@shravaniagro.com" />
                  </div>
                  <div className="space-y-2">
                    <Label>Helpline Number</Label>
                    <Input defaultValue="1800-000-0000" />
                  </div>
                </div>
                <div className="pt-2">
                  <Button type="submit" className="gap-2">
                    <Save className="h-4 w-4" /> Save Changes
                  </Button>
                </div>
              </form>
            </div>
          )}

          {tab === "tax" && (
            <div>
              <h2 className="text-xl font-medium text-ink mb-6">Tax & Currency Configuration</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-ink mb-4">GST Settings</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-xl border border-border bg-background">
                      <div>
                        <div className="font-medium text-sm text-ink">
                          Prices displayed inclusive of GST
                        </div>
                        <div className="text-xs text-ink-soft mt-0.5">
                          Customers see GST-inclusive prices on catalog and PDP
                        </div>
                      </div>
                      <input type="checkbox" defaultChecked className="accent-primary h-4 w-4" />
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-xl border border-border bg-background">
                      <div>
                        <div className="font-medium text-sm text-ink">
                          Auto-generate GST Invoice on payment
                        </div>
                        <div className="text-xs text-ink-soft mt-0.5">
                          GST-compliant invoice generated and emailed post-payment
                        </div>
                      </div>
                      <input type="checkbox" defaultChecked className="accent-primary h-4 w-4" />
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <h3 className="font-medium text-ink mb-4">Currency</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Primary Currency</Label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                        <option>INR — Indian Rupee (₹)</option>
                        <option>USD — US Dollar ($)</option>
                      </select>
                    </div>
                  </div>
                </div>
                <Button className="gap-2">
                  <Save className="h-4 w-4" /> Save Tax Settings
                </Button>
              </div>
            </div>
          )}

          {tab === "shipping" && (
            <div>
              <h2 className="text-xl font-medium text-ink mb-6">Shipping Configuration</h2>
              <div className="space-y-4">
                {[
                  {
                    zone: "Tier 1 Cities",
                    rate: "Free above ₹5,000 / ₹99 flat",
                    timeline: "2–3 business days",
                  },
                  {
                    zone: "Tier 2 / Tier 3 Cities",
                    rate: "Free above ₹5,000 / ₹99 flat",
                    timeline: "3–5 business days",
                  },
                  { zone: "Rural Pincodes", rate: "₹149 flat", timeline: "5–8 business days" },
                  {
                    zone: "Express (All Zones)",
                    rate: "₹250 additional",
                    timeline: "1–2 business days (availability varies)",
                  },
                ].map((zone) => (
                  <div
                    key={zone.zone}
                    className="p-4 rounded-xl border border-border bg-background flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="font-medium text-ink">{zone.zone}</div>
                      <div className="text-xs text-ink-soft mt-0.5">
                        {zone.rate} · ETA: {zone.timeline}
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="text-xs flex-shrink-0">
                      Edit
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
