/* eslint-disable @next/next/no-html-link-for-pages */
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header onMenuClick={() => setSidebarOpen(true)} />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-white/80 backdrop-blur-sm">
          <div className="container max-w-6xl mx-auto px-4 md:px-6 py-4 md:py-8">
            <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-200 p-4 md:p-8 lg:p-12">
              <div className="prose prose-lg prose-gray max-w-none prose-headings:scroll-mt-20 prose-headings:font-bold prose-h1:text-4xl prose-h1:mb-8 prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:leading-relaxed prose-a:text-pink-600 prose-a:no-underline hover:prose-a:text-pink-700 prose-a:font-medium prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-blockquote:border-l-pink-500 prose-blockquote:bg-pink-50 prose-blockquote:p-4 prose-blockquote:rounded-r-lg prose-ul:space-y-2 prose-ol:space-y-2 prose-li:marker:text-pink-600 prose-table:border-collapse prose-th:bg-gray-50 prose-th:font-semibold prose-td:border prose-th:border prose-img:rounded-lg prose-img:shadow-lg">
                {children}
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="border-t border-gray-200 bg-white/90 backdrop-blur-sm mt-8 md:mt-16">
            <div className="container max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl overflow-hidden shadow-md relative">
                      <Image 
                        src="/logo-mini.jpg" 
                        alt="Tahweel Logo" 
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Tahweel Docs</h3>
                      <p className="text-xs text-gray-500">Merchant API Documentation</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Complete API documentation for integrating Tahweel merchant payment solutions.
                  </p>
                </div>

                {/* Quick Links */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">API Reference</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="/api/create-payment" className="text-gray-600 hover:text-pink-600 transition-colors">Create Payment</a></li>
                    <li><a href="/api/payment-details" className="text-gray-600 hover:text-pink-600 transition-colors">Payment Details</a></li>
                    <li><a href="/api/payment-status" className="text-gray-600 hover:text-pink-600 transition-colors">Payment Status</a></li>
                    <li><a href="/api/refund" className="text-gray-600 hover:text-pink-600 transition-colors">Refund Payment</a></li>
                  </ul>
                </div>

                {/* Resources */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="/" className="text-gray-600 hover:text-pink-600 transition-colors">Introduction</a></li>
                    <li><a href="/authentication" className="text-gray-600 hover:text-pink-600 transition-colors">Authentication</a></li>
                    <li><a href="https://merchant.tahweel.io" className="text-gray-600 hover:text-pink-600 transition-colors">Merchant Dashboard</a></li>
                  </ul>
                </div>

                {/* Contact */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="https://tahweel.io" className="text-gray-600 hover:text-pink-600 transition-colors">Website</a></li>
                    <li><a href="mailto:support@tahweel.io" className="text-gray-600 hover:text-pink-600 transition-colors">Support</a></li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-gray-500">
                  © 2026 Tahweel. All rights reserved.
                </p>
                <div className="flex items-center space-x-4 mt-4 md:mt-0">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-500">All systems operational</span>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
