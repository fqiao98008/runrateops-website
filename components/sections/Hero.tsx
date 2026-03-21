import { ArrowRight, CheckCircle } from "lucide-react";

const PROOF_POINTS = [
  "15+ years in Finance & GTM Operations",
  "Trusted by growth-stage companies",
  "AI-native methodology",
];

export default function Hero() {
  return (
    <section className="relative bg-[oklch(0.18_0.04_251)] text-white min-h-screen flex items-center">
      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.7_0.15_210) 1px, transparent 1px), linear-gradient(90deg, oklch(0.7_0.15_210) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Blue gradient glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: "oklch(0.55_0.22_250)" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 lg:px-24 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-3xl">
          {/* Tag line */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-white/80 mb-8">
            <span className="w-2 h-2 rounded-full bg-[oklch(0.7_0.15_210)] animate-pulse" />
            Finance & Operations Consulting
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Modernize Your{" "}
            <span className="text-[oklch(0.7_0.15_210)]">
              Finance & Operations
            </span>{" "}
            with AI
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8 max-w-2xl">
            We help growth-stage companies streamline back-office functions —
            from finance to GTM operations — by leveraging AI and modern
            software tools. Less manual work, faster decisions, scalable
            processes.
          </p>

          {/* Proof points */}
          <ul className="flex flex-col sm:flex-row flex-wrap gap-3 mb-10">
            {PROOF_POINTS.map((point) => (
              <li key={point} className="flex items-center gap-2 text-white/70 text-sm">
                <CheckCircle size={16} className="text-[oklch(0.7_0.15_210)] shrink-0" />
                {point}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[oklch(0.55_0.22_250)] hover:bg-[oklch(0.48_0.22_250)] text-white font-semibold px-7 py-4 rounded-xl text-base transition-colors"
            >
              Book a Free Consultation
              <ArrowRight size={18} />
            </a>
            <a
              href="#process"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-7 py-4 rounded-xl text-base transition-colors"
            >
              See How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
