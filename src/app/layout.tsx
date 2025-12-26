import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LayoutWrapper } from "@/components/LayoutWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'Tahweel Merchant API Documentation',
    template: '%s | Tahweel API Docs'
  },
  description: "Complete API documentation for Tahweel Merchant Payment Integration - Create payments, check status, process refunds.",
  keywords: ["Tahweel", "payment", "API", "merchant", "documentation", "QR payment", "refund"],
  authors: [{ name: 'Tahweel Team' }],
  creator: "Tahweel",
  publisher: "Tahweel",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://docs.tahweel.io",
    title: "Tahweel Merchant API Documentation",
    description: "Complete developer guide for integrating Tahweel payment solutions",
    siteName: "Tahweel Docs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tahweel Merchant API Documentation",
    description: "Complete developer guide for integrating Tahweel payment solutions",
    creator: "@TahweelApp",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#d7155a",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-pink-50">
          <LayoutWrapper>{children}</LayoutWrapper>
        </div>
      </body>
    </html>
  );
}
