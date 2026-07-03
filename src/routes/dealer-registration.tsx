import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Users, BarChart3, Store } from "lucide-react";

export const Route = createFileRoute("/dealer-registration")({
  component: DealerRegistration,
});

function DealerRegistration() {
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="bg-ink text-background pt-24 pb-32 px-4">
        <div className="container-x max-w-4xl text-center relative">
          <div className="text-eyebrow text-accent mb-4">Partner Program</div>
          <h1 className="text-display text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Become a Shravani Authorised Dealer
          </h1>
          <p className="mt-6 text-lg text-background/70 max-w-2xl mx-auto leading-relaxed">
            Join our network of 800+ dealers across India. Unlock dealer pricing, credit facilities,
            dedicated support, and incentive programs.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="container-x -mt-16 relative z-10 mb-20">
        <div className="surface-card p-8 sm:p-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Competitive Margins",
                desc: "Up to 30% dealer margin on select categories.",
              },
              {
                icon: Store,
                title: "Exclusive Territories",
                desc: "Protected dealer zones to maximise your sales potential.",
              },
              {
                icon: Users,
                title: "Dedicated Support",
                desc: "A dedicated field executive and dealer helpline.",
              },
              {
                icon: CheckCircle2,
                title: "Credit Facility",
                desc: "Up to ₹5L credit line for approved Gold-tier dealers.",
              },
            ].map((b) => (
              <div key={b.title}>
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary grid place-items-center mb-4">
                  <b.icon className="h-6 w-6" />
                </div>
                <div className="font-medium text-ink mb-1">{b.title}</div>
                <div className="text-sm text-ink-soft leading-relaxed">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="container-x">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-display text-3xl text-ink">Apply Now</h2>
            <p className="mt-3 text-ink-soft">
              Our team reviews applications within 3 working days. You'll receive an OTP-verified
              login upon approval.
            </p>
          </div>

          <div className="surface-card p-6 sm:p-10">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Business / Shop Name</Label>
                  <Input placeholder="Kisan Agro Centre" />
                </div>
                <div className="space-y-2">
                  <Label>Proprietor / Partner Name</Label>
                  <Input placeholder="Full legal name" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Mobile Number</Label>
                  <Input type="tel" placeholder="+91" />
                </div>
                <div className="space-y-2">
                  <Label>Email Address</Label>
                  <Input type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>GST Identification Number (GSTIN)</Label>
                <Input placeholder="27AAAAA0000A1Z5" className="uppercase" />
              </div>
              <div className="space-y-2">
                <Label>Business Address</Label>
                <Textarea
                  placeholder="Full shop/office address with PIN code"
                  className="min-h-[80px]"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>State</Label>
                  <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option>Maharashtra</option>
                    <option>Karnataka</option>
                    <option>Gujarat</option>
                    <option>Madhya Pradesh</option>
                    <option>Rajasthan</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label>District</Label>
                  <Input placeholder="e.g. Pune" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Categories You Are Interested In</Label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Seeds",
                    "Crop Protection",
                    "Fertilizers",
                    "Irrigation",
                    "Machinery",
                    "Organic",
                  ].map((cat) => (
                    <label
                      key={cat}
                      className="flex items-center gap-2 text-sm text-ink-soft cursor-pointer"
                    >
                      <input type="checkbox" className="accent-primary" />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <Label>Annual Agri-input Turnover (Approx.)</Label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option>Below ₹10 Lakh</option>
                  <option>₹10–50 Lakh</option>
                  <option>₹50L–1 Crore</option>
                  <option>Above ₹1 Crore</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label>Upload Trade License / GST Certificate</Label>
                <div className="border-2 border-dashed border-border rounded-xl p-8 text-center bg-background hover:bg-surface cursor-pointer transition-colors">
                  <div className="text-sm text-ink-soft">
                    Drag & drop or click to upload (PDF/JPG, max 5MB)
                  </div>
                </div>
              </div>
              <div className="pt-2">
                <Button type="submit" className="w-full" size="lg">
                  Submit Application
                </Button>
                <p className="text-xs text-ink-soft text-center mt-3">
                  By submitting, you agree to our Dealer Agreement and Terms of Service.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
