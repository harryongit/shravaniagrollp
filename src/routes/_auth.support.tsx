import { createFileRoute } from "@tanstack/react-router";
import { HeadphonesIcon, MessageCircle, Phone, Mail, Clock } from "lucide-react";

export const Route = createFileRoute("/_auth/support")({
  component: Support,
});

function Support() {
  return (
    <div className="container-x py-12">
      <div className="surface-card p-8">
        <div className="flex items-center gap-3 mb-6">
          <HeadphonesIcon className="h-6 w-6 text-primary" />
          <h1 className="text-display text-2xl text-ink">Support</h1>
        </div>
        <p className="text-ink-soft mb-8">Get help with your orders, products, or account.</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-border p-5">
            <MessageCircle className="h-5 w-5 text-primary mb-3" />
            <h3 className="font-medium text-ink mb-1">Live Chat</h3>
            <p className="text-sm text-ink-soft mb-4">Chat with our support team during business hours.</p>
            <button className="text-sm font-medium text-primary hover:underline">Start chat →</button>
          </div>
          <div className="rounded-xl border border-border p-5">
            <Phone className="h-5 w-5 text-primary mb-3" />
            <h3 className="font-medium text-ink mb-1">Farmer Helpline</h3>
            <p className="text-sm text-ink-soft mb-4">Call us for urgent assistance with your order.</p>
            <div className="text-sm font-medium text-ink">1800-180-1551</div>
          </div>
          <div className="rounded-xl border border-border p-5">
            <Mail className="h-5 w-5 text-primary mb-3" />
            <h3 className="font-medium text-ink mb-1">Email Us</h3>
            <p className="text-sm text-ink-soft mb-4">We respond within 24 hours.</p>
            <div className="text-sm font-medium text-ink">support@shravaniagro.com</div>
          </div>
        </div>
        <div className="mt-8 p-4 rounded-xl bg-surface flex items-start gap-3">
          <Clock className="h-5 w-5 text-ink-soft mt-0.5" />
          <div className="text-sm text-ink-soft">
            <strong className="text-ink">Business hours:</strong> Mon–Sat, 9:00 AM – 6:00 PM IST
          </div>
        </div>
      </div>
    </div>
  );
}
