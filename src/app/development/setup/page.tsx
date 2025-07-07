export default function DevelopmentSetupPage() {
    return (
        <div className="prose max-w-none">
            <h1>Development Setup Guide</h1>

            <p className="text-xl text-gray-600 mb-8">
                This comprehensive guide will help you set up a complete development environment for the Swop Desktop Application. Follow these steps to get your development environment ready for blockchain development.
            </p>

            <h2>Prerequisites</h2>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <p className="text-blue-800"><strong>Required Software:</strong></p>
                <ul className="mt-2 space-y-1 text-blue-700">
                    <li>• Node.js 18.0.0 or higher</li>
                    <li>• npm 9.0.0 or yarn 1.22.0+</li>
                    <li>• Git for version control</li>
                    <li>• A code editor (VS Code recommended)</li>
                </ul>
            </div>

            <h3>System Requirements</h3>
            <ul>
                <li><strong>OS:</strong> Windows 10+, macOS 10.15+, or Linux</li>
                <li><strong>RAM:</strong> 8GB minimum, 16GB recommended</li>
                <li><strong>Storage:</strong> 5GB free space for dependencies</li>
                <li><strong>Network:</strong> Stable internet connection for blockchain interactions</li>
            </ul>

            <h2>Environment Setup</h2>

            <h3>1. Clone the Repository</h3>
            <pre><code>{`# Clone the main repository
git clone https://github.com/your-repo/swop-desktop-app.git
cd swop-desktop-app

# Navigate to the client directory
cd client`}</code></pre>

            <h3>2. Install Dependencies</h3>
            <pre><code>{`# Using npm
npm install

# Using yarn
yarn install

# For the XMTP server (optional)
cd server
npm install
cd ..`}</code></pre>

            <h3>3. Environment Variables Setup</h3>
            <p>Create a <code>.env.local</code> file in the client directory:</p>

            <pre><code>{`# ================================
# AUTHENTICATION & WALLET
# ================================
NEXT_PUBLIC_PRIVY_APP_ID=your_privy_app_id_here

# ================================
# BLOCKCHAIN RPC ENDPOINTS
# ================================
# Ethereum
NEXT_PUBLIC_ALCHEMY_ETH_URL=https://eth-mainnet.alchemyapi.io/v2/YOUR_API_KEY
NEXT_PUBLIC_ALCHEMY_ETH_API_KEY=your_alchemy_eth_api_key

# Polygon
NEXT_PUBLIC_ALCHEMY_POLYGON_URL=https://polygon-mainnet.alchemyapi.io/v2/YOUR_API_KEY
NEXT_PUBLIC_ALCHEMY_POLYGON_API_KEY=your_alchemy_polygon_api_key

# Base
NEXT_PUBLIC_ALCHEMY_BASE_URL=https://base-mainnet.alchemyapi.io/v2/YOUR_API_KEY
NEXT_PUBLIC_ALCHEMY_BASE_API_KEY=your_alchemy_base_api_key

# Solana
NEXT_PUBLIC_QUICKNODE_SOLANA_URL=your_quicknode_solana_rpc_url
NEXT_PUBLIC_ALCHEMY_SOLANA_URL=your_alchemy_solana_url

# ================================
# BLOCKCHAIN EXPLORERS API KEYS
# ================================
NEXT_PUBLIC_ETHERSCAN_API_KEY_TOKEN=your_etherscan_api_key
NEXT_PUBLIC_POLYGONSCAN_API_KEY_TOKEN=your_polygonscan_api_key
NEXT_PUBLIC_BASESCAN_API_KEY_TOKEN=your_basescan_api_key
NEXT_PUBLIC_SEPOLIA_ETHERSCAN_API_KEY_TOKEN=your_sepolia_api_key

# ================================
# PLATFORM CONFIGURATION
# ================================
# Platform fee wallet (for swap fees)
NEXT_PUBLIC_FEE_PAYER_PRIVATE_KEY=your_fee_wallet_private_key_base58

# ================================
# PAYMENT PROCESSING
# ================================
# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...

# ================================
# DEVELOPMENT SETTINGS
# ================================
NEXT_PUBLIC_DEV_MODE=true
NEXT_PUBLIC_NETWORK=mainnet`}</code></pre>

            <h2>Getting API Keys</h2>

            <h3>1. Alchemy (Blockchain Infrastructure)</h3>
            <ol>
                <li>Visit <a href="https://alchemy.com" target="_blank">alchemy.com</a></li>
                <li>Create an account and log in</li>
                <li>Create apps for each network (Ethereum, Polygon, Base, Solana)</li>
                <li>Copy the API keys and URLs to your .env.local file</li>
            </ol>

            <h3>2. Privy (Web3 Authentication)</h3>
            <ol>
                <li>Visit <a href="https://privy.io" target="_blank">privy.io</a></li>
                <li>Create an account and set up your app</li>
                <li>Configure supported wallets and chains</li>
                <li>Copy your App ID to NEXT_PUBLIC_PRIVY_APP_ID</li>
            </ol>

            <h3>3. Blockchain Explorer APIs</h3>
            <ul>
                <li><strong>Etherscan:</strong> <a href="https://etherscan.io/apis" target="_blank">etherscan.io/apis</a></li>
                <li><strong>Polygonscan:</strong> <a href="https://polygonscan.com/apis" target="_blank">polygonscan.com/apis</a></li>
                <li><strong>Basescan:</strong> <a href="https://basescan.org/apis" target="_blank">basescan.org/apis</a></li>
            </ul>

            <h3>4. Stripe (Payment Processing)</h3>
            <ol>
                <li>Visit <a href="https://stripe.com" target="_blank">stripe.com</a></li>
                <li>Create an account and get your test keys</li>
                <li>Configure webhooks for order processing</li>
                <li>Add keys to your environment file</li>
            </ol>

            <h2>Development Tools Setup</h2>

            <h3>VS Code Configuration</h3>
            <p>Install these recommended extensions:</p>

            <pre><code>{`# Essential extensions
- ES7+ React/Redux/React-Native snippets
- TypeScript Importer
- Auto Rename Tag
- Prettier - Code formatter
- ESLint
- Tailwind CSS IntelliSense
- GitLens
- Thunder Client (API testing)`}</code></pre>

            <h3>VS Code Settings (settings.json)</h3>
            <pre><code>{`{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  }
}`}</code></pre>

            <h3>Git Configuration</h3>
            <pre><code>{`# Set up Git hooks for consistent commits
npm install -g husky
npx husky install

# Configure commit message format
git config --global commit.template .gitmessage`}</code></pre>

            <h2>Running the Application</h2>

            <h3>Development Server</h3>
            <pre><code>{`# Start the main application
npm run dev

# Start with XMTP messaging server
npm run dev-with-xmtp

# Start only XMTP server
npm run xmtp-server`}</code></pre>

            <h3>Available Scripts</h3>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <ul className="space-y-2">
                    <li><code>npm run dev</code> - Start development server</li>
                    <li><code>npm run build</code> - Build for production</li>
                    <li><code>npm run start</code> - Start production server</li>
                    <li><code>npm run lint</code> - Run ESLint</li>
                    <li><code>npm run type-check</code> - Run TypeScript type checking</li>
                </ul>
            </div>

            <h2>Testing Setup</h2>

            <h3>Unit Testing</h3>
            <pre><code>{`# Install testing dependencies
npm install --save-dev jest @testing-library/react @testing-library/jest-dom

# Run tests
npm test

# Run tests in watch mode
npm run test:watch`}</code></pre>

            <h3>E2E Testing with Cypress</h3>
            <pre><code>{`# Install Cypress
npm install --save-dev cypress

# Open Cypress Test Runner
npx cypress open

# Run headless tests
npm run cypress:run`}</code></pre>

            <h2>Blockchain Development Setup</h2>

            <h3>Wallet Setup</h3>
            <div className="alert warning mb-6">
                <p><strong>Important:</strong> Use testnet wallets for development. Never use mainnet wallets with real funds during development.</p>
            </div>

            <ol>
                <li><strong>MetaMask:</strong> Install browser extension and create test wallet</li>
                <li><strong>Phantom:</strong> Install for Solana development</li>
                <li><strong>Test Networks:</strong> Add Sepolia, Polygon Mumbai, Base Testnet</li>
                <li><strong>Test Tokens:</strong> Get test tokens from faucets</li>
            </ol>

            <h3>Testnet Configuration</h3>
            <pre><code>{`# Update .env.local for testnet development
NEXT_PUBLIC_NETWORK=testnet
NEXT_PUBLIC_ALCHEMY_ETH_URL=https://eth-sepolia.alchemyapi.io/v2/YOUR_API_KEY
NEXT_PUBLIC_ALCHEMY_POLYGON_URL=https://polygon-mumbai.alchemyapi.io/v2/YOUR_API_KEY`}</code></pre>

            <h2>Database Setup (Optional)</h2>

            <h3>Local PostgreSQL</h3>
            <pre><code>{`# Install PostgreSQL
# macOS
brew install postgresql

# Ubuntu
sudo apt-get install postgresql

# Start PostgreSQL service
# macOS
brew services start postgresql

# Ubuntu
sudo systemctl start postgresql`}</code></pre>

            <h3>Database Configuration</h3>
            <pre><code>{`# Add to .env.local
DATABASE_URL=postgresql://username:password@localhost:5432/swop_dev
NEXT_PUBLIC_DATABASE_URL=your_database_connection_string`}</code></pre>

            <h2>Troubleshooting</h2>

            <h3>Common Issues</h3>

            <div className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                    <h4 className="font-semibold text-red-800">Node Version Issues</h4>
                    <p className="text-red-700">Solution: Use nvm to manage Node.js versions</p>
                    <pre className="mt-2 text-sm"><code>nvm install 18
                        nvm use 18</code></pre>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <h4 className="font-semibold text-yellow-800">Wallet Connection Failed</h4>
                    <p className="text-yellow-700">Solution: Check Privy configuration and network settings</p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                    <h4 className="font-semibold text-blue-800">RPC Errors</h4>
                    <p className="text-blue-700">Solution: Verify API keys and rate limits</p>
                </div>
            </div>

            <h3>Debug Mode</h3>
            <pre><code>{`# Enable debug logging
NEXT_PUBLIC_DEBUG=true

# Check console for detailed error messages
# Use browser developer tools for network inspection`}</code></pre>

            <h2>Development Workflow</h2>

            <h3>Feature Development Process</h3>
            <ol>
                <li><strong>Create Feature Branch:</strong> <code>git checkout -b feature/new-feature</code></li>
                <li><strong>Develop & Test:</strong> Write code with tests</li>
                <li><strong>Lint & Format:</strong> <code>npm run lint && npm run format</code></li>
                <li><strong>Commit Changes:</strong> Use conventional commit messages</li>
                <li><strong>Push & PR:</strong> Create pull request for review</li>
            </ol>

            <h3>Code Quality Tools</h3>
            <ul>
                <li><strong>ESLint:</strong> Code linting and style enforcement</li>
                <li><strong>Prettier:</strong> Code formatting</li>
                <li><strong>TypeScript:</strong> Type checking</li>
                <li><strong>Husky:</strong> Git hooks for pre-commit checks</li>
            </ul>

            <h2>Production Deployment</h2>

            <h3>Build Process</h3>
            <pre><code>{`# Build for production
npm run build

# Test production build locally
npm start

# Deploy to Vercel
npx vercel deploy`}</code></pre>

            <h3>Environment Variables for Production</h3>
            <div className="alert info">
                <p><strong>Note:</strong> Update all environment variables to use production values before deployment.</p>
            </div>

            <h2>Next Steps</h2>

            <ul>
                <li><a href="/architecture/overview">Review the system architecture</a></li>
                <li><a href="/features/wallet">Explore wallet integration</a></li>
                <li><a href="/development/best-practices">Learn development best practices</a></li>
                <li><a href="/api/authentication">Study the API documentation</a></li>
            </ul>

            <div className="alert success">
                <p><strong>Setup Complete!</strong> You should now have a fully functional development environment for the Swop Desktop Application.</p>
            </div>
        </div>
    );
} 