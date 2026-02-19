import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import {
  organizationSchema,
  localBusinessSchema,
  serviceSchema,
  faqSchema,
} from "./schema";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Apex Meridian - M&A Transaction Advisory, Corporate Transformation, Growth Strategy",
  description:
    "Apex Meridian is a leading M&A transaction advisory firm specializing in corporate transformation and growth strategy. We provide expert guidance to help businesses navigate complex transactions and achieve sustainable growth.",
  alternates: {
    canonical: "https://apex-meridian-web.vercel.app",
  },

  keywords: [
    "Apex",
    "M&A Transaction Advisory",
    "Corporate Transformation",
    "Growth Strategy",
    "Business Advisory",
    "Mergers and Acquisitions",
    "Strategic Consulting",
    "Financial Advisory",
    "Corporate Strategy",
    "Business Growth",
  ],
  other: {
    publisher: "Apex Meridian",
    "X-Robots-Tag":
      "noindex, nofollow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  },
  robots: {
    index: false,
    follow: false,
    nocache: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title:
      "Apex Meridian - M&A Transaction Advisory, Corporate Transformation, Growth Strategy",
    description:
      "Apex Meridian is a leading M&A transaction advisory firm specializing in corporate transformation and growth strategy. We provide expert guidance to help businesses navigate complex transactions and achieve sustainable growth.",
    url: "https://apex-meridian-web.vercel.app",
    siteName: "Apex Meridian",
    images: [
      {
        url: "/assets/common/logo-img.png",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Apex Meridian - M&A Transaction Advisory, Corporate Transformation, Growth Strategy",
    description:
      "Apex Meridian is a leading M&A transaction advisory firm specializing in corporate transformation and growth strategy. We provide expert guidance to help businesses navigate complex transactions and achieve sustainable growth.",
    images: ["/assets/common/logo-img.png"],
  },
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
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
          strategy="afterInteractive"
        />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
          strategy="afterInteractive"
        />
        <Script
          id="service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
          strategy="afterInteractive"
        />
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
          strategy="afterInteractive"
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
