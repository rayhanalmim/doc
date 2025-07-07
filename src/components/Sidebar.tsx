'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
    ChevronRight,
    Home,
    Settings,
    Wallet,
    Coins,
    Palette,
    ShoppingCart,
    BarChart3,
    MessageSquare,
    Code2,
    BookOpen,
    Zap,
    Shield,
    Database,
    Layers,
    Search,
    X
} from 'lucide-react';

interface NavItem {
    title: string;
    href?: string;
    icon?: React.ReactNode;
    children?: NavItem[];
    badge?: string;
}

const navigationItems: NavItem[] = [
    {
        title: 'Getting Started',
        icon: <Home className="w-4 h-4" />,
        children: [
            { title: 'Overview', href: '/' },
            { title: 'Quick Start', href: '/getting-started/quick-start' },
            { title: 'Installation', href: '/getting-started/installation' },
            { title: 'Configuration', href: '/getting-started/configuration' },
        ]
    },
    {
        title: 'Architecture',
        icon: <Layers className="w-4 h-4" />,
        children: [
            { title: 'System Overview', href: '/architecture/overview' },
            { title: 'Technology Stack', href: '/architecture/tech-stack' },
            { title: 'Directory Structure', href: '/architecture/directory-structure' },
            { title: 'Data Flow', href: '/architecture/data-flow' },
        ]
    },
    {
        title: 'Core Features',
        icon: <Zap className="w-4 h-4" />,
        badge: 'New',
        children: [
            {
                title: 'Authentication System',
                href: '/features/authentication',
                icon: <Shield className="w-3 h-3" />,
                children: [
                    { title: 'Privy Integration', href: '/features/authentication/privy' },
                    { title: 'Wallet Connection', href: '/features/authentication/wallet' },
                    { title: 'User Onboarding', href: '/features/authentication/onboarding' },
                ]
            },
            {
                title: 'Wallet Management',
                href: '/features/wallet',
                icon: <Wallet className="w-3 h-3" />,
                children: [
                    { title: 'Multi-Chain Support', href: '/features/wallet/multi-chain' },
                    { title: 'Token Management', href: '/features/wallet/tokens' },
                    { title: 'NFT Management', href: '/features/wallet/nfts' },
                    { title: 'Transaction History', href: '/features/wallet/transactions' },
                ]
            },
            {
                title: 'Token Swapping',
                href: '/features/swapping',
                icon: <Coins className="w-3 h-3" />,
                badge: 'Popular',
                children: [
                    { title: 'Jupiter Integration', href: '/features/swapping/jupiter' },
                    { title: 'Swap Modal', href: '/features/swapping/swap-modal' },
                    { title: 'Fee Structure', href: '/features/swapping/fees' },
                ]
            },
            {
                title: 'NFT Minting',
                href: '/features/nft-minting',
                icon: <Palette className="w-3 h-3" />,
                children: [
                    { title: 'Collection Types', href: '/features/nft-minting/types' },
                    { title: 'Minting Process', href: '/features/nft-minting/process' },
                    { title: 'Templates', href: '/features/nft-minting/templates' },
                ]
            },
            {
                title: 'SmartSite System',
                href: '/features/smartsite',
                icon: <Database className="w-3 h-3" />,
                children: [
                    { title: 'Site Creation', href: '/features/smartsite/creation' },
                    { title: 'Customization', href: '/features/smartsite/customization' },
                    { title: 'Components', href: '/features/smartsite/components' },
                ]
            },
            {
                title: 'E-commerce',
                href: '/features/ecommerce',
                icon: <ShoppingCart className="w-3 h-3" />,
                children: [
                    { title: 'Marketplace', href: '/features/ecommerce/marketplace' },
                    { title: 'Payment Processing', href: '/features/ecommerce/payments' },
                    { title: 'Order Management', href: '/features/ecommerce/orders' },
                ]
            },
            {
                title: 'Analytics',
                href: '/features/analytics',
                icon: <BarChart3 className="w-3 h-3" />,
                children: [
                    { title: 'User Tracking', href: '/features/analytics/tracking' },
                    { title: 'Engagement Metrics', href: '/features/analytics/metrics' },
                    { title: 'Reports', href: '/features/analytics/reports' },
                ]
            },
            {
                title: 'XMTP Messaging',
                href: '/features/messaging',
                icon: <MessageSquare className="w-3 h-3" />,
                badge: 'Beta',
                children: [
                    { title: 'Chat Integration', href: '/features/messaging/chat' },
                    { title: 'Server Setup', href: '/features/messaging/server' },
                    { title: 'Token Sending', href: '/features/messaging/token-sending' },
                ]
            },
        ]
    },
    {
        title: 'Blockchain Integration',
        icon: <Shield className="w-4 h-4" />,
        children: [
            { title: 'Ethereum', href: '/blockchain/ethereum' },
            { title: 'Polygon', href: '/blockchain/polygon' },
            { title: 'Base', href: '/blockchain/base' },
            { title: 'Solana', href: '/blockchain/solana' },
        ]
    },
    {
        title: 'API Reference',
        icon: <Code2 className="w-4 h-4" />,
        children: [
            { title: 'Authentication API', href: '/api/authentication' },
            { title: 'Wallet API', href: '/api/wallet' },
            { title: 'NFT API', href: '/api/nft' },
            { title: 'SmartSite API', href: '/api/smartsite' },
            { title: 'XMTP API', href: '/api/xmtp' },
        ]
    },
    {
        title: 'Components',
        icon: <Palette className="w-4 h-4" />,
        children: [
            { title: 'UI Components', href: '/components/ui' },
            { title: 'Wallet Components', href: '/components/wallet' },
            { title: 'NFT Components', href: '/components/nft' },
            { title: 'SmartSite Components', href: '/components/smartsite' },
        ]
    },
    {
        title: 'Development',
        icon: <Settings className="w-4 h-4" />,
        children: [
            { title: 'Setup Guide', href: '/development/setup' },
            { title: 'Best Practices', href: '/development/best-practices' },
            { title: 'Testing', href: '/development/testing' },
            { title: 'Deployment', href: '/development/deployment' },
            { title: 'Troubleshooting', href: '/development/troubleshooting' },
        ]
    },
];

