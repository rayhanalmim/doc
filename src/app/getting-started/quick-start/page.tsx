import { ArrowRight, Key, Wallet, Globe, CreditCard } from 'lucide-react';
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
                        </p>
                    </div>
                </div>
            </div>

            <h2>Prerequisites</h2>
            <ul>
                <li>Node.js 18+ and npm/yarn installed</li>
                <li>Access to required API keys (detailed below)</li>
                <li>Basic understanding of Web3 concepts</li>
            </ul>

            <h2>1. API Keys Setup</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200 my-6">
                <div className="flex items-start gap-4">
                    <Key className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Required API Keys</h3>
                        <ul className="space-y-2">
                            <li><strong>Privy:</strong> Authentication and wallet management
                                <ul>
                                    <li>NEXT_PUBLIC_PRIVY_APP_ID</li>
                                    <li>NEXT_PUBLIC_PRIVY_APP_SECRET</li>
                                </ul>
                            </li>
                            <li><strong>RPC Providers:</strong>
                                <ul>
                                    <li>Alchemy (ETH, Polygon, Base, Solana)</li>
                                    <li>QuickNode (Solana)</li>
                                    <li>Helius (Solana)</li>
                                </ul>
                            </li>
                            <li><strong>Additional Services:</strong>
                                <ul>
                                    <li>Stripe (Payments)</li>
                                    <li>Google Maps/Places</li>
                                    <li>CoinRanking</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2>2. Wallet Integration</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200 my-6">
                <div className="flex items-start gap-4">
                    <Wallet className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Privy Wallet Setup</h3>
                        <p>Swop uses Privy for wallet management. Basic implementation:</p>
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`import { useWallets } from '@privy-io/react-auth';

// Initialize Privy in your app
const { wallets } = useWallets();

// Access wallet
const ethereumWallet = wallets.find(
    wallet => wallet.type === 'ethereum'
);

// Handle transactions
const provider = await ethereumWallet.getEthereumProvider();`}</code></pre>
                    </div>
                </div>
            </div>

            <h2>3. Network Configuration</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200 my-6">
                <div className="flex items-start gap-4">
                    <Globe className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Supported Networks</h3>
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

            <h2>4. Payment Integration</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200 my-6">
                <div className="flex items-start gap-4">
                    <CreditCard className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Stripe Setup</h3>
                        <p>Configure Stripe for traditional payment processing:</p>
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`// Environment variables needed:
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_publishable_key
STRIPE_SECRET_KEY=your_secret_key`}</code></pre>
                    </div>
                </div>
            </div>

            <h2>Basic Usage Example</h2>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6"><code>{`import { useWallets } from '@privy-io/react-auth';
import { usePrivy } from '@privy-io/react-auth';

export default function YourComponent() {
    const { wallets } = useWallets();
    const { user, authenticated } = usePrivy();

    const handleTransaction = async () => {
        const wallet = wallets[0];
        const provider = await wallet.getEthereumProvider();
        // Your transaction logic here
    };

    return (
        <div>
            {authenticated ? (
                <button onClick={handleTransaction}>
                    Send Transaction
                </button>
            ) : (
                <button onClick={() => login()}>
                    Connect Wallet
                </button>
            )}
        </div>
    );
}`}</code></pre>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 mt-8">
            <h2 className="text-xl font-semibold mb-4">Next Steps</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/architecture/overview" className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-all">
                        <span className="font-medium">Overview</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link href="/getting-started/installation" className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-all">
                        <span className="font-medium">Installation</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
