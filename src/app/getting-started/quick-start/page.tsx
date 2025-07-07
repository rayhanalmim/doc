import { ArrowRight, Key, Wallet, Globe, CreditCard, Download, Terminal, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function QuickStartPage() {
    return (
        <div className="prose prose-gray max-w-none">
            <h1>Quick Start Guide</h1>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                <div className="flex">
                    <div className="ml-3">
                        <p className="text-sm text-blue-700">
                            Get started with the <strong>Swop Desktop Application</strong> in minutes. This guide covers essential setup and basic usage.
                            Swop uses an <strong>embedded Privy wallet</strong>, so <em>no external wallet extensions (MetaMask, Phantom, etc.) are required</em>.
                        </p>
                    </div>
                </div>
            </div>

            <h2>Prerequisites</h2>
            <ul>
                <li>Node.js 18+ and npm/yarn installed</li>
                <li>Git for cloning the repository</li>
                <li>Access to required API keys (detailed below)</li>
                <li>Basic understanding of Web3 concepts</li>
            </ul>

            <h2>1. Project Setup</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200 my-6">
                <div className="flex items-start gap-4">
                    <Download className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Clone & Install</h3>
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`# Clone the repository
git clone https://github.com/your-org/swop.git
cd swop

# Install dependencies
npm install
# or with yarn
yarn install`}</code></pre>
                    </div>
                </div>
            </div>

            <h2>2. Environment Configuration</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200 my-6">
                <div className="flex items-start gap-4">
                    <Key className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold mb-2">API Keys & Environment Variables</h3>
                        <p>Create a <code>.env.local</code> file in the project root with the following variables:</p>
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`# Application URLs
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=https://app.apiswop.co

# Authentication & Security (Privy embedded wallet)
NEXT_PUBLIC_PRIVY_APP_ID=your_privy_app_id
NEXT_PUBLIC_PRIVY_APP_SECRET=your_privy_app_secret

# Blockchain RPC URLs (EVM Networks)
NEXT_PUBLIC_ALCHEMY_ETH_URL=https://eth-mainnet.g.alchemy.com/v2/your_key
NEXT_PUBLIC_ALCHEMY_POLYGON_URL=https://polygon-mainnet.g.alchemy.com/v2/your_key
NEXT_PUBLIC_ALCHEMY_BASE_URL=https://base-mainnet.g.alchemy.com/v2/your_key

# Blockchain RPC URLs (Solana Networks)
NEXT_PUBLIC_ALCHEMY_SOLANA_URL=https://solana-mainnet.g.alchemy.com/v2/your_key
NEXT_PUBLIC_QUICKNODE_SOLANA_URL=https://your-endpoint.solana-mainnet.quiknode.pro/your_key
NEXT_PUBLIC_HELIUS_API_URL=https://mainnet.helius-rpc.com/?api-key=your_key

# Alchemy API Keys
NEXT_PUBLIC_ALCHEMY_ETH_API_KEY=your_key
NEXT_PUBLIC_ALCHEMY_POLYGON_API_KEY=your_key
NEXT_PUBLIC_ALCHEMY_BASE_API_KEY=your_key

# Blockchain Explorer API Keys
NEXT_PUBLIC_ETHERSCAN_API_KEY_TOKEN=your_key
NEXT_PUBLIC_POLYGONSCAN_API_KEY_TOKEN=your_key
NEXT_PUBLIC_BASESCAN_API_KEY_TOKEN=your_key
NEXT_PUBLIC_SOLSCAN_API_KEY=your_key

# Wallet Configuration
NEXT_PUBLIC_FEE_PAYER_ADDRESS=your_fee_payer_address
NEXT_PUBLIC_FEE_PAYER_PRIVATE_KEY=your_fee_payer_private_key

# Google API Configuration
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=your_key

# Payments
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_key
STRIPE_SECRET_KEY=your_key

# Additional Services
NEXT_PUBLIC_COIN_RANKING_API_KEY=your_key
NEXT_PUBLIC_DAS_API_URL=https://aura-mainnet.metaplex.com
NEXT_PUBLIC_BRIDGE_SECRET=your_bridge_secret`}</code></pre>
                        <div className="mt-4 text-sm bg-yellow-50 p-4 rounded-lg">
                            <p className="font-semibold">⚠️ Security Note:</p>
                            <p>Never commit your <code>.env.local</code> file to version control. It contains sensitive credentials that should remain private.</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2>3. Start the Application</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200 my-6">
                <div className="flex items-start gap-4">
                    <Terminal className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Run Development Server</h3>
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`# Start the development server
npm run dev

# With XMTP messaging server
npm run dev-with-xmtp`}</code></pre>
                        <p className="mt-3">Visit <code>http://localhost:3000</code> in your browser to access the application.</p>
                        <p>Test the Privy authentication by visiting <code>/debug-privy</code> route.</p>
                    </div>
                </div>
            </div>

            <h2>4. Wallet Integration</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200 my-6">
                <div className="flex items-start gap-4">
                    <Wallet className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Privy Embedded Wallet</h3>
                        <p>Swop uses Privy's embedded wallet system for secure authentication and wallet management:</p>
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`import { usePrivy, useWallets } from '@privy-io/react-auth';

// Access authentication state
const { login, authenticated, user } = usePrivy();

// Access wallet information
const { wallets } = useWallets();
const ethereumWallet = wallets.find(
    wallet => wallet.type === 'ethereum'
);

// Handle transactions
async function sendTransaction() {
    const provider = await ethereumWallet.getEthereumProvider();
    // Your transaction logic here
}`}</code></pre>
                    </div>
                </div>
            </div>

            <h2>5. Network Configuration</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200 my-6">
                <div className="flex items-start gap-4">
                    <Globe className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Multi-Chain Support</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-semibold">EVM Networks</h4>
                                <ul className="list-disc list-inside">
                                    <li>Ethereum Mainnet</li>
                                    <li>Polygon</li>
                                    <li>Base</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold">Solana</h4>
                                <ul className="list-disc list-inside">
                                    <li>Mainnet via Alchemy</li>
                                    <li>Mainnet via QuickNode</li>
                                    <li>Mainnet via Helius</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h2>6. Payment Integration</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200 my-6">
                <div className="flex items-start gap-4">
                    <CreditCard className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Stripe Setup</h3>
                        <p>Swop supports traditional payment processing with Stripe:</p>
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`// Initialize Stripe client
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

// Process payment
const handlePayment = async () => {
  const stripe = await stripePromise;
  // Your payment logic here
};`}</code></pre>
                    </div>
                </div>
            </div>

            <h2>Complete Usage Example</h2>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6"><code>{`import { useWallets, usePrivy } from '@privy-io/react-auth';
