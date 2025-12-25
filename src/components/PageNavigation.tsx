'use client';

import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationLink {
  title: string;
  href: string;
}

interface PageNavigationProps {
  previous?: NavigationLink | null;
  next?: NavigationLink | null;
}

export function PageNavigation({ previous, next }: PageNavigationProps) {
  return (
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
  );
}
