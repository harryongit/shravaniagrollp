import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import { useEffect } from "react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CartDrawer } from "@/components/site/CartDrawer";
import { CartProvider } from "@/lib/cart-store";

function NotFoundComponent() {
  return (
    <div className="min-h-[70vh] grid place-items-center px-4">
      <div className="max-w-md text-center">
        <div className="text-eyebrow text-primary">404</div>
        <h1 className="mt-3 text-display text-3xl">This field is fallow.</h1>
        <p className="mt-3 text-sm text-ink-soft">
          The page you were looking for isn't here. It may have been retired or moved to a new
          season.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex h-10 items-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {}, [error]);
  return (
    <div className="min-h-[70vh] grid place-items-center px-4">
      <div className="max-w-md text-center">
        <div className="text-eyebrow text-clay">Something went wrong</div>
        <h1 className="mt-3 text-display text-2xl">This page didn't load.</h1>
        <p className="mt-2 text-sm text-ink-soft">
          Try again in a moment, or head back to the storefront.
        </p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex h-10 items-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex h-10 items-center rounded-full border border-border px-5 text-sm font-medium"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
        <CartDrawer />
      </CartProvider>
    </QueryClientProvider>
  );
}
