import { Link } from "@tanstack/react-router";
import { Heart, Star } from "lucide-react";
import { formatINR, type Product } from "@/lib/catalog";
import { useCart } from "@/lib/cart-store";

export function ProductCard({ product }: { product: Product }) {
  const cart = useCart();
  const off = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  return (
    <div className="group surface-card overflow-hidden flex flex-col transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]">
      <Link
        to="/products/$slug"
        params={{ slug: product.slug }}
        className="relative block aspect-[4/5] bg-surface-2 overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          loading="lazy"
        />
        {product.badges[0] && (
          <span className="absolute top-3 left-3 text-[0.65rem] uppercase tracking-widest font-semibold px-2 py-1 rounded-full bg-primary text-primary-foreground">
            {product.badges[0]}
          </span>
        )}
        {off > 0 && (
          <span className="absolute top-3 right-3 text-[0.7rem] font-semibold px-2 py-1 rounded-full bg-accent text-accent-foreground">
            {off}% off
          </span>
        )}
        <button
          aria-label="Save"
          className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-background/90 border border-border opacity-0 group-hover:opacity-100 transition-opacity hover:text-clay"
          onClick={(e) => e.preventDefault()}
        >
          <Heart className="h-4 w-4" />
        </button>
      </Link>

      <div className="p-4 flex flex-col flex-1">
        <div className="text-[0.68rem] uppercase tracking-widest text-ink-soft">
          {product.brand}
        </div>
        <Link
          to="/products/$slug"
          params={{ slug: product.slug }}
          className="mt-1 text-[0.95rem] font-medium text-ink leading-snug hover:text-primary line-clamp-2"
        >
          {product.name}
        </Link>
        <div className="mt-1.5 flex items-center gap-2 text-xs text-ink-soft">
          <span className="inline-flex items-center gap-1">
            <Star className="h-3 w-3 fill-amber text-amber" /> {product.rating}
          </span>
          <span className="opacity-40">·</span>
          <span>{product.packSize}</span>
        </div>

        <div className="mt-auto pt-4 flex items-end justify-between">
          <div>
            <div className="text-[0.68rem] text-ink-soft line-through tabular-nums">
              {formatINR(product.mrp)}
            </div>
            <div className="text-lg font-semibold text-ink tabular-nums leading-none">
              {formatINR(product.price)}
            </div>
          </div>
          <button
            onClick={() => cart.add(product)}
            className="h-9 px-4 rounded-full bg-ink text-background text-xs font-medium hover:bg-primary transition-colors"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
