import { createFileRoute } from "@tanstack/react-router";
import { FileText, Plus, Image, Eye, Calendar, Clock, Video, BookOpen, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_auth/content")({
  component: ContentDashboard,
});

function ContentDashboard() {
  return (
    <div className="container-x py-8 lg:py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-display text-3xl text-ink">Content Management</h1>
          <p className="text-sm text-ink-soft mt-1">Knowledge base, videos, and crop advisories</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 text-xs">
            <Image className="h-4 w-4" /> Media Library
          </Button>
          <Button className="gap-2 text-xs">
            <Plus className="h-4 w-4" /> New Article
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4 mb-8">
        {[
          { label: "Published Articles", value: 24, icon: FileText },
          { label: "Crop Advisory Videos", value: 18, icon: Video },
          { label: "Audio Guides (Podcasts)", value: 6, icon: Mic },
          { label: "Monthly Views", value: "12.4K", icon: Eye },
        ].map((s) => (
          <div key={s.label} className="surface-card p-5">
            <div className="flex items-center justify-between">
              <div className="text-xs font-medium text-ink-soft uppercase tracking-wider">{s.label}</div>
              <div className="h-8 w-8 rounded-full bg-primary/10 text-primary grid place-items-center">
                <s.icon className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-3 text-2xl font-bold text-ink">{s.value}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <div className="surface-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-medium text-ink">Recent Articles</h3>
            <select className="h-8 rounded-md border border-input bg-background px-2 text-xs">
              <option>All Status</option>
              <option>Published</option>
              <option>Draft</option>
              <option>Scheduled</option>
            </select>
          </div>
          <div className="space-y-3">
            {[
              { title: "Cotton Kharif 2026 Complete Guide", status: "Published" as const, views: 1240, date: "Jun 15", author: "Agronomy Desk" },
              { title: "PM-KUSUM Scheme — Eligibility & Benefits", status: "Draft" as const, views: 0, date: "Jul 10", author: "Policy Team" },
              { title: "Yellow Leaf Mosaic in Chilli: Diagnosis & Control", status: "Published" as const, views: 890, date: "Jun 28", author: "Plant Pathologist" },
              { title: "Drip Irrigation Design for Small Farms", status: "Scheduled" as const, views: 0, date: "Jul 22", author: "Irrigation Team" },
              { title: "Organic Certification Process in India", status: "Draft" as const, views: 0, date: "Jul 5", author: "Compliance" },
            ].map((a, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-surface/50 transition-colors">
                <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary grid place-items-center flex-shrink-0">
                  <FileText className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-ink truncate">{a.title}</div>
                  <div className="flex items-center gap-3 text-xs text-ink-soft mt-0.5">
                    <span>{a.author}</span>
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {a.date}</span>
                    <span className="flex items-center gap-1"><Eye className="h-3 w-3" /> {a.views}</span>
                  </div>
                </div>
                <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${
                  a.status === "Published" ? "text-success bg-success/10" :
                  a.status === "Scheduled" ? "text-primary bg-primary/10" :
                  "text-amber bg-amber/10"
                }`}>{a.status}</span>
              </div>
            ))}
          </div>
          <Button variant="ghost" size="sm" className="w-full mt-3 text-xs text-ink-soft">
            View All Articles
          </Button>
        </div>

        <div className="space-y-6">
          <div className="surface-card p-6">
            <h3 className="text-base font-medium text-ink mb-4">Content Categories</h3>
            <div className="space-y-3">
              {[
                { name: "Crop Cultivation Guides", count: 12, icon: BookOpen },
                { name: "Pest & Disease Management", count: 8, icon: FileText },
                { name: "Government Schemes", count: 6, icon: FileText },
                { name: "Irrigation & Water Management", count: 5, icon: FileText },
                { name: "Organic Farming", count: 4, icon: FileText },
                { name: "Market Prices & Trends", count: 3, icon: FileText },
              ].map((cat, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <div className="flex items-center gap-2">
                    <cat.icon className="h-4 w-4 text-primary" />
                    <span className="text-sm text-ink">{cat.name}</span>
                  </div>
                  <span className="text-xs text-ink-soft bg-surface px-2 py-0.5 rounded">{cat.count}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card p-6">
            <h3 className="text-base font-medium text-ink mb-4">Content Calendar</h3>
            <div className="space-y-3">
              {[
                { event: "Soybean Crop Advisory Video", date: "Jul 22", type: "Video" as const },
                { event: "Weekly Market Price Update", date: "Jul 25", type: "Article" as const },
                { event: "Kharif Pest Alert Bulletin", date: "Jul 28", type: "Alert" as const },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-surface">
                  <div className={`h-2 w-2 rounded-full ${
                    c.type === "Video" ? "bg-clay" : c.type === "Alert" ? "bg-destructive" : "bg-primary"
                  }`} />
                  <div className="flex-1">
                    <div className="text-sm text-ink">{c.event}</div>
                    <div className="flex items-center gap-2 text-xs text-ink-soft mt-0.5">
                      <Calendar className="h-3 w-3" /> {c.date}
                      <span className="bg-background px-1.5 py-0.5 rounded text-[10px]">{c.type}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
