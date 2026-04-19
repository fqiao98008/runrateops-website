import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// TODO: Replace with your GA4 Measurement ID (format: G-XXXXXXXXXX)
// Get it from: analytics.google.com → Admin → Data Streams → your stream
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-XXXXXXXXXX";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://runrateops.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Runrate Operations | AI-Powered Finance & Operations Consulting",
    template: "%s | Runrate Operations",
  },
  description:
    "Runrate Operations helps growth-stage companies streamline back-office finance and operations using AI and modern software tools. Less manual work, faster decisions, scalable processes.",
  keywords: [
    "Runrate Operations",
    "finance operations consulting",
    "AI back office automation",
    "GTM operations consultant",
    "finance process improvement",
    "operations consulting",
    "back office optimization",
    "AI tools for finance",
  ],
  authors: [{ name: "Fang Qiao" }],
  creator: "Runrate Operations",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Runrate Operations",
    title: "Runrate Operations | AI-Powered Finance & Operations Consulting",
    description:
      "Streamline back-office finance and operations using AI and modern software tools. Trusted by growth-stage companies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Runrate Operations | AI-Powered Finance & Operations Consulting",
    description:
      "Streamline back-office finance and operations using AI and modern software tools.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Runrate Operations",
  description:
    "Expert consulting to streamline back-office finance and operations using AI and modern software tools.",
  url: SITE_URL,
  email: "hello@runrateops.com",
  areaServed: "US",
  serviceType: [
    "Finance Operations Consulting",
    "AI Tool Implementation",
    "Back-Office Process Optimization",
    "Go-to-Market Operations",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
