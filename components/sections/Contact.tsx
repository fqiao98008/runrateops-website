"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Linkedin, Mail } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [state, setState] = useState<FormState>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");

    try {
      // TODO: Replace with your Formspree endpoint or preferred form handler
      // Example: const res = await fetch("https://formspree.io/f/YOUR_ID", { method: "POST", body: JSON.stringify(form), headers: { "Content-Type": "application/json" } });
      // Simulating submission for now
      await new Promise((r) => setTimeout(r, 1000));
      setState("success");
      setForm(INITIAL_FORM);
    } catch {
      setState("error");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left: copy */}
          <div>
            <p className="text-sm font-semibold text-[oklch(0.55_0.22_250)] uppercase tracking-wider mb-3">
              Get In Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Ready to Modernize Your Back Office?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Whether you have a specific challenge in mind or just want to
              explore what&apos;s possible, let&apos;s start with a conversation.
              No commitment required.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:hello@yoursite.com"
                className="flex items-center gap-3 text-slate-700 hover:text-[oklch(0.55_0.22_250)] transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-100 group-hover:bg-[oklch(0.55_0.22_250)]/10 flex items-center justify-center transition-colors">
                  <Mail size={18} className="text-slate-500 group-hover:text-[oklch(0.55_0.22_250)] transition-colors" />
                </div>
                {/* TODO: Replace with your email */}
                hello@yoursite.com
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-700 hover:text-[oklch(0.55_0.22_250)] transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-100 group-hover:bg-[oklch(0.55_0.22_250)]/10 flex items-center justify-center transition-colors">
                  <Linkedin size={18} className="text-slate-500 group-hover:text-[oklch(0.55_0.22_250)] transition-colors" />
                </div>
                {/* TODO: Replace with your LinkedIn URL */}
                Connect on LinkedIn
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            {state === "success" ? (
              <div className="text-center py-8">
                <CheckCircle
                  size={48}
                  className="text-emerald-500 mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Message Received!
                </h3>
                <p className="text-slate-500">
                  Thanks for reaching out. I&apos;ll be in touch within 24 hours.
                </p>
                <button
                  onClick={() => setState("idle")}
                  className="mt-6 text-sm text-[oklch(0.55_0.22_250)] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.22_250)]/40 focus:border-[oklch(0.55_0.22_250)] transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.22_250)]/40 focus:border-[oklch(0.55_0.22_250)] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Corp"
                    className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.22_250)]/40 focus:border-[oklch(0.55_0.22_250)] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your biggest back-office challenge..."
                    className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.22_250)]/40 focus:border-[oklch(0.55_0.22_250)] transition-colors resize-none"
                  />
                </div>

                {state === "error" && (
                  <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                    <AlertCircle size={16} className="shrink-0" />
                    Something went wrong. Please try again or email directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={state === "submitting"}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[oklch(0.55_0.22_250)] hover:bg-[oklch(0.48_0.22_250)] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-6 py-3.5 rounded-xl text-sm transition-colors"
                >
                  {state === "submitting" ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
