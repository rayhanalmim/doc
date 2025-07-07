export default function ArchitectureOverviewPage() {
    return (
        <div className="prose max-w-none">
            <h1>System Architecture Overview</h1>

            <p className="text-xl text-gray-600 mb-8">
                The Swop Desktop Application is built as a modern, scalable Web3 platform that seamlessly integrates blockchain technologies with traditional web development practices. This document outlines the overall system architecture and design decisions.
            </p>

            <h2>High-Level Architecture</h2>

            <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
                <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold mb-4">System Components</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                            <span className="text-2xl">🌐</span>
                        </div>
                        <h4 className="font-semibold mb-2">Frontend Application</h4>
                        <p className="text-sm text-gray-600">Next.js React application with TypeScript and TailwindCSS</p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                            <span className="text-2xl">⛓️</span>
                        </div>
                        <h4 className="font-semibold mb-2">Blockchain Layer</h4>
                        <p className="text-sm text-gray-600">Multi-chain support for Ethereum, Polygon, Base, and Solana</p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                            <span className="text-2xl">💬</span>
                        </div>
                        <h4 className="font-semibold mb-2">XMTP Server</h4>
                        <p className="text-sm text-gray-600">Node.js server for decentralized messaging functionality</p>
                    </div>
                </div>
            </div>

            <h2>Technology Stack</h2>

            <h3>Frontend Technologies</h3>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold mb-3 text-gray-900">Core Framework</h4>
                        <ul className="space-y-2 text-gray-700">
                            <li><strong>Next.js 14:</strong> React framework with App Router for server-side rendering and routing</li>
                            <li><strong>TypeScript:</strong> Type-safe JavaScript for better development experience</li>
                            <li><strong>React 19:</strong> Component-based UI library with latest features</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3 text-gray-900">Styling & UI</h4>
                        <ul className="space-y-2 text-gray-700">
                            <li><strong>TailwindCSS:</strong> Utility-first CSS framework for rapid UI development</li>
                            <li><strong>Radix UI:</strong> Unstyled, accessible UI components</li>
                            <li><strong>Lucide React:</strong> Beautiful icon library</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h3>Blockchain Integration</h3>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold mb-3 text-gray-900">Wallet & Authentication</h4>
                        <ul className="space-y-2 text-gray-700">
                            <li><strong>Privy:</strong> Web3 authentication and wallet connection</li>
                            <li><strong>Ethers.js:</strong> Ethereum blockchain interaction</li>
                            <li><strong>Solana Web3.js:</strong> Solana blockchain interaction</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3 text-gray-900">DeFi & Trading</h4>
                        <ul className="space-y-2 text-gray-700">
                            <li><strong>Jupiter API:</strong> Solana token swapping aggregator</li>
                            <li><strong>Alchemy:</strong> Blockchain infrastructure and APIs</li>
                            <li><strong>QuickNode:</strong> Solana RPC provider</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h3>State Management</h3>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                <ul className="space-y-2 text-gray-700">
                    <li><strong>Zustand:</strong> Lightweight state management for global application state</li>
                    <li><strong>React Query (TanStack Query):</strong> Server state management and caching</li>
                    <li><strong>Context API:</strong> React context for specific feature states</li>
                    <li><strong>Server Actions:</strong> Next.js server actions for form handling and API calls</li>
                </ul>
            </div>

            <h2>Key System Components</h2>

            <h3>1. Authentication System</h3>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <p className="text-blue-800">
                    <strong>Purpose:</strong> Secure user authentication and wallet management across multiple blockchain networks.
                </p>
                <ul className="mt-2 space-y-1 text-blue-700">
                    <li>• Privy integration for seamless wallet connection</li>
                    <li>• Support for MetaMask, Phantom, and other popular wallets</li>
                    <li>• SwopID creation for on-chain identity</li>
                    <li>• Multi-chain wallet management</li>
                </ul>
            </div>

            <h3>2. SmartSite System</h3>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                <p className="text-green-800">
                    <strong>Purpose:</strong> Enable users to create customizable microsites with blockchain integration.
                </p>
                <ul className="mt-2 space-y-1 text-green-700">
                    <li>• Drag-and-drop site builder</li>
                    <li>• Component-based architecture</li>
                    <li>• QR code generation for easy sharing</li>
                    <li>• Marketplace integration</li>
                </ul>
            </div>

            <h3>3. NFT Minting Platform</h3>
            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-6">
                <p className="text-purple-800">
                    <strong>Purpose:</strong> Comprehensive NFT creation and management system.
                </p>
                <ul className="mt-2 space-y-1 text-purple-700">
                    <li>• Multiple collection types (collectibles, memberships, phygitals)</li>
                    <li>• Template-based minting</li>
                    <li>• Cross-chain NFT support</li>
                    <li>• Metadata management</li>
                </ul>
            </div>

            <h3>4. E-commerce Platform</h3>
            <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-6">
                <p className="text-orange-800">
                    <strong>Purpose:</strong> Full-featured e-commerce solution with crypto and traditional payments.
                </p>
                <ul className="mt-2 space-y-1 text-orange-700">
                    <li>• Product catalog and inventory management</li>
                    <li>• Shopping cart and checkout flow</li>
                    <li>• Stripe and cryptocurrency payment processing</li>
                    <li>• Order tracking and fulfillment</li>
                </ul>
            </div>

            <h2>Data Flow Architecture</h2>

            <h3>Client-Side Data Flow</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`
1. User Action (UI Interaction)
   ↓
2. Component State Update (React)
   ↓
3. Global State Update (Zustand)
   ↓
4. API Call (React Query)
   ↓
5. Blockchain Interaction (Ethers.js/Solana Web3.js)
   ↓
6. Transaction Processing
   ↓
7. State Synchronization
   ↓
8. UI Update (React Re-render)
      `}</code></pre>

            <h3>Blockchain Interaction Flow</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`
Frontend → Privy Auth → Wallet Connection → RPC Provider → Blockchain
    ↑                                                           ↓
    ←────────── Transaction Result ←─────────────────────────────
      `}</code></pre>

            <h2>Security Considerations</h2>

            <div className="alert warning mb-6">
                <p><strong>Security is paramount</strong> in blockchain applications. The Swop platform implements multiple layers of security.</p>
            </div>

            <h3>Frontend Security</h3>
            <ul>
                <li><strong>Input Validation:</strong> All user inputs are validated on both client and server side</li>
                <li><strong>Environment Variables:</strong> Sensitive data stored in environment variables</li>
                <li><strong>HTTPS:</strong> All communications encrypted with TLS</li>
                <li><strong>Content Security Policy:</strong> CSP headers to prevent XSS attacks</li>
            </ul>

            <h3>Blockchain Security</h3>
            <ul>
                <li><strong>Transaction Simulation:</strong> All transactions simulated before execution</li>
                <li><strong>Slippage Protection:</strong> Configurable slippage limits for token swaps</li>
                <li><strong>Private Key Management:</strong> Never stored in browser, handled by wallet providers</li>
                <li><strong>Smart Contract Audits:</strong> Regular audits of smart contract interactions</li>
            </ul>

            <h2>Scalability & Performance</h2>

            <h3>Frontend Optimization</h3>
            <ul>
                <li><strong>Code Splitting:</strong> Dynamic imports and route-based splitting</li>
                <li><strong>Image Optimization:</strong> Next.js Image component with automatic optimization</li>
                <li><strong>Caching:</strong> React Query for API caching and background updates</li>
                <li><strong>Bundle Analysis:</strong> Regular bundle size monitoring and optimization</li>
            </ul>

            <h3>Blockchain Optimization</h3>
            <ul>
                <li><strong>RPC Load Balancing:</strong> Multiple RPC providers for reliability</li>
                <li><strong>Transaction Batching:</strong> Where possible, batch multiple operations</li>
                <li><strong>Gas Optimization:</strong> Smart contract interactions optimized for gas efficiency</li>
                <li><strong>Caching:</strong> Blockchain data cached to reduce RPC calls</li>
            </ul>

            <h2>Development Practices</h2>

            <h3>Code Organization</h3>
            <ul>
                <li><strong>Feature-Based Structure:</strong> Components organized by feature/domain</li>
                <li><strong>Separation of Concerns:</strong> Clear separation between UI, business logic, and data</li>
                <li><strong>Type Safety:</strong> Comprehensive TypeScript coverage</li>
                <li><strong>Component Composition:</strong> Reusable, composable React components</li>
            </ul>

            <h3>Testing Strategy</h3>
            <ul>
                <li><strong>Unit Testing:</strong> Jest for individual component and function testing</li>
                <li><strong>Integration Testing:</strong> Testing component interactions</li>
                <li><strong>E2E Testing:</strong> Cypress for full user journey testing</li>
                <li><strong>Blockchain Testing:</strong> Testnet testing before mainnet deployment</li>
            </ul>

            <h2>Deployment Architecture</h2>

            <h3>Production Environment</h3>
            <ul>
                <li><strong>Hosting:</strong> Vercel for frontend hosting with global CDN</li>
                <li><strong>Database:</strong> PostgreSQL for application data</li>
                <li><strong>File Storage:</strong> IPFS for decentralized file storage</li>
                <li><strong>Monitoring:</strong> Application performance and error monitoring</li>
            </ul>

            <h3>CI/CD Pipeline</h3>
            <ul>
                <li><strong>GitHub Actions:</strong> Automated testing and deployment</li>
                <li><strong>Preview Deployments:</strong> Automatic preview deployments for pull requests</li>
                <li><strong>Environment Management:</strong> Separate staging and production environments</li>
                <li><strong>Rollback Strategy:</strong> Quick rollback capabilities for production issues</li>
            </ul>

            <h2>Future Architecture Considerations</h2>

            <h3>Planned Enhancements</h3>
            <ul>
                <li><strong>Microservices:</strong> Gradual migration to microservices architecture</li>
                <li><strong>GraphQL:</strong> Implementation of GraphQL for more efficient data fetching</li>
                <li><strong>Progressive Web App:</strong> PWA capabilities for mobile experience</li>
                <li><strong>Real-time Features:</strong> WebSocket integration for real-time updates</li>
            </ul>

            <div className="alert info">
                <p><strong>Next Steps:</strong> Explore specific components and features in the detailed documentation sections.</p>
            </div>
        </div>
    );
} 