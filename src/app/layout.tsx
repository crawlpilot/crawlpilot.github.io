import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crawlpilot.github.io"),
  title: {
    default: "CrawlPilot | AI-Powered Web Scraping & Data Extraction Infrastructure",
    template: "%s | CrawlPilot"
  },
  description: "The privacy-first, open-source infrastructure for AI-powered web scraping and data extraction. Turn any website into structured data instantly with CrawlPilot.",
  keywords: [
    "web scraping",
    "data extraction",
    "browser extension",
    "crawlpilot",
    "ai web scraping",
    "local-first",
    "automation",
    "web crawling"
  ],
  authors: [{ name: "CrawlPilot Team" }],
  creator: "CrawlPilot",
  publisher: "CrawlPilot",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CrawlPilot | AI-Powered Web Scraping & Data Extraction Infrastructure",
    description: "Turn the web into structured data with the privacy-first, open-source AI scraper.",
    url: "https://crawlpilot.github.io",
    siteName: "CrawlPilot",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CrawlPilot | AI-Powered Web Scraping & Data Extraction",
    description: "The privacy-first infrastructure for AI-powered web extraction.",
    creator: "@crawlpilot",
  },
  verification: {
    google: "google9bed9ddf4af54f37", // From existing verification file in public
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-931CBGGJMB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-931CBGGJMB');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
