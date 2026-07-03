import { createFileRoute } from "@tanstack/react-router";
import { useAuth } from "@/lib/auth";
import { FileText, Image as ImageIcon, BookOpen, PenTool, LayoutTemplate } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_auth/content")({
  component: ContentDashboard,
});

function ContentDashboard() {
  const { user } = useAuth();

  return (
    <div className="container-x py-8 lg:py-12 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-display text-3xl text-ink">Content CMS</h1>
            <span className="bg-primary/10 text-primary border border-primary/20 px-2.5 py-0.5 rounded-full text-xs font-medium uppercase tracking-wider">
              Editor
            </span>
          </div>
          <p className="text-ink-soft">Manage Blog, Knowledge Centre, and Homepage Banners</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <ImageIcon className="h-4 w-4" /> Media Library
          </Button>
          <Button className="gap-2">
            <PenTool className="h-4 w-4" /> New Article
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="surface-card p-6">
          <div className="text-sm font-medium text-ink-soft mb-2">Published Articles</div>
          <div className="text-display text-3xl text-ink">142</div>
        </div>

        <div className="surface-card p-6 border-t-4 border-t-amber">
          <div className="text-sm font-medium text-ink-soft mb-2">Drafts</div>
          <div className="text-display text-3xl text-ink">8</div>
        </div>

        <div className="surface-card p-6 border-t-4 border-t-primary">
          <div className="text-sm font-medium text-ink-soft mb-2">Pending Moderation</div>
          <div className="text-display text-3xl text-ink">23</div>
          <div className="text-xs text-ink-soft mt-1">User comments</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="surface-card">
            <div className="p-6 border-b border-border flex items-center justify-between">
              <h3 className="text-lg font-medium text-ink flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" /> Recent Content
              </h3>
              <div className="flex gap-2">
                <select className="h-9 rounded-md border border-input bg-background px-3 text-sm">
                  <option>All Types</option>
                  <option>Knowledge Centre</option>
                  <option>Blog Post</option>
                </select>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-ink-soft uppercase bg-surface border-b border-border">
                  <tr>
                    <th className="px-6 py-4 font-medium">Title</th>
                    <th className="px-6 py-4 font-medium">Type</th>
                    <th className="px-6 py-4 font-medium">Author</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                    <th className="px-6 py-4 font-medium text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    {
                      title: "Understanding NPK Ratios for Cotton",
                      type: "Knowledge Centre",
                      author: "Dr. Patil",
                      status: "published",
                    },
                    {
                      title: "Top 5 Tractors for Small Farms (2026)",
                      type: "Blog Post",
                      author: "S. Sharma",
                      status: "draft",
                    },
                    {
                      title: "Monsoon Preparations Guide",
                      type: "Knowledge Centre",
                      author: "Dr. Patil",
                      status: "published",
                    },
                  ].map((post, i) => (
                    <tr key={i} className="hover:bg-surface/50">
                      <td
                        className="px-6 py-4 font-medium text-ink max-w-[200px] truncate"
                        title={post.title}
                      >
                        {post.title}
                      </td>
                      <td className="px-6 py-4 text-ink-soft">{post.type}</td>
                      <td className="px-6 py-4 text-ink-soft">{post.author}</td>
                      <td className="px-6 py-4">
                        {post.status === "published" ? (
                          <span className="bg-success/10 text-success text-xs font-medium px-2 py-0.5 rounded">
                            Published
                          </span>
                        ) : (
                          <span className="bg-amber/10 text-amber text-xs font-medium px-2 py-0.5 rounded">
                            Draft
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Button size="sm" variant="ghost">
                          Edit
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 space-y-6">
          <div className="surface-card p-6">
            <h3 className="text-lg font-medium text-ink mb-4 flex items-center gap-2">
              <LayoutTemplate className="h-5 w-5 text-primary" /> Homepage Merchandising
            </h3>
            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-border bg-background">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-medium text-sm text-ink">Hero Banner (Slot 1)</div>
                  <Button size="sm" variant="outline" className="h-7 text-xs">
                    Update
                  </Button>
                </div>
                <div className="text-xs text-ink-soft">Currently showing: Monsoon Mega Sale</div>
              </div>
              <div className="p-4 rounded-xl border border-border bg-background">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-medium text-sm text-ink">Announcement Bar</div>
                  <Button size="sm" variant="outline" className="h-7 text-xs">
                    Update
                  </Button>
                </div>
                <div className="text-xs text-ink-soft">
                  Currently showing: Free Shipping {">"} ₹5000
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
