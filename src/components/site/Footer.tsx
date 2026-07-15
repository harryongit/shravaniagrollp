import { Link } from "@tanstack/react-router";
import { Mark } from "./Logo";

const cols = [
  {
    title: "Shop",
    links: [
      "Seeds & Saplings",
      "Crop Protection",
      "Plant Nutrition",
      "Farm Machinery",
      "Irrigation",

      "Organic Farming",
    ],
  },
  {
    title: "Company",
    links: [
      "Our Story",
      "Leadership",
      "Infrastructure",
      "Careers",
      "Press",
      "Sustainability report",
    ],
  },
  {
    title: "Farmers & Dealers",
    links: [
      "Become a dealer",
      "Distributor portal",
      "Bulk & corporate",
      "Crop advisory",
      "Loyalty program",
      "Referral",
    ],
  },
  {
    title: "Support",
    links: [
      "Track order",
      "Shipping & delivery",
      "Returns & refunds",
      "Warranty claims",
      "FAQs",
      "Contact us",
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 bg-surface border-t border-border">
      <div className="container-x pt-16 pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2.5fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 text-primary">
              <Mark size={36} />
              <div>
                <div className="text-display text-lg font-semibold text-ink leading-none">
                  Shravani
                </div>
                <div className="text-[0.62rem] uppercase tracking-[0.22em] text-ink-soft mt-1">
                  Agroproducts LLP
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm text-ink-soft leading-relaxed max-w-sm">
              Inputs, machinery and knowledge for the working farm. From certified seed to the last
              drop of drip irrigation — assembled by agronomists, delivered to your gate.
            </p>
            <div className="mt-6 flex gap-2">
              {["EN", "हिं", "मरा"].map((l) => (
                <button
                  key={l}
                  className="text-xs px-2.5 py-1 rounded-full border border-border hover:border-primary/40 hover:text-primary text-ink-soft transition-colors"
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="text-eyebrow mb-4">{c.title}</h4>
                <ul className="space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l}>
                      <Link
                        to="/"
                        className="text-sm text-ink-soft hover:text-ink transition-colors"
                      >
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-eyebrow mb-4">Field Notes</h4>
            <p className="text-sm text-ink-soft leading-relaxed">
              A monthly note from our agronomy desk. Crop calendars, pest alerts, subsidy news.
            </p>
            <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="you@farm.in"
                className="flex-1 h-11 rounded-full bg-background hairline px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button className="h-11 px-5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90">
                Subscribe
              </button>
            </form>
            <label className="mt-3 flex items-start gap-2 text-xs text-ink-soft">
              <input type="checkbox" className="mt-0.5 accent-primary" />
              <span>Also send order updates on WhatsApp</span>
            </label>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs text-ink-soft">
          <div>
            © {new Date().getFullYear()} Shravani Agroproducts Enterprises LLP · Incorporated under
            the Limited Liability Partnership Act, 2008
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/">Privacy</Link>
            <Link to="/">Terms</Link>
            <Link to="/">Shipping</Link>
            <Link to="/">Returns</Link>
            <Link to="/">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
