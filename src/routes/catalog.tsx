import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo, type ComponentType } from "react";
import {
  Search,
  ArrowRight,
  ChevronRight,
  Sprout,
  ShieldCheck,
  Sparkles,
  Leaf,
  Tractor,
  Droplets,
  Home,
  Flower2,
  TreePine,
  Hammer,
  TestTube2,
  HelpCircle,
  X,
  Tag,
} from "lucide-react";
import { categories } from "@/lib/catalog";
import { motion, AnimatePresence } from "motion/react";

export const Route = createFileRoute("/catalog")({
  head: () => ({
    meta: [
      { title: "Agricultural Catalog Hierarchy — Shravani Agroproducts Enterprises LLP" },
      {
        name: "description",
        content:
          "Explore the comprehensive taxonomy of seeds, crop protection, fertilizers, plant growth, machinery, irrigation, protected cultivation, and services.",
      },
    ],
  }),
  component: CatalogExplorer,
});

// Map categories to Lucide icons
const categoryIcons: Record<string, ComponentType<{ className?: string }>> = {
  seeds: Sprout,
  "crop-protection": ShieldCheck,
  fertilizers: Sparkles,
  "plant-growth": Leaf,
  "farm-machinery": Tractor,
  irrigation: Droplets,
  "protected-cultivation": Home,
  "urban-gardening": Flower2,
  "saplings-plants": TreePine,
  "farm-accessories": Hammer,
  "soil-water-testing": TestTube2,
  services: HelpCircle,
};

// Map categories to accent colors
const categoryAccents: Record<string, string> = {
  seeds: "border-l-success text-success bg-success/5",
  "crop-protection": "border-l-primary text-primary bg-primary/5",
  fertilizers: "border-l-amber text-amber bg-amber/5",
  "plant-growth": "border-l-success text-success bg-success/5",
  "farm-machinery": "border-l-clay text-clay bg-clay/5",
  irrigation: "border-l-primary text-primary bg-primary/5",
  "protected-cultivation": "border-l-amber text-amber bg-amber/5",
  "urban-gardening": "border-l-success text-success bg-success/5",
  "saplings-plants": "border-l-success text-success bg-success/5",
  "farm-accessories": "border-l-ink text-ink bg-ink/5",
  "soil-water-testing": "border-l-primary text-primary bg-primary/5",
  services: "border-l-amber text-amber bg-amber/5",
};

interface SearchMatch {
  type: "category" | "subcategory" | "leaf";
  categoryName: string;
  categorySlug: string;
  subcategoryName?: string;
  leafName?: string;
  matchText: string;
}

