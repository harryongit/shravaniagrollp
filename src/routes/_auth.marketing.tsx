import { createFileRoute } from "@tanstack/react-router";
import { Megaphone, TrendingUp, Users, MousePointerClick, Eye, BarChart3, Calendar, Plus, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatINR } from "@/lib/catalog";

export const Route = createFileRoute("/_auth/marketing")({
  component: MarketingDashboard,
});

function MarketingDashboard() {
  return (
    <div className="container-x py-8 lg:py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-display text-3xl text-ink">Marketing Dashboard</h1>
          <p className="text-sm text-ink-soft mt-1">Campaign performance & lead generation</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" /> Create Campaign
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4 mb-8">
        {[
          { label: "Active Campaigns", value: 6, icon: Megaphone, trend: "+2" },
          { label: "Total Reach (MTD)", value: "45.2K", icon: Eye, trend: "+12.4%" },
          { label: "Lead Conversions", value: 128, icon: TrendingUp, trend: "+8.1%" },
          { label: "Conv. Rate", value: "3.2%", icon: Target, trend: "+0.4%" },
        ].map((s) => (
          <div key={s.label} className="surface-card p-5">
            <div className="flex items-center justify-between">
              <div className="text-xs font-medium text-ink-soft uppercase tracking-wider">{s.label}</div>
              <div className="h-8 w-8 rounded-full bg-primary/10 text-primary grid place-items-center">
                <s.icon className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <div className="text-2xl font-bold text-ink">{s.value}</div>
              {s.trend && (
                <div className="text-xs font-medium text-success bg-success/10 px-1.5 py-0.5 rounded flex items-center">
                  <TrendingUp className="h-3 w-3 mr-0.5" /> {s.trend}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <div className="surface-card p-6">
          <h3 className="text-base font-medium text-ink mb-4">Active Campaigns</h3>
          <div className="space-y-4">
            {[
              { name: "Kharif Seed Sale 2026", budget: 50000, spent: 32000, reach: 18200, conversions: 64, endDate: "Aug 15" },
              { name: "New Irrigation Products", budget: 35000, spent: 15000, reach: 8400, conversions: 28, endDate: "Aug 31" },
              { name: "Organic Fertiliser Promo", budget: 25000, spent: 22000, reach: 12400, conversions: 36, endDate: "Jul 28" },
            ].map((c, i) => (
              <div key={i} className="p-4 rounded-xl border border-border hover:bg-surface/50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium text-sm text-ink">{c.name}</div>
                  <span className="text-[10px] text-ink-soft">Ends {c.endDate}</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-ink-soft">
                  <span>Spent: {formatINR(c.spent)} / {formatINR(c.budget)}</span>
                  <span>Reach: {c.reach.toLocaleString()}</span>
                  <span>Conv: {c.conversions}</span>
                </div>
                <div className="mt-2 h-1.5 rounded-full bg-surface overflow-hidden">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${(c.spent / c.budget) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="surface-card p-6">
          <h3 className="text-base font-medium text-ink mb-4">Lead Sources</h3>
          <div className="space-y-4">
            {[
              { source: "Website Organic", leads: 420, share: 35, color: "bg-primary" },
              { source: "WhatsApp Campaign", leads: 280, share: 23, color: "bg-success" },
              { source: "Facebook Ads", leads: 195, share: 16, color: "bg-accent" },
              { source: "Dealer Referrals", leads: 165, share: 14, color: "bg-amber" },
              { source: "YouTube / Crop Advisory", leads: 140, share: 12, color: "bg-clay" },
            ].map((s, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-ink">{s.source}</span>
                  <span className="text-ink-soft">{s.leads} ({s.share}%)</span>
                </div>
                <div className="h-2 rounded-full bg-surface overflow-hidden">
                  <div className={`h-full rounded-full ${s.color}`} style={{ width: `${s.share}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="surface-card p-6">
        <h3 className="text-base font-medium text-ink mb-4">Upcoming Promotions</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: "Monsoon Mega Sale", date: "Aug 1-15", desc: "Up to 30% off on seeds & fertilisers", status: "Scheduled" as const },
            { title: "Farmer Meet — Satara", date: "Aug 20", desc: "Product demo and on-spot discount", status: "Planning" as const },
            { title: "GST Sale Special", date: "Sep 1-7", desc: "Flat 18% off storewide", status: "Draft" as const },
          ].map((p, i) => (
            <div key={i} className="p-4 rounded-xl border border-border bg-background">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-medium text-sm text-ink">{p.title}</h4>
                <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${
                  p.status === "Scheduled" ? "text-success bg-success/10" :
                  p.status === "Planning" ? "text-amber bg-amber/10" :
                  "text-ink-soft bg-surface"
                }`}>{p.status}</span>
              </div>
              <div className="text-xs text-ink-soft">{p.date}</div>
              <p className="text-xs text-ink-soft mt-1">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
