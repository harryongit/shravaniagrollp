import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";
import { useUserStore } from "@/lib/user-store";
import { Clock } from "lucide-react";

export const Route = createFileRoute("/_auth")({
  component: AuthGuard,
});

function AuthGuard() {
  const { currentUser, signOutUser } = useUserStore();
  const navigate = useNavigate();

  if (!currentUser) {
    navigate({ to: "/auth/login", replace: true });
    return null;
  }

  return (
    <div>
      {currentUser.status === "pending" && (
        <div className="bg-amber/10 border-b border-amber/20 px-4 py-3">
          <div className="container-x flex items-center gap-3 text-sm text-amber-foreground">
            <Clock className="h-4 w-4 flex-shrink-0" />
            <span>Your account is pending admin verification. Some features will be available once approved.</span>
          </div>
        </div>
      )}
      <Outlet />
    </div>
  );
}
