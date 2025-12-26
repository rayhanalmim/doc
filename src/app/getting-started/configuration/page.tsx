import { Cog, Shield, Database, MessageSquare, CreditCard, Globe, Map } from 'lucide-react';

export default function ConfigurationPage() {
    return (
        <div className="prose prose-gray max-w-none">
            <h1>Configuration Guide</h1>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                <div className="flex">
                    <div className="ml-3">
                        <p className="text-sm text-blue-700">
                            Complete configuration guide for the <strong>Swop Desktop Application</strong>. This guide covers all major system components and their setup.
                        </p>
                    </div>
                </div>
            </div>

            <h2>Environment Variables</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200 my-6">
                <div className="flex items-start gap-4">
                    <Cog className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Complete Environment Variable Reference</h3>
                        <p>Your <code>.env.local</code> file should include these variables based on your requirements:</p>

                        <div className="mt-4">
                            <h4 className="font-semibold text-gray-900">Application URLs</h4>
                            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`# Base URLs for application frontend and API
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=https://app.apiswop.co`}</code></pre>
                        </div>

                        <div className="mt-4">
                            <h4 className="font-semibold text-gray-900">Privy Authentication</h4>
                            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`# Required for embedded wallet functionality
NEXT_PUBLIC_PRIVY_APP_ID=your_privy_app_id
NEXT_PUBLIC_PRIVY_APP_SECRET=your_privy_app_secret`}</code></pre>
                            <p className="mt-2 text-sm text-gray-600">Get these from your <a href="https://console.privy.io" className="text-blue-600 hover:underline">Privy developer dashboard</a>.</p>
                        </div>

                        <div className="mt-4">
                            <h4 className="font-semibold text-gray-900">Blockchain RPC URLs</h4>
                            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`# EVM Networks
NEXT_PUBLIC_ALCHEMY_ETH_URL=https://eth-mainnet.g.alchemy.com/v2/your_key
NEXT_PUBLIC_ALCHEMY_POLYGON_URL=https://polygon-mainnet.g.alchemy.com/v2/your_key
NEXT_PUBLIC_ALCHEMY_BASE_URL=https://base-mainnet.g.alchemy.com/v2/your_key

# Solana Networks
NEXT_PUBLIC_ALCHEMY_SOLANA_URL=https://solana-mainnet.g.alchemy.com/v2/your_key
NEXT_PUBLIC_QUICKNODE_SOLANA_URL=https://your-endpoint.solana-mainnet.quiknode.pro/your_key
NEXT_PUBLIC_HELIUS_API_URL=https://mainnet.helius-rpc.com/?api-key=your_key`}</code></pre>
                        </div>

                        <div className="mt-4">
                            <h4 className="font-semibold text-gray-900">API Keys</h4>
                            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`# Alchemy API Keys
NEXT_PUBLIC_ALCHEMY_ETH_API_KEY=your_key
NEXT_PUBLIC_ALCHEMY_POLYGON_API_KEY=your_key
NEXT_PUBLIC_ALCHEMY_BASE_API_KEY=your_key

# Blockchain Explorer API Keys
NEXT_PUBLIC_ETHERSCAN_API_KEY_TOKEN=your_key
NEXT_PUBLIC_POLYGONSCAN_API_KEY_TOKEN=your_key
NEXT_PUBLIC_BASESCAN_API_KEY_TOKEN=your_key
NEXT_PUBLIC_SOLSCAN_API_KEY=your_key

# Additional Services
NEXT_PUBLIC_COIN_RANKING_API_KEY=your_key
NEXT_PUBLIC_DAS_API_URL=https://aura-mainnet.metaplex.com
NEXT_PUBLIC_BRIDGE_SECRET=your_bridge_secret`}</code></pre>
                        </div>

                        <div className="mt-4">
                            <h4 className="font-semibold text-gray-900">Payment Processing</h4>
                            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`# Stripe API Keys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_key
STRIPE_SECRET_KEY=your_key

# Fee Configuration
NEXT_PUBLIC_FEE_PAYER_ADDRESS=your_fee_payer_address
NEXT_PUBLIC_FEE_PAYER_PRIVATE_KEY=your_fee_payer_private_key`}</code></pre>
                        </div>

                        <div className="mt-4">
                            <h4 className="font-semibold text-gray-900">Google Services</h4>
                            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`# Google Maps & Places API
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=your_key
NEXT_PUBLIC_GOOGLE_API_KEY=your_key`}</code></pre>
                        </div>
                    </div>
                </div>
            </div>

            <h2>Privy Authentication Configuration</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200 my-6">
                <div className="flex items-start gap-4">
                    <Shield className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Authentication Setup</h3>
                        <p>Configure Privy authentication in your application:</p>
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`// pages/_app.tsx
import { PrivyProvider } from '@privy-io/react-auth';

export default function App({ Component, pageProps }) {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID}
      config={{
        loginMethods: ['email', 'wallet'],
        appearance: {
          theme: 'light',
          accentColor: '#3B82F6',
        },
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
        supportedChains: [
          { id: 1, name: 'Ethereum' },
          { id: 137, name: 'Polygon' },
          { id: 8453, name: 'Base' },
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

            <h2>Blockchain Network Configuration</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200 my-6">
                <div className="flex items-start gap-4">
                    <Globe className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Network Setup</h3>
                        <p>Define your blockchain networks with appropriate RPC endpoints:</p>
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`// utils/chains.ts
export const CHAINS = {
  ETHEREUM: {
    id: 1,
    name: 'Ethereum',
    symbol: 'ETH',
    rpcUrl: process.env.NEXT_PUBLIC_ALCHEMY_ETH_URL,
    blockExplorer: 'https://etherscan.io',
  },
  POLYGON: {
    id: 137,
    name: 'Polygon',
    symbol: 'MATIC',
    rpcUrl: process.env.NEXT_PUBLIC_ALCHEMY_POLYGON_URL,
    blockExplorer: 'https://polygonscan.com',
  },
  BASE: {
    id: 8453,
    name: 'Base',
    symbol: 'ETH',
    rpcUrl: process.env.NEXT_PUBLIC_ALCHEMY_BASE_URL,
    blockExplorer: 'https://basescan.org',
  },
  SOLANA: {
    name: 'Solana',
    symbol: 'SOL',
    rpcUrl: process.env.NEXT_PUBLIC_ALCHEMY_SOLANA_URL,
    blockExplorer: 'https://solscan.io',
  },
};`}</code></pre>
                    </div>
                </div>
            </div>

            <h2>XMTP Messaging Configuration</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200 my-6">
                <div className="flex items-start gap-4">
                    <MessageSquare className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold mb-2">XMTP Server Setup</h3>
                        <p>Configure the XMTP messaging server:</p>
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`# Start XMTP Server
cd server
npm install
npm start

