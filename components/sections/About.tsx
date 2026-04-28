import { Briefcase, GraduationCap, Award } from "lucide-react";

const CREDENTIALS = [
  {
    icon: Briefcase,
    label: "15+ Years",
    detail: "Finance & Operations Leadership",
  },
  {
    icon: GraduationCap,
    label: "Deep Expertise",
    detail: "GTM, Back-Office & AI Tooling",
  },
  {
    icon: Award,
    label: "Proven Results",
    detail: "Across SaaS, Tech & Services",
  },
];

const STATS = [
  { value: "40%",  suffix: "",     label: "Average reduction in manual processes" },
  { value: "3×",   suffix: "",     label: "Faster month-end close cycles" },
  { value: "90",   suffix: "days", label: "To first measurable results" },
  { value: "30%",  suffix: "",     label: "Average operational cost savings" },
  { value: "100%", suffix: "",     label: "Built within your existing IT stack" },
  { value: "15+",  suffix: "",     label: "Years in Finance & Operations" },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        {/*
          2-col × 2-row grid:
          Row 1: stats (left) | heading + bio (right) — stretch heights match
          Row 2: empty (left) | credential badges (right)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-10">

          {/* Row 1, left col: Stats — top aligns with bio text start */}
          <div className="order-2 lg:order-1 lg:row-start-1 flex flex-col">
            {/* Invisible spacer mirroring the "About" label + heading on the right */}
            <div aria-hidden="true" className="hidden lg:block invisible">
              <p className="text-sm font-semibold uppercase tracking-wider mb-3">
                About
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Finance & Ops Expertise, AI-Powered Results
              </h2>
            </div>

            {/* Stats fill the remaining height, distributed to match bio text */}
            <div className="flex-1 flex flex-col justify-between">
              {[
                STATS.slice(0, 2),
                STATS.slice(2, 4),
                STATS.slice(4, 6),
              ].map((row, i) => (
                <div key={i} className="flex gap-4">
                  {row.map(({ value, suffix, label }) => (
                    <div
                      key={label}
                      className="flex-1 bg-slate-50 rounded-2xl p-5 border border-slate-100"
                    >
                      <p className="text-3xl font-bold text-slate-900 leading-none mb-1">
                        {value}
                        {suffix && (
                          <span className="text-lg font-semibold text-slate-400 ml-1">
                            {suffix}
                          </span>
                        )}
                      </p>
                      <p className="text-slate-500 text-xs leading-snug mt-1">{label}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Row 1, right col: Heading + bio text */}
          <div className="order-1 lg:order-2 lg:row-start-1">
            <p className="text-sm font-semibold text-[oklch(0.55_0.22_250)] uppercase tracking-wider mb-3">
              About
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Finance & Ops Expertise,{" "}
              <span className="text-[oklch(0.55_0.22_250)]">
                AI-Powered Results
              </span>
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                With over 15 years working at the intersection of finance,
                operations, and go-to-market strategy, we&apos;ve seen firsthand
                how back-office inefficiencies slow companies down at the worst
                possible moments — during rapid growth.
              </p>
              <p>
                We founded Runrate Operations to give growth-stage companies access to
                the same operational rigor and AI-forward tooling that
                enterprise teams take for granted. Our approach is practical and
                hands-on: we work alongside your team to identify what&apos;s
                slowing you down, implement the right solutions, and ensure
                adoption actually happens.
              </p>
              <p>
                Whether you&apos;re preparing for a funding round, scaling a new
                GTM motion, or simply tired of month-end close taking three
                weeks, we can help you build a back office that becomes a
                competitive advantage.
              </p>
            </div>
          </div>

          {/* Row 2, right col only: Credential badges */}
          <div className="order-3 lg:col-start-2 lg:row-start-2">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {CREDENTIALS.map((cred) => {
                const Icon = cred.icon;
                return (
                  <div
                    key={cred.label}
                    className="bg-slate-50 rounded-xl p-4 border border-slate-100"
                  >
                    <Icon size={20} className="text-[oklch(0.55_0.22_250)] mb-2" />
                    <p className="font-semibold text-slate-900 text-sm">{cred.label}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{cred.detail}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
