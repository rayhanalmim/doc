import { Wallet, Shield, Coins, MessageSquare, Database, BarChart3, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
    const features = [
        {
            title: 'Multi-Chain Wallet',
            description: 'Secure wallet management across Ethereum, Polygon, Base, and Solana networks with real-time balances and portfolio tracking.',
            icon: <Wallet className="w-6 h-6" />,
            href: '/features/wallet',
            color: 'from-violet-400 to-purple-500'
        },
        {
            title: 'Token Swapping',
            description: 'Integrated Jupiter Exchange for best-rate token swaps on Solana with customizable slippage and priority fees.',
            icon: <Coins className="w-6 h-6" />,
            href: '/features/swapping',
            color: 'from-emerald-400 to-green-500'
        },
        {
            title: 'SmartSite System',
            description: 'Create customizable Web3 microsites with drag-and-drop components and blockchain integration.',
            icon: <Database className="w-6 h-6" />,
            href: '/features/smartsite',
            color: 'from-blue-400 to-indigo-500'
        },
        {
            title: 'XMTP Messaging',
            description: 'Decentralized wallet-to-wallet messaging with integrated token sending capabilities.',
            icon: <MessageSquare className="w-6 h-6" />,
            href: '/features/messaging',
            color: 'from-fuchsia-400 to-pink-500'
        }
    ];

    return (
        <div className="prose prose-gray max-w-none">
            <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-2xl p-8 mb-12">
                <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                    Welcome to Swop Documentation
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                    Your comprehensive guide to building Web3 applications with the Swop Desktop Application platform.
                    Explore our multi-chain wallet system, token swapping, NFT minting, and decentralized messaging features.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        href="/getting-started/quick-start"
                        className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                    >
                        <Sparkles className="w-5 h-5 mr-2" />
                        Quick Start Guide
                    </Link>
                    <Link
                        href="/getting-started/installation"
                        className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
                    >
                        Installation Guide
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>
            </div>

            <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Core Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <Link
                            key={index}
                            href={feature.href}
                            className="group block p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex items-start mb-4">
                                <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                                    {feature.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">
                                {feature.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
                    <ul className="space-y-3">
                        <li>
                            <Link href="/getting-started/quick-start" className="flex items-center text-gray-600 hover:text-blue-600">
                                <ArrowRight className="w-4 h-4 mr-2" />
                                Quick Start Guide
                            </Link>
                        </li>
                        <li>
                            <Link href="/getting-started/installation" className="flex items-center text-gray-600 hover:text-blue-600">
                                <ArrowRight className="w-4 h-4 mr-2" />
                                Installation Guide
                            </Link>
                        </li>
                        <li>
                            <Link href="/getting-started/configuration" className="flex items-center text-gray-600 hover:text-blue-600">
                                <ArrowRight className="w-4 h-4 mr-2" />
                                Configuration Guide
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <h2 className="text-2xl font-bold mb-4">API Reference</h2>
                    <ul className="space-y-3">
                        <li>
                            <Link href="/api/authentication" className="flex items-center text-gray-600 hover:text-blue-600">
                                <ArrowRight className="w-4 h-4 mr-2" />
                                Authentication API
                            </Link>
                        </li>
                        <li>
                            <Link href="/api/wallet" className="flex items-center text-gray-600 hover:text-blue-600">
                                <ArrowRight className="w-4 h-4 mr-2" />
                                Wallet API
                            </Link>
                        </li>
                        <li>
                            <Link href="/api/swapping" className="flex items-center text-gray-600 hover:text-blue-600">
                                <ArrowRight className="w-4 h-4 mr-2" />
                                Swapping API
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border border-blue-100">
                <h2 className="text-2xl font-bold mb-4">Security Features</h2>
                <div className="flex items-start gap-4">
                    <Shield className="w-8 h-8 text-blue-600 mt-1" />
                    <div>
                        <ul className="space-y-2">
                            <li>Multi-chain wallet security with Privy Auth integration</li>
                            <li>Transaction simulation and slippage protection</li>
                            <li>Smart contract security audits</li>
                            <li>Real-time transaction monitoring</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-12 p-6 bg-white rounded-xl border border-gray-200">
                <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
                <p className="mb-4">
                    If you need assistance or have questions, check out these resources:
                </p>
                <ul className="space-y-2">
                    <li>
                        <Link href="/troubleshooting" className="text-blue-600 hover:text-blue-700">
                            Troubleshooting Guide
                        </Link>
                    </li>
                    <li>
                        <Link href="/faq" className="text-blue-600 hover:text-blue-700">
                            Frequently Asked Questions
                        </Link>
                    </li>
                    <li>
                        <a href="https://github.com/your-repo/issues" className="text-blue-600 hover:text-blue-700">
                            GitHub Issues
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
} 