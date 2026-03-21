import { Layers, Cpu, TrendingUp, Handshake } from "lucide-react";

const DIFFERENTIATORS = [
  {
    icon: Layers,
    title: "Deep Domain Expertise",
    description:
      "We're not generalist consultants who learned finance last quarter. Our team brings 15+ years of hands-on experience in finance operations, accounting, and GTM — we speak your language.",
  },
  {
    icon: Cpu,
    title: "AI-Native Approach",
    description:
      "AI isn't a buzzword for us — it's the lens through which we evaluate every process improvement opportunity. We know which tools deliver real ROI and which are just hype.",
  },
  {
    icon: TrendingUp,
    title: "Finance + GTM Crossover",
    description:
      "The intersection of back-office finance and go-to-market operations is rare expertise. We understand both sides of the house and design solutions that align them.",
  },
  {
    icon: Handshake,
    title: "Hands-On Delivery",
    description:
      "We don't disappear after delivering a slide deck. We stay through implementation, training, and adoption — until the improvement is real and measurable, not just on paper.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-[oklch(0.18_0.04_251)]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[oklch(0.7_0.15_210)] uppercase tracking-wider mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Sets Us Apart
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            There are many consultants. Here&apos;s why our clients keep coming
            back.
          </p>
        </div>

        {/* Differentiators grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DIFFERENTIATORS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[oklch(0.55_0.22_250)]/20 flex items-center justify-center mb-5">
                  <Icon size={22} className="text-[oklch(0.7_0.15_210)]" />
                </div>
                <h3 className="text-white font-semibold text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
