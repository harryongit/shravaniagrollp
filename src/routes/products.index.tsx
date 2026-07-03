import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { categories, products } from "@/lib/catalog";
import { ProductCard } from "@/components/site/ProductCard";
import { z } from "zod";

const productSearchSchema = z.object({
  category: z.string().optional().catch("all"),
});

export const Route = createFileRoute("/products/")({
  validateSearch: (search) => productSearchSchema.parse(search),
  head: () => ({
    meta: [
      { title: "Shop all agricultural inputs — Shravani Agroproducts" },
      {
        name: "description",
        content:
          "Browse seeds, crop protection, plant nutrition, irrigation, machinery, protected cultivation and livestock inputs from Shravani Agroproducts.",
      },
    ],
  }),
  component: Catalog,
});

function Catalog() {
  const navigate = Route.useNavigate();
  const { category: cat = "all" } = Route.useSearch();
  const setCat = (newCat: string) => {
    navigate({
      search: (prev: { category?: string }) => ({
        ...prev,
        category: newCat === "all" ? undefined : newCat,
      }),
    });
  };
  const [sort, setSort] = useState<string>("relevance");

  let list = cat === "all" ? products : products.filter((p) => p.category === cat);
  if (sort === "price-low") list = [...list].sort((a, b) => a.price - b.price);
  if (sort === "price-high") list = [...list].sort((a, b) => b.price - a.price);
  if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);

  return (
    <div className="container-x pt-8 lg:pt-12">
      {/* Breadcrumb */}
      <nav className="text-xs text-ink-soft mb-4">
        <Link to="/" className="hover:text-ink">
          Home
        </Link>
        <span className="mx-2 opacity-40">/</span>
        <span className="text-ink">All products</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-8 border-b border-border">
        <div>
          <div className="text-eyebrow">Catalog</div>
          <h1 className="mt-2 text-display text-3xl sm:text-4xl">
            {cat === "all"
              ? "All agricultural inputs"
              : categories.find((c) => c.slug === cat)?.name}
          </h1>
          <p className="mt-2 text-sm text-ink-soft">
            {list.length} product{list.length === 1 ? "" : "s"} · GST-inclusive pricing · Ships
            pan-India
          </p>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-xs text-ink-soft">Sort</label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="h-10 rounded-full bg-surface border border-border px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            <option value="relevance">Relevance</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
            <option value="rating">Top rated</option>
          </select>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[240px_1fr]">
        {/* Filters */}
        <aside className="space-y-6">
          <div className="flex items-center gap-2 text-eyebrow">
            <SlidersHorizontal className="h-3.5 w-3.5" /> Filters
          </div>
          <div>
            <div className="text-xs font-semibold text-ink mb-3 uppercase tracking-wider">
              Category
            </div>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={() => setCat("all")}
                  className={`flex w-full items-center justify-between text-sm px-2 py-1.5 rounded-md ${cat === "all" ? "bg-primary/10 text-primary font-medium" : "text-ink-soft hover:text-ink"}`}
                >
                  <span>All</span>
                  <span className="tabular-nums text-xs opacity-70">{products.length}</span>
                </button>
              </li>
              {categories.map((c) => {
                const count = products.filter((p) => p.category === c.slug).length;
                return (
                  <li key={c.slug}>
                    <button
                      onClick={() => setCat(c.slug)}
                      className={`flex w-full items-center justify-between text-sm px-2 py-1.5 rounded-md ${cat === c.slug ? "bg-primary/10 text-primary font-medium" : "text-ink-soft hover:text-ink"}`}
                    >
                      <span className="text-left">{c.name}</span>
                      <span className="tabular-nums text-xs opacity-70">{count}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold text-ink mb-3 uppercase tracking-wider">
              Availability
            </div>
            <label className="flex items-center gap-2 text-sm text-ink-soft">
              <input type="checkbox" className="accent-primary" /> In stock only
            </label>
          </div>
          <div>
            <div className="text-xs font-semibold text-ink mb-3 uppercase tracking-wider">
              Rating
            </div>
            <label className="flex items-center gap-2 text-sm text-ink-soft">
              <input type="checkbox" className="accent-primary" /> 4 stars & above
            </label>
          </div>
        </aside>

        {/* Grid */}
        <div>
          {list.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border p-12 text-center">
              <div className="text-display text-lg">No products match those filters.</div>
              <button
                onClick={() => setCat("all")}
                className="mt-3 text-sm text-primary hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
              {list.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
