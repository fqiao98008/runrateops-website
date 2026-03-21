import {
  TrendingUp,
  Bot,
  Settings,
  Target,
  Search,
  Users,
} from "lucide-react";

const SERVICES = [
  {
    icon: TrendingUp,
    title: "Finance Operations Optimization",
    description:
      "Redesign and automate your core finance workflows — close process, reporting, AP/AR, and controls — so your team spends less time on manual work and more time on strategy.",
  },
  {
    icon: Bot,
    title: "AI Tool Implementation",
    description:
      "Identify, evaluate, and deploy the right AI tools for your back-office stack. From AI-assisted reporting to intelligent document processing, we ensure adoption actually sticks.",
  },
  {
    icon: Settings,
    title: "Back-Office Process Streamlining",
    description:
      "Map your current-state processes, identify bottlenecks and redundancies, and build a leaner, more scalable operating model tailored to your growth stage.",
  },
  {
    icon: Target,
    title: "Go-to-Market Operations Support",
    description:
      "Align your GTM motion with your back-office infrastructure. We help you build revenue operations, pipeline analytics, and cross-functional workflows that scale.",
  },
  {
    icon: Search,
    title: "Technology Stack Assessment",
    description:
      "Audit your existing tools and identify gaps, overlaps, and upgrade opportunities. Get a clear technology roadmap aligned with your business goals and budget.",
  },
  {
    icon: Users,
    title: "Change Management & Adoption",
    description:
      "New processes and tools only work if people use them. We provide hands-on change management to drive team adoption and ensure lasting results.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 md:px-12 lg:px-24 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[oklch(0.55_0.22_250)] uppercase tracking-wider mb-3">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Services Built for Modern Businesses
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            We combine deep domain expertise in finance and operations with an
            AI-native approach to deliver practical, lasting improvements.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-[oklch(0.55_0.22_250)]/40 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[oklch(0.55_0.22_250)]/10 flex items-center justify-center mb-5 group-hover:bg-[oklch(0.55_0.22_250)]/20 transition-colors">
                  <Icon size={22} className="text-[oklch(0.55_0.22_250)]" />
                </div>
                <h3 className="text-slate-900 font-semibold text-lg mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
