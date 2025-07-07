'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
    Search,
    Github,
    ExternalLink,
    ChevronRight,
    Bell,
    Star,
    BookOpen,
    Zap,
    Menu,
    X
} from 'lucide-react';
import Link from 'next/link';

export function Header() {
    const pathname = usePathname();
    const [searchFocused, setSearchFocused] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            <div className="px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Left Section - Breadcrumbs */}
                    <div className="flex items-center space-x-4 flex-1">
                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>

                        {/* Breadcrumbs */}
                        <nav aria-label="Breadcrumb" className="flex items-center space-x-1 text-sm">
                            {breadcrumbs.map((breadcrumb, index) => (
                                <div key={breadcrumb.href} className="flex items-center">
                                    {index > 0 && (
                                        <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                                    )}
                                    <Link
                                        href={breadcrumb.href}
                                        className={`px-2 py-1 rounded-lg transition-all duration-200 ${index === breadcrumbs.length - 1
                                            ? 'text-blue-600 bg-blue-50 font-medium'
                                            : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                                            }`}
                                    >
                                        {breadcrumb.label}
                                    </Link>
                                </div>
                            ))}
                        </nav>
                    </div>

                    {/* Center Section - Search */}
                    <div className="hidden md:flex flex-1 max-w-md mx-8">
                        <div className={`relative w-full transition-all duration-200 ${searchFocused ? 'scale-105' : ''
                            }`}>
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input
                                type="text"
                                placeholder="Search docs... (⌘K)"
                                onFocus={() => setSearchFocused(true)}
                                onBlur={() => setSearchFocused(false)}
                                className={`w-full pl-10 pr-4 py-2.5 text-sm border rounded-xl bg-gray-50/80 backdrop-blur-sm transition-all duration-200 placeholder-gray-400 ${searchFocused
                                    ? 'border-blue-500 bg-white shadow-lg shadow-blue-500/10 ring-2 ring-blue-500/20'
                                    : 'border-gray-200 hover:border-gray-300 hover:bg-white'
                                    } focus:outline-none`}
                            />
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <div className="hidden lg:flex items-center space-x-1">
                                    <kbd className="px-1.5 py-0.5 text-xs font-semibold text-gray-500 bg-gray-100 border border-gray-200 rounded">
                                        ⌘
                                    </kbd>
                                    <kbd className="px-1.5 py-0.5 text-xs font-semibold text-gray-500 bg-gray-100 border border-gray-200 rounded">
                                        K
                                    </kbd>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Actions */}
                    <div className="flex items-center space-x-3">
                        {/* Notifications */}
                        <button className="relative p-2.5 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 group">
                            <Bell className="w-5 h-5" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse group-hover:animate-bounce"></div>
                        </button>

                        {/* Quick Start */}
                        <a
                            href="/getting-started/quick-start"
                            className="hidden sm:flex items-center space-x-2 px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200 transform hover:scale-105"
                        >
                            <Zap className="w-4 h-4" />
                            <span>Quick Start</span>
                        </a>

                        {/* GitHub Star */}
                        <a
                            href="https://github.com/your-repo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:flex items-center space-x-2 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 rounded-xl transition-all duration-200 group hover:shadow-md"
                        >
                            <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            <span>Star</span>
                            <div className="flex items-center space-x-1 ml-2 px-2 py-0.5 bg-gray-100 rounded-md">
                                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                <span className="text-xs font-bold">1.2k</span>
                            </div>
                        </a>

                        {/* External Link */}
                        <a
                            href="https://swop.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 group"
                            title="Visit Swop App"
                        >
                            <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </a>
                    </div>
                </div>

                {/* Mobile Search */}
                <div className="md:hidden mt-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search documentation..."
                            className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl bg-gray-50/80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                        />
                    </div>
                </div>

                {/* Quick Actions Bar */}
                <div className="hidden lg:flex items-center justify-between mt-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-xs font-medium text-gray-600">Documentation Status: Up to date</span>
                        </div>
                        <div className="h-4 w-px bg-gray-300"></div>
                        <div className="flex items-center space-x-2">
                            <BookOpen className="w-4 h-4 text-blue-600" />
                            <span className="text-xs font-medium text-gray-600">{breadcrumbs.length > 1 ? breadcrumbs[breadcrumbs.length - 1].label : 'Documentation'}</span>
                        </div>
                    </div>

                    <div className="flex items-center space-x-3">
                        <a
                            href="/getting-started/quick-start"
                            className="text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors"
                        >
                            Quick Start →
                        </a>
                        <a
                            href="/api/authentication"
                            className="text-xs font-medium text-purple-600 hover:text-purple-700 transition-colors"
                        >
                            API Reference →
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
} 