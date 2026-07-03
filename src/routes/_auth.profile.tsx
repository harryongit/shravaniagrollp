import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useAuth } from "@/lib/auth";
import { User, MapPin, Bell, Shield, Plus, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/_auth/profile")({
  component: Profile,
});

const tabs = [
  { id: "details", label: "My Details", icon: User },
  { id: "addresses", label: "Addresses", icon: MapPin },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "security", label: "Security", icon: Shield },
];

function Profile() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("details");

  return (
    <div className="container-x py-8 lg:py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-display text-3xl text-ink mb-8">Account Settings</h1>

        <div className="grid lg:grid-cols-[220px_1fr] gap-8 items-start">
          {/* Sidebar Tabs */}
          <nav className="surface-card p-2 space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 w-full px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-primary/10 text-primary"
                    : "text-ink-soft hover:text-ink hover:bg-surface"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Content */}
          <div className="surface-card p-6 sm:p-8">
            {activeTab === "details" && (
              <div>
                <h2 className="text-xl font-medium text-ink mb-6">Personal Information</h2>
                <div className="flex items-center gap-6 mb-8">
                  <div className="h-20 w-20 rounded-full bg-primary/20 text-primary grid place-items-center text-2xl font-bold flex-shrink-0">
                    {user?.email?.charAt(0).toUpperCase() || "U"}
                  </div>
                  <div>
                    <Button size="sm" variant="outline">
                      Change Photo
                    </Button>
                    <p className="mt-2 text-xs text-ink-soft">JPG, PNG up to 2MB</p>
                  </div>
                </div>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>First Name</Label>
                      <Input defaultValue="Ramesh" />
                    </div>
                    <div className="space-y-2">
                      <Label>Last Name</Label>
                      <Input defaultValue="Kumar" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Email Address</Label>
                    <Input type="email" defaultValue={user?.email || ""} />
                  </div>
                  <div className="space-y-2">
                    <Label>Phone Number</Label>
                    <Input defaultValue="+91 98765 43210" />
                  </div>
                  <div className="pt-2">
                    <Button type="submit">Save Changes</Button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === "addresses" && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-medium text-ink">Saved Addresses</h2>
                  <Button size="sm" className="gap-2">
                    <Plus className="h-4 w-4" /> Add New
                  </Button>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      label: "Home",
                      line1: "42, Mahatma Gandhi Road",
                      city: "Pune",
                      state: "Maharashtra",
                      pin: "411001",
                      isDefault: true,
                    },
                    {
                      label: "Farm",
                      line1: "Survey No. 18, Near Water Tank",
                      city: "Baramati",
                      state: "Maharashtra",
                      pin: "413102",
                      isDefault: false,
                    },
                  ].map((addr) => (
                    <div
                      key={addr.label}
                      className="p-4 rounded-xl border border-border bg-background flex justify-between items-start"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-ink">{addr.label}</span>
                          {addr.isDefault && (
                            <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-primary/10 text-primary">
                              Default
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-ink-soft leading-relaxed">
                          {addr.line1}
                          <br />
                          {addr.city}, {addr.state} — {addr.pin}
                        </p>
                      </div>
                      <div className="flex gap-2 ml-4 flex-shrink-0">
                        <button className="h-8 w-8 grid place-items-center rounded-md hover:bg-surface text-ink-soft hover:text-ink">
                          <Pencil className="h-3.5 w-3.5" />
                        </button>
                        <button className="h-8 w-8 grid place-items-center rounded-md hover:bg-surface text-ink-soft hover:text-destructive">
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "notifications" && (
              <div>
                <h2 className="text-xl font-medium text-ink mb-6">Notification Preferences</h2>
                <div className="space-y-6">
                  {[
                    {
                      group: "Order Updates",
                      items: [
                        "Order confirmed",
                        "Order shipped",
                        "Out for delivery",
                        "Order delivered",
                      ],
                    },
                    {
                      group: "Marketing",
                      items: ["Seasonal offers", "New product launches", "Crop advisory alerts"],
                    },
                    { group: "Account", items: ["Security alerts", "Login activity"] },
                  ].map((group) => (
                    <div key={group.group}>
                      <h3 className="font-medium text-ink mb-3">{group.group}</h3>
                      <div className="space-y-3">
                        {group.items.map((item) => (
                          <div key={item} className="flex items-center justify-between">
                            <span className="text-sm text-ink-soft">{item}</span>
                            <div className="flex gap-4 text-xs text-ink-soft">
                              {["Email", "SMS", "WhatsApp"].map((ch) => (
                                <label
                                  key={ch}
                                  className="flex items-center gap-1.5 cursor-pointer"
                                >
                                  <input
                                    type="checkbox"
                                    defaultChecked
                                    className="accent-primary"
                                  />
                                  {ch}
                                </label>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <Button>Save Preferences</Button>
                </div>
              </div>
            )}

            {activeTab === "security" && (
              <div>
                <h2 className="text-xl font-medium text-ink mb-6">Security</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-ink mb-4">Change Password</h3>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                      <div className="space-y-2">
                        <Label>Current Password</Label>
                        <Input type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label>New Password</Label>
                        <Input type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label>Confirm New Password</Label>
                        <Input type="password" />
                      </div>
                      <Button type="submit">Update Password</Button>
                    </form>
                  </div>
                  <div className="border-t border-border pt-6">
                    <h3 className="font-medium text-ink mb-2">Two-Factor Authentication</h3>
                    <p className="text-sm text-ink-soft mb-4">
                      Add an extra layer of security to your account using OTP via SMS or an
                      authenticator app.
                    </p>
                    <Button variant="outline">Enable 2FA</Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
