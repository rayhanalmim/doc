import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'Swop Documentation',
    template: '%s | Swop Docs'
  },
  description: "Comprehensive documentation for the Swop blockchain platform - Multi-chain wallet management, token swapping, NFT minting, and decentralized messaging.",
  keywords: ["Swop", "blockchain", "Web3", "documentation", "wallet", "NFT", "token swapping", "XMTP"],
  authors: [{ name: 'Swop Team' }],
  creator: "Swop",
  publisher: "Swop",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://docs.swop.app",
    title: "Swop Documentation",
    description: "Complete developer guide for building Web3 applications with Swop",
    siteName: "Swop Docs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swop Documentation",
    description: "Complete developer guide for building Web3 applications with Swop",
    creator: "@SwopApp",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#3B82F6",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
          <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
              {/* Header */}
              <Header />

              {/* Main Content */}
              <main className="flex-1 overflow-y-auto bg-white/80 backdrop-blur-sm">
                <div className="container max-w-6xl mx-auto px-6 py-8">
                  <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-200 p-8 md:p-12">
                    <div className="prose prose-lg prose-gray max-w-none prose-headings:scroll-mt-20 prose-headings:font-bold prose-h1:text-4xl prose-h1:mb-8 prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:text-blue-700 prose-a:font-medium prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-blockquote:border-l-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:p-4 prose-blockquote:rounded-r-lg prose-ul:space-y-2 prose-ol:space-y-2 prose-li:marker:text-blue-600 prose-table:border-collapse prose-th:bg-gray-50 prose-th:font-semibold prose-td:border prose-th:border prose-img:rounded-lg prose-img:shadow-lg">
                      {children}
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <footer className="border-t border-gray-200 bg-white/90 backdrop-blur-sm mt-16">
                  <div className="container max-w-6xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                      {/* Brand */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                            <span className="text-white font-bold text-lg">S</span>
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900">Swop Docs</h3>
                            <p className="text-xs text-gray-500">Blockchain Documentation</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Comprehensive documentation for building Web3 applications with the Swop platform.
                        </p>
                      </div>

                      {/* Quick Links */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                          <li><a href="/getting-started/quick-start" className="text-gray-600 hover:text-blue-600 transition-colors">Quick Start</a></li>
                          <li><a href="/features/authentication" className="text-gray-600 hover:text-blue-600 transition-colors">Authentication</a></li>
                          <li><a href="/features/wallet" className="text-gray-600 hover:text-blue-600 transition-colors">Wallet Management</a></li>
                          <li><a href="/features/swapping" className="text-gray-600 hover:text-blue-600 transition-colors">Token Swapping</a></li>
                        </ul>
                      </div>

                      {/* Resources */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm">
                          <li><a href="/api/authentication" className="text-gray-600 hover:text-blue-600 transition-colors">API Reference</a></li>
                          <li><a href="/components/ui" className="text-gray-600 hover:text-blue-600 transition-colors">Components</a></li>
                          <li><a href="/development/setup" className="text-gray-600 hover:text-blue-600 transition-colors">Development Setup</a></li>
                          <li><a href="/development/troubleshooting" className="text-gray-600 hover:text-blue-600 transition-colors">Troubleshooting</a></li>
                        </ul>
                      </div>

                      {/* Community */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Community</h4>
                        <ul className="space-y-2 text-sm">
                          <li><a href="https://github.com/your-repo" className="text-gray-600 hover:text-blue-600 transition-colors">GitHub</a></li>
                          <li><a href="https://discord.gg/swop" className="text-gray-600 hover:text-blue-600 transition-colors">Discord</a></li>
                          <li><a href="https://twitter.com/SwopApp" className="text-gray-600 hover:text-blue-600 transition-colors">Twitter</a></li>
                          <li><a href="https://swop.app" className="text-gray-600 hover:text-blue-600 transition-colors">Website</a></li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                      <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Swop. All rights reserved.
                      </p>
                      <div className="flex items-center space-x-4 mt-4 md:mt-0">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-xs text-gray-500">All systems operational</span>
                        </div>
                        <span className="text-xs text-gray-400">|</span>
                        <span className="text-xs text-gray-500">
                          Last updated: {new Date().toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </footer>
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
