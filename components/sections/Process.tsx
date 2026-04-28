"use client";

import { Phone, Map, Rocket } from "lucide-react";
import { openCalendly } from "@/lib/calendly";

const STEPS = [
  {
    number: "01",
    icon: Phone,
    title: "Discovery Call",
    description:
      "We start with a complimentary 45-minute call to understand your current state: your team, tools, pain points, and goals. No pitch decks — just an honest conversation about where you are and where you want to be.",
  },
  {
    number: "02",
    icon: Map,
    title: "Custom Roadmap",
    description:
      "Based on discovery, we deliver a tailored roadmap: a prioritized list of process improvements, AI tool recommendations, and implementation milestones — with realistic timelines and expected ROI.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Hands-On Implementation",
    description:
      "We work alongside your team to execute the roadmap. This isn't slide-deck consulting — we roll up our sleeves, configure tools, train your people, and measure results at every step.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 px-6 md:px-12 lg:px-24 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[oklch(0.55_0.22_250)] uppercase tracking-wider mb-3">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            A Simple, Structured Process
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            From first conversation to measurable outcomes in three clear steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop only) */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-14 left-1/3 right-1/3 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"
          />

          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative text-center group">
                {/* Step number + icon */}
                <div className="flex flex-col items-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[oklch(0.18_0.04_251)] flex items-center justify-center mb-3 shadow-lg group-hover:bg-[oklch(0.55_0.22_250)] transition-colors">
                    <Icon size={26} className="text-white" />
                  </div>
                  <span className="text-xs font-bold text-[oklch(0.55_0.22_250)] tracking-widest">
                    STEP {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Mobile connector */}
                {index < STEPS.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="md:hidden w-px h-8 bg-slate-300 mx-auto mt-8"
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <button
            type="button"
            onClick={openCalendly}
            className="inline-flex items-center gap-2 bg-[oklch(0.18_0.04_251)] hover:bg-[oklch(0.25_0.05_251)] text-white font-semibold px-8 py-4 rounded-xl transition-colors"
          >
            Start with a Free Discovery Call
          </button>
        </div>
      </div>
    </section>
  );
}
