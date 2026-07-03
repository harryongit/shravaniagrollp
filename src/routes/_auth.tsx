import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/_auth")({
  beforeLoad: ({ context }) => {
    // We would ideally check context.auth here if we passed it in createRouter
    // For now, we'll handle redirect in a wrapper component
  },
  component: AuthGuard,
});

function AuthGuard() {
  const { user, loading } = useAuth();
  const navigate = Route.useNavigate();

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center p-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    navigate({ to: "/auth/login", replace: true });
    return null;
  }

  return <Outlet />;
}
