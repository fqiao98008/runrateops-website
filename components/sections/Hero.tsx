"use client";

import { ArrowRight, CheckCircle } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/runrateoperations/30-min-discovery-call";

const PROOF_POINTS = [
  "15+ years in Finance & Operations",
  "Trusted by growth-stage companies",
  "AI-native methodology",
];

function openCalendly() {
  // @ts-expect-error Calendly is loaded via external script
  if (typeof window !== "undefined" && window.Calendly) {
    // @ts-expect-error Calendly is loaded via external script
    window.Calendly.initPopupWidget({ url: CALENDLY_URL });
  }
}

export default function Hero() {
  return (
    <section className="relative bg-[oklch(0.18_0.04_251)] text-white flex items-center">
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

      {/* Blue gradient glow — centered */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-10 blur-3xl"
        style={{ background: "oklch(0.55_0.22_250)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 pt-32 pb-24 md:pt-40 md:pb-32 w-full text-center">
        {/* Tag line */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-white/80 mb-8">
          <span className="w-2 h-2 rounded-full bg-[oklch(0.7_0.15_210)] animate-pulse" />
          Finance & Operations Consulting
        </div>

        {/* Headline — sized to fit on one line at desktop widths */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 whitespace-nowrap">
          Modernize Your{" "}
          <span className="text-[oklch(0.7_0.15_210)]">
            Finance & Operations
          </span>{" "}
          with AI
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-8 max-w-5xl mx-auto">
          We help streamline back-office function by implementing AI within your IT environment.<br />
          Less manual work, faster decisions, scalable processes.
        </p>

        {/* Proof points */}
        <ul className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-10">
          {PROOF_POINTS.map((point) => (
            <li key={point} className="flex items-center gap-2 text-white/70 text-base">
              <CheckCircle size={18} className="text-[oklch(0.7_0.15_210)] shrink-0" />
              {point}
            </li>
          ))}
        </ul>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={openCalendly}
            className="inline-flex items-center justify-center gap-2 bg-[oklch(0.55_0.22_250)] hover:bg-[oklch(0.48_0.22_250)] text-white font-semibold px-8 py-4 rounded-xl text-base transition-colors w-72"
          >
            Book a Free Consultation
            <ArrowRight size={18} />
          </button>
          <a
            href="#process"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-base transition-colors w-72"
          >
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
}
