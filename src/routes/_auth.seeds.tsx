import { createFileRoute } from "@tanstack/react-router";
import { Wheat, ShoppingCart, Filter } from "lucide-react";
import { formatINR } from "@/lib/catalog";

export const Route = createFileRoute("/_auth/seeds")({
  component: Seeds,
});

function Seeds() {
  const products = [
    { name: "Hybrid Cotton Seeds (BG-II)", price: 850, seller: "Mahyco", rating: 4.8 },
    { name: "Soybean Seeds (JS 9560)", price: 2100, seller: "Nuziveedu", rating: 4.6 },
    { name: "Wheat Seeds (GW 322)", price: 1850, seller: "Rasi Seeds", rating: 4.5 },
    { name: "Sugarcane Setts (Co 86032)", price: 3200, seller: "Syngenta", rating: 4.7 },
    { name: "Hybrid Maize Seeds (900M)", price: 1480, seller: "Pioneer", rating: 4.4 },
  ];

  return (
    <div className="container-x py-12">
      <div className="surface-card p-8">
        <div className="flex items-center gap-3 mb-6">
          <Wheat className="h-6 w-6 text-primary" />
          <h1 className="text-display text-2xl text-ink">Seeds</h1>
        </div>
        <p className="text-ink-soft mb-6">Premium hybrid & open-pollinated seeds for higher yields.</p>
        <div className="flex items-center gap-2 mb-6">
          <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-border text-sm text-ink-soft hover:text-ink hover:border-ink/20 transition-colors">
            <Filter className="h-4 w-4" /> Filters
          </button>
          {["All", "Cotton", "Cereal", "Oilseed", "Vegetable"].map((f) => (
            <button key={f} className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              f === "All" ? "bg-primary text-white" : "bg-surface text-ink-soft hover:text-ink"
            }`}>{f}</button>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <div key={i} className="rounded-xl border border-border p-5 hover:bg-surface/50 transition-colors">
              <div className="aspect-[4/3] rounded-lg bg-surface mb-4 flex items-center justify-center text-ink-soft text-sm">
                {p.name.split("(")[0].trim()}
              </div>
              <h3 className="font-medium text-ink">{p.name}</h3>
              <div className="flex items-center justify-between mt-2">
                <span className="text-lg font-bold text-ink tabular-nums">{formatINR(p.price)}</span>
                <span className="text-xs text-ink-soft">{p.seller}</span>
              </div>
              <div className="flex items-center gap-1 mt-1 text-xs text-ink-soft">
                <span className="text-amber">{"★".repeat(Math.floor(p.rating))}</span> {p.rating}
              </div>
              <button className="mt-4 w-full flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 transition-colors">
                <ShoppingCart className="h-4 w-4" /> Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
