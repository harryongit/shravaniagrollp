import { createFileRoute } from "@tanstack/react-router";
import { FileText, Plus, ExternalLink, Calendar, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/admin/content")({
  component: AdminContent,
});

const articles = [
  { title: "Cotton Kharif 2026 Playbook", status: "Published", views: 1240, date: "2026-06-15", author: "Agronomy Desk" },
  { title: "PM-KUSUM Scheme Eligibility Guide", status: "Draft", views: 0, date: "2026-07-10", author: "Policy Team" },
  { title: "Yellow Leaf Mosaic in Chilli — Diagnosis", status: "Published", views: 890, date: "2026-06-28", author: "Plant Pathologist" },
  { title: "Onion Mandi Prices Weekly Trend", status: "Published", views: 2100, date: "2026-07-01", author: "Market Desk" },
  { title: "Drip Irrigation Design Guide", status: "Draft", views: 0, date: "2026-07-12", author: "Irrigation Team" },
];

function AdminContent() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-display text-2xl text-ink">Content Management</h1>
          <p className="text-sm text-ink-soft mt-1">Manage articles, guides, and knowledge base</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-1" />
          New Article
        </Button>
      </div>

      <div className="surface-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface/50">
                <th className="text-left px-4 py-3 text-xs font-medium text-ink-soft uppercase tracking-wider">Article</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-ink-soft uppercase tracking-wider">Author</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-ink-soft uppercase tracking-wider">Status</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-ink-soft uppercase tracking-wider">Views</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-ink-soft uppercase tracking-wider">Date</th>
                <th className="text-right px-4 py-3 text-xs font-medium text-ink-soft uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((a, i) => (
                <tr key={i} className="border-b border-border last:border-0 hover:bg-surface/30">
                  <td className="px-4 py-3">
                    <div className="font-medium text-ink">{a.title}</div>
                  </td>
                  <td className="px-4 py-3 text-ink-soft">{a.author}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      a.status === "Published" ? "text-success bg-success/10" : "text-amber bg-amber/10"
                    }`}>
                      {a.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-ink-soft tabular-nums">{a.views.toLocaleString()}</td>
                  <td className="px-4 py-3 text-ink-soft">{new Date(a.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</td>
                  <td className="px-4 py-3 text-right">
                    <button className="text-xs font-medium text-primary hover:underline mr-3">Edit</button>
                    <button className="text-xs font-medium text-ink-soft hover:text-destructive">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="surface-card p-6">
          <h3 className="text-base font-medium text-ink mb-4">Quick Stats</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-surface">
              <div className="text-2xl font-bold text-ink tabular-nums">24</div>
              <div className="text-xs text-ink-soft mt-1">Published Articles</div>
            </div>
            <div className="p-4 rounded-xl bg-surface">
              <div className="text-2xl font-bold text-ink tabular-nums">8</div>
              <div className="text-xs text-ink-soft mt-1">Drafts</div>
            </div>
            <div className="p-4 rounded-xl bg-surface">
              <div className="text-2xl font-bold text-ink tabular-nums">12.4K</div>
              <div className="text-xs text-ink-soft mt-1">Total Views</div>
            </div>
            <div className="p-4 rounded-xl bg-surface">
              <div className="text-2xl font-bold text-ink tabular-nums">6</div>
              <div className="text-xs text-ink-soft mt-1">Categories</div>
            </div>
          </div>
        </div>

        <div className="surface-card p-6">
          <h3 className="text-base font-medium text-ink mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {[
              { action: "Published", article: "Cotton Kharif 2026 Playbook", time: "2 hours ago" },
              { action: "Updated", article: "Onion Mandi Prices", time: "1 day ago" },
              { action: "Created draft", article: "PM-KUSUM Guide", time: "2 days ago" },
              { action: "Published", article: "Yellow Leaf Mosaic Guide", time: "3 days ago" },
            ].map((a, i) => (
              <div key={i} className="flex items-center gap-3 py-2 border-b border-border last:border-0">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <div className="flex-1">
                  <span className="text-sm text-ink">{a.action}</span>
                  <span className="text-sm text-ink-soft"> — {a.article}</span>
                </div>
                <div className="text-xs text-ink-soft">{a.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
