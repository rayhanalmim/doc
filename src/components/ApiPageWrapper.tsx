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

const BASE_URL = 'https://connect.tahweel.io';

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
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 via-white to-gray-50 p-6 border-2 border-gray-200 shadow-sm">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-100/40 to-purple-100/40 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-50/60 to-pink-50/60 blur-3xl"></div>
        
        <div className="relative">
          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">

              <div className="p-2 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 shadow-lg shadow-pink-500/20">
                <Globe className="w-8 h-8 text-white" />
              </div>

              <div>
                <h6 className="text-2xl font-semibold text-gray-900 py-0">API Base URL</h6>
                <p className="text-xs text-gray-500">Use for all API requests</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-xs font-medium text-green-400">Production</span>
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
                <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                <span className="text-xs font-medium text-orange-400">Sandbox</span>
              </span>
            </div>
          </div>

          {/* URL Display */}
          <div className="flex items-center gap-3 bg-white rounded-xl p-4 border-2 border-gray-200 shadow-sm">
            <code className="flex-1 text-lg font-mono text-gray-800 tracking-wide">
              {BASE_URL}
            </code>
            <button
              onClick={() => copyToClipboard(BASE_URL, 'base')}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white text-sm font-medium shadow-lg shadow-pink-500/25 transition-all hover:scale-105"
            >
              {copiedUrl === 'base' ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Info note */}
          <p className="mt-4 text-xs text-gray-600 flex items-center gap-2">
            <svg className="w-4 h-4 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Same endpoint for both environments — your API credentials determine Production or Sandbox mode.</span>
          </p>
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
