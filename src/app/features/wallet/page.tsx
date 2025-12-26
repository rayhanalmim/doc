import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Wallet Management - Swop Docs',
    description: 'Complete guide to multi-chain wallet management in Swop',
};

export default function WalletPage() {
    return (
        <div className="prose prose-gray max-w-none">
            <h1>Wallet Management</h1>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                <div className="flex">
                    <div className="ml-3">
                        <p className="text-sm text-blue-700">
                            Swop provides comprehensive multi-chain wallet management with support for <strong>Ethereum, Polygon, Base, and Solana</strong> networks.
                        </p>
                    </div>
                </div>
            </div>

            <h2>Overview</h2>
            <p>
                The wallet system manages token balances, NFT collections, transaction history, and portfolio analytics
                across multiple blockchain networks. It provides real-time data updates and seamless network switching.
            </p>

            <h2>Supported Networks</h2>

            <div className="grid grid-cols-2 gap-4 my-6">
                <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold">EVM Chains</h3>
                    <ul className="list-disc list-inside mt-2">
                        <li>Ethereum Mainnet</li>
                        <li>Polygon (MATIC)</li>
                        <li>Base</li>
                    </ul>
                </div>
                <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold">Non-EVM Chains</h3>
                    <ul className="list-disc list-inside mt-2">
                        <li>Solana</li>
                        <li>SPL Token Support</li>
                        <li>Solana NFTs</li>
                    </ul>
                </div>
            </div>

            <h2>Token Management</h2>

            <h3>Multi-Chain Token Service</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`// services/token-service.ts
export class TokenAPIService {
  // Get EVM token balances using Alchemy
  static async getTokenBalances(chain: EVMChain, address: string) {
    const response = await fetch(CHAINS[chain].alchemyUrl!, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'alchemy_getTokenBalances',
        params: [address, 'erc20'],
        id: 42,
      }),
    });
    
    const { result } = await response.json();
    return result.tokenBalances?.filter(
      (token: { tokenBalance: string }) => BigInt(token.tokenBalance) > 0
    ) || [];
  }

  // Get market data from Coinranking
  static async getMarketData(params: {
    address?: string;
    uuid?: string;
  }): Promise<MarketData | null> {
    const queryParam = params.address
      ? \`contractAddresses[]=\${params.address}\`
      : \`uuids[]=\${params.uuid}\`;

    const response = await fetch(
      \`https://api.coinranking.com/v2/coins?\${queryParam}\`,
      {
        headers: {
          'x-access-token': process.env.NEXT_PUBLIC_COIN_RANKING_API_KEY || '',
        },
      }
    );
    
    const result = await response.json();
    return result.data.coins[0] || null;
  }
}`}</code>
            </pre>

            <h3>Solana Token Management</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`// services/token-service.ts - Solana Service
export class SolanaService {
  static async getSplTokens(walletAddress: string) {
    const connection = new Connection(
      process.env.NEXT_PUBLIC_QUICKNODE_SOLANA_URL || clusterApiUrl('mainnet-beta'),
      'confirmed'
    );

    // Get both regular and Token-2022 accounts
    const [regularTokens, token2022s] = await Promise.all([
      this.getTokenAccounts(connection, walletAddress, TOKEN_PROGRAM_ID),
      this.getTokenAccounts(connection, walletAddress, TOKEN_2022_PROGRAM_ID)
    ]);

    // Process token account data
    const [regularTokenData, token2022Data] = await Promise.all([
      this.getTokenAccountsData(regularTokens, 'regular'),
      this.getTokenAccountsData(token2022s, 'token2022')
    ]);

    // Combine with native SOL and SWOP token
    const [nativeSol, swopToken] = await Promise.all([
      this.getNativeSolToken(),
      this.getSwopTokenBalance(walletAddress)
    ]);

    return [nativeSol, swopToken, ...regularTokenData, ...token2022Data];
  }

  private static async getTokenAccounts(
    connection: Connection,
    walletAddress: string,
    tokenProgram: PublicKey
  ) {
    return await connection.getParsedTokenAccountsByOwner(
      new PublicKey(walletAddress),
      { programId: tokenProgram }
    );
  }
}`}</code>
            </pre>

            <h2>Portfolio Analytics</h2>

            <h3>Balance Chart Component</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`// components/wallet/WalletBalanceChart.tsx
export default function WalletBalanceChart({ tokens }: { tokens: TokenData[] }) {
  const [chartData, setChartData] = useState<ChartDataPoint[]>([]);
  const [timeRange, setTimeRange] = useState<TimeRange>('1D');
  
  // Calculate portfolio value over time
  const calculatePortfolioValue = useCallback(async () => {
    const portfolioHistory: ChartDataPoint[] = [];
    
    for (const token of tokens) {
      if (token.timeSeriesData && token.timeSeriesData[timeRange]) {
        const history = token.timeSeriesData[timeRange];
        
        history.forEach((point, index) => {
          const tokenValue = parseFloat(point.price) * parseFloat(token.balance);
          
          if (portfolioHistory[index]) {
            portfolioHistory[index].value += tokenValue;
          } else {
            portfolioHistory[index] = {
              timestamp: point.timestamp,
              value: tokenValue,
              date: new Date(point.timestamp * 1000).toLocaleDateString()
            };
          }
        });
      }
    }
    
    setChartData(portfolioHistory);
  }, [tokens, timeRange]);

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip formatter={(value) => [\`$\${value.toFixed(2)}\`, 'Portfolio Value']} />
          <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}`}</code>
            </pre>

            <h2>Network Detection & Switching</h2>

            <h3>Network Dock Component</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`// components/wallet/network-dock.tsx
export default function NetworkDock() {
  const { wallets } = useWallets();
  const { wallets: solanaWallets } = useSolanaWallets();
  const [selectedNetwork, setSelectedNetwork] = useState('ethereum');

  const evmWallet = wallets.find(wallet => wallet.walletClientType === 'privy');
  const solanaWallet = solanaWallets[0];

  const switchNetwork = async (networkId: number) => {
    if (!evmWallet) return;
    
    try {
      await evmWallet.switchChain(networkId);
      setSelectedNetwork(CHAINS_BY_ID[networkId].name.toLowerCase());
    } catch (error) {
      console.error('Failed to switch network:', error);
    }
  };

  return (
    <div className="flex space-x-2 p-2 bg-white rounded-lg shadow">
      {Object.entries(CHAINS).map(([key, chain]) => (
        <button
          key={key}
          onClick={() => switchNetwork(chain.id)}
          className={\`px-3 py-2 rounded-md text-sm font-medium \${
            selectedNetwork === key.toLowerCase()
              ? 'bg-blue-100 text-blue-700'
              : 'text-gray-500 hover:text-gray-700'
          }\`}
        >
          {chain.name}
        </button>
      ))}
    </div>
  );
}`}</code>
            </pre>

            <h2>Wallet Features</h2>

            <h3>Core Functionality</h3>
            <ul>
                <li><strong>Multi-Chain Balance Tracking</strong>: Real-time balance updates across all networks</li>
                <li><strong>Token Price Feeds</strong>: Live pricing from Coinranking API</li>
                <li><strong>Portfolio Analytics</strong>: Historical performance tracking and charts</li>
                <li><strong>NFT Management</strong>: View and manage NFT collections</li>
                <li><strong>Transaction History</strong>: Complete transaction logs with filtering</li>
                <li><strong>QR Code Generation</strong>: Easy wallet address sharing</li>
                <li><strong>Address Book</strong>: Save frequently used addresses</li>
            </ul>

            <h3>Wallet Manager Component</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`// components/wallet/wallet-manager.tsx
export default function WalletManager() {
  const { authenticated } = usePrivy();
  const { wallets } = useWallets();
  const { wallets: solanaWallets } = useSolanaWallets();
  
  const [tokens, setTokens] = useState<TokenData[]>([]);
  const [nfts, setNFTs] = useState<NFT[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch all wallet data
  const fetchWalletData = useCallback(async () => {
    if (!authenticated) return;
    
    setLoading(true);
    try {
      const evmWallet = wallets[0];
      const solanaWallet = solanaWallets[0];
      
      const promises = [];
      
      // Fetch EVM tokens
      if (evmWallet) {
        promises.push(fetchEVMTokens(evmWallet.address));
        promises.push(fetchEVMNFTs(evmWallet.address));
      }
      
      // Fetch Solana tokens
      if (solanaWallet) {
        promises.push(fetchSolanaTokens(solanaWallet.address));
        promises.push(fetchSolanaNFTs(solanaWallet.address));
      }
      
      const results = await Promise.allSettled(promises);
      
      // Process results and update state
      const allTokens = results
        .filter(result => result.status === 'fulfilled')
        .flatMap(result => result.value.tokens || []);
        
      const allNFTs = results
        .filter(result => result.status === 'fulfilled')
        .flatMap(result => result.value.nfts || []);
      
      setTokens(allTokens);
      setNFTs(allNFTs);
    } catch (error) {
      console.error('Failed to fetch wallet data:', error);
    } finally {
      setLoading(false);
    }
  }, [authenticated, wallets, solanaWallets]);

  return (
    <div className="space-y-6">
      <WalletHeader tokens={tokens} />
      <NetworkDock />
      <PortfolioBalance tokens={tokens} />
      <WalletBalanceChart tokens={tokens} />
      <TokenList tokens={tokens} />
      <NFTGrid nfts={nfts} />
    </div>
  );
}`}</code>
            </pre>

            <h2>Security Features</h2>

            <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6">
                <h4 className="font-semibold text-green-800">Security Measures</h4>
                <ul className="mt-2 text-green-700 space-y-1">
                    <li><strong>Read-Only Operations</strong>: Wallet data fetching requires no signatures</li>
                    <li><strong>Secure Key Management</strong>: Private keys never leave the wallet</li>
                    <li><strong>Permission-Based Access</strong>: User approves each transaction</li>
                    <li><strong>Network Validation</strong>: Automatic network mismatch detection</li>
                </ul>
            </div>

            <h2>API Integration</h2>

            <h3>External Services</h3>
            <ul>
                <li><strong>Alchemy</strong>: EVM token and NFT data</li>
                <li><strong>Moralis</strong>: Backup EVM data provider</li>
                <li><strong>Helius</strong>: Solana NFT data</li>
                <li><strong>QuickNode</strong>: Solana RPC and NFT data</li>
                <li><strong>Coinranking</strong>: Token pricing and market data</li>
            </ul>

            <h2>Error Handling</h2>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                <h4 className="font-semibold text-yellow-800">Common Issues</h4>
                <ul className="mt-2 text-yellow-700">
                    <li><strong>RPC Timeouts</strong>: Automatic retry with fallback endpoints</li>
                    <li><strong>Rate Limiting</strong>: Built-in rate limiting and caching</li>
                    <li><strong>Network Errors</strong>: Graceful fallbacks between providers</li>
                    <li><strong>Missing Metadata</strong>: Default values for incomplete token data</li>
                </ul>
            </div>

            <h2>Next Steps</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <a href="/features/swapping" className="block p-4 border rounded-lg hover:bg-gray-50">
                    <h3 className="font-semibold text-blue-600">Token Swapping →</h3>
                    <p className="text-sm text-gray-600">Learn about Jupiter Exchange integration</p>
                </a>
                <a href="/features/nft-minting" className="block p-4 border rounded-lg hover:bg-gray-50">
                    <h3 className="font-semibold text-blue-600">NFT Management →</h3>
                    <p className="text-sm text-gray-600">Explore NFT viewing and transfers</p>
                </a>
                <a href="/features/messaging" className="block p-4 border rounded-lg hover:bg-gray-50">
                    <h3 className="font-semibold text-blue-600">XMTP Messaging →</h3>
                    <p className="text-sm text-gray-600">Send tokens via chat messages</p>
                </a>
            </div>
        </div>
    );
} 