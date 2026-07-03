import { createFileRoute } from "@tanstack/react-router";
import { Leaf, Award, MapPin, Users } from "lucide-react";
import { motion } from "motion/react";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="bg-ink text-background pt-24 pb-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary via-ink to-ink"></div>
        <div className="container-x relative max-w-4xl text-center">
          <div className="text-eyebrow text-accent mb-6">Our Story</div>
          <h1 className="text-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            Rooted in heritage.
            <br />
            Driven by agronomy.
          </h1>
          <p className="mt-6 text-lg text-background/80 max-w-2xl mx-auto leading-relaxed">
            Shravani Agroproducts Enterprises LLP was founded to bridge the gap between world-class
            agricultural inputs and the working farmer. We don't just sell products; we assemble
            complete crop solutions.
          </p>
        </div>
      </section>

      {/* Stats/Values */}
      <section className="container-x -mt-16 relative z-10">
        <div className="surface-card p-8 sm:p-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Leaf, label: "Certified Inputs", desc: "Every product tested and verified." },
              { icon: Users, label: "84,000+ Farmers", desc: "Trusting us across 18 states." },
              {
                icon: MapPin,
                label: "Hyper-local",
                desc: "Inputs matched to local soil and weather.",
              },
              { icon: Award, label: "Expert Advisory", desc: "Backed by seasoned agronomists." },
            ].map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center sm:text-left"
              >
                <div className="mx-auto sm:mx-0 grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary mb-4">
                  <v.icon className="h-6 w-6" />
                </div>
                <div className="text-lg font-medium text-ink mb-2">{v.label}</div>
                <div className="text-sm text-ink-soft leading-relaxed">{v.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="container-x mt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-eyebrow">Infrastructure</div>
            <h2 className="mt-3 text-display text-3xl sm:text-4xl">Enterprise-scale fulfilment.</h2>
            <p className="mt-6 text-ink-soft leading-relaxed">
              With over 4 state-of-the-art warehouses and a dedicated cold-chain fleet for
              biologics, we ensure that every seed and nutrient reaches the farm with zero loss in
              efficacy.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Temperature-controlled storage for biostimulants.",
                "Automated sorting and batch-tracking.",
                "Direct API integration with major courier networks.",
                "Dedicated dealer distribution hubs.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="text-sm text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-square sm:aspect-video lg:aspect-square rounded-3xl overflow-hidden bg-surface">
            {/* Placeholder for warehouse image */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
              <span className="text-ink-soft text-sm">Warehouse Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
