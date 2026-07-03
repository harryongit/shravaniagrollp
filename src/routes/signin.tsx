import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/signin")({
  component: AuthLayout,
});

function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 surface-card p-8">
        <Outlet />
      </div>
    </div>
  );
}
