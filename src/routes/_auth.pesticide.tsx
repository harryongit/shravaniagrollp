import { createFileRoute } from "@tanstack/react-router";
import { Bug, ShoppingCart, Filter } from "lucide-react";
import { formatINR } from "@/lib/catalog";

export const Route = createFileRoute("/_auth/pesticide")({
  component: Pesticide,
});

function Pesticide() {
  const products = [
    { name: "Imidacloprid 17.8% SL (100ml)", price: 320, seller: "Bayer", rating: 4.6 },
    { name: "Cypermethrin 10% EC (250ml)", price: 180, seller: "UPL", rating: 4.4 },
    { name: "Glyphosate 41% SL (1L)", price: 450, seller: "Syngenta", rating: 4.7 },
    { name: "Carbendazim 50% WP (250g)", price: 210, seller: "BASF", rating: 4.3 },
    { name: "Chlorpyrifos 20% EC (500ml)", price: 390, seller: "Dhanuka", rating: 4.5 },
  ];

  return (
    <div className="container-x py-12">
      <div className="surface-card p-8">
        <div className="flex items-center gap-3 mb-6">
          <Bug className="h-6 w-6 text-primary" />
          <h1 className="text-display text-2xl text-ink">Pesticides</h1>
        </div>
        <p className="text-ink-soft mb-6">Effective crop protection solutions for healthier yields.</p>
        <div className="flex items-center gap-2 mb-6">
          <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-border text-sm text-ink-soft hover:text-ink hover:border-ink/20 transition-colors">
            <Filter className="h-4 w-4" /> Filters
          </button>
          {["All", "Insecticides", "Herbicides", "Fungicides"].map((f) => (
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