import { useState } from 'react';

export default function WalletDashboard() {
    const { login, logout, authenticated, user } = usePrivy();
    const { wallets } = useWallets();
    const [balance, setBalance] = useState(null);
    
    // Get the first EVM wallet
    const evmWallet = wallets?.find(wallet => wallet.type === 'ethereum');
    
    const checkBalance = async () => {
        if (!evmWallet) return;
        
        const provider = await evmWallet.getEthereumProvider();
        const ethersProvider = new ethers.providers.Web3Provider(provider);
        const balanceWei = await ethersProvider.getBalance(evmWallet.address);
        setBalance(ethers.utils.formatEther(balanceWei));
    };

    return (
        <div>
            {authenticated ? (
                <div>
                    <h2>Connected Wallet: {evmWallet?.address}</h2>
                    <button onClick={checkBalance}>Check Balance</button>
                    {balance && <p>Balance: {balance} ETH</p>}
                    <button onClick={logout}>Disconnect</button>
                </div>
            ) : (
                <button onClick={login}>Connect Wallet</button>
            )}
        </div>
    );
}`}</code></pre>

            <h2>Key System Components</h2>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 my-6">
                <ul className="space-y-3">
                    <li><strong>Authentication System:</strong> Privy-powered embedded wallet with multi-chain support</li>
                    <li><strong>SmartSite System:</strong> Create customizable Web3 microsites with blockchain integration</li>
                    <li><strong>XMTP Messaging:</strong> Decentralized wallet-to-wallet messaging system</li>
                    <li><strong>Token Swapping:</strong> Jupiter Exchange integration for Solana token swaps</li>
                    <li><strong>NFT Minting:</strong> Multi-chain NFT creation and management</li>
                    <li><strong>E-commerce Platform:</strong> Integrated product catalog with crypto and fiat payments</li>
                </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 mt-8">
                <h2 className="text-xl font-semibold mb-4">Next Steps</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/architecture/overview" className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-all">
                        <span className="font-medium">System Architecture</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link href="/getting-started/configuration" className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-all">
                        <span className="font-medium">Advanced Configuration</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
