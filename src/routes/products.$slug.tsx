import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import {
  Star,
  Truck,
  ShieldCheck,
  RotateCcw,
  MessageCircle,
  Heart,
  Minus,
  Plus,
  Check,
} from "lucide-react";
import { findProduct, formatINR, products, type Product } from "@/lib/catalog";
import { ProductCard } from "@/components/site/ProductCard";
import { useCart } from "@/lib/cart-store";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }): { product: Product } => {
    const product = findProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData)
      return { meta: [{ title: "Product not found" }, { name: "robots", content: "noindex" }] };
    const { product } = loaderData;
    return {
      meta: [
        { title: `${product.name} — ${product.brand} · Shravani Agroproducts` },
        { name: "description", content: product.short },
        { property: "og:title", content: `${product.name} — Shravani` },
        { property: "og:description", content: product.short },
      ],
    };
  },
  component: PDP,
  notFoundComponent: () => (
    <div className="container-x py-24 text-center">
      <h1 className="text-display text-3xl">Product not found.</h1>
      <Link to="/products" className="mt-6 inline-flex text-primary hover:underline">
        Back to catalog
      </Link>
    </div>
  ),
});

function PDP() {
  const { product } = Route.useLoaderData() as { product: Product };
  const [tab, setTab] = useState<"specs" | "benefits" | "usage">("benefits");
  const [qty, setQty] = useState(1);
  const cart = useCart();
  const off = Math.round(((product.mrp - product.price) / product.mrp) * 100);
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 4);

  return (
    <div className="container-x pt-8 lg:pt-12">
      {/* Breadcrumb */}
      <nav className="text-xs text-ink-soft mb-6">
        <Link to="/" className="hover:text-ink">
          Home
        </Link>
        <span className="mx-2 opacity-40">/</span>
        <Link to="/products" className="hover:text-ink">
          Shop
        </Link>
        <span className="mx-2 opacity-40">/</span>
        <span className="text-ink truncate">{product.name}</span>
      </nav>

      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16">
        {/* Media */}
        <div>
          <div className="relative aspect-[4/5] rounded-3xl bg-surface-2 overflow-hidden">
            <img
              src={product.images[0]}
              alt={product.name}
              className="absolute inset-0 h-full w-full object-cover"
            />
            {product.badges[0] && (
              <span className="absolute top-4 left-4 text-[0.65rem] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full bg-primary text-primary-foreground">
                {product.badges[0]}
              </span>
            )}
          </div>
          <div className="mt-3 grid grid-cols-4 gap-3">
            {product.images.map((img, i) => (
              <button
                key={i}
                className={`aspect-square rounded-xl overflow-hidden border ${i === 0 ? "border-primary" : "border-border"}`}
              >
                <img
                  src={img}
                  alt={`${product.name} view ${i + 1}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div>
          <div className="text-eyebrow">
            {product.brand} · SKU {product.sku}
          </div>
          <h1 className="mt-2 text-display text-3xl sm:text-4xl leading-[1.05]">{product.name}</h1>
          <div className="mt-3 flex items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-1 font-medium text-ink">
              <Star className="h-4 w-4 fill-amber text-amber" /> {product.rating}
            </span>
            <span className="text-ink-soft">·</span>
            <a href="#reviews" className="text-ink-soft hover:text-primary">
              {product.reviews} reviews
            </a>
            <span className="text-ink-soft">·</span>
            <span
              className={`inline-flex items-center gap-1 text-xs ${product.stock === "in" ? "text-success" : product.stock === "low" ? "text-clay" : "text-destructive"}`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${product.stock === "in" ? "bg-success" : product.stock === "low" ? "bg-clay" : "bg-destructive"}`}
              />
              {product.stock === "in"
                ? "In stock"
                : product.stock === "low"
                  ? "Low stock"
                  : "Out of stock"}
            </span>
          </div>

          <p className="mt-5 text-ink-soft leading-relaxed">{product.short}</p>

          <div className="mt-6 flex items-end gap-3">
            <div className="text-display text-3xl font-semibold text-ink tabular-nums">
              {formatINR(product.price)}
            </div>
            <div className="text-sm text-ink-soft line-through tabular-nums">
              {formatINR(product.mrp)}
            </div>
            {off > 0 && (
              <div className="text-xs font-semibold px-2 py-1 rounded-full bg-accent text-accent-foreground">
                {off}% off
              </div>
            )}
          </div>
          <div className="text-xs text-ink-soft mt-1">
            Inclusive of all taxes · GST invoice issued
          </div>

          {/* Pack size chips */}
          <div className="mt-6">
            <div className="text-xs font-semibold text-ink uppercase tracking-wider mb-2">
              Pack size
            </div>
            <div className="flex gap-2">
              {[product.packSize, "2× " + product.packSize, "5× " + product.packSize].map(
                (p, i) => (
                  <button
                    key={p}
                    className={`rounded-full px-4 h-10 text-sm border ${i === 0 ? "border-primary bg-primary/10 text-primary font-medium" : "border-border text-ink-soft hover:text-ink"}`}
                  >
                    {p}
                  </button>
                ),
              )}
            </div>
          </div>

          {/* Qty + CTAs */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center h-12 rounded-full border border-border">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                aria-label="Decrease"
                className="h-12 w-12 grid place-items-center text-ink-soft hover:text-ink"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-10 text-center tabular-nums font-medium">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                aria-label="Increase"
                className="h-12 w-12 grid place-items-center text-ink-soft hover:text-ink"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              onClick={() => cart.add(product, qty)}
              className="flex-1 min-w-[180px] h-12 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90"
            >
              Add to cart · {formatINR(product.price * qty)}
            </button>
            <button
              aria-label="Save"
              className="grid h-12 w-12 place-items-center rounded-full border border-border hover:text-clay"
            >
              <Heart className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            <button className="text-sm inline-flex items-center gap-2 rounded-full border border-border h-10 px-4 hover:border-primary/40 hover:text-primary">
              <MessageCircle className="h-4 w-4" /> Bulk / dealer enquiry
            </button>
            <button className="text-sm inline-flex items-center gap-2 rounded-full border border-border h-10 px-4 hover:border-primary/40 hover:text-primary">
              WhatsApp us
            </button>
          </div>

          {/* Trust row */}
          <div className="mt-8 grid grid-cols-3 gap-3">
            {[
              { i: Truck, t: "Ships in 24–48h", s: "Pan-India logistics" },
              { i: ShieldCheck, t: "Genuine product", s: "Batch traceability" },
              { i: RotateCcw, t: "7-day return", s: "On unopened items" },
            ].map((f) => (
              <div key={f.t} className="rounded-2xl border border-border p-4">
                <f.i className="h-4 w-4 text-primary" />
                <div className="mt-2 text-xs font-semibold text-ink">{f.t}</div>
                <div className="text-[0.7rem] text-ink-soft mt-0.5">{f.s}</div>
              </div>
            ))}
          </div>

          {/* Pincode check */}
          <div className="mt-6 rounded-2xl bg-surface p-4 flex items-center gap-3">
            <div className="flex-1">
              <div className="text-xs font-semibold text-ink">Check delivery</div>
              <div className="text-xs text-ink-soft mt-0.5">
                Enter your PIN code for estimated delivery date
              </div>
            </div>
            <input
              placeholder="411001"
              maxLength={6}
              className="h-10 w-28 rounded-full bg-background border border-border px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <button className="h-10 px-4 rounded-full bg-ink text-background text-xs font-medium hover:bg-primary">
              Check
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-16 border-b border-border">
        <div className="flex gap-6">
          {(
            [
              { k: "benefits", l: "Benefits" },
              { k: "usage", l: "Usage & dosage" },
              { k: "specs", l: "Specifications" },
            ] as const
          ).map((t) => (
            <button
              key={t.k}
              onClick={() => setTab(t.k)}
              className={`pb-3 text-sm font-medium border-b-2 -mb-px transition-colors ${
                tab === t.k
                  ? "border-primary text-ink"
                  : "border-transparent text-ink-soft hover:text-ink"
              }`}
            >
              {t.l}
            </button>
          ))}
        </div>
      </div>

      <div className="py-8 grid lg:grid-cols-[2fr_1fr] gap-10">
        <div className="prose-agri max-w-none">
          {tab === "benefits" && (
            <ul className="space-y-3">
              {product.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-primary/10 text-primary shrink-0">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-ink">{b}</span>
                </li>
              ))}
            </ul>
          )}
          {tab === "usage" && (
            <div>
              <p className="text-ink leading-relaxed">{product.usage}</p>
              <div className="mt-6 rounded-xl border border-clay/30 bg-clay/5 p-4 text-sm text-ink">
                <strong className="text-clay">Safety:</strong> Always wear recommended personal
                protective equipment. Do not spray during high wind. Read the label before use.
              </div>
            </div>
          )}
          {tab === "specs" && (
            <dl className="grid sm:grid-cols-2 gap-x-8">
              {Object.entries(product.specs).map(([k, v]) => (
                <div key={k} className="py-3 border-b border-border flex justify-between gap-4">
                  <dt className="text-sm text-ink-soft">{k}</dt>
                  <dd className="text-sm font-medium text-ink text-right">{v}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
        <aside className="surface-card p-6 h-fit">
          <div className="text-eyebrow">About this product</div>
          <p className="mt-3 text-sm text-ink-soft leading-relaxed">{product.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {product.badges.map((b) => (
              <span
                key={b}
                className="text-[0.7rem] font-medium px-2.5 py-1 rounded-full bg-surface text-ink border border-border"
              >
                {b}
              </span>
            ))}
          </div>
        </aside>
      </div>

      {/* Related */}
      <section className="mt-16">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-display text-2xl sm:text-3xl">You may also like</h2>
          <Link to="/products" className="text-sm text-primary hover:underline">
            See catalog →
          </Link>
        </div>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
          {related.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
