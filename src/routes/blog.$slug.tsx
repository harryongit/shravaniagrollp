import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Clock, User, Tag, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogArticle,
});

function BlogArticle() {
  const { slug } = Route.useParams();

  return (
    <div className="container-x py-8 lg:py-12">
      <div className="max-w-3xl mx-auto">
        {/* Back */}
        <Link
          to="/knowledge"
          className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-ink mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Knowledge Centre
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              Crop Guide
            </span>
            <span className="flex items-center gap-1.5 text-xs text-ink-soft">
              <Clock className="h-3.5 w-3.5" /> 8 min read
            </span>
          </div>
          <h1 className="text-display text-4xl sm:text-5xl leading-[1.1] text-ink">
            Understanding NPK Ratios for Peak Cotton Yields
          </h1>
          <p className="mt-4 text-lg text-ink-soft leading-relaxed">
            A deep-dive into how the balance of Nitrogen, Phosphorus, and Potassium at each growth
            stage directly impacts boll formation and lint quality in Indian cotton.
          </p>
        </div>

        {/* Author & Meta */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-border mb-8">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/20 text-primary grid place-items-center font-medium">
              DP
            </div>
            <div>
              <div className="text-sm font-medium text-ink">Dr. Pradeep Patil</div>
              <div className="text-xs text-ink-soft">Senior Agronomist, M.Sc. (Agriculture)</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-ink-soft">Nov 2, 2026</span>
            <button className="ml-2 h-9 w-9 grid place-items-center rounded-md border border-border hover:bg-surface text-ink-soft hover:text-ink transition-colors">
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 mb-10 overflow-hidden flex items-center justify-center">
          <span className="text-ink-soft text-sm">Featured image placeholder</span>
        </div>

        {/* Article Body */}
        <div className="prose prose-neutral max-w-none text-ink">
          <p className="text-base leading-relaxed text-ink">
            Cotton is one of India's most economically significant cash crops, grown across 12.7
            million hectares in states like Maharashtra, Gujarat, Telangana, and Punjab. Achieving
            3+ bales per acre requires not just good seed and timely pest management — it demands
            precision nutrition management.
          </p>
          <h2 className="text-2xl font-display font-medium text-ink mt-8 mb-4">
            The NPK Triangle Explained
          </h2>
          <p className="text-base leading-relaxed text-ink-soft">
            Nitrogen (N) drives vegetative growth and chlorophyll synthesis. Phosphorus (P) is
            critical for root development and energy transfer. Potassium (K) regulates water uptake,
            disease resistance, and fibre quality. Each element plays a distinct role at different
            growth stages, and imbalance in any one creates a cascade of yield loss.
          </p>
          <div className="my-6 p-5 rounded-xl border border-primary/20 bg-primary/5">
            <p className="text-sm font-medium text-primary mb-2">🌱 Key Insight</p>
            <p className="text-sm text-ink leading-relaxed">
              Excessive nitrogen in the post-squaring stage leads to rank vegetative growth at the
              expense of boll retention — a common mistake that reduces yields by 15–25%.
            </p>
          </div>
          <h2 className="text-2xl font-display font-medium text-ink mt-8 mb-4">
            Recommended NPK Schedule for Cotton
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-surface text-left">
                  <th className="px-4 py-3 font-medium text-ink border border-border rounded-tl-md">
                    Growth Stage
                  </th>
                  <th className="px-4 py-3 font-medium text-ink border border-border">
                    N (kg/acre)
                  </th>
                  <th className="px-4 py-3 font-medium text-ink border border-border">
                    P₂O₅ (kg/acre)
                  </th>
                  <th className="px-4 py-3 font-medium text-ink border border-border rounded-tr-md">
                    K₂O (kg/acre)
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Pre-sowing (Basal)", "10", "10", "10"],
                  ["Squaring (45 DAS)", "15", "0", "10"],
                  ["Flowering (65 DAS)", "10", "0", "15"],
                  ["Boll Development (85 DAS)", "5", "5", "10"],
                ].map(([stage, n, p, k]) => (
                  <tr key={stage} className="border-b border-border last:border-0">
                    <td className="px-4 py-3 text-ink border border-border">{stage}</td>
                    <td className="px-4 py-3 text-ink-soft border border-border">{n}</td>
                    <td className="px-4 py-3 text-ink-soft border border-border">{p}</td>
                    <td className="px-4 py-3 text-ink-soft border border-border">{k}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-10 pt-8 border-t border-border">
          <div className="flex flex-wrap items-center gap-2">
            <Tag className="h-4 w-4 text-ink-soft" />
            {["Cotton", "Fertilizers", "NPK", "Kharif", "Crop Nutrition"].map((tag) => (
              <span
                key={tag}
                className="bg-surface border border-border rounded-full px-3 py-1 text-xs font-medium text-ink-soft hover:text-ink cursor-pointer transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-surface border border-primary/20">
          <h3 className="font-medium text-ink mb-2">Shop Recommended Fertilizers for Cotton</h3>
          <p className="text-sm text-ink-soft mb-4">
            Find NPK blends, MOP, DAP, and bio-stimulants curated for cotton cultivation.
          </p>
          <Link to="/products">
            <Button>Browse Fertilizers →</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
