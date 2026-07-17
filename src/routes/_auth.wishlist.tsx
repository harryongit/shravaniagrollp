import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart-store";
import { products, formatINR } from "@/lib/catalog";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_auth/wishlist")({
  component: Wishlist,
});

// Demo: first 4 products are "wishlisted"
const wishlistItems = products.slice(0, 4);

function Wishlist() {
  const cart = useCart();

  return (
    <div className="container-x py-8 lg:py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Heart className="h-7 w-7 text-primary" />
          <h1 className="text-display text-3xl text-ink">My Wishlist</h1>
          <span className="text-ink-soft text-sm">({wishlistItems.length} items)</span>
        </div>

        {wishlistItems.length === 0 ? (
          <div className="surface-card p-16 text-center">
            <Heart className="h-12 w-12 text-ink-soft mx-auto mb-4 opacity-30" />
            <h2 className="text-display text-xl text-ink">Your wishlist is empty</h2>
            <p className="text-ink-soft mt-2">
              Save products you love so you can find them easily later.
            </p>
            <Link to="/products" className="mt-6 inline-block">
              <Button>Start Shopping</Button>
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {wishlistItems.map((p) => (
              <div key={p.slug} className="surface-card overflow-hidden group">
                <div className="relative aspect-square bg-surface overflow-hidden">
                  <div className="h-full w-full flex items-center justify-center text-primary/30 text-4xl font-bold group-hover:scale-105 transition-transform duration-500">
                    {p.name[0]}
                  </div>
                  <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm grid place-items-center text-destructive hover:bg-background transition-colors">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="p-4">
                  <div className="text-xs text-ink-soft mb-1">{p.brand}</div>
                  <Link
                    to={`/products/${p.slug}` as string}
                    className="font-medium text-ink text-sm line-clamp-2 hover:text-primary transition-colors"
                  >
                    {p.name}
                  </Link>
                  <div className="mt-3 flex items-center justify-between gap-2">
                    <span className="font-bold text-ink">{formatINR(p.price)}</span>
                    <Button size="sm" className="gap-1.5 text-xs" onClick={() => cart.add(p)}>
                      <ShoppingCart className="h-3.5 w-3.5" /> Add
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
