# Swop Blockchain Documentation

A comprehensive Next.js documentation site for the Swop Desktop Application - a powerful Web3 platform for digital identities, cryptocurrency management, NFT minting, and e-commerce.

## 🚀 Features

- **Modern Design**: Clean, professional interface with responsive design
- **Comprehensive Navigation**: Hierarchical sidebar with expandable sections
- **Search Functionality**: Built-in search capability (header)
- **MDX Support**: Write documentation in Markdown with React components
- **Syntax Highlighting**: Code blocks with proper syntax highlighting
- **Interactive Components**: Rich UI components for better user experience
- **Mobile Responsive**: Optimized for all device sizes
- **Fast Performance**: Built on Next.js 15 with optimal loading

## 📁 Documentation Structure

```
doc/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── getting-started/          # Setup and onboarding guides
│   │   │   ├── quick-start/          # Quick start guide
│   │   │   ├── installation/         # Installation instructions
│   │   │   └── configuration/        # Configuration guide
│   │   ├── architecture/             # System architecture docs
│   │   │   ├── overview/             # High-level architecture
│   │   │   ├── tech-stack/           # Technology stack details
│   │   │   ├── directory-structure/  # Code organization
│   │   │   └── data-flow/            # Data flow patterns
│   │   ├── features/                 # Feature documentation
│   │   │   ├── authentication/       # Auth system docs
│   │   │   ├── wallet/               # Wallet management
│   │   │   ├── swapping/             # Token swapping
│   │   │   ├── nft-minting/          # NFT creation
│   │   │   ├── smartsite/            # SmartSite system
│   │   │   ├── ecommerce/            # E-commerce platform
│   │   │   ├── analytics/            # Analytics & insights
│   │   │   └── messaging/            # XMTP messaging
│   │   ├── blockchain/               # Blockchain integration
│   │   │   ├── ethereum/             # Ethereum docs
│   │   │   ├── polygon/              # Polygon docs
│   │   │   ├── base/                 # Base docs
│   │   │   └── solana/               # Solana docs
│   │   ├── api/                      # API reference
│   │   │   ├── authentication/       # Auth API
│   │   │   ├── wallet/               # Wallet API
│   │   │   ├── nft/                  # NFT API
│   │   │   ├── smartsite/            # SmartSite API
│   │   │   └── xmtp/                 # XMTP API
│   │   ├── components/               # Component library
│   │   │   ├── ui/                   # UI components
│   │   │   ├── wallet/               # Wallet components
│   │   │   ├── nft/                  # NFT components
│   │   │   └── smartsite/            # SmartSite components
│   │   └── development/              # Development guides
│   │       ├── setup/                # Development setup
│   │       ├── best-practices/       # Best practices
│   │       ├── testing/              # Testing guide
│   │       ├── deployment/           # Deployment guide
│   │       └── troubleshooting/      # Common issues
│   └── components/
│       ├── Sidebar.tsx               # Navigation sidebar
│       └── Header.tsx                # Top header with search
└── README.md                         # This file
```

## 🎯 Documentation Sections

### 📋 Getting Started
- **Overview**: Introduction to the Swop platform
- **Quick Start**: Get running in minutes
- **Installation**: Detailed setup instructions
- **Configuration**: Environment and API setup

### 🏗️ Architecture
- **System Overview**: High-level architecture
- **Technology Stack**: Frontend, blockchain, and infrastructure
- **Directory Structure**: Code organization patterns
- **Data Flow**: How data moves through the system

### ⚡ Core Features
- **Authentication**: Privy integration and wallet management
- **Wallet Management**: Multi-chain asset management
- **Token Swapping**: Jupiter integration for Solana
- **NFT Minting**: Collection creation and management
- **SmartSite System**: Customizable microsite builder
- **E-commerce**: Product marketplace and payments
- **Analytics**: User engagement tracking
- **XMTP Messaging**: Decentralized messaging

