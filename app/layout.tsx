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

// TODO: Replace [YourBrand] with your business name throughout this file
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yoursite.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "[YourBrand] | AI-Powered Finance & Operations Consulting",
    template: "%s | [YourBrand]",
  },
  description:
    "Expert consulting to streamline back-office finance and operations using AI and modern software tools. Trusted by growth-stage companies to scale efficiently.",
  keywords: [
    "finance operations consulting",
    "AI back office automation",
    "GTM operations consultant",
    "finance process improvement",
    "operations consulting",
    "back office optimization",
    "AI tools for finance",
  ],
  authors: [{ name: "[Your Name]" }],
  creator: "[YourBrand]",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "[YourBrand]",
    title: "[YourBrand] | AI-Powered Finance & Operations Consulting",
    description:
      "Expert consulting to streamline back-office finance and operations using AI and modern software tools.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "[YourBrand] – Finance & Operations Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "[YourBrand] | AI-Powered Finance & Operations Consulting",
    description:
      "Expert consulting to streamline back-office finance and operations using AI and modern software tools.",
    images: ["/og-image.png"],
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
  // TODO: Replace all placeholder values below with your actual business info
  name: "[YourBrand]",
  description:
    "Expert consulting to streamline back-office finance and operations using AI and modern software tools.",
  url: SITE_URL,
  email: "hello@yoursite.com",
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
