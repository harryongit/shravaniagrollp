import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useUserStore } from "@/lib/user-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Clock, AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/auth/login")({
  component: Login,
});

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pendingVerification, setPendingVerification] = useState(false);
  const { signInUser } = useUserStore();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setPendingVerification(false);

    const result = signInUser(email, password);
    if (!result.success) {
      setError(result.error || "Sign in failed");
      if (result.error?.includes("pending")) {
        setPendingVerification(true);
      }
    } else {
      navigate({ to: "/dashboard" });
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="mt-6 text-display text-3xl font-bold tracking-tight text-ink">
          Welcome back
        </h2>
        <p className="mt-2 text-sm text-ink-soft">Sign in to your account</p>
      </div>

      <form className="mt-8 space-y-6" onSubmit={handleLogin}>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="farmer@example.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        {error && (
          <div className={`text-sm font-medium px-3 py-2 rounded-lg flex items-start gap-2 ${
            pendingVerification
              ? "text-amber bg-amber/10"
              : "text-destructive bg-destructive/10"
          }`}>
            {pendingVerification ? (
              <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
            ) : (
              <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
            )}
            <span>{error}</span>
          </div>
        )}

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Signing in..." : "Sign in"}
        </Button>

        <div className="text-center text-sm">
          <span className="text-ink-soft">Don't have an account? </span>
          <Link to="/auth/register" className="font-medium text-primary hover:underline">
            Register here
          </Link>
        </div>
      </form>
    </div>
  );
}
