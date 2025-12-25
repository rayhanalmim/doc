'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Copy, Check, ChevronLeft, ChevronRight, Globe } from 'lucide-react';

interface NavigationLink {
  title: string;
  href: string;
}

interface ApiPageWrapperProps {
  children: React.ReactNode;
  previous?: NavigationLink | null;
  next?: NavigationLink | null;
}

const BASE_URLS = {
  production: 'https://connect.tahweel.io',
  sandbox: 'https://connect.tahweelbuild.site'
};

export function ApiPageWrapper({ children, previous, next }: ApiPageWrapperProps) {
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  const copyToClipboard = async (url: string, type: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedUrl(type);
      setTimeout(() => setCopiedUrl(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="space-y-8">
      {/* Base URL Section */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
        <div className="flex items-center gap-2 mb-4">
          <Globe className="w-5 h-5 text-pink-600" />
          <h3 className="text-lg font-semibold text-gray-900">Base URLs</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {/* Production URL */}
          <div className="bg-white rounded-lg p-4 border border-green-200">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-700">Production</span>
              </div>
              <button
                onClick={() => copyToClipboard(BASE_URLS.production, 'production')}
                className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-gray-600 hover:text-green-600 hover:bg-green-50 rounded transition-colors"
              >
                {copiedUrl === 'production' ? (
                  <>
                    <Check className="w-3 h-3" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    Copy
                  </>
                )}
              </button>
            </div>
            <code className="text-sm bg-green-50 px-3 py-2 rounded-lg block text-green-800 font-mono break-all">
              {BASE_URLS.production}
            </code>
          </div>

          {/* Sandbox URL */}
          <div className="bg-white rounded-lg p-4 border border-orange-200">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-sm font-medium text-orange-700">Sandbox</span>
              </div>
              <button
                onClick={() => copyToClipboard(BASE_URLS.sandbox, 'sandbox')}
                className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded transition-colors"
              >
                {copiedUrl === 'sandbox' ? (
                  <>
                    <Check className="w-3 h-3" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    Copy
                  </>
                )}
              </button>
            </div>
            <code className="text-sm bg-orange-50 px-3 py-2 rounded-lg block text-orange-800 font-mono break-all">
              {BASE_URLS.sandbox}
            </code>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="api-content">
        {children}
      </div>

      {/* Navigation */}
      <div className="border-t border-gray-200 pt-8 mt-12">
        <div className="flex items-center justify-between">
          {/* Previous Link */}
          {previous ? (
            <Link
              href={previous.href}
              className="group flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 hover:border-pink-300 hover:bg-pink-50 transition-all no-underline"
            >
              <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-pink-600 transition-colors" />
              <div className="text-left">
                <span className="block text-xs text-gray-500 group-hover:text-pink-600">Previous</span>
                <span className="block text-sm font-medium text-gray-900 group-hover:text-pink-700">{previous.title}</span>
              </div>
            </Link>
          ) : (
            <div></div>
          )}

          {/* Next Link */}
          {next ? (
            <Link
              href={next.href}
              className="group flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 hover:border-pink-300 hover:bg-pink-50 transition-all no-underline"
            >
              <div className="text-right">
                <span className="block text-xs text-gray-500 group-hover:text-pink-600">Next</span>
                <span className="block text-sm font-medium text-gray-900 group-hover:text-pink-700">{next.title}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-pink-600 transition-colors" />
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
