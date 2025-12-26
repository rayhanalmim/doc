'use client';

import { usePathname } from 'next/navigation';
import {
    Search,
    BookOpen,
    Menu,
} from 'lucide-react';

interface HeaderProps {
    onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
    const pathname = usePathname();

    // Generate breadcrumbs from pathname with proper route mapping
    const generateBreadcrumbs = () => {
        const pathSegments = pathname.split('/').filter(Boolean);
        const breadcrumbs = [{ label: 'Home', href: '/' }];

        // Special case handling for quick-start
        if (pathSegments.includes('quick-start')) {
            breadcrumbs.push({
                label: 'Quick Start',
                href: '/getting-started/quick-start'
            });
            return breadcrumbs;
        }

        // Handle other routes
        if (pathSegments.length > 0) {
            const lastSegment = pathSegments[pathSegments.length - 1];
            const formattedLabel = lastSegment
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');

            breadcrumbs.push({
                label: formattedLabel,
                href: `/${pathSegments.join('/')}`
            });
        }

        return breadcrumbs;
    };

    const breadcrumbs = generateBreadcrumbs();

    return (
        <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg supports-[backdrop-filter]:bg-white/60">
            <div className="px-4 md:px-6 py-4">
                {/* Top Bar with Mobile Menu Button */}
                <div className="flex items-center justify-between mb-4 md:mb-0">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={onMenuClick}
                        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <Menu className="w-6 h-6 text-gray-700" />
                    </button>

                    {/* Logo/Title for Mobile */}
                    <div className="lg:hidden flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-pink-600" />
                        <span className="font-semibold text-gray-900">Tahweel Docs</span>
                    </div>

                    {/* Spacer for mobile */}
                    <div className="lg:hidden w-10"></div>
                </div>

                {/* Mobile Search */}
                <div className="md:hidden mt-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search documentation..."
                            className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl bg-gray-50/80 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                        />
                    </div>
                </div>

                {/* Quick Actions Bar */}
                <div className="hidden lg:flex items-center justify-between p-3 bg-gradient-to-r from-pink-50 to-pink-100/50 rounded-xl border border-pink-100">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-xs font-medium text-gray-600">Documentation Status: Up to date</span>
                        </div>
                        <div className="h-4 w-px bg-gray-300"></div>
                        <div className="flex items-center space-x-2">
                            <BookOpen className="w-4 h-4 text-pink-600" />
                            <span className="text-xs font-medium text-gray-600">{breadcrumbs.length > 1 ? breadcrumbs[breadcrumbs.length - 1].label : 'Documentation'}</span>
                        </div>
                    </div>

                    <div className="flex items-center space-x-3">
                        <a
                            href="/authentication"
                            className="text-xs font-medium text-pink-600 hover:text-pink-700 transition-colors"
                        >
                            Get Started →
                        </a>
                        <a
                            href="/api/create-payment"
                            className="text-xs font-medium text-pink-600 hover:text-pink-700 transition-colors"
                        >
                            Create Payment →
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}