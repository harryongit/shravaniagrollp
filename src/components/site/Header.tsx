import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Search, ShoppingBag, Heart, User, Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { useCart } from "@/lib/cart-store";
import { categories } from "@/lib/catalog";
import { useRouter } from "@tanstack/react-router";

const nav = [
  { label: "Shop", key: "shop" },

  { label: "Knowledge", key: "knowledge" },
  { label: "For Dealers", key: "dealers" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const cart = useCart();
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const q = formData.get("q")?.toString().trim();
    if (q) {
      router.navigate({ to: "/products", search: { q } });
      setMobileOpen(false);
    }
  };

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-primary text-primary-foreground text-[0.78rem]">
        <div className="container-x flex items-center justify-between py-2 gap-4">
          <p className="truncate">
            <span className="font-medium">Monsoon Ready →</span>{" "}
            <span className="opacity-80">
              Free freight on dealer orders above ₹25,000 · GST invoice on every order
            </span>
          </p>
          <div className="hidden md:flex items-center gap-4 opacity-90">
            <Link to="/track" className="hover:opacity-100">
              Track order
            </Link>
            <span className="opacity-40">·</span>
            <Link to="/contact" className="hover:opacity-100">
              Farmer helpline · 1800-180-1551
            </Link>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all ${scrolled ? "glass-header" : "bg-background border-b border-transparent"
          }`}
      >
        <div className="container-x flex items-center gap-6 py-3.5">
          <button
            className="lg:hidden -ml-1 grid h-9 w-9 place-items-center rounded-md text-ink hover:bg-surface"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          <Logo />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 ml-4">
            {nav.map((n) => (
              <button
                key={n.key}
                onMouseEnter={() => setOpenMenu(n.key)}
                onFocus={() => setOpenMenu(n.key)}
                onClick={() => setOpenMenu(openMenu === n.key ? null : n.key)}
                className={`px-3.5 py-2 rounded-md text-[0.92rem] font-medium inline-flex items-center gap-1 transition-colors ${openMenu === n.key
                  ? "bg-surface text-ink"
                  : "text-ink-soft hover:text-ink hover:bg-surface"
                  }`}
                aria-expanded={openMenu === n.key}
              >
                {n.label}
                <ChevronDown className="h-3.5 w-3.5 opacity-60" />
              </button>
            ))}
          </nav>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-xl mx-auto">
            <form onSubmit={handleSearch} className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-soft" />
              <input
                type="search"
                name="q"
                placeholder="Search here"
                className="w-full h-11 rounded-full bg-surface hairline pl-10 pr-4 text-sm placeholder:text-ink-soft focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40"
              />
              <kbd className="hidden xl:inline absolute right-3 top-1/2 -translate-y-1/2 text-[0.65rem] tracking-widest text-ink-soft border border-border rounded px-1.5 py-0.5">
                ⌘K
              </kbd>
            </form>
          </div>

          <div className="ml-auto flex items-center gap-1.5">
            <ThemeToggle />
            <Link
              to="/auth/dashboard"
              aria-label="Account"
              className="hidden sm:grid h-9 w-9 place-items-center rounded-full border border-border text-ink-soft hover:text-ink hover:bg-surface"
            >
              <User className="h-4 w-4" />
            </Link>
            <Link
              to="/auth/wishlist"
              aria-label="Wishlist"
              className="hidden sm:grid h-9 w-9 place-items-center rounded-full border border-border text-ink-soft hover:text-ink hover:bg-surface"
            >
              <Heart className="h-4 w-4" />
            </Link>
            <button
              onClick={cart.open}
              aria-label={`Cart (${cart.count} items)`}
              className="relative grid h-9 min-w-9 place-items-center rounded-full bg-primary text-primary-foreground hover:opacity-90 px-3 gap-2 inline-flex"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="text-[0.78rem] font-medium tabular-nums">{cart.count}</span>
            </button>
          </div>
        </div>

        {/* Mega menu panels */}
        {openMenu && (
          <div
            className="hidden lg:block absolute left-0 right-0 border-t border-border bg-background/95 backdrop-blur"
            onMouseLeave={() => setOpenMenu(null)}
          >
            <div className="container-x py-8">
              {openMenu === "shop" && (
                <div className="grid grid-cols-4 gap-8">
                  {categories.slice(0, 4).map((c) => (
                    <Link
                      key={c.slug}
                      to="/products"
                      search={{ category: c.slug }}
                      onClick={() => setOpenMenu(null)}
                      className="group"
                    >
                      <div className="text-eyebrow mb-2 group-hover:text-primary transition-colors">
                        {c.name}
                      </div>
                      <p className="text-sm text-ink-soft leading-relaxed">{c.tagline}</p>
                      <div className="mt-3 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        {c.count.toLocaleString("en-IN")} products →
                      </div>
                    </Link>
                  ))}
                  <div className="col-span-4 grid grid-cols-4 gap-8 pt-6 border-t border-border">
                    {categories.slice(4).map((c) => (
                      <Link
                        key={c.slug}
                        to="/products"
                        search={{ category: c.slug }}
                        onClick={() => setOpenMenu(null)}
                        className="group"
                      >
                        <div className="text-eyebrow mb-2 group-hover:text-primary transition-colors">
                          {c.name}
                        </div>
                        <p className="text-sm text-ink-soft leading-relaxed">{c.tagline}</p>
                      </Link>
                    ))}
                  </div>
                  <div className="col-span-4 flex items-center justify-between pt-6 border-t border-border mt-2">
                    <p className="text-xs text-ink-soft">
                      Looking for the complete agricultural input hierarchy and taxonomy?
                    </p>
                    <Link
                      to="/catalog"
                      onClick={() => setOpenMenu(null)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                    >
                      Open interactive Catalog Explorer
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              )}

              {openMenu === "knowledge" && (
                <div className="grid grid-cols-3 gap-8">
                  {[
                    {
                      t: "Crop Guides",
                      d: "Sowing-to-harvest playbooks for 40+ crops, with recommended inputs.",
                    },
                    {
                      t: "Pest & Disease",
                      d: "Identify by symptom or photo. Get integrated pest management protocols.",
                    },
                    {
                      t: "Nutrient Deficiency",
                      d: "Visual diagnosis with corrective foliar and soil treatments.",
                    },
                    {
                      t: "Schemes & Subsidies",
                      d: "Central and state-wise agricultural schemes, filtered by district.",
                    },
                    {
                      t: "Market Prices",
                      d: "Daily mandi prices for major commodities across 200+ APMCs.",
                    },
                    {
                      t: "Expert Articles",
                      d: "Long-form writing from agronomists, breeders and soil scientists.",
                    },
                  ].map((k) => (
                    <Link key={k.t} to="/knowledge" onClick={() => setOpenMenu(null)} className="group">
                      <div className="text-eyebrow mb-2 group-hover:text-primary transition-colors">
                        {k.t}
                      </div>
                      <p className="text-sm text-ink-soft leading-relaxed">{k.d}</p>
                    </Link>
                  ))}
                </div>
              )}
              {openMenu === "dealers" && (
                <div className="grid grid-cols-3 gap-6">
                  {[
                    {
                      t: "Become a Dealer",
                      d: "Tier pricing, credit terms, marketing support, protected territories.",
                    },
                    {
                      t: "Distributor Portal",
                      d: "Fulfilment SLAs, PO inbox, invoicing and performance scorecard.",
                    },
                    {
                      t: "Bulk & Corporate",
                      d: "Contract farming inputs, tenders, custom pack sizes.",
                    },
                  ].map((k) => (
                    <Link
                      key={k.t}
                      to="/dealer-registration"
                      onClick={() => setOpenMenu(null)}
                      className="rounded-2xl border border-border p-6 hover:border-primary/40 hover:bg-surface transition-colors"
                    >
                      <div className="text-display text-lg text-ink mb-2">{k.t}</div>
                      <p className="text-sm text-ink-soft leading-relaxed">{k.d}</p>
                      <div className="mt-4 text-sm font-medium text-primary">Apply →</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-[oklch(0_0_0/0.5)]" onClick={() => setMobileOpen(false)} />
          <div className="absolute inset-y-0 left-0 w-[86%] max-w-sm bg-background shadow-xl flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <Logo />
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="grid h-9 w-9 place-items-center rounded-md hover:bg-surface"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-soft" />
                <input
                  type="search"
                  name="q"
                  placeholder="Search products…"
                  className="w-full h-11 rounded-full bg-surface hairline pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </form>
            </div>
            <div className="px-4 py-3">
              <Link
                to="/catalog"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between p-4 rounded-2xl bg-primary text-primary-foreground hover:opacity-95 transition-opacity"
              >
                <div>
                  <div className="font-semibold text-sm">Catalog Explorer</div>
                  <div className="text-xs opacity-80 mt-0.5">Explore 13-category hierarchy</div>
                </div>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <nav className="flex-1 overflow-y-auto px-2 pb-6">
              {categories.map((c) => (
                <Link
                  key={c.slug}
                  to="/products"
                  search={{ category: c.slug }}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between px-4 py-3.5 rounded-lg hover:bg-surface"
                >
                  <div>
                    <div className="font-medium text-ink">{c.name}</div>
                    <div className="text-xs text-ink-soft mt-0.5">
                      {c.count.toLocaleString("en-IN")} products
                    </div>
                  </div>
                  <span className="text-ink-soft">→</span>
                </Link>
              ))}
              <div className="mt-6 border-t border-border pt-4 space-y-1">
                <Link
                  to="/knowledge"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 text-sm text-ink-soft hover:text-ink"
                >
                  Knowledge Centre
                </Link>
                <Link
                  to="/dealer-registration"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 text-sm text-ink-soft hover:text-ink"
                >
                  Become a dealer
                </Link>
                <Link
                  to="/auth/farmer"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 text-sm text-ink-soft hover:text-ink"
                >
                  Farmer advisory
                </Link>
                <Link
                  to="/about"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 text-sm text-ink-soft hover:text-ink"
                >
                  About Shravani Agroproducts Enterprises LLP
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
