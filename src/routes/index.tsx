import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight, Sparkles, Leaf, Droplets, Shield, Tractor } from "lucide-react";
import heroFields from "@/assets/hero-fields.jpg";
import handsSeedling from "@/assets/hands-seedling.jpg";
import seedsFlatlay from "@/assets/seeds-flatlay.jpg";
import irrigation from "@/assets/irrigation.jpg";
import farmerPortrait from "@/assets/farmer-portrait.jpg";
import { categories, crops, products, formatINR } from "@/lib/catalog";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/")({
  component: Home,
});

const catIcons: Record<string, typeof Leaf> = {
  seeds: Leaf,
  "crop-protection": Shield,
  fertilizers: Sparkles,
  "plant-growth": Leaf,
  "farm-machinery": Tractor,
  irrigation: Droplets,
};

function Home() {
  return (
    <div>
      {/* BENTO HERO */}
      <section className="container-x pt-8 lg:pt-12">
        <div className="grid gap-3 lg:grid-cols-12 lg:grid-rows-[auto_auto] lg:auto-rows-fr">
          {/* Hero tile */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 lg:row-span-2 relative overflow-hidden rounded-3xl bg-ink text-background min-h-[520px] lg:min-h-[640px]"
          >
            <img
              src={heroFields}
              alt="Aerial view of terraced Indian farmland at golden hour"
              width={1600}
              height={1200}
              className="absolute inset-0 h-full w-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-ink/85 via-ink/40 to-transparent" />
            <div className="relative h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12">
              <div className="flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.24em] text-background/80">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Kharif 2026 · now shipping
              </div>
              <div className="max-w-2xl">
                <h1 className="text-display text-[2.4rem] sm:text-5xl lg:text-[4rem] leading-[0.98] text-background">
                  Every input the season asks for,{" "}
                  <span className="text-accent">on one shelf.</span>
                </h1>
                <p className="mt-5 max-w-lg text-[0.98rem] text-background/80 leading-relaxed">
                  Shravani Agroproducts brings certified seed, crop protection, plant nutrition,
                  irrigation and machinery under a single, agronomist-curated marketplace — built
                  for farmers, dealers and enterprises across India.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    to="/products"
                    className="inline-flex h-12 items-center rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground hover:opacity-90 transition-opacity"
                  >
                    Shop the season
                    <ArrowUpRight className="ml-1.5 h-4 w-4" />
                  </Link>
                  <Link
                    to="/"
                    className="inline-flex h-12 items-center rounded-full border border-background/30 px-6 text-sm font-medium text-background hover:bg-background/10"
                  >
                    Become a dealer
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stat tile */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="lg:col-span-4 surface-card p-6 sm:p-8 flex flex-col justify-between min-h-[240px]"
          >
            <div className="text-eyebrow">Trusted by the field</div>
            <div className="mt-2 grid grid-cols-2 gap-6">
              {[
                { n: "84,000+", l: "Farmers served" },
                { n: "1,200+", l: "Dealer partners" },
                { n: "18", l: "States covered" },
                { n: "22 yrs", l: "In agri inputs" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-display text-2xl sm:text-3xl text-ink tabular-nums">
                    {s.n}
                  </div>
                  <div className="text-xs text-ink-soft mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Farmer story tile */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 relative overflow-hidden rounded-3xl min-h-[260px] group"
          >
            <img
              src={farmerPortrait}
              alt="Portrait of a mustard-field farmer at golden hour"
              width={1000}
              height={1200}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-6">
              <div className="text-eyebrow text-background/70">Farmer stories</div>
              <div className="mt-2 text-display text-xl text-background max-w-[16rem]">
                "The drip and biostimulant kit paid back in one crop."
              </div>
              <div className="mt-3 text-xs text-background/70">
                Rameshwar B. · Cotton · Vidarbha
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CATEGORY BENTO */}
      <section className="container-x mt-16 lg:mt-24">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-eyebrow">Shop by category</div>
            <h2 className="mt-2 text-display text-3xl sm:text-4xl">The full agronomy shelf.</h2>
          </div>
          <Link
            to="/products"
            className="hidden sm:inline text-sm font-medium text-primary hover:underline"
          >
            Browse all categories →
          </Link>
        </div>

        <div className="grid gap-3 md:grid-cols-6 md:grid-rows-2 md:auto-rows-fr">
          {/* Featured wide tile */}
          <Link
            to="/products"
            className="md:col-span-3 md:row-span-2 group relative overflow-hidden rounded-3xl bg-primary text-primary-foreground min-h-[320px] md:min-h-full"
          >
            <img
              src={seedsFlatlay}
              alt="Flat-lay of seed packets, terracotta pots and grain"
              width={1200}
              height={1200}
              className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-luminosity transition-transform duration-700 group-hover:scale-[1.04]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 to-primary/40" />
            <div className="relative h-full flex flex-col justify-between p-6 sm:p-8">
              <div className="flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.22em] opacity-80">
                <Leaf className="h-3.5 w-3.5" /> Seeds & Saplings
              </div>
              <div>
                <div className="text-display text-3xl sm:text-4xl leading-[1] max-w-[18ch]">
                  1,240+ varieties. Hybrids, heirlooms, organic-certified.
                </div>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium">
                  Explore seeds
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </div>
            </div>
          </Link>

          {/* Other categories — smaller tiles */}
          {categories.slice(1, 5).map((c, i) => {
            const Icon = catIcons[c.slug] ?? Leaf;
            const isAccent = i === 1;
            return (
              <Link
                key={c.slug}
                to="/products"
                className={`group relative overflow-hidden rounded-3xl p-5 sm:p-6 flex flex-col justify-between min-h-[160px] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] ${
                  isAccent ? "md:col-span-2" : "md:col-span-1"
                }`}
              >
                <img
                  src={c.image}
                  alt={c.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className={`absolute inset-0 ${isAccent ? "bg-accent/80" : "bg-ink/70"}`} />
                <div className="relative flex items-start justify-between">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/20">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-white/60 group-hover:text-white transition-colors" />
                </div>
                <div className="relative">
                  <div className={`text-display text-lg leading-tight text-white`}>{c.name}</div>
                  <div className="mt-1 text-xs tabular-nums text-white/70">
                    {c.count.toLocaleString("en-IN")} products
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* SHOP BY CROP */}
      <section className="container-x mt-20 lg:mt-28">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-8 items-center">
          <div>
            <div className="text-eyebrow">Shop by crop</div>
            <h2 className="mt-2 text-display text-3xl sm:text-4xl">
              Growing <span className="text-primary">what?</span>
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Pick a crop and we'll assemble the seed, nutrition, protection and irrigation that
              fits its season, soil and stage — curated by our agronomy desk.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {crops.map((c, i) => (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: i * 0.03 }}
              >
                <Link
                  to="/products"
                  className="block rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-colors group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-3">
                      <div className="text-display text-sm text-white leading-tight">{c.name}</div>
                      <div className="text-[0.65rem] text-white/70 mt-0.5">{c.season}</div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BESTSELLERS */}
      <section className="container-x mt-20 lg:mt-28">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-eyebrow">This month</div>
            <h2 className="mt-2 text-display text-3xl sm:text-4xl">Moving off the shelf.</h2>
          </div>
          <Link to="/products" className="text-sm font-medium text-primary hover:underline">
            See all →
          </Link>
        </div>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.slice(0, 4).map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* KNOWLEDGE + IRRIGATION SPLIT */}
      <section className="container-x mt-20 lg:mt-28">
        <div className="grid gap-3 md:grid-cols-5">
          <div className="md:col-span-3 rounded-3xl bg-surface p-8 sm:p-10 flex flex-col justify-between min-h-[360px] furrow-pattern">
            <div>
              <div className="text-eyebrow">Knowledge Centre</div>
              <h3 className="mt-3 text-display text-3xl sm:text-4xl max-w-lg leading-[1.05]">
                Answers from the agronomy desk, not from a forum thread.
              </h3>
              <p className="mt-4 text-ink-soft max-w-md leading-relaxed">
                Crop calendars, pest diagnosis, nutrient deficiency guides, mandi prices, subsidy
                schemes — written and reviewed by working agronomists.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-8">
              {[
                { t: "Cotton — Kharif 2026 playbook", k: "Crop Guide" },
                { t: "Diagnosing yellow-leaf mosaic in chilli", k: "Pest & Disease" },
                { t: "PM-KUSUM scheme, state-wise eligibility", k: "Schemes" },
                { t: "Onion mandi prices — weekly trend", k: "Market Prices" },
              ].map((a) => (
                <Link
                  key={a.t}
                  to="/"
                  className="rounded-xl bg-background border border-border p-4 hover:border-primary/40 group"
                >
                  <div className="text-[0.65rem] uppercase tracking-widest text-primary">{a.k}</div>
                  <div className="mt-1.5 text-sm font-medium text-ink leading-snug group-hover:text-primary">
                    {a.t}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 relative overflow-hidden rounded-3xl min-h-[360px] group">
            <img
              src={irrigation}
              alt="Drip irrigation running through a green crop field"
              width={1400}
              height={1000}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/85 via-primary/40 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-8">
              <div className="text-[0.7rem] uppercase tracking-[0.22em] text-primary-foreground/80">
                Design + Install
              </div>
              <div className="mt-2 text-display text-2xl sm:text-3xl text-primary-foreground max-w-[20ch] leading-[1.05]">
                Turnkey drip and sprinkler design for your plot.
              </div>
              <Link
                to="/"
                className="mt-5 inline-flex h-11 items-center rounded-full bg-primary-foreground text-primary px-5 text-sm font-medium w-fit hover:opacity-90"
              >
                Request a design →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DEALER CTA */}
      <section className="container-x mt-20 lg:mt-28">
        <div className="relative overflow-hidden rounded-3xl bg-ink text-background p-8 sm:p-12 lg:p-16">
          <img
            src={handsSeedling}
            alt="Hands cradling seedlings in dark soil"
            width={1200}
            height={1400}
            className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-40 hidden md:block"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-transparent md:to-ink/20" />
          <div className="relative max-w-xl">
            <div className="text-[0.7rem] uppercase tracking-[0.22em] text-accent">
              Dealer Program
            </div>
            <h3 className="mt-3 text-display text-3xl sm:text-4xl lg:text-5xl leading-[1.02]">
              Retail Shravani in your district.
            </h3>
            <p className="mt-4 text-background/70 leading-relaxed">
              Tier-based pricing, credit terms, protected territories, joint marketing budgets and a
              dedicated dealer success manager. Applications reviewed weekly.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/"
                className="inline-flex h-12 items-center rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground hover:opacity-90"
              >
                Apply to become a dealer
              </Link>
              <Link
                to="/"
                className="inline-flex h-12 items-center rounded-full border border-background/30 px-6 text-sm font-medium hover:bg-background/10"
              >
                Distributor track
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER row handled by footer; end spacing */}
      <div className="h-4" />
    </div>
  );
}
