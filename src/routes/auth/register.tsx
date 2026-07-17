import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useUserStore } from "@/lib/user-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock } from "lucide-react";

export const Route = createFileRoute("/auth/register")({
  component: Register,
});

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState<"farmer" | "dealer">("farmer");
  const [farmName, setFarmName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const { registerUser, setCurrentUser } = useUserStore();
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const result = registerUser({
      email,
      name,
      phone,
      password,
      role,
      farmName: farmName || undefined,
      city: city || undefined,
      state: state || undefined,
    });

    if (result.success && result.user) {
      setCurrentUser(result.user);
      setSuccess(true);
    } else {
      setError(result.error || "Registration failed");
    }
    setLoading(false);
  };

  if (success) {
    return (
      <div className="space-y-6 text-center">
        <div className="mx-auto h-16 w-16 rounded-full bg-amber/10 flex items-center justify-center">
          <Clock className="h-8 w-8 text-amber" />
        </div>
        <div>
          <h2 className="text-display text-2xl font-bold text-ink">Account created!</h2>
          <p className="mt-3 text-sm text-ink-soft leading-relaxed">
            You are now logged in. Your account is pending admin verification — you'll have full access once approved.
          </p>
        </div>
        <div className="bg-amber/5 border border-amber/20 rounded-xl p-4 text-left">
          <div className="flex items-start gap-2">
            <Clock className="h-4 w-4 text-amber mt-0.5 flex-shrink-0" />
            <div className="text-xs text-ink-soft">
              <strong className="text-ink">What happens next?</strong>
              <ul className="mt-1 space-y-1 list-disc list-inside">
                <li>An administrator will review your registration</li>
                <li>You'll receive an email once verified</li>
                <li>You can browse the store while you wait</li>
                <li>This usually takes 24-48 hours</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <Button className="w-full" onClick={() => navigate({ to: "/dashboard" })}>
            Go to My Dashboard
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-display text-3xl font-bold tracking-tight text-ink">
          Create an account
        </h2>
        <p className="mt-2 text-sm text-ink-soft">
          Join the Shravani Agroproducts network
        </p>
      </div>

      <form className="mt-8 space-y-5" onSubmit={handleRegister}>
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ramesh Kumar"
          />
        </div>

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
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 98765 43210"
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
            placeholder="Create a strong password"
          />
        </div>

        <div className="space-y-2">
          <Label>I am a</Label>
          <Select value={role} onValueChange={(v: "farmer" | "dealer") => setRole(v)}>
            <SelectTrigger>
              <SelectValue placeholder="Select your role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="farmer">Farmer / Grower</SelectItem>
              <SelectItem value="dealer">Dealer / Distributor</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="farmName">{role === "farmer" ? "Farm / Village Name" : "Business Name"}</Label>
          <Input
            id="farmName"
            type="text"
            value={farmName}
            onChange={(e) => setFarmName(e.target.value)}
            placeholder={role === "farmer" ? "Green Fields Farm" : "Patel Agri Solutions"}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Pune"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="state">State</Label>
            <Input
              id="state"
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="Maharashtra"
            />
          </div>
        </div>

        {error && (
          <div className="text-sm text-destructive font-medium bg-destructive/10 px-3 py-2 rounded-lg">
            {error}
          </div>
        )}

        <div className="bg-amber/5 border border-amber/20 rounded-xl p-3">
          <div className="flex items-start gap-2">
            <Clock className="h-4 w-4 text-amber mt-0.5 flex-shrink-0" />
            <p className="text-xs text-ink-soft">
              After registration, your account must be <strong>verified by an administrator</strong> before you can sign in.
            </p>
          </div>
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Submitting..." : "Create account"}
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
