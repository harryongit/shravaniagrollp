import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/auth/register")({
  component: Register,
});

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      setError(error.message);
    } else {
      // In a real app, prompt to check email for confirmation link
      navigate({ to: "/" });
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="mt-6 text-display text-3xl font-bold tracking-tight text-ink">
          Create an account
        </h2>
        <p className="mt-2 text-sm text-ink-soft">Join the Shravani Agroproducts network</p>
      </div>

      <form className="mt-8 space-y-6" onSubmit={handleRegister}>
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

        {error && <div className="text-sm text-destructive font-medium">{error}</div>}

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </Button>

        <div className="text-center text-sm">
          <span className="text-ink-soft">Already have an account? </span>
          <Link to="/auth/login" className="font-medium text-primary hover:underline">
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
}
