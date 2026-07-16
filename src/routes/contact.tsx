import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  return (
    <div className="container-x py-12 lg:py-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-eyebrow mb-4">Contact Us</div>
          <h1 className="text-display text-4xl sm:text-5xl">We're here to help.</h1>
          <p className="mt-4 text-ink-soft">
            Have a question about a product, bulk order, or agronomy advice? Reach out to our team.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-lg font-medium text-ink flex items-center gap-2 mb-2">
                <MapPin className="h-5 w-5 text-primary" /> Registered Office
              </h3>
              <p className="text-sm text-ink-soft leading-relaxed">
                Shravani Agroproducts Enterprises LLP
                <br />
                Agriculture Hub, Phase 2<br />
                Pune, Maharashtra 411001
                <br />
                India
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-ink flex items-center gap-2 mb-2">
                <Phone className="h-5 w-5 text-primary" /> Phone
              </h3>
              <p className="text-sm text-ink-soft leading-relaxed">
                Farmer Helpline: 1800-000-0000
                <br />
                Dealer Support: +91 98765 43210
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-ink flex items-center gap-2 mb-2">
                <Mail className="h-5 w-5 text-primary" /> Email
              </h3>
              <p className="text-sm text-ink-soft leading-relaxed">
                support@shravaniagro.com
                <br />
                sales@shravaniagro.com
              </p>
            </div>
          </div>

          <div className="md:col-span-3 surface-card p-6 sm:p-8">
            <h3 className="text-xl font-medium text-ink mb-6">Send us a message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input id="firstName" placeholder="Ramesh" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input id="lastName" placeholder="Kumar" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input id="email" type="email" placeholder="ramesh@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="How can we help?" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Include any relevant details..."
                  className="min-h-[120px]"
                />
              </div>
              <Button type="submit" className="w-full">
                Send message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
