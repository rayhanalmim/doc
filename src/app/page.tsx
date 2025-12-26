import Link from 'next/link';
import {
  Zap,
  ArrowRight,
  CreditCard,
  FileText,
  Activity,
  RotateCcw,
  Globe,
  Lock,
  CheckCircle,
  Code
} from 'lucide-react';
import { PageNavigation } from '@/components/PageNavigation';

export default function HomePage() {
  const apiEndpoints = [
    {
      title: 'Create Payment',
      description: 'Generate a new payment request with QR code for customers to scan and pay via Tahweel app.',
      icon: <CreditCard className="w-6 h-6" />,
      href: '/api/create-payment',
      method: 'POST',
      color: 'from-pink-500 to-pink-600',
      iconColor: 'from-pink-400 to-pink-500'
    },
    {
      title: 'Payment Details',
      description: 'Retrieve complete transaction details including customer info, products, and webhook status.',
      icon: <FileText className="w-6 h-6" />,
      href: '/api/payment-details',
      method: 'GET',
      color: 'from-emerald-500 to-green-600',
      iconColor: 'from-emerald-400 to-green-500'
    },
    {
      title: 'Payment Status',
      description: 'Check the current status of a payment. Use for polling or as an alternative to webhooks.',
      icon: <Activity className="w-6 h-6" />,
      href: '/api/payment-status',
      method: 'GET',
      color: 'from-blue-500 to-blue-600',
      iconColor: 'from-blue-400 to-blue-500'
    },
    {
      title: 'Refund Payment',
      description: 'Process a full refund for completed payments. Funds are returned to customer Tahweel wallet.',
      icon: <RotateCcw className="w-6 h-6" />,
      href: '/api/refund',
      method: 'POST',
      color: 'from-orange-500 to-orange-600',
      iconColor: 'from-orange-400 to-orange-500'
    },
  ];

  const quickLinks = [
    {
      title: 'Authentication',
      href: '/authentication',
      icon: <Lock className="w-4 h-4" />,
      color: 'from-pink-500 to-pink-600'
    },
    {
      title: 'Create Payment',
      href: '/api/create-payment',
      icon: <CreditCard className="w-4 h-4" />,
      color: 'from-emerald-500 to-green-500'
    },
    {
      title: 'Merchant Dashboard',
      href: 'https://merchant.tahweel.io',
      icon: <Globe className="w-4 h-4" />,
      color: 'from-blue-500 to-indigo-500'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-pink-50/25">
        <div className="relative max-w-7xl mx-auto px-6 ">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-pink-100 to-pink-50 border border-pink-200 rounded-full mb-8">
              <Code className="w-4 h-4 text-pink-600" />
              <span className="text-sm font-medium text-pink-700">Merchant API Documentation v1.0</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-pink-900 to-pink-800 bg-clip-text text-transparent">
                Tahweel Merchant
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">
                API Documentation
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Complete developer guide for integrating Tahweel payment solutions.
              Accept QR code payments, check transaction status, and process refunds.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <Link
                href="/authentication"
                className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-700 hover:to-pink-600 text-white font-semibold rounded-2xl shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-300 transform hover:scale-105 no-underline"
              >
                <Zap className="w-5 h-5 group-hover:animate-pulse text-white" />
                <span className='text-white'>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white" />
              </Link>

              <Link
                href="https://merchant.tahweel.io"
                className="group inline-flex items-center space-x-2 px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 font-semibold border-2 border-gray-200 hover:border-gray-300 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 no-underline"
              >
                <Globe className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Merchant Dashboard</span>
              </Link>
            </div>

            {/* Features highlights */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>RESTful API</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Sandbox Testing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Webhook Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Multi-Currency</span>
              </div>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="group flex flex-col items-center p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300 no-underline"
              >
                <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${link.color} rounded-xl  group-hover:scale-110 transition-transform`}>
                  <div className="text-white">
                    {link.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">
                  {link.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* API Endpoints Grid */}
      <div className="py-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              API Endpoints
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the available API endpoints for Tahweel merchant payment integration
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {apiEndpoints.map((endpoint, index) => (
              <Link
                key={index}
                href={endpoint.href}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 transform hover:scale-[1.02] overflow-hidden no-underline"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${endpoint.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${endpoint.iconColor} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {endpoint.icon}
                      </div>
                    </div>
                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${endpoint.method === 'POST'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-green-100 text-green-700'
                      }`}>
                      {endpoint.method}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                    {endpoint.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {endpoint.description}
                  </p>

                  <div className="flex items-center text-pink-600 font-medium group-hover:text-pink-700">
                    <span className="text-sm">View Documentation</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Base URLs */}
      <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-pink-100 border border-pink-200 rounded-full mb-6">
              <Globe className="w-4 h-4 text-pink-600" />
              <span className="text-sm font-medium text-pink-700">API Endpoints</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Base URLs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the appropriate environment for your integration. Use Sandbox for testing and Production for live transactions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative bg-white border-2 border-green-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ">
              <div className="absolute -top-4 left-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  LIVE ENVIRONMENT
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6 mt-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg transition-transform">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Production</h3>
                  <p className="text-gray-600">For live transactions</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-4 mb-6">
                <code className="text-green-800 font-mono text-lg block break-all">
                  https://connect.tahweel.io
                </code>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Real money transactions</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Production API credentials</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Live monitoring</span>
                </div>
              </div>
            </div>

            <div className="group relative bg-white border-2 border-orange-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ">
              <div className="absolute -top-4 left-8 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  TEST ENVIRONMENT
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6 mt-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg  transition-transform">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Sandbox</h3>
                  <p className="text-gray-600">For testing & development</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-2xl p-4 mb-6">
                <code className="text-orange-800 font-mono text-lg block break-all">
                  https://connect.tahweel.io
                </code>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-orange-500" />
                  <span>No real money</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-orange-500" />
                  <span>Sandbox API credentials</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-orange-500" />
                  <span>Full API features</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-6 text-center">
            <p className="text-purple-800 font-medium">
              💡 <strong>Same URL, Different Keys:</strong> Both environments use the same API endpoint. 
              The environment is automatically detected based on which API credentials you use.
            </p>
          </div>


        </div>
      </div>


      {/* Page Navigation */}
      <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <PageNavigation
            previous={null}
            next={{ title: 'Authentication', href: '/authentication' }}
          />
        </div>
      </div>
    </div>
  );
}

