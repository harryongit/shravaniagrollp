import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Product } from "./catalog";

export type CartLine = {
  slug: string;
  name: string;
  brand: string;
  packSize: string;
  price: number;
  qty: number;
};

type CartState = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  isOpen: boolean;
  add: (p: Product, qty?: number) => void;
  remove: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clear: () => void;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

const CartCtx = createContext<CartState | null>(null);
const KEY = "shravani.cart.v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setLines(JSON.parse(raw));
    } catch (e) {
      console.warn("Failed to load cart from localStorage", e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(lines));
    } catch (e) {
      console.warn("Failed to save cart to localStorage", e);
    }
  }, [lines]);

  const value = useMemo<CartState>(
    () => ({
      lines,
      count: lines.reduce((n, l) => n + l.qty, 0),
      subtotal: lines.reduce((n, l) => n + l.qty * l.price, 0),
      isOpen,
      add: (p, qty = 1) => {
        setLines((prev) => {
          const i = prev.findIndex((l) => l.slug === p.slug);
          if (i >= 0) {
            const copy = [...prev];
            copy[i] = { ...copy[i], qty: copy[i].qty + qty };
            return copy;
          }
          return [
            ...prev,
            {
              slug: p.slug,
              name: p.name,
              brand: p.brand,
              packSize: p.packSize,
              price: p.price,
              qty,
            },
          ];
        });
        setOpen(true);
      },
      remove: (slug) => setLines((prev) => prev.filter((l) => l.slug !== slug)),
      setQty: (slug, qty) =>
        setLines((prev) =>
          prev.map((l) => (l.slug === slug ? { ...l, qty: Math.max(1, qty) } : l)),
        ),
      clear: () => setLines([]),
      open: () => setOpen(true),
      close: () => setOpen(false),
      toggle: () => setOpen((v) => !v),
    }),
    [lines, isOpen],
  );

  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
}

export function useCart() {
  const c = useContext(CartCtx);
  if (!c) throw new Error("useCart outside CartProvider");
  return c;
}
