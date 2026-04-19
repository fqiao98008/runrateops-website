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

export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Photo placeholder */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-square max-w-sm mx-auto lg:mx-0 rounded-3xl bg-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden">
                {/* TODO: Replace with actual photo using next/image */}
                <div className="text-center text-slate-400">
                  <div className="w-24 h-24 rounded-full bg-slate-200 mx-auto mb-4" />
                  <p className="text-sm">Photo placeholder</p>
                </div>
              </div>
              {/* Floating credential chips */}
              <div className="absolute -bottom-4 -right-4 md:right-0 bg-[oklch(0.18_0.04_251)] text-white rounded-2xl px-5 py-4 shadow-xl">
                <p className="text-2xl font-bold">15+</p>
                <p className="text-white/70 text-xs">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold text-[oklch(0.55_0.22_250)] uppercase tracking-wider mb-3">
              About
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Finance & Ops Expertise,{" "}
              <span className="text-[oklch(0.55_0.22_250)]">
                AI-Powered Results
              </span>
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed mb-8">
              <p>
                {/* TODO: Replace with your actual bio */}
                With over 15 years working at the intersection of finance,
                operations, and go-to-market strategy, I&apos;ve seen firsthand
                how back-office inefficiencies slow companies down at the worst
                possible moments — during rapid growth.
              </p>
              <p>
                I founded Runrate Operations to give growth-stage companies access to
                the same operational rigor and AI-forward tooling that
                enterprise teams take for granted. My approach is practical and
                hands-on: I work alongside your team to identify what&apos;s
                slowing you down, implement the right solutions, and ensure
                adoption actually happens.
              </p>
              <p>
                Whether you&apos;re preparing for a funding round, scaling a new
                GTM motion, or simply tired of month-end close taking three
                weeks, I can help you build a back office that becomes a
                competitive advantage.
              </p>
            </div>

            {/* Credential badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {CREDENTIALS.map((cred) => {
                const Icon = cred.icon;
                return (
                  <div
                    key={cred.label}
                    className="bg-slate-50 rounded-xl p-4 border border-slate-100"
                  >
                    <Icon
                      size={20}
                      className="text-[oklch(0.55_0.22_250)] mb-2"
                    />
                    <p className="font-semibold text-slate-900 text-sm">
                      {cred.label}
                    </p>
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
