'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {
    ChevronRight,
    Home,
    Code2,
    Search,
    X,
    CreditCard,
    FileText,
    Activity,
    RotateCcw
} from 'lucide-react';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

interface NavItem {
    title: string;
    href?: string;
    icon?: React.ReactNode;
    children?: NavItem[];
    badge?: string;
    method?: 'GET' | 'POST';
}

const navigationItems: NavItem[] = [
    {
        title: 'Getting Started',
        icon: <Home className="w-4 h-4" />,
        children: [
            { title: 'Introduction', href: '/' },
            { title: 'Authentication', href: '/authentication' },
        ]
    },
    {
        title: 'API Reference',
        icon: <Code2 className="w-4 h-4" />,
        badge: 'v1.0',
        children: [
            { 
                title: 'Create Payment', 
                href: '/api/create-payment',
                icon: <CreditCard className="w-3 h-3" />,
                method: 'POST'
            },
            { 
                title: 'Payment Details', 
                href: '/api/payment-details',
                icon: <FileText className="w-3 h-3" />,
                method: 'GET'
            },
            { 
                title: 'Payment Status', 
                href: '/api/payment-status',
                icon: <Activity className="w-3 h-3" />,
                method: 'GET'
            },
            { 
                title: 'Refund Payment', 
                href: '/api/refund',
                icon: <RotateCcw className="w-3 h-3" />,
                method: 'POST'
            },
        ]
    },
];

interface SidebarItemProps {
    item: NavItem;
    level?: number;
    openMenuItem: string | null;
    setOpenMenuItem: (title: string | null) => void;
    onLinkClick?: () => void;
}

function SidebarItem({ item, level = 0, openMenuItem, setOpenMenuItem, onLinkClick }: SidebarItemProps) {
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
                    onClick={onLinkClick}
                    className={`group flex items-center px-3 py-2.5 text-sm rounded-lg transition-all duration-300 ease-out relative ${isActive
                        ? 'bg-pink-50 text-pink-700 font-medium translate-x-1'
                        : level === 0
                            ? 'text-gray-700 hover:bg-gray-50 hover:text-pink-700 hover:translate-x-1'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-pink-700 hover:translate-x-1'
                        } ${level > 0 ? 'ml-4' : ''}`}
                >
                    {level === 0 && item.icon && (
                        <div className={`mr-3 transition-all duration-300 ease-out transform ${isActive
                            ? 'text-pink-700 scale-110'
                            : 'text-gray-500 group-hover:text-pink-700 group-hover:scale-110'
                            }`}>
                            {item.icon}
                        </div>
                    )}
                    {level > 0 && item.icon && (
                        <div className={`mr-2 transition-all duration-300 ease-out transform ${isActive
                            ? 'text-pink-700 scale-110'
                            : 'text-gray-500 group-hover:text-pink-700 group-hover:scale-110'
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
                        <div className="absolute left-0 top-[10%] bottom-[10%] w-1 bg-pink-600 rounded-full transition-all duration-300 ease-out animate-fadeIn"></div>
                    )}
                </Link>
            ) : (
                <button
                    onClick={handleClick}
                    className={`group w-full flex items-center px-3 py-2.5 text-sm rounded-lg transition-all duration-300 ease-out ${isOpen
                        ? 'bg-gray-50 text-pink-700 translate-x-1'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-pink-700 hover:translate-x-1'
                        } ${level > 0 ? 'ml-4' : ''}`}
                >
                    {level === 0 && item.icon && (
                        <div className={`mr-3 transition-all duration-300 ease-out transform ${isOpen
                            ? 'text-pink-700 scale-110'
                            : 'text-gray-500 group-hover:text-pink-700 group-hover:scale-110'
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
                            ? 'rotate-90 text-pink-700'
                            : 'text-gray-500 group-hover:text-pink-700'
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
                                onLinkClick={onLinkClick}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
    const pathname = usePathname();
    const [searchTerm, setSearchTerm] = useState('');
    const [openMenuItem, setOpenMenuItem] = useState<string | null>(null);

    // Auto-expand parent menu based on current pathname
    useEffect(() => {
        const findParentMenu = () => {
            for (const item of navigationItems) {
                if (item.children) {
                    const hasActiveChild = item.children.some(child => child.href === pathname);
                    if (hasActiveChild) {
                        return item.title;
                    }
                }
            }
            return null;
        };

        const parentMenu = findParentMenu();
        if (parentMenu) {
            setOpenMenuItem(parentMenu);
        }
    }, [pathname]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const filteredItems = navigationItems.filter(item =>
        searchTerm === '' ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.children && item.children.some(child =>
            child.title.toLowerCase().includes(searchTerm.toLowerCase())
        ))
    );

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={onClose}
                />
            )}
            
            {/* Sidebar */}
            <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-80 bg-gradient-to-b from-white to-pink-100 border-r border-gray-200 h-screen flex flex-col flex-shrink-0 shadow-xl transform transition-transform duration-300 ease-in-out ${
                isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
            }`}>
                <div className="p-6 flex-1 overflow-y-auto">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center space-x-3">
                            <div className="relative">
                                <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden relative">
                                    <Image 
                                        src="/logo-mini.jpg" 
                                        alt="Tahweel Logo" 
                                        fill
                                        className="object-cover"
                                        sizes="48px"
                                    />
                                </div>
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                                    Tahweel
                                </h1>
                                <p className="text-sm text-gray-500 font-medium">Merchant API Docs</p>
                            </div>
                        </div>
                        {/* Close button for mobile */}
                        <button
                            onClick={onClose}
                            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <X className="w-5 h-5 text-gray-600" />
                        </button>
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
                                className="w-full pl-10 pr-10 py-2.5 text-sm border border-gray-200 rounded-xl bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
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
                                onLinkClick={onClose}
                            />
                        ))}
                    </nav>
                </div>

                {/* Status Box - At bottom inside sidebar */}
                <div className="border-t border-gray-200 p-6">
                    <div className="bg-gradient-to-r from-gray-50 to-pink-50 p-4 rounded-xl border border-gray-200">
                        <div className="flex items-center space-x-2 mb-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-xs font-medium text-gray-600">Status</span>
                        </div>
                        <p className="text-xs text-gray-500">All systems operational</p>
                    </div>
                </div>
            </aside>
        </>
    );
}