import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Calendar, CloudSun, FileText, TrendingUp, Video } from "lucide-react";

export const Route = createFileRoute("/knowledge")({
  component: KnowledgeHub,
});

function KnowledgeHub() {
  const sections = [
    {
      title: "Crop Guides",
      icon: BookOpen,
      desc: "Sowing-to-harvest playbooks for 40+ crops.",
      path: "/knowledge/guides",
    },
    {
      title: "Crop Calendar",
      icon: Calendar,
      desc: "Seasonal tasks and reminders.",
      path: "/knowledge/calendar",
    },
    {
      title: "Weather",
      icon: CloudSun,
      desc: "Hyper-local forecasts for your farm.",
      path: "/knowledge/weather",
    },
    {
      title: "Govt Schemes",
      icon: FileText,
      desc: "Subsidies and state-wise eligibility.",
      path: "/knowledge/schemes",
    },
    {
      title: "Market Prices",
      icon: TrendingUp,
      desc: "Daily APMC mandi prices.",
      path: "/knowledge/prices",
    },
    {
      title: "Videos",
      icon: Video,
      desc: "Tutorials and farmer success stories.",
      path: "/knowledge/videos",
    },
  ];

  return (
    <div className="container-x py-12 lg:py-24">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="text-eyebrow text-primary mb-4">Knowledge Centre</div>
        <h1 className="text-display text-4xl sm:text-5xl">The Agronomy Desk.</h1>
        <p className="mt-4 text-lg text-ink-soft">
          Research, data, and playbooks curated by working agronomists to help you make informed
          decisions on the field.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((s) => (
          <Link
            key={s.title}
            to={s.path as string}
            className="group surface-card p-6 flex flex-col items-start hover:border-primary/40 hover:-translate-y-1 transition-all"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary mb-4">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-medium text-ink mb-2">{s.title}</h3>
            <p className="text-sm text-ink-soft mb-4">{s.desc}</p>
            <div className="mt-auto text-sm font-medium text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              Explore <span aria-hidden="true">&rarr;</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Featured Articles Section */}
      <div className="mt-24">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-display text-3xl">Latest from the desk</h2>
          <Link to="/" className="text-sm font-medium text-primary hover:underline">
            View all articles &rarr;
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-2xl bg-surface mb-4 overflow-hidden relative">
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10" />
              </div>
              <div className="text-xs font-medium text-primary mb-2 uppercase tracking-wider">
                Expert Article
              </div>
              <h3 className="text-lg font-medium text-ink leading-snug group-hover:text-primary transition-colors">
                Understanding soil microbiology for better Kharif yields
              </h3>
              <p className="mt-2 text-sm text-ink-soft line-clamp-2">
                A deep dive into how beneficial microbes interact with plant roots to improve
                nutrient uptake and stress tolerance.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