interface SidebarItemProps {
    item: NavItem;
    level?: number;
    openMenuItem: string | null;
    setOpenMenuItem: (title: string | null) => void;
}

function SidebarItem({ item, level = 0, openMenuItem, setOpenMenuItem }: SidebarItemProps) {
    const pathname = usePathname();
    const hasChildren = item.children && item.children.length > 0;
    const isActive = item.href === pathname;
    const isOpen = openMenuItem === item.title;

    const handleClick = () => {
        if (hasChildren) {
            setOpenMenuItem(isOpen ? null : item.title);
        }
    };

    return (
        <div className="relative">
            {item.href ? (
                <Link
                    href={item.href}
                    className={`group flex items-center px-3 py-2.5 text-sm rounded-lg transition-all duration-300 ease-out relative ${isActive
                        ? 'bg-blue-50 text-blue-700 font-medium translate-x-1'
                        : level === 0
                            ? 'text-gray-700 hover:bg-gray-50 hover:text-blue-700 hover:translate-x-1'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-blue-700 hover:translate-x-1'
                        } ${level > 0 ? 'ml-4' : ''}`}
                >
                    {level === 0 && item.icon && (
                        <div className={`mr-3 transition-all duration-300 ease-out transform ${isActive
                            ? 'text-blue-700 scale-110'
                            : 'text-gray-500 group-hover:text-blue-700 group-hover:scale-110'
                            }`}>
                            {item.icon}
                        </div>
                    )}
                    {level > 0 && item.icon && (
                        <div className={`mr-2 transition-all duration-300 ease-out transform ${isActive
                            ? 'text-blue-700 scale-110'
                            : 'text-gray-500 group-hover:text-blue-700 group-hover:scale-110'
                            }`}>
                            {item.icon}
                        </div>
                    )}
                    <span className={`flex-1 transition-all duration-300 ${level === 0 ? 'font-medium' : ''}`}>
                        {item.title}
                    </span>
                    {item.badge && (
                        <span className={`ml-2 px-2 py-0.5 text-xs font-medium rounded-full transition-all duration-300 transform group-hover:scale-105 ${item.badge === 'New'
                            ? 'bg-green-100 text-green-700'
                            : item.badge === 'Popular'
                                ? 'bg-orange-100 text-orange-700'
                                : item.badge === 'Beta'
                                    ? 'bg-purple-100 text-purple-700'
                                    : 'bg-gray-100 text-gray-700'
                            }`}>
                            {item.badge}
                        </span>
                    )}
                    {isActive && (
                        <div className="absolute left-0 top-[10%] bottom-[10%] w-1 bg-blue-700 rounded-full transition-all duration-300 ease-out animate-fadeIn"></div>
                    )}
                </Link>
            ) : (
                <button
                    onClick={handleClick}
                    className={`group w-full flex items-center px-3 py-2.5 text-sm rounded-lg transition-all duration-300 ease-out ${isOpen
                        ? 'bg-gray-50 text-blue-700 translate-x-1'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-blue-700 hover:translate-x-1'
                        } ${level > 0 ? 'ml-4' : ''}`}
                >
                    {level === 0 && item.icon && (
                        <div className={`mr-3 transition-all duration-300 ease-out transform ${isOpen
                            ? 'text-blue-700 scale-110'
                            : 'text-gray-500 group-hover:text-blue-700 group-hover:scale-110'
                            }`}>
                            {item.icon}
                        </div>
                    )}
                    <span className={`flex-1 text-left transition-all duration-300 ${level === 0 ? 'font-medium' : ''}`}>
                        {item.title}
                    </span>
                    {item.badge && (
                        <span className={`ml-2 px-2 py-0.5 text-xs font-medium rounded-full transition-all duration-300 transform group-hover:scale-105 ${item.badge === 'New'
                            ? 'bg-green-100 text-green-700'
                            : item.badge === 'Popular'
                                ? 'bg-orange-100 text-orange-700'
                                : item.badge === 'Beta'
                                    ? 'bg-purple-100 text-purple-700'
                                    : 'bg-gray-100 text-gray-700'
                            }`}>
                            {item.badge}
                        </span>
                    )}
                    {hasChildren && (
                        <div className={`ml-2 transition-all duration-300 ease-out transform ${isOpen
                            ? 'rotate-90 text-blue-700'
                            : 'text-gray-500 group-hover:text-blue-700'
                            }`}>
                            <ChevronRight className="w-4 h-4" />
                        </div>
                    )}
                </button>
            )}

            {hasChildren && (
                <div
                    className={`overflow-hidden transition-all duration-300 ease-out transform ${isOpen
                        ? 'max-h-[1000px] opacity-100 translate-y-0'
                        : 'max-h-0 opacity-0 -translate-y-2'
                        }`}
                >
                    <div className={`mt-1 space-y-1 transition-all duration-300 ease-out ${isOpen ? 'opacity-100' : 'opacity-0'
                        }`}>
                        {item.children!.map((child, index) => (
                            <SidebarItem
                                key={index}
                                item={child}
                                level={level + 1}
                                openMenuItem={openMenuItem}
                                setOpenMenuItem={setOpenMenuItem}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export function Sidebar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [openMenuItem, setOpenMenuItem] = useState<string | null>(null);

    const filteredItems = navigationItems.filter(item =>
        searchTerm === '' ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.children && item.children.some(child =>
            child.title.toLowerCase().includes(searchTerm.toLowerCase())
        ))
    );

    return (
        <aside className="w-80 bg-gradient-to-b from-white to-gray-50 border-r border-gray-200 h-screen overflow-y-auto flex-shrink-0 shadow-xl">
            <div className="p-6">
                {/* Header */}
                <div className="flex items-center space-x-3 mb-8">
                    <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg">
                            <BookOpen className="w-7 h-7 text-white" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                            Swop Docs
                        </h1>
                        <p className="text-sm text-gray-500 font-medium">Blockchain Documentation</p>
                    </div>
                </div>

                {/* Search */}
                <div className="mb-6">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search documentation..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-10 py-2.5 text-sm border border-gray-200 rounded-xl bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                        />
                        {searchTerm && (
                            <button
                                onClick={() => setSearchTerm('')}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        )}
                    </div>
                </div>

                {/* Navigation */}
                <nav className="space-y-2 pb-6">
                    {filteredItems.map((item, index) => (
                        <SidebarItem
                            key={index}
                            item={item}
                            openMenuItem={openMenuItem}
                            setOpenMenuItem={setOpenMenuItem}
                        />
                    ))}
                </nav>

                {/* Footer */}
                <div className="border-t border-gray-200 pt-6 mt-6">
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-xl border border-gray-200">
                        <div className="flex items-center space-x-2 mb-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-xs font-medium text-gray-600">Status</span>
                        </div>
                        <p className="text-xs text-gray-500">All systems operational</p>
                        <div className="mt-2 text-xs text-gray-400">
                            Last updated: {new Date().toLocaleDateString()}
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
} 