# Or from project root
npm run xmtp-server

# Verify server
curl http://localhost:1212/health`}</code></pre>
                    </div>
                </div>
            </div>

            <h2>Payment Processing Setup</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200 my-6">
                <div className="flex items-start gap-4">
                    <CreditCard className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Stripe Configuration</h3>
                        <p>Set up Stripe for payment processing:</p>
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`// utils/stripe.ts
import { loadStripe } from '@stripe/stripe-js';

export const getStripe = async () => {
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  return stripePromise;
};`}</code></pre>
                        <p className="mt-4 text-sm text-gray-600">
                            Set up your Stripe account and API keys at the <a href="https://dashboard.stripe.com/apikeys" className="text-blue-600 hover:underline">Stripe Dashboard</a>.
                        </p>
                    </div>
                </div>
            </div>

            <h2>Google Services Configuration</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200 my-6">
                <div className="flex items-start gap-4">
                    <Map className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Google Maps Integration</h3>
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`// components/Map.tsx
import { GoogleMap, LoadScript } from '@react-google-maps/api';

export const MapComponent = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        center={{ lat: -3.745, lng: -38.523 }}
        zoom={10}
      />
    </LoadScript>
  );
};`}</code></pre>
                        <p className="mt-4 text-sm text-gray-600">
                            Enable the Google Maps and Places APIs in the <a href="https://console.cloud.google.com/" className="text-blue-600 hover:underline">Google Cloud Console</a>.
                        </p>
                    </div>
                </div>
            </div>

            <h2>Database Configuration (Optional)</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200 my-6">
                <div className="flex items-start gap-4">
                    <Database className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold mb-2">PostgreSQL Setup</h3>
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`# Database URL
DATABASE_URL=postgresql://username:password@localhost:5432/swop_dev

# Start PostgreSQL service
# macOS
brew services start postgresql

# Ubuntu
sudo systemctl start postgresql`}</code></pre>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 mt-8">
                <h2 className="text-xl font-semibold mb-4">Additional Resources</h2>
                <ul className="space-y-2">
                    <li>• <a href="https://docs.privy.io" className="text-blue-600 hover:underline">Privy Documentation</a></li>
                    <li>• <a href="https://docs.alchemy.com" className="text-blue-600 hover:underline">Alchemy Documentation</a></li>
                    <li>• <a href="https://docs.helius.xyz" className="text-blue-600 hover:underline">Helius Documentation</a></li>
                    <li>• <a href="https://stripe.com/docs" className="text-blue-600 hover:underline">Stripe Documentation</a></li>
                </ul>
            </div>
        </div>
    );
} 