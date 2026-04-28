import { Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[oklch(0.18_0.04_251)] text-white/70">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="font-bold text-xl text-white mb-3">
              <span className="text-[oklch(0.7_0.15_210)]">Runrate </span>
              <span>Operations</span>
            </div>
            <p className="text-sm leading-relaxed">
              Helping companies streamline back-office finance and operations
              through AI and modern software.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                ["Services", "#services"],
                ["About", "#about"],
                ["Process", "#process"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Connect</h3>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="mailto:hello@runrateops.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail size={16} />
                hello@runrateops.com
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Linkedin size={16} />
                {/* TODO: Replace with your LinkedIn URL */}
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <span>© {currentYear} Runrate Operations. All rights reserved.</span>
          <a
            href="https://claude.ai/code"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-1.5 text-white/60 hover:text-white/90 text-xs font-medium tracking-wide transition-colors"
          >
            <span className="text-[#da7756] text-base">✳</span>
            POWERED BY Claude Code
          </a>
        </div>
      </div>
    </footer>
  );
}