function CatalogExplorer() {
  const [activeTab, setActiveTab] = useState<string>("seeds");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>(null);

  const selectedCategory = useMemo(() => {
    return categories.find((c) => c.slug === activeTab) || categories[0];
  }, [activeTab]);

  // Compute search matches
  const searchMatches = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase().trim();
    const matches: SearchMatch[] = [];

    categories.forEach((cat) => {
      // 1. Match category name/tagline
      if (cat.name.toLowerCase().includes(query) || cat.tagline.toLowerCase().includes(query)) {
        matches.push({
          type: "category",
          categoryName: cat.name,
          categorySlug: cat.slug,
          matchText: cat.name,
        });
      }

      cat.subcategories.forEach((sub) => {
        // 2. Match subcategory
        if (sub.name.toLowerCase().includes(query)) {
          matches.push({
            type: "subcategory",
            categoryName: cat.name,
            categorySlug: cat.slug,
            subcategoryName: sub.name,
            matchText: `${cat.name} > ${sub.name}`,
          });
        }

        // 3. Match leaf items
        sub.items.forEach((item) => {
          if (item.toLowerCase().includes(query)) {
            matches.push({
              type: "leaf",
              categoryName: cat.name,
              categorySlug: cat.slug,
              subcategoryName: sub.name,
              leafName: item,
              matchText: `${cat.name} > ${sub.name} > ${item}`,
            });
          }
        });
      });
    });

    return matches.slice(0, 15); // limit to 15 results
  }, [searchQuery]);

  const handleSearchResultClick = (slug: string) => {
    setActiveTab(slug);
    setMobileExpandedCat(slug);
    setSearchQuery("");
  };

  return (
    <div className="container-x py-8 lg:py-12">
      {/* Breadcrumb */}
      <nav className="text-xs text-ink-soft mb-4">
        <Link to="/" className="hover:text-ink">
          Home
        </Link>
        <span className="mx-2 opacity-40">/</span>
        <span className="text-ink">Catalog Explorer</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-8 border-b border-border">
        <div>
          <div className="text-eyebrow text-primary">Catalog Taxonomy</div>
          <h1 className="mt-2 text-display text-3xl sm:text-4xl">
            Explore inputs & inputs hierarchy
          </h1>
          <p className="mt-2 text-sm text-ink-soft max-w-xl">
            Browse our original, comprehensive classification system. Search or filter through 13
            high-level categories of seeds, crop protection, fertilizers, plant nutrition, tools,
            and services.
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative mt-8 max-w-2xl">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-soft" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search taxonomy... (e.g. Tomato, Fungicides, Bio Stimulants, Drip)"
            className="w-full h-12 pl-12 pr-10 rounded-full bg-surface border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-soft hover:text-ink"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Search Results Dropdown */}
        <AnimatePresence>
          {searchQuery && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute left-0 right-0 mt-2 bg-card border border-border rounded-2xl shadow-lift z-20 max-h-[300px] overflow-y-auto p-2"
            >
              {searchMatches.length === 0 ? (
                <div className="p-4 text-center text-sm text-ink-soft">
                  No matching categories, subcategories or items found.
                </div>
              ) : (
                <div className="space-y-1">
                  <div className="text-[0.65rem] font-semibold text-ink-soft uppercase px-3 py-1.5 tracking-wider border-b border-border mb-1">
                    Matching Nodes
                  </div>
                  {searchMatches.map((match, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSearchResultClick(match.categorySlug)}
                      className="w-full text-left px-3 py-2 rounded-xl text-sm hover:bg-surface flex items-center justify-between group transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <Tag className="h-3.5 w-3.5 text-primary opacity-60 group-hover:opacity-100" />
                        <div>
                          {match.type === "leaf" && (
                            <span className="font-semibold text-ink">{match.leafName}</span>
                          )}
                          {match.type === "subcategory" && (
                            <span className="font-semibold text-ink">{match.subcategoryName}</span>
                          )}
                          {match.type === "category" && (
                            <span className="font-semibold text-ink">{match.categoryName}</span>
                          )}
                          <span className="text-xs text-ink-soft ml-2">({match.matchText})</span>
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-ink-soft group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Main Grid Layout for Explorer */}
      <div className="mt-8 grid gap-8 lg:grid-cols-[300px_1fr]">
        {/* DESKTOP SIDEBAR TABS */}
        <aside className="hidden lg:block space-y-2 max-h-[70vh] overflow-y-auto pr-2">
          <div className="text-xs font-semibold text-ink mb-4 uppercase tracking-wider">
            Categories ({categories.length})
          </div>
          <div className="space-y-1">
            {categories.map((c) => {
              const IconComp = categoryIcons[c.slug] || HelpCircle;
              const isActive = activeTab === c.slug;
              const accentClasses =
                categoryAccents[c.slug] || "border-l-primary text-primary bg-primary/5";

              return (
                <button
                  key={c.slug}
                  onClick={() => setActiveTab(c.slug)}
                  className={`w-full text-left px-4 py-3 rounded-xl border-l-4 transition-all duration-200 flex items-center justify-between group ${
                    isActive
                      ? `${accentClasses} font-medium border-l-4 shadow-soft`
                      : "border-l-transparent text-ink-soft hover:text-ink hover:bg-surface"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <IconComp
                      className={`h-5 w-5 transition-transform group-hover:scale-105 ${isActive ? "opacity-100" : "opacity-60 group-hover:opacity-100"}`}
                    />
                    <div>
                      <div className="text-sm leading-snug">{c.name}</div>
                      <div className="text-[0.65rem] text-ink-soft line-clamp-1 mt-0.5 font-normal">
                        {c.tagline}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono tabular-nums opacity-60 group-hover:opacity-100">
                    {c.count}
                  </span>
                </button>
              );
            })}
          </div>
        </aside>

        {/* DESKTOP DETAIL PANEL */}
        <div className="hidden lg:block min-h-[500px]">
          <div className="space-y-6">
            {/* Category Card Header Banner */}
            <div className="relative h-48 rounded-3xl overflow-hidden shadow-soft">
              <img
                src={selectedCategory.image}
                alt={selectedCategory.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <div className="flex items-center gap-2">
                  {(() => {
                    const IconComp = categoryIcons[selectedCategory.slug] || HelpCircle;
                    return <IconComp className="h-6 w-6 text-accent" />;
                  })()}
                  <span className="text-xs uppercase tracking-widest font-semibold text-accent">
                    Category Banner
                  </span>
                </div>
                <h2 className="text-display text-2xl sm:text-3xl mt-1 text-white">
                  {selectedCategory.name}
                </h2>
                <p className="text-sm text-white/80 mt-1 max-w-xl">{selectedCategory.tagline}</p>
              </div>
              <div className="absolute top-6 right-6 bg-white/20 backdrop-blur text-white text-xs px-3 py-1.5 rounded-full font-medium">
                {selectedCategory.count.toLocaleString("en-IN")} Products available
              </div>
            </div>

            {/* Subcategories list */}
            <div className="grid gap-6 md:grid-cols-2">
              {selectedCategory.subcategories.map((sub) => (
                <div
                  key={sub.slug}
                  className="surface-card p-6 flex flex-col justify-between hover:border-primary/30 transition-all duration-300 group hover:shadow-soft"
                >
                  <div>
                    <h3 className="text-display text-lg text-ink font-semibold group-hover:text-primary transition-colors flex items-center justify-between">
                      {sub.name}
                      <span className="h-2 w-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>

                    {/* Leaf Items */}
                    {sub.items && sub.items.length > 0 ? (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {sub.items.map((item, idx) => (
                          <span
                            key={idx}
                            className="bg-surface text-ink-soft text-xs px-2.5 py-1 rounded-full border border-border hover:bg-primary/5 hover:text-primary transition-colors cursor-default"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-xs text-ink-soft mt-3 italic">
                        Browse all commercial grades of {sub.name.toLowerCase()} in shop.
                      </p>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs font-semibold text-primary">
                    <span>Explore subcategory</span>
                    <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA for Category */}
            <div className="rounded-2xl bg-surface/50 border border-border p-6 flex items-center justify-between">
              <div>
                <div className="font-semibold text-ink">Ready to browse products?</div>
                <div className="text-xs text-ink-soft mt-0.5">
                  See the complete listing of {selectedCategory.name.toLowerCase()} at wholesale and
                  retail prices.
                </div>
              </div>
              <Link
                to="/products"
                search={{ category: selectedCategory.slug }}
                className="inline-flex h-10 items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-5 rounded-full hover:opacity-95 transition-opacity shadow-soft"
              >
                Go to Shop
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* MOBILE ACCORDION EXPLORER */}
        <div className="block lg:hidden mt-4 space-y-3">
          {categories.map((c) => {
            const IconComp = categoryIcons[c.slug] || HelpCircle;
            const isExpanded = mobileExpandedCat === c.slug;

            return (
              <div
                key={c.slug}
                className="rounded-2xl border border-border overflow-hidden bg-card"
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => setMobileExpandedCat(isExpanded ? null : c.slug)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-3 bg-surface/30 hover:bg-surface/60 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <IconComp className="h-5 w-5 text-primary opacity-80" />
                    <div>
                      <div className="font-semibold text-sm text-ink">{c.name}</div>
                      <div className="text-[0.65rem] text-ink-soft leading-relaxed mt-0.5">
                        {c.tagline}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono tabular-nums opacity-60 bg-surface px-2 py-0.5 rounded-full">
                      {c.count}
                    </span>
                    <ChevronRight
                      className={`h-4 w-4 text-ink-soft transition-transform ${isExpanded ? "rotate-90" : ""}`}
                    />
                  </div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden border-t border-border bg-card"
                    >
                      <div className="p-4 space-y-4">
                        {/* Mobile Category Image */}
                        <div className="relative h-28 rounded-xl overflow-hidden">
                          <img
                            src={c.image}
                            alt={c.name}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                          <Link
                            to="/products"
                            search={{ category: c.slug }}
                            className="absolute bottom-3 right-3 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5"
                          >
                            Shop Category <ArrowRight className="h-3 w-3" />
                          </Link>
                        </div>

                        {/* Subcategories list */}
                        <div className="space-y-3">
                          {c.subcategories.map((sub) => (
                            <div
                              key={sub.slug}
                              className="rounded-xl border border-border bg-surface/20 p-3.5"
                            >
                              <h4 className="text-sm font-semibold text-ink">{sub.name}</h4>

                              {/* Leaf items list */}
                              {sub.items && sub.items.length > 0 ? (
                                <div className="mt-2.5 flex flex-wrap gap-1">
                                  {sub.items.map((item, idx) => (
                                    <span
                                      key={idx}
                                      className="bg-surface text-[0.7rem] text-ink-soft px-2 py-0.5 rounded border border-border"
                                    >
                                      {item}
                                    </span>
                                  ))}
                                </div>
                              ) : (
                                <p className="text-[0.65rem] text-ink-soft mt-1 italic">
                                  Browse options in shop.
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
