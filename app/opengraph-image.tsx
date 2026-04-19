import { ImageResponse } from "next/og";

export const alt = "Runrate Operations — AI-Powered Finance & Operations Consulting";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background:
            "radial-gradient(circle at 30% 40%, #1e3a5f 0%, #0d1b2a 60%)",
          padding: "80px 96px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 28,
            color: "rgba(255,255,255,0.7)",
            marginBottom: 32,
          }}
        >
          <span
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#5aa9e6",
            }}
          />
          Finance &amp; Operations Consulting
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 112,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          <span style={{ color: "#5aa9e6" }}>Runrate</span>
          <span style={{ color: "#ffffff" }}>&nbsp;Ops</span>
        </div>

        <div
          style={{
            fontSize: 36,
            color: "rgba(255,255,255,0.75)",
            marginTop: 40,
            maxWidth: 960,
            lineHeight: 1.3,
          }}
        >
          Modernize your finance &amp; operations with AI.
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "rgba(255,255,255,0.5)",
            marginTop: 48,
          }}
        >
          runrateops.com
        </div>
      </div>
    ),
    { ...size }
  );
}
