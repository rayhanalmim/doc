import { Terminal, Shield, Cog, Wallet, ArrowRight } from 'lucide-react';

export default function InstallationPage() {
    return (
        <div className="prose prose-gray max-w-none">
            <h1>Installation Guide</h1>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                <div className="flex">
                    <div className="ml-3">
                        <p className="text-sm text-blue-700">
                            Complete guide to install and configure the <strong>Swop Desktop Application</strong> for local development.
                        </p>
                    </div>
                </div>
            </div>

            <h2>Prerequisites</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
                        <Terminal className="w-5 h-5 text-blue-600" />
                        Required Software
                    </h3>
                    <ul className="space-y-2">
                        <li>Node.js 18.0.0 or higher</li>
                        <li>npm 9.0.0 or yarn 1.22.0+</li>
                        <li>Git for version control</li>
                        <li>VS Code (recommended)</li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
                        <Cog className="w-5 h-5 text-blue-600" />
                        System Requirements
                    </h3>
                    <ul className="space-y-2">
                        <li>OS: Windows 10+, macOS 10.15+, or Linux</li>
                        <li>RAM: 8GB minimum (16GB recommended)</li>
                        <li>Storage: 5GB free space</li>
                        <li>Stable internet connection</li>
                    </ul>
                </div>
            </div>

            <h2>Installation Steps</h2>

            <div className="space-y-8">
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <h3 className="text-lg font-semibold mb-4">1. Clone the Repository</h3>
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`# Clone the repository
git clone https://github.com/your-repo/swop-desktop-app.git
cd swop-desktop-app`}</code></pre>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <h3 className="text-lg font-semibold mb-4">2. Install Dependencies</h3>
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`# Using npm
npm install

# Or using yarn
yarn install`}</code></pre>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <h3 className="text-lg font-semibold mb-4">3. Environment Setup</h3>
                    <p className="mb-4">Create a <code>.env.local</code> file in the root directory with the following variables:</p>
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`# Application URLs
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=https://app.apiswop.co

# Authentication & Security
NEXT_PUBLIC_PRIVY_APP_ID=your_privy_app_id
NEXT_PUBLIC_PRIVY_APP_SECRET=your_privy_app_secret

# Blockchain RPC URLs
## EVM Networks
NEXT_PUBLIC_ALCHEMY_ETH_URL=your_eth_rpc_url
NEXT_PUBLIC_ALCHEMY_POLYGON_URL=your_polygon_rpc_url
NEXT_PUBLIC_ALCHEMY_BASE_URL=your_base_rpc_url

## Solana Networks
NEXT_PUBLIC_ALCHEMY_SOLANA_URL=your_solana_alchemy_url
NEXT_PUBLIC_QUICKNODE_SOLANA_URL=your_solana_quicknode_url
NEXT_PUBLIC_HELIUS_API_URL=your_helius_api_url

# Alchemy API Keys
NEXT_PUBLIC_ALCHEMY_ETH_API_KEY=your_eth_api_key
NEXT_PUBLIC_ALCHEMY_POLYGON_API_KEY=your_polygon_api_key
NEXT_PUBLIC_ALCHEMY_BASE_API_KEY=your_base_api_key

# Blockchain Explorer API Keys
NEXT_PUBLIC_ETHERSCAN_API_KEY_TOKEN=your_etherscan_key
NEXT_PUBLIC_POLYGONSCAN_API_KEY_TOKEN=your_polygonscan_key
NEXT_PUBLIC_BASESCAN_API_KEY_TOKEN=your_basescan_key
NEXT_PUBLIC_SOLSCAN_API_KEY=your_solscan_key

# Additional Services
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=your_google_places_key
NEXT_PUBLIC_COIN_RANKING_API_KEY=your_coinranking_key

# Payment Processing
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key
STRIPE_SECRET_KEY=your_stripe_secret

# Development Configuration
NODE_ENV=development
NEXT_PUBLIC_IGNORE_BUILD_ERROR=true`}</code></pre>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <h3 className="text-lg font-semibold mb-4">4. Start Development Server</h3>
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`# Using npm
npm run dev

# Or using yarn
yarn dev

# The app will be available at http://localhost:3000`}</code></pre>
                </div>
            </div>

            <h2>Security Configuration</h2>

            <div className="bg-white p-6 rounded-xl border border-gray-200 my-6">
                <div className="flex items-start gap-4">
                    <Shield className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Security Best Practices</h3>
                        <ul className="space-y-2">
                            <li>Never commit <code>.env</code> files to version control</li>
                            <li>Use environment-specific API keys for development/production</li>
                            <li>Keep Node.js and npm packages updated</li>
                            <li>Review security settings in <code>next.config.js</code></li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2>Wallet Setup</h2>

            <div className="bg-white p-6 rounded-xl border border-gray-200 my-6">
                <div className="flex items-start gap-4">
                    <Wallet className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Development Wallet Configuration</h3>
                        <p>For local development, you'll need:</p>
                        <ul className="space-y-2">
                            <li>Ethereum wallet (MetaMask recommended)</li>
                            <li>Solana wallet (Phantom recommended)</li>
                            <li>Test tokens on supported networks</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2>Privy Authentication Setup</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200 my-6">
                <div className="flex items-start gap-4">
                    <Shield className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Privy Configuration</h3>
                        <p className="mb-4">Configure Privy authentication in your application:</p>
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`// pages/_app.tsx
import { PrivyProvider } from '@privy-io/react-auth';

function MyApp({ Component, pageProps }) {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID}
      config={{
        loginMethods: ['email', 'wallet'],
        appearance: {
          theme: 'light',
          accentColor: '#3B82F6',
        },
        supportedChains: [
          'ethereum',
          'polygon',
          'base',
          'solana'
        ],
      }}
    >
      <Component {...pageProps} />
    </PrivyProvider>
  );
}`}</code></pre>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 mt-8">
                <h2 className="text-xl font-semibold mb-4">Next Steps</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a href="/getting-started/quick-start" className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-all">
                        <span className="font-medium">Quick Start Guide</span>
                        <ArrowRight className="w-4 h-4" />
                    </a>
                    <a href="/getting-started/configuration" className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-all">
                        <span className="font-medium">Configuration Guide</span>
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>
    );
} 