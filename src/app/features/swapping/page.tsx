import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Token Swapping - Swop Docs',
    description: 'Complete guide to token swapping with Jupiter Exchange integration on Solana',
};

export default function SwappingPage() {
    return (
        <div className="prose prose-gray max-w-none">
            <h1>Token Swapping</h1>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                <div className="flex">
                    <div className="ml-3">
                        <p className="text-sm text-blue-700">
                            Swop integrates with <strong>Jupiter Exchange</strong> to provide the best swap rates on Solana with a 0.5% platform fee system.
                        </p>
                    </div>
                </div>
            </div>

            <h2>Overview</h2>
            <p>
                The token swapping system allows users to exchange SPL tokens on Solana using Jupiter&apos;s aggregated liquidity.
                It features real-time quotes, customizable slippage, priority fees, and automatic platform fee collection.
            </p>

            <h2>Key Features</h2>
            <ul>
                <li><strong>Jupiter Integration</strong>: Best rates across all Solana DEXs</li>
                <li><strong>Real-time Quotes</strong>: Auto-refreshing every 10 seconds</li>
                <li><strong>Slippage Control</strong>: Customizable tolerance (default 0.5%)</li>
                <li><strong>Priority Fees</strong>: Fast, normal, or eco transaction speeds</li>
                <li><strong>Platform Fees</strong>: Integrated 0.5% fee collection</li>
                <li><strong>Transaction Status</strong>: Real-time updates and confirmation</li>
            </ul>

            <h2>Implementation</h2>

            <h3>Swap Modal Component</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`// components/wallet/swapModal/SwapModal.tsx
import { useJupiter } from '@jup-ag/react-hook';
import { useSolanaWallets } from '@privy-io/react-auth';

export default function SwapModal({ 
  open, 
  onOpenChange, 
  userToken, 
  accessToken 
}: SwapModalProps) {
  const { wallets } = useSolanaWallets();
  const wallet = wallets[0];
  
  // Jupiter hook for swap functionality
  const { 
    routeMap, 
    exchange, 
    loading: jupiterLoading,
    error: jupiterError 
  } = useJupiter({
    connection: new Connection(process.env.NEXT_PUBLIC_QUICKNODE_SOLANA_URL!),
    cluster: 'mainnet-beta',
    userPublicKey: wallet?.address ? new PublicKey(wallet.address) : null,
  });

  const [inputToken, setInputToken] = useState<TokenInfo | null>(null);
  const [outputToken, setOutputToken] = useState<TokenInfo | null>(null);
  const [inputAmount, setInputAmount] = useState('');
  const [routes, setRoutes] = useState<Route[]>([]);
  const [selectedRoute, setSelectedRoute] = useState<Route | null>(null);
  const [slippage, setSlippage] = useState(0.5);
  const [priorityLevel, setPriorityLevel] = useState<'eco' | 'normal' | 'fast'>('normal');

  // Fetch routes from Jupiter
  const fetchRoutes = useCallback(async () => {
    if (!inputToken || !outputToken || !inputAmount || !routeMap) return;

    try {
      const routes = await exchange({
        routeMap,
        inputMint: new PublicKey(inputToken.address!),
        outputMint: new PublicKey(outputToken.address!),
        amount: BigInt(parseFloat(inputAmount) * Math.pow(10, inputToken.decimals!)),
        slippage,
        feeBps: 50, // 0.5% platform fee
      });

      setRoutes(routes);
      setSelectedRoute(routes[0] || null);
    } catch (error) {
      console.error('Failed to fetch routes:', error);
    }
  }, [inputToken, outputToken, inputAmount, routeMap, slippage, exchange]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Swap Tokens</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Input Token Selection */}
          <TokenSelector
            label="From"
            selectedToken={inputToken}
            onTokenSelect={setInputToken}
            tokens={userToken}
            amount={inputAmount}
            onAmountChange={setInputAmount}
          />

          {/* Swap Button */}
          <div className="flex justify-center">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => {
                const temp = inputToken;
                setInputToken(outputToken);
                setOutputToken(temp);
              }}
            >
              <ArrowUpDown className="h-4 w-4" />
            </Button>
          </div>

          {/* Output Token Selection */}
          <TokenSelector
            label="To"
            selectedToken={outputToken}
            onTokenSelect={setOutputToken}
            tokens={availableTokens}
            amount={selectedRoute?.outAmount ? formatTokenAmount(selectedRoute.outAmount, outputToken?.decimals) : ''}
            readOnly
          />

          {/* Route Information */}
          {selectedRoute && (
            <PriceCard 
              route={selectedRoute}
              inputToken={inputToken}
              outputToken={outputToken}
            />
          )}

          {/* Slippage Control */}
          <SlippageControl 
            slippage={slippage}
            onSlippageChange={setSlippage}
          />

          {/* Priority Fee Selector */}
          <PriorityFeeSelector
            level={priorityLevel}
            onLevelChange={setPriorityLevel}
          />

          {/* Swap Button */}
          <Button 
            onClick={handleSwap}
            disabled={!selectedRoute || swapping}
            className="w-full"
          >
            {swapping ? 'Swapping...' : 'Swap'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}`}</code>
            </pre>

            <h3>Platform Fee Implementation</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`// components/wallet/swapModal/utils/feeConfig.ts
export const PLATFORM_FEE_BPS = 50; // 0.5% or 50 basis points
export const PLATFORM_FEE_WALLET = new PublicKey('YOUR_FEE_WALLET_ADDRESS');

// Fee collection in swap transaction
export const handleSwapWithFee = async (
  route: Route,
  wallet: any,
  connection: Connection
) => {
  const inputToken = route.inputMint;
  const feeAmount = route.inputAmount * BigInt(PLATFORM_FEE_BPS) / BigInt(10000);
  
  // Create fee collection instruction
  const feeInstruction = await createFeeTransferInstruction({
    fromTokenAccount: route.inputTokenAccount,
    toTokenAccount: await getAssociatedTokenAddress(
      inputToken,
      PLATFORM_FEE_WALLET
    ),
    owner: new PublicKey(wallet.address),
    amount: feeAmount,
    mint: inputToken,
  });

  // Combine with Jupiter swap instructions
  const swapInstructions = await route.getSwapInstructions();
  const transaction = new Transaction().add(
    feeInstruction,
    ...swapInstructions
  );

  // Sign and send transaction
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = new PublicKey(wallet.address);

  const signedTx = await wallet.signTransaction(transaction);
  return await connection.sendRawTransaction(signedTx.serialize());
};`}</code>
            </pre>

            <h3>Jupiter API Integration</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`// Jupiter quote fetching
const fetchJupiterQuote = async (
  inputMint: string,
  outputMint: string,
  amount: string,
  slippage: number
) => {
  const params = new URLSearchParams({
    inputMint,
    outputMint,
    amount,
    slippageBps: (slippage * 100).toString(),
    feeBps: PLATFORM_FEE_BPS.toString(),
    onlyDirectRoutes: 'false',
    asLegacyTransaction: 'false',
  });

  const response = await fetch(
    \`https://quote-api.jup.ag/v6/quote?\${params}\`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch Jupiter quote');
  }

  return await response.json();
};

// Get swap transaction from Jupiter
const getSwapTransaction = async (
  quote: any,
  userPublicKey: string,
  priorityLevel: 'eco' | 'normal' | 'fast' = 'normal'
) => {
  const priorityFees = {
    eco: 1000,    // 0.000001 SOL
    normal: 5000, // 0.000005 SOL  
    fast: 10000   // 0.00001 SOL
  };

  const response = await fetch('https://quote-api.jup.ag/v6/swap', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      quoteResponse: quote,
      userPublicKey,
      priorityLevelWithMaxLamports: {
        priorityLevel,
        maxLamports: priorityFees[priorityLevel],
      },
      feeAccount: PLATFORM_FEE_WALLET.toString(),
    }),
  });

  return await response.json();
};`}</code>
            </pre>

            <h2>Swap Flow</h2>

            <div className="bg-gray-50 p-6 rounded-lg my-6">
                <h4 className="text-lg font-semibold mb-4">Step-by-Step Process</h4>
                <ol className="list-decimal list-inside space-y-2">
                    <li>User selects input token and enters amount</li>
                    <li>User selects output token</li>
                    <li>System fetches routes from Jupiter API</li>
                    <li>Best route is displayed with price impact</li>
                    <li>User adjusts slippage and priority fee if needed</li>
                    <li>User confirms the swap</li>
                    <li>Transaction is prepared with platform fee</li>
                    <li>Transaction is signed and submitted</li>
                    <li>Real-time status updates are shown</li>
                    <li>Success confirmation with transaction link</li>
                </ol>
            </div>

            <h2>UI Components</h2>

            <h3>Token Selector</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`// Token selection with search and balance display
function TokenSelector({ 
  label, 
  selectedToken, 
  onTokenSelect, 
  tokens, 
  amount, 
  onAmountChange 
}: TokenSelectorProps) {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredTokens = tokens.filter(token =>
    token.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    token.symbol?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="flex space-x-2">
        <Input
          type="number"
          placeholder="0.00"
          value={amount}
          onChange={(e) => onAmountChange?.(e.target.value)}
          className="flex-1"
        />
        
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="min-w-[120px]">
              {selectedToken ? (
                <div className="flex items-center space-x-2">
                  <img src={selectedToken.logoURI} className="w-5 h-5 rounded-full" />
                  <span>{selectedToken.symbol}</span>
                </div>
              ) : (
                'Select Token'
              )}
            </Button>
          </PopoverTrigger>
          
          <PopoverContent className="w-80">
            <Input
              placeholder="Search tokens..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mb-2"
            />
            
            <div className="max-h-60 overflow-y-auto">
              {filteredTokens.map((token) => (
                <button
                  key={token.address}
                  onClick={() => onTokenSelect(token)}
                  className="w-full flex items-center justify-between p-2 hover:bg-gray-100 rounded"
                >
                  <div className="flex items-center space-x-2">
                    <img src={token.logoURI} className="w-6 h-6 rounded-full" />
                    <div className="text-left">
                      <div className="font-medium">{token.symbol}</div>
                      <div className="text-sm text-gray-500">{token.name}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{token.balance}</div>
                    <div className="text-sm text-gray-500">
                      \${(parseFloat(token.balance) * parseFloat(token.usdPrice || '0')).toFixed(2)}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>
      
      {selectedToken && (
        <div className="flex justify-between text-sm text-gray-500">
          <span>Balance: {selectedToken.balance} {selectedToken.symbol}</span>
          <div className="space-x-2">
            <button onClick={() => onAmountChange?.(selectedToken.balance * 0.5)}>
              Half
            </button>
            <button onClick={() => onAmountChange?.(selectedToken.balance)}>
              Max
            </button>
          </div>
        </div>
      )}
    </div>
  );
}`}</code>
            </pre>

            <h3>Price Impact Card</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`// Display swap details and price impact
function PriceCard({ route, inputToken, outputToken }: PriceCardProps) {
  const priceImpact = calculatePriceImpact(route);
  const exchangeRate = calculateExchangeRate(route, inputToken, outputToken);
  const minimumReceived = calculateMinimumReceived(route);

  return (
    <div className="bg-gray-50 rounded-lg p-4 space-y-2">
      <div className="flex justify-between">
        <span className="text-sm text-gray-600">Rate</span>
        <span className="text-sm font-medium">
          1 {inputToken?.symbol} = {exchangeRate} {outputToken?.symbol}
        </span>
      </div>
      
      <div className="flex justify-between">
        <span className="text-sm text-gray-600">Price Impact</span>
        <span className={\`text-sm font-medium \${
          priceImpact > 5 ? 'text-red-600' : 
          priceImpact > 1 ? 'text-yellow-600' : 'text-green-600'
        }\`}>
          {priceImpact.toFixed(2)}%
        </span>
      </div>
      
      <div className="flex justify-between">
        <span className="text-sm text-gray-600">Minimum Received</span>
        <span className="text-sm font-medium">
          {minimumReceived} {outputToken?.symbol}
        </span>
      </div>
      
      <div className="flex justify-between">
        <span className="text-sm text-gray-600">Platform Fee</span>
        <span className="text-sm font-medium">0.5%</span>
      </div>
      
      <div className="flex justify-between">
        <span className="text-sm text-gray-600">Route</span>
        <span className="text-sm font-medium">
          {route.marketInfos.map(market => market.label).join(' → ')}
        </span>
      </div>
    </div>
  );
}`}</code>
            </pre>

            <h2>Advanced Features</h2>

            <h3>Auto-Refresh Quotes</h3>
            <ul>
                <li>Quotes automatically refresh every 10 seconds</li>
                <li>Visual indicator shows quote age</li>
                <li>Manual refresh button available</li>
                <li>Automatic pause when modal is not focused</li>
            </ul>

            <h3>Slippage Protection</h3>
            <ul>
                <li>Default 0.5% slippage tolerance</li>
                <li>Custom slippage settings (0.1% - 5%)</li>
                <li>Warning for high slippage amounts</li>
                <li>Transaction fails if slippage exceeded</li>
            </ul>

            <h3>Priority Fee Options</h3>
            <div className="grid grid-cols-3 gap-4 my-6">
                <div className="border rounded-lg p-4 text-center">
                    <h4 className="font-semibold text-green-600">Eco</h4>
                    <p className="text-sm">0.000001 SOL</p>
                    <p className="text-xs text-gray-500">Slower confirmation</p>
                </div>
                <div className="border rounded-lg p-4 text-center">
                    <h4 className="font-semibold text-blue-600">Normal</h4>
                    <p className="text-sm">0.000005 SOL</p>
                    <p className="text-xs text-gray-500">Average confirmation</p>
                </div>
                <div className="border rounded-lg p-4 text-center">
                    <h4 className="font-semibold text-orange-600">Fast</h4>
                    <p className="text-sm">0.00001 SOL</p>
                    <p className="text-xs text-gray-500">Fast confirmation</p>
                </div>
            </div>

            <h2>Error Handling</h2>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                <h4 className="font-semibold text-yellow-800">Common Swap Errors</h4>
                <ul className="mt-2 text-yellow-700">
                    <li><strong>Insufficient Balance</strong>: Not enough tokens for swap + fees</li>
                    <li><strong>Slippage Exceeded</strong>: Price moved beyond tolerance</li>
                    <li><strong>Route Not Found</strong>: No liquidity available for token pair</li>
                    <li><strong>Transaction Failed</strong>: Network congestion or RPC issues</li>
                </ul>
            </div>

            <h2>Best Practices</h2>

            <ul>
                <li>Always check price impact before large swaps</li>
                <li>Use appropriate slippage for market conditions</li>
                <li>Consider priority fees during high network activity</li>
                <li>Verify token addresses for new or unknown tokens</li>
                <li>Keep some SOL for transaction fees</li>
            </ul>

            <h2>Next Steps</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <a href="/features/wallet" className="block p-4 border rounded-lg hover:bg-gray-50">
                    <h3 className="font-semibold text-blue-600">← Wallet Management</h3>
                    <p className="text-sm text-gray-600">Learn about token balance tracking</p>
                </a>
                <a href="/features/messaging" className="block p-4 border rounded-lg hover:bg-gray-50">
                    <h3 className="font-semibold text-blue-600">XMTP Messaging →</h3>
                    <p className="text-sm text-gray-600">Send tokens via chat messages</p>
                </a>
            </div>

            <h2>Here&apos;s how the token swapping process works in detail.</h2>
        </div>
    );
} 