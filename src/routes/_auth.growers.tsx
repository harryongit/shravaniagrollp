import { createFileRoute } from "@tanstack/react-router";
import { Users, MapPin, Star, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/_auth/growers")({
  component: Growers,
});

function Growers() {
  const growers = [
    { name: "Ramesh Patel", location: "Akola, MH", rating: 4.8, crops: "Cotton, Soybean", members: 45 },
    { name: "Suresh Deshmukh", location: "Latur, MH", rating: 4.5, crops: "Sugarcane, Wheat", members: 32 },
    { name: "Anita Kulkarni", location: "Pune, MH", rating: 4.9, crops: "Vegetables, Rice", members: 28 },
    { name: "Vijay Pawar", location: "Jalgaon, MH", rating: 4.6, crops: "Banana, Cotton", members: 38 },
  ];

  return (
    <div className="container-x py-12">
      <div className="surface-card p-8">
        <div className="flex items-center gap-3 mb-6">
          <Users className="h-6 w-6 text-primary" />
          <h1 className="text-display text-2xl text-ink">Growers Network</h1>
        </div>
        <p className="text-ink-soft mb-8">Connect with verified growers, share knowledge, and collaborate.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {growers.map((g, i) => (
            <div key={i} className="rounded-xl border border-border p-5 hover:bg-surface/50 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-medium text-ink">{g.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-ink-soft mt-1">
                    <MapPin className="h-3 w-3" /> {g.location}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm font-medium text-ink">
                  <Star className="h-4 w-4 text-amber fill-amber" /> {g.rating}
                </div>
              </div>
              <div className="flex gap-4 text-xs text-ink-soft mb-4">
                <span>{g.members} members</span>
                <span>{g.crops}</span>
              </div>
              <button className="flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                <MessageCircle className="h-4 w-4" /> Connect
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
