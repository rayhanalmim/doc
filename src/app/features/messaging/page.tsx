import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'XMTP Messaging - Swop Docs',
    description: 'Complete guide to XMTP messaging integration with token sending capabilities',
};

export default function MessagingPage() {
    return (
        <div className="prose prose-gray max-w-none">
            <h1>XMTP Messaging</h1>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                <div className="flex">
                    <div className="ml-3">
                        <p className="text-sm text-blue-700">
                            Swop integrates <strong>XMTP (Extensible Message Transport Protocol)</strong> for secure, decentralized messaging with token sending capabilities.
                        </p>
                    </div>
                </div>
            </div>

            <h2>Overview</h2>
            <p>
                The XMTP messaging system enables wallet-to-wallet communication with integrated token sending.
                It uses a server-side architecture to avoid WASM loading issues and provides real-time messaging capabilities.
            </p>

            <h2>Architecture</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-blue-600">Client-Side</h3>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Next.js application</li>
                        <li>React components</li>
                        <li>REST API communication</li>
                        <li>Real-time UI updates</li>
                    </ul>
                </div>
                <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-green-600">Server-Side</h3>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Node.js server (port 1212)</li>
                        <li>XMTP client management</li>
                        <li>Message handling</li>
                        <li>Connection pooling</li>
                    </ul>
                </div>
            </div>

            <h2>Key Features</h2>
            <ul>
                <li><strong>Wallet-to-Wallet Messaging</strong>: Direct communication between wallet addresses</li>
                <li><strong>Token Sending</strong>: Send tokens with messages</li>
                <li><strong>Conversation Management</strong>: Create and manage chat conversations</li>
                <li><strong>Real-time Updates</strong>: Live message delivery</li>
                <li><strong>Message History</strong>: Persistent conversation storage</li>
                <li><strong>Emoji Support</strong>: Rich messaging with emojis and GIFs</li>
            </ul>

            <h2>Server Setup</h2>

            <h3>XMTP Server Implementation</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`// server/xmtp-server.js
const express = require('express');
const cors = require('cors');
const { Client } = require('@xmtp/browser-sdk');

const app = express();
const port = 1212;

// Store active XMTP clients
const clients = new Map();

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'XMTP Server is running' });
});

// Create XMTP client
app.post('/api/xmtp/create-client', async (req, res) => {
  try {
    const { address, signature } = req.body;
    
    // Create XMTP client with wallet signature
    const client = await Client.create(signature, {
      env: 'production'
    });
    
    // Store client
    clients.set(address, {
      client,
      address,
      createdAt: Date.now()
    });
    
    res.json({ 
      success: true, 
      address: client.address,
      createdAt: Date.now()
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get conversations
app.get('/api/xmtp/conversations/:address', async (req, res) => {
  try {
    const { address } = req.params;
    const clientData = clients.get(address);
    
    if (!clientData) {
      return res.status(404).json({ error: 'Client not found' });
    }
    
    const conversations = await clientData.client.conversations.list();
    
    res.json({
      conversations: conversations.map(conv => ({
        topic: conv.topic,
        peerAddress: conv.peerAddress,
        createdAt: conv.createdAt,
        context: conv.context
      }))
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Send message
app.post('/api/xmtp/messages/send', async (req, res) => {
  try {
    const { senderAddress, recipientAddress, content, contentType = 'text' } = req.body;
    
    const clientData = clients.get(senderAddress);
    if (!clientData) {
      return res.status(404).json({ error: 'Sender client not found' });
    }
    
    // Check if conversation exists
    let conversation = await clientData.client.conversations.newConversation(recipientAddress);
    
    // Send message
    const message = await conversation.send(content, contentType);
    
    res.json({
      success: true,
      messageId: message.id,
      sentAt: message.sentAt
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(\`XMTP server running on port \${port}\`);
});`}</code>
            </pre>

            <h3>Starting the Server</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`# Start XMTP server only
npm run xmtp-server

# Start both Next.js and XMTP server
npm run dev-with-xmtp

# Check server health
curl http://localhost:1212/health`}</code>
            </pre>

            <h2>Client Integration</h2>

            <h3>XMTP Context Provider</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`// lib/context/XmtpContext.tsx
import { createContext, useContext, useEffect, useState } from 'react';
import { usePrivy, useSolanaWallets } from '@privy-io/react-auth';
import { xmtpApi } from '@/lib/services/xmtp-api';

interface XmtpContextType {
  client: { address: string } | null;
  serverHealth: boolean;
  isLoading: boolean;
  error: Error | null;
  sendMessage: (recipient: string, content: string) => Promise<void>;
  getConversations: () => Promise<any[]>;
  getMessages: (recipient: string) => Promise<any[]>;
}

const XmtpContext = createContext<XmtpContextType | null>(null);

export function XmtpProvider({ children }: { children: React.ReactNode }) {
  const { authenticated } = usePrivy();
  const { wallets } = useSolanaWallets();
  const [client, setClient] = useState<{ address: string } | null>(null);
  const [serverHealth, setServerHealth] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const wallet = wallets[0];

  // Check server health
  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await fetch('http://localhost:1212/health');
        setServerHealth(response.ok);
      } catch {
        setServerHealth(false);
      }
    };

    checkHealth();
    const interval = setInterval(checkHealth, 30000);
    return () => clearInterval(interval);
  }, []);

  // Initialize XMTP client
  useEffect(() => {
    if (!authenticated || !wallet || !serverHealth) return;

    const initializeClient = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // Check if client already exists
        const existingClient = localStorage.getItem(\`xmtp-client-\${wallet.address}\`);
        if (existingClient) {
          setClient(JSON.parse(existingClient));
          return;
        }

        // Create new client
        const signature = await wallet.signMessage('XMTP Client Creation');
        const clientData = await xmtpApi.createClient(wallet.address, signature);
        
        // Cache client data
        localStorage.setItem(\`xmtp-client-\${wallet.address}\`, JSON.stringify(clientData));
        setClient(clientData);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeClient();
  }, [authenticated, wallet, serverHealth]);

  const sendMessage = async (recipient: string, content: string) => {
    if (!client) throw new Error('XMTP client not initialized');
    
    return await xmtpApi.sendMessage(client.address, recipient, content);
  };

  const getConversations = async () => {
    if (!client) throw new Error('XMTP client not initialized');
    
    return await xmtpApi.getConversations(client.address);
  };

  const getMessages = async (recipient: string) => {
    if (!client) throw new Error('XMTP client not initialized');
    
    return await xmtpApi.getMessages(client.address, recipient);
  };

  return (
    <XmtpContext.Provider value={{
      client,
      serverHealth,
      isLoading,
      error,
      sendMessage,
      getConversations,
      getMessages
    }}>
      {children}
    </XmtpContext.Provider>
  );
}

export const useXmtpContext = () => {
  const context = useContext(XmtpContext);
  if (!context) {
    throw new Error('useXmtpContext must be used within XmtpProvider');
  }
  return context;
};`}</code>
            </pre>

            <h3>XMTP API Service</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`// lib/services/xmtp-api.ts
const XMTP_SERVER_URL = 'http://localhost:1212';

export class XmtpApi {
  static async createClient(address: string, signature: string) {
    const response = await fetch(\`\${XMTP_SERVER_URL}/api/xmtp/create-client\`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ address, signature })
    });

    if (!response.ok) {
      throw new Error('Failed to create XMTP client');
    }

    return await response.json();
  }

  static async sendMessage(senderAddress: string, recipientAddress: string, content: string) {
    const response = await fetch(\`\${XMTP_SERVER_URL}/api/xmtp/messages/send\`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        senderAddress,
        recipientAddress,
        content,
        contentType: 'text'
      })
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    return await response.json();
  }

  static async getConversations(address: string) {
    const response = await fetch(\`\${XMTP_SERVER_URL}/api/xmtp/conversations/\${address}\`);

    if (!response.ok) {
      throw new Error('Failed to get conversations');
    }

    return await response.json();
  }

  static async getMessages(senderAddress: string, recipientAddress: string) {
    const response = await fetch(
      \`\${XMTP_SERVER_URL}/api/xmtp/messages/\${senderAddress}/\${recipientAddress}\`
    );

    if (!response.ok) {
      throw new Error('Failed to get messages');
    }

    return await response.json();
  }
}

export const xmtpApi = XmtpApi;`}</code>
            </pre>

            <h2>Chat Interface</h2>

            <h3>Message Component</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`// components/wallet/message-interface.tsx
import { useXmtpContext } from '@/lib/context/XmtpContext';
import { useState, useEffect } from 'react';

export default function MessageInterface({ recipientAddress }: { recipientAddress: string }) {
  const { sendMessage, getMessages, client } = useXmtpContext();
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [sending, setSending] = useState(false);

  // Load messages
  useEffect(() => {
    if (!client || !recipientAddress) return;

    const loadMessages = async () => {
      try {
        const messageHistory = await getMessages(recipientAddress);
        setMessages(messageHistory);
      } catch (error) {
        console.error('Failed to load messages:', error);
      }
    };

    loadMessages();
  }, [client, recipientAddress, getMessages]);

  const handleSendMessage = async () => {
    if (!newMessage.trim() || sending) return;

    setSending(true);
    try {
      await sendMessage(recipientAddress, newMessage);
      setNewMessage('');
      
      // Refresh messages
      const updatedMessages = await getMessages(recipientAddress);
      setMessages(updatedMessages);
    } catch (error) {
      console.error('Failed to send message:', error);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="flex flex-col h-96 border rounded-lg">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((message, index) => (
          <div
            key={index}
            className={\`flex \${
              message.senderAddress === client?.address ? 'justify-end' : 'justify-start'
            }\`}
          >
            <div
              className={\`max-w-xs px-3 py-2 rounded-lg \${
                message.senderAddress === client?.address
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-900'
              }\`}
            >
              <p className="text-sm">{message.content}</p>
              <p className="text-xs opacity-70 mt-1">
                {new Date(message.sentAt).toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="border-t p-4">
        <div className="flex space-x-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1"
          />
          <Button onClick={handleSendMessage} disabled={sending}>
            {sending ? 'Sending...' : 'Send'}
          </Button>
        </div>
      </div>
    </div>
  );
}`}</code>
            </pre>

            <h2>Token Sending Integration</h2>

            <h3>Send Token with Message</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`// Enhanced message sending with token transfer
const sendTokenWithMessage = async (
  recipientAddress: string,
  message: string,
  tokenAmount: string,
  tokenAddress: string
) => {
  try {
    // 1. Send token transaction
    const txSignature = await TransactionService.handleSolanaSend(
      solanaWallet,
      {
        recipient: { address: recipientAddress },
        token: selectedToken,
        amount: tokenAmount,
        isUSD: false
      },
      connection
    );

    // 2. Send XMTP message with transaction reference
    const messageContent = JSON.stringify({
      type: 'token_transfer',
      message,
      tokenAmount,
      tokenSymbol: selectedToken.symbol,
      txSignature,
      timestamp: Date.now()
    });

    await sendMessage(recipientAddress, messageContent);

    return { success: true, txSignature };
  } catch (error) {
    console.error('Failed to send token with message:', error);
    throw error;
  }
};`}</code>
            </pre>

            <h2>Benefits of Server-Side Architecture</h2>

            <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6">
                <h4 className="font-semibold text-green-800">Key Advantages</h4>
                <ul className="mt-2 text-green-700 space-y-1">
                    <li><strong>No WASM Issues</strong>: Avoids browser compatibility problems</li>
                    <li><strong>Better Performance</strong>: WASM initialization happens once on server</li>
                    <li><strong>Scalability</strong>: Can handle multiple clients efficiently</li>
                    <li><strong>Security</strong>: Private keys and sensitive operations server-side</li>
                    <li><strong>Debugging</strong>: Easier to debug and monitor operations</li>
                </ul>
            </div>

            <h2>Error Handling</h2>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                <h4 className="font-semibold text-yellow-800">Common Issues</h4>
                <ul className="mt-2 text-yellow-700">
                    <li><strong>Server Offline</strong>: XMTP server not running on port 1212</li>
                    <li><strong>Client Creation Failed</strong>: Invalid signature or network issues</li>
                    <li><strong>Message Send Failed</strong>: Recipient not on XMTP network</li>
                    <li><strong>Connection Lost</strong>: Network connectivity problems</li>
                </ul>
            </div>

            <h2>Production Considerations</h2>

            <ul>
                <li><strong>Database</strong>: Replace in-memory storage with Redis or PostgreSQL</li>
                <li><strong>Authentication</strong>: Add proper API authentication</li>
                <li><strong>Rate Limiting</strong>: Implement rate limiting for API endpoints</li>
                <li><strong>Monitoring</strong>: Add logging and error monitoring</li>
                <li><strong>Security</strong>: Improve private key handling and storage</li>
                <li><strong>Clustering</strong>: Use PM2 for process management</li>
            </ul>

            <h2>Next Steps</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <a href="/features/swapping" className="block p-4 border rounded-lg hover:bg-gray-50">
                    <h3 className="font-semibold text-blue-600">← Token Swapping</h3>
                    <p className="text-sm text-gray-600">Learn about Jupiter Exchange integration</p>
                </a>
                <a href="/features/smartsite" className="block p-4 border rounded-lg hover:bg-gray-50">
                    <h3 className="font-semibold text-blue-600">SmartSite System →</h3>
                    <p className="text-sm text-gray-600">Explore website creation features</p>
                </a>
            </div>
        </div>
    );
} 