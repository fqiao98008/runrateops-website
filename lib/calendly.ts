export const CALENDLY_URL =
  "https://calendly.com/runrateoperations/30-min-discovery-call";

export function openCalendly(): void {
  // @ts-expect-error Calendly is loaded via external script in layout.tsx
  if (typeof window !== "undefined" && window.Calendly) {
    // @ts-expect-error Calendly is loaded via external script in layout.tsx
    window.Calendly.initPopupWidget({ url: CALENDLY_URL });
  }
}
