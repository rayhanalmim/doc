import { Cog, Shield, Database, MessageSquare, CreditCard, Wallet } from 'lucide-react';

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

            <h2>Blockchain Network Configuration</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200 my-6">
                <div className="flex items-start gap-4">
                    <Wallet className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Network Setup</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold">EVM Networks</h4>
                                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`# Ethereum
NEXT_PUBLIC_ALCHEMY_ETH_URL=
NEXT_PUBLIC_ALCHEMY_ETH_API_KEY=

# Polygon
NEXT_PUBLIC_ALCHEMY_POLYGON_URL=
NEXT_PUBLIC_ALCHEMY_POLYGON_API_KEY=

# Base
NEXT_PUBLIC_ALCHEMY_BASE_URL=
NEXT_PUBLIC_ALCHEMY_BASE_API_KEY=`}</code></pre>
                            </div>
                            <div>
                                <h4 className="font-semibold">Solana Networks</h4>
                                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`# Solana RPC URLs
NEXT_PUBLIC_ALCHEMY_SOLANA_URL=
NEXT_PUBLIC_QUICKNODE_SOLANA_URL=
NEXT_PUBLIC_HELIUS_API_URL=`}</code></pre>
                            </div>
                        </div>
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
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`# Stripe API Keys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=

# Platform Fee Configuration
NEXT_PUBLIC_FEE_PAYER_ADDRESS=
NEXT_PUBLIC_FEE_PAYER_PRIVATE_KEY=`}</code></pre>
                    </div>
                </div>
            </div>

            <h2>Development Tools Configuration</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200 my-6">
                <div className="flex items-start gap-4">
                    <Cog className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold mb-2">VS Code Settings</h3>
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative"
}`}</code></pre>

                        <h3 className="text-lg font-semibold mt-6 mb-2">Git Configuration</h3>
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`# Install Git hooks
npm install -g husky
npx husky install

# Configure commit message template
git config --global commit.template .gitmessage`}</code></pre>
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
                    <li>• <a href="https://docs.privy.io">Privy Documentation</a></li>
                    <li>• <a href="https://docs.alchemy.com">Alchemy Documentation</a></li>
                    <li>• <a href="https://docs.helius.xyz">Helius Documentation</a></li>
                    <li>• <a href="https://stripe.com/docs">Stripe Documentation</a></li>
                </ul>
            </div>
        </div>
    );
} 