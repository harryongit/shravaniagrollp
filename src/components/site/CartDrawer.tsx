import { AnimatePresence, motion } from "motion/react";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-store";
import { formatINR } from "@/lib/catalog";

export function CartDrawer() {
  const cart = useCart();

  return (
    <AnimatePresence>
      {cart.isOpen && (
        <>
          <motion.div
            key="scrim"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-ink/40"
            onClick={cart.close}
          />
          <motion.aside
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="fixed inset-y-0 right-0 z-50 w-full sm:w-[440px] bg-background border-l border-border flex flex-col"
            role="dialog"
            aria-label="Shopping cart"
          >
            <header className="flex items-center justify-between p-5 border-b border-border">
              <div>
                <div className="text-eyebrow">Your cart</div>
                <div className="text-display text-lg text-ink mt-0.5">
                  {cart.count} item{cart.count === 1 ? "" : "s"}
                </div>
              </div>
              <button
                onClick={cart.close}
                aria-label="Close cart"
                className="grid h-9 w-9 place-items-center rounded-md hover:bg-surface"
              >
                <X className="h-5 w-5" />
              </button>
            </header>

            {cart.lines.length === 0 ? (
              <div className="flex-1 grid place-items-center p-8 text-center">
                <div>
                  <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-surface text-ink-soft">
                    <ShoppingBag className="h-7 w-7" />
                  </div>
                  <div className="text-display text-lg text-ink">Your cart is empty</div>
                  <p className="mt-2 text-sm text-ink-soft max-w-xs">
                    Add seed, fertilizer or machinery from any product page — everything you save
                    here waits for you.
                  </p>
                  <button
                    onClick={cart.close}
                    className="mt-6 inline-flex h-10 items-center rounded-full bg-primary text-primary-foreground px-5 text-sm font-medium hover:opacity-90"
                  >
                    Continue shopping
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto divide-y divide-border">
                  {cart.lines.map((l) => (
                    <div key={l.slug} className="p-5 flex gap-4">
                      <div className="h-16 w-16 rounded-xl bg-surface-2 shrink-0 grid place-items-center text-ink-soft text-xs uppercase tracking-widest">
                        {l.brand.split(" ")[0].slice(0, 3)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-medium text-ink truncate">{l.name}</div>
                        <div className="text-xs text-ink-soft mt-0.5">
                          {l.brand} · {l.packSize}
                        </div>
                        <div className="mt-2 flex items-center gap-3">
                          <div className="inline-flex items-center rounded-full border border-border">
                            <button
                              onClick={() => cart.setQty(l.slug, l.qty - 1)}
                              aria-label="Decrease"
                              className="h-7 w-7 grid place-items-center text-ink-soft hover:text-ink"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-7 text-center text-xs tabular-nums font-medium">
                              {l.qty}
                            </span>
                            <button
                              onClick={() => cart.setQty(l.slug, l.qty + 1)}
                              aria-label="Increase"
                              className="h-7 w-7 grid place-items-center text-ink-soft hover:text-ink"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <button
                            onClick={() => cart.remove(l.slug)}
                            className="text-xs text-ink-soft hover:text-clay"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="text-sm font-medium text-ink tabular-nums">
                        {formatINR(l.price * l.qty)}
                      </div>
                    </div>
                  ))}
                </div>

                <footer className="border-t border-border p-5 space-y-4 bg-surface/60">
                  <div className="flex justify-between text-sm">
                    <span className="text-ink-soft">Subtotal (incl. GST)</span>
                    <span className="font-medium text-ink tabular-nums">
                      {formatINR(cart.subtotal)}
                    </span>
                  </div>
                  <div className="rounded-xl bg-background border border-border px-3 py-2.5 text-xs text-ink-soft">
                    Shipping and dealer discount calculated at checkout.
                  </div>
                  <button className="w-full h-12 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
                    Checkout · {formatINR(cart.subtotal)}
                  </button>
                  <button
                    onClick={cart.close}
                    className="w-full text-sm text-ink-soft hover:text-ink"
                  >
                    Continue shopping
                  </button>
                </footer>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
