import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/signin")({
  loader: () => {
    throw redirect({ to: "/auth/login" });
  },
  component: RedirectPage,
});

function RedirectPage() {
  return null;
}
