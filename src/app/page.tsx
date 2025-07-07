import Link from 'next/link';
import {
  Wallet,
  Shield,
  Coins,
  MessageSquare,
  Database,
  BarChart3,
  Zap,
  ArrowRight,
  Github,
  Star,
  Users,
  Globe,
  Layers,
  BookOpen,
  Sparkles,
  TrendingUp,
  Lock,
  Rocket
} from 'lucide-react';

export default function HomePage() {
  const features = [
    {
      title: 'Authentication System',
      description: 'Secure multi-chain wallet connection with Privy Auth. Support for EVM and Solana wallets.',
      icon: <Shield className="w-6 h-6" />,
      href: '/features/authentication',
      badge: 'Secure',
      color: 'from-sky-500 to-blue-600',
      iconColor: 'from-sky-400 to-blue-500',
      stats: '99.9% uptime'
    },
    {
      title: 'Wallet Management',
      description: 'Comprehensive multi-chain wallet with real-time balances, NFTs, and portfolio analytics.',
      icon: <Wallet className="w-6 h-6" />,
      href: '/features/wallet',
      badge: 'Multi-Chain',
      color: 'from-violet-500 to-purple-600',
      iconColor: 'from-violet-400 to-purple-500',
      stats: '4 networks'
    },
    {
      title: 'Token Swapping',
      description: 'Jupiter Exchange integration with best rates, slippage control, and 0.5% platform fees.',
      icon: <Coins className="w-6 h-6" />,
      href: '/features/swapping',
      badge: 'Popular',
      color: 'from-emerald-500 to-green-600',
      iconColor: 'from-emerald-400 to-green-500',
      stats: '$2M+ volume'
    },
    {
      title: 'XMTP Messaging',
      description: 'Decentralized wallet-to-wallet messaging with token sending capabilities.',
      icon: <MessageSquare className="w-6 h-6" />,
      href: '/features/messaging',
      badge: 'Beta',
      color: 'from-fuchsia-500 to-pink-600',
      iconColor: 'from-fuchsia-400 to-pink-500',
      stats: '10k+ messages'
    },
    {
      title: 'SmartSite System',
      description: 'Create custom Web3 websites with drag-and-drop components and blockchain integration.',
      icon: <Database className="w-6 h-6" />,
      href: '/features/smartsite',
      badge: 'New',
      color: 'from-indigo-500 to-indigo-600',
      iconColor: 'from-indigo-400 to-indigo-500',
      stats: '500+ sites'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics for user engagement, portfolio performance, and platform metrics.',
      icon: <BarChart3 className="w-6 h-6" />,
      href: '/features/analytics',
      badge: 'Insights',
      color: 'from-amber-500 to-orange-600',
      iconColor: 'from-amber-400 to-orange-500',
      stats: 'Real-time'
    },
  ];

  const quickLinks = [
    {
      title: 'Quick Start',
      href: '/getting-started/quick-start',
      icon: <Zap className="w-4 h-4" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'API Reference',
      href: '/api/authentication',
      icon: <BookOpen className="w-4 h-4" />,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Architecture',
      href: '/architecture/overview',
      icon: <Layers className="w-4 h-4" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Components',
      href: '/components/ui',
      icon: <Sparkles className="w-4 h-4" />,
      color: 'from-emerald-500 to-teal-500'
    },
  ];

  const stats = [
    { label: 'Active Users', value: '50K+', icon: <Users className="w-5 h-5" /> },
    { label: 'Transactions', value: '$10M+', icon: <TrendingUp className="w-5 h-5" /> },
    { label: 'Networks', value: '4', icon: <Globe className="w-5 h-5" /> },
    { label: 'Security Score', value: '99%', icon: <Lock className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-blue-50/25">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6 py-16 sm:py-16">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Comprehensive Web3 Documentation</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                Swop Blockchain
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Documentation
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Complete developer guide for building Web3 applications with multi-chain wallet management,
              token swapping, NFT minting, and decentralized messaging on the Swop platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <Link
                href="/getting-started/quick-start"
                className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105"
              >
                <Rocket className="w-5 h-5 group-hover:animate-pulse text-white" />
                <span className='text-white'>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white" />
              </Link>

              <Link
                href="https://github.com/your-repo"
                className="group inline-flex items-center space-x-2 px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 font-semibold border-2 border-gray-200 hover:border-gray-300 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>View on GitHub</span>
                <div className="flex items-center space-x-1 ml-2 px-2 py-1 bg-gray-100 rounded-lg">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-bold">1.2k</span>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Navigation</h2>
            <p className="text-lg text-gray-600">Jump to the most important sections</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="group flex flex-col items-center p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${link.color} rounded-xl mb-4 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">
                    {link.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {link.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Core Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the powerful features that make Swop the ultimate Web3 development platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                href={feature.href}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 transform hover:scale-[1.02] overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${feature.iconColor} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${feature.badge === 'New'
                        ? 'bg-green-100 text-green-700'
                        : feature.badge === 'Popular'
                          ? 'bg-orange-100 text-orange-700'
                          : feature.badge === 'Beta'
                            ? 'bg-purple-100 text-purple-700'
                            : feature.badge === 'Secure'
                              ? 'bg-blue-100 text-blue-700'
                              : feature.badge === 'Multi-Chain'
                                ? 'bg-indigo-100 text-indigo-700'
                                : 'bg-gray-100 text-gray-700'
                        }`}>
                        {feature.badge}
                      </span>
                      <span className="text-xs font-medium text-gray-500">{feature.stats}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                    <span className="text-sm">Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="py-16 bg-slate-100 rounded-md">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to build with Swop?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start building your Web3 application today with our comprehensive documentation and powerful APIs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href="/getting-started/quick-start"
              className="group inline-flex items-center space-x-2 px-8 py-4 bg-white hover:bg-gray-50 text-blue-600 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Zap className="w-5 h-5 group-hover:animate-pulse" />
              <span>Get Started Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/api/authentication"
              className="group inline-flex items-center space-x-2 px-8 py-4 border-2 border-white hover:bg-white hover:text-blue-600 text-white font-semibold rounded-2xl transition-all duration-300"
            >
              <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>View API Docs</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

