import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Authentication System - Swop Docs',
    description: 'Comprehensive guide to Swop authentication system with Privy integration',
};

export default function AuthenticationPage() {
    return (
        <div className="prose prose-gray max-w-none">
            <h1>Authentication System</h1>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                <div className="flex">
                    <div className="ml-3">
                        <p className="text-sm text-blue-700">
                            Swop uses <strong>Privy Auth</strong> for secure wallet connection and user authentication across multiple blockchain networks.
                        </p>
                    </div>
                </div>
            </div>

            <h2>Overview</h2>
            <p>
                The authentication system provides seamless wallet connection for both EVM chains (Ethereum, Polygon, Base)
                and Solana. It handles user onboarding, wallet management, and secure session management.
            </p>

            <h2>Technology Stack</h2>
            <ul>
                <li><strong>Privy Auth</strong>: Primary authentication provider</li>
                <li><strong>Ethers.js</strong>: EVM wallet interaction</li>
                <li><strong>Solana Web3.js</strong>: Solana wallet interaction</li>
                <li><strong>Next.js Server Auth</strong>: Server-side authentication</li>
            </ul>

            <h2>Supported Wallets</h2>

            <h3>EVM Wallets</h3>
            <ul>
                <li>MetaMask</li>
                <li>WalletConnect</li>
                <li>Coinbase Wallet</li>
                <li>Embedded Wallets</li>
            </ul>

            <h3>Solana Wallets</h3>
            <ul>
                <li>Phantom</li>
                <li>Solflare</li>
                <li>Other Solana adapters</li>
            </ul>

            <h2>Implementation</h2>

            <h3>Privy Provider Setup</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`// components/PrivyProvider.tsx
import { PrivyProvider } from '@privy-io/react-auth';

export default function CustomPrivyProvider({ children }: { children: React.ReactNode }) {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ''}
      config={{
        appearance: {
          theme: 'light',
          accentColor: '#676FFF',
        },
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
        loginMethods: ['wallet', 'email', 'sms'],
        supportedChains: [
          // Ethereum Mainnet
          { id: 1, name: 'Ethereum', rpc: 'https://mainnet.infura.io/v3/...' },
          // Polygon
          { id: 137, name: 'Polygon', rpc: 'https://polygon-rpc.com' },
          // Base
          { id: 8453, name: 'Base', rpc: 'https://mainnet.base.org' },
        ],
      }}
    >
      {children}
    </PrivyProvider>
  );
}`}</code>
            </pre>

            <h3>Authentication Hook Usage</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`// Using Privy authentication hooks
import { usePrivy, useWallets, useSolanaWallets } from '@privy-io/react-auth';

export function WalletConnection() {
  const { login, logout, authenticated, user } = usePrivy();
  const { wallets } = useWallets();
  const { wallets: solanaWallets } = useSolanaWallets();

  const evmWallet = wallets.find(wallet => wallet.walletClientType === 'privy');
  const solanaWallet = solanaWallets[0];

  return (
    <div>
      {!authenticated ? (
        <button onClick={login}>Connect Wallet</button>
      ) : (
        <div>
          <p>Connected as: {user?.wallet?.address}</p>
          <p>EVM Wallet: {evmWallet?.address}</p>
          <p>Solana Wallet: {solanaWallet?.address}</p>
          <button onClick={logout}>Disconnect</button>
        </div>
      )}
    </div>
  );
}`}</code>
            </pre>

            <h3>Server-Side Authentication</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`// middleware.ts - Server-side auth verification
import { verifyToken } from '@privy-io/server-auth';

export async function middleware(request: NextRequest) {
  const authToken = request.headers.get('authorization')?.replace('Bearer ', '');
  
  if (!authToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    const verifiedClaims = await verifyToken(
      authToken,
      process.env.NEXT_PUBLIC_PRIVY_APP_ID!,
      process.env.PRIVY_APP_SECRET!
    );
    
    // Add user info to request headers
    const response = NextResponse.next();
    response.headers.set('x-user-id', verifiedClaims.userId);
    return response;
  } catch (error) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}`}</code>
            </pre>

            <h2>Authentication Flow</h2>

            <div className="bg-gray-50 p-6 rounded-lg my-6">
                <h4 className="text-lg font-semibold mb-4">Step-by-Step Process</h4>
                <ol className="list-decimal list-inside space-y-2">
                    <li>User clicks "Connect Wallet" button</li>
                    <li>Privy modal opens with wallet options</li>
                    <li>User selects preferred wallet (MetaMask, Phantom, etc.)</li>
                    <li>Wallet prompts for connection approval</li>
                    <li>Privy creates authenticated session</li>
                    <li>User is redirected to dashboard</li>
                    <li>Session persists across browser refreshes</li>
                </ol>
            </div>

            <h2>Multi-Chain Support</h2>

            <h3>Chain Configuration</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`// types/config.ts - Supported chains
export const CHAINS = {
  ETHEREUM: {
    id: 1,
    name: 'Ethereum',
    symbol: 'ETH',
    rpcUrl: 'https://mainnet.infura.io/v3/...',
    alchemyUrl: 'https://eth-mainnet.g.alchemy.com/v2/...',
    blockExplorer: 'https://etherscan.io',
  },
  POLYGON: {
    id: 137,
    name: 'Polygon',
    symbol: 'MATIC',
    rpcUrl: 'https://polygon-rpc.com',
    alchemyUrl: 'https://polygon-mainnet.g.alchemy.com/v2/...',
    blockExplorer: 'https://polygonscan.com',
  },
  BASE: {
    id: 8453,
    name: 'Base',
    symbol: 'ETH',
    rpcUrl: 'https://mainnet.base.org',
    alchemyUrl: 'https://base-mainnet.g.alchemy.com/v2/...',
    blockExplorer: 'https://basescan.org',
  },
  SOLANA: {
    name: 'Solana',
    symbol: 'SOL',
    rpcUrl: 'https://api.mainnet-beta.solana.com',
    blockExplorer: 'https://solscan.io',
  },
};`}</code>
            </pre>

            <h2>Security Features</h2>

            <ul>
                <li><strong>Token-based Authentication</strong>: Secure JWT tokens</li>
                <li><strong>Session Management</strong>: Automatic session refresh</li>
                <li><strong>Wallet Verification</strong>: Signature-based verification</li>
                <li><strong>CSRF Protection</strong>: Built-in CSRF token validation</li>
                <li><strong>Rate Limiting</strong>: API request rate limiting</li>
            </ul>

            <h2>Error Handling</h2>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                <h4 className="font-semibold text-yellow-800">Common Authentication Errors</h4>
                <ul className="mt-2 text-yellow-700">
                    <li><strong>Wallet Rejected</strong>: User rejected wallet connection</li>
                    <li><strong>Network Mismatch</strong>: Wrong network selected in wallet</li>
                    <li><strong>Session Expired</strong>: Authentication token expired</li>
                    <li><strong>Wallet Locked</strong>: Wallet is locked or unavailable</li>
                </ul>
            </div>

            <h2>Best Practices</h2>

            <ul>
                <li>Always check authentication status before wallet operations</li>
                <li>Handle wallet disconnection gracefully</li>
                <li>Provide clear error messages for failed connections</li>
                <li>Implement retry logic for network failures</li>
                <li>Cache user preferences for better UX</li>
            </ul>

            <h2>Next Steps</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <a href="/features/wallet" className="block p-4 border rounded-lg hover:bg-gray-50">
                    <h3 className="font-semibold text-blue-600">Wallet Management →</h3>
                    <p className="text-sm text-gray-600">Learn about multi-chain wallet functionality</p>
                </a>
                <a href="/features/swapping" className="block p-4 border rounded-lg hover:bg-gray-50">
                    <h3 className="font-semibold text-blue-600">Token Swapping →</h3>
                    <p className="text-sm text-gray-600">Explore Jupiter Exchange integration</p>
                </a>
            </div>
        </div>
    );
} 