### ⛓️ Blockchain Integration
- **Ethereum**: EVM blockchain integration
- **Polygon**: Layer 2 scaling solution
- **Base**: Coinbase's Layer 2 network
- **Solana**: High-performance blockchain

### 🔧 Development
- **Setup Guide**: Complete development environment
- **Best Practices**: Code quality and standards
- **Testing**: Unit, integration, and E2E testing
- **Deployment**: Production deployment guide
- **Troubleshooting**: Common issues and solutions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/your-repo/swop-desktop-app.git
cd swop-desktop-app/doc

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to view the documentation.

## 🎨 Customization

### Adding New Pages
1. Create a new directory under `src/app/`
2. Add a `page.tsx` file with your content
3. Update the sidebar navigation in `src/components/Sidebar.tsx`

### Styling
- Built with **TailwindCSS** for utility-first styling
- Custom prose classes for documentation content
- Responsive design with mobile-first approach

### Components
- Reusable UI components in `src/components/`
- Alert boxes for important information
- Code blocks with syntax highlighting
- Interactive navigation with breadcrumbs

## 📝 Content Guidelines

### Writing Style
- Clear, concise explanations
- Step-by-step instructions
- Code examples with explanations
- Visual hierarchy with proper headings

### Code Examples
```tsx
// Use proper TypeScript examples
import { useState } from 'react';

export function ExampleComponent() {
  const [state, setState] = useState(false);
  
  return (
    <div className="example">
      {/* Clear, commented code */}
    </div>
  );
}
```

### Alert Boxes
Use alert boxes for important information:

```tsx
<div className="alert info">
  <p><strong>Info:</strong> Additional context or tips</p>
</div>

<div className="alert warning">
  <p><strong>Warning:</strong> Important considerations</p>
</div>

<div className="alert error">
  <p><strong>Error:</strong> Things to avoid</p>
</div>

<div className="alert success">
  <p><strong>Success:</strong> Positive outcomes</p>
</div>
```

## 🔄 Contributing

### Adding Documentation
1. Fork the repository
2. Create a feature branch: `git checkout -b docs/new-section`
3. Add your documentation following the existing structure
4. Update navigation in `Sidebar.tsx` if needed
5. Test locally: `npm run dev`
6. Submit a pull request

### Content Standards
- Follow the existing structure and naming conventions
- Include practical examples and use cases
- Add relevant links to related sections
- Ensure mobile responsiveness

## 🛠️ Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Technology Stack
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first CSS
- **MDX** - Markdown with React components
- **Lucide React** - Icon library

## 📚 Key Features Documented

### Multi-Chain Wallet System
- Ethereum, Polygon, Base, and Solana support
- Privy authentication integration
- Transaction history and management

### Token Swapping
- Jupiter Exchange integration for Solana
- Configurable slippage and priority fees
- Platform fee collection system

### NFT Platform
- Multiple collection types (collectibles, memberships, phygitals)
- Template-based minting system
- Cross-chain NFT support

### SmartSite Builder
- Drag-and-drop site creation
- Component-based architecture
- QR code generation and sharing

### E-commerce Integration
- Product marketplace
- Stripe and cryptocurrency payments
- Order management and fulfillment

### Analytics Dashboard
- User engagement tracking
- Performance metrics
- Customizable reports

## 🌐 Deployment

The documentation can be deployed to any static hosting platform:

### Vercel (Recommended)
```bash
npx vercel deploy
```

### Netlify
```bash
npm run build
# Deploy the 'out' directory
```

### GitHub Pages
Configure GitHub Actions for automatic deployment on push.

## 📞 Support

- **Documentation Issues**: Create an issue in the repository
- **Feature Requests**: Submit via GitHub Issues
- **Community**: Join our Discord server
- **Direct Support**: Contact the development team

## 📄 License

This documentation is part of the Swop Desktop Application project. See the main repository for license information.

---

**Built with ❤️ for the Swop community**
