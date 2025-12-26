'use client';
import { PageNavigation } from '@/components/PageNavigation';
import { Check, Copy, Globe } from 'lucide-react';
import { useState } from 'react';

const BASE_URL = 'https://connect.tahweel.io';

export default function AuthenticationPage() {
  const curlExample = `curl -X POST "https://connect.tahweel.io/merchant/payment/create" \\
  -H "Content-Type: application/json" \\
  -H "api-key: your_api_key" \\
  -H "api-secret: your_api_secret" \\
  -d '{
    "amount": 100,
    "currency": "USD"
  }'`;

  const jsExample = `const response = await fetch('https://connect.tahweel.io/merchant/payment/create', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'api-key': 'your_api_key',
    'api-secret': 'your_api_secret'
  },
  body: JSON.stringify({
    amount: 100,
    currency: 'USD'
  })
});

const data = await response.json();`;

  const phpExample = `<?php
$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "https://connect.tahweel.io/merchant/payment/create",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_POST => true,
  CURLOPT_POSTFIELDS => json_encode([
    "amount" => 100,
    "currency" => "USD"
  ]),
  CURLOPT_HTTPHEADER => [
    "Content-Type: application/json",
    "api-key: your_api_key",
    "api-secret: your_api_secret"
  ]
]);

$response = curl_exec($curl);
curl_close($curl);

echo $response;`;

  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  const copyToClipboard = async (url: string, type: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedUrl(type);
      setTimeout(() => setCopiedUrl(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="max-w-4xl">
      <h1>Authentication</h1>
      <p className="text-gray-600 text-lg mb-8">
        Learn how to authenticate your API requests to the Tahweel Merchant API.
      </p>

      <h2>API Keys</h2>
      <p>
        The Tahweel Merchant API uses API Key and Secret pair for authentication.
        You can find your credentials in the Merchant Dashboard under your approved store settings.
      </p>

      <h3>How to Get Your API Credentials</h3>
      <div className="my-8 not-prose">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[23px] top-10 bottom-14 w-[2px] bg-gradient-to-b from-pink-500 via-purple-500 to-green-500"></div>

          {/* Steps */}
          <div className="space-y-6">
            {/* Step 1 */}
            <div className="relative flex gap-6 group">
              <div className="flex items-center gap-3">
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 shadow-lg shadow-pink-500/25 flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
              </div>
              <div className="flex-1 bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md hover:border-pink-200 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="font-semibold text-gray-900">Register as a Merchant</h4>
                  <span className="px-2 py-0.5 text-xs font-medium bg-pink-100 text-pink-700 rounded-full">Start Here</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Sign up at <a href="https://merchant.tahweel.io" target="_blank" className="text-pink-600 font-medium hover:underline">merchant.tahweel.io</a> and complete your merchant profile with business details.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex gap-6 group">

              <div className="flex items-center gap-3">
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg shadow-purple-500/25 flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
              </div>
              <div className="flex-1 bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md hover:border-purple-200 transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Create a Store</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Navigate to your merchant dashboard and create a new store with your business details, logo, and contact information.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex gap-6 group">

              <div className="flex items-center gap-3">
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-lg shadow-indigo-500/25 flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
              </div>
              <div className="flex-1 bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="font-semibold text-gray-900">Wait for Store Approval</h4>
                  <span className="px-2 py-0.5 text-xs font-medium bg-yellow-100 text-yellow-700 rounded-full">Review Period</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Your store will be reviewed by the Tahweel team. You&apos;ll receive an email notification once your store is approved.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative flex gap-6 group">
              <div className="flex items-center gap-3">
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg shadow-green-500/25 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="font-semibold text-gray-900">Access API Credentials</h4>
                  <span className="px-2 py-0.5 text-xs font-medium bg-green-100 text-green-700 rounded-full">Final Step</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Once approved, go to the <strong className="text-green-700">Approved Store</strong> page in your dashboard. You&apos;ll find both <strong>Production</strong> and <strong>Sandbox</strong> API credentials there.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6 rounded-r-lg">
        <div className="flex items-start gap-3">
          <span className="text-yellow-600 text-xl">⚠️</span>
          <div>
            <h4 className="font-semibold text-yellow-800 mb-1">Security Warning</h4>
            <p className="text-yellow-700 text-sm">
              Never expose your API Secret in client-side code or public repositories.
              Always make API calls from your server.
            </p>
          </div>
        </div>
      </div>

      <h3>Types of Keys</h3>
      <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
        <div className="p-4 rounded-xl bg-green-50 border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-1 text-xs font-bold bg-green-100 text-green-700 rounded self-center">LIVE</span>
            <h4 className="font-semibold text-green-800 self-center">Production Keys</h4>
          </div>
          <p className="text-sm text-green-700">
            Use these keys for live transactions. Real money will be processed.
          </p>
        </div>
        <div className="p-4 rounded-xl bg-orange-50 border border-orange-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-1 text-xs font-bold bg-orange-100 text-orange-700 rounded self-center">TEST</span>
            <h4 className="font-semibold text-orange-800 self-center">Sandbox Keys</h4>
          </div>
          <p className="text-sm text-orange-700">
            Use these keys for testing and development. No real transactions are processed.
          </p>
        </div>
      </div>

      <div className='py-5'>
        <div className="relative">
          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">

              <div className="p-2 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 shadow-lg shadow-pink-500/20">
                <Globe className="w-8 h-8 text-white" />
              </div>

              <div>
                <h6 className="text-2xl font-semibold text-gray-900 py-0">API Base URL</h6>
                <p className="text-xs text-gray-500">Use for all API requests</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-xs font-medium text-green-400">Production</span>
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
                <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                <span className="text-xs font-medium text-orange-400">Sandbox</span>
              </span>
            </div>
          </div>

          {/* URL Display */}
          <div className="flex items-center gap-3 bg-white rounded-xl p-4 border-2 border-gray-200 shadow-sm">
            <code className="flex-1 text-lg font-mono text-gray-800 tracking-wide">
              {BASE_URL}
            </code>
            <button
              onClick={() => copyToClipboard(BASE_URL, 'base')}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white text-sm font-medium shadow-lg shadow-pink-500/25 transition-all hover:scale-105"
            >
              {copiedUrl === 'base' ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Info note */}
          <p className="mt-4 text-xs text-gray-600 flex items-center gap-2">
            <svg className="w-4 h-4 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Same endpoint for both environments — your API credentials determine Production or Sandbox mode.</span>
          </p>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-400 p-4 my-6 rounded-r-lg">
          <div className="flex items-start gap-3">
            <span className="text-purple-600 text-xl mt-3">💡</span>
            <div>
              <h4 className="font-semibold text-purple-800 mb-1">Sandbox vs Production</h4>
              <p className="text-purple-700 text-sm">
                The API URL is the same for both environments. When you create a store, you&apos;ll receive two sets of credentials:
                <strong> Production keys</strong> for live transactions and <strong>Sandbox keys</strong> for testing.
                The system automatically detects the environment based on which API key you use.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2>Request Headers</h2>
      <p>Include the following headers in all API requests:</p>

      <div className="overflow-x-auto my-6">
        <table>
          <thead>
            <tr>
              <th>Header</th>
              <th>Value</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>Content-Type</code></td>
              <td><code>application/json</code></td>
              <td>Required for all requests with body</td>
            </tr>
            <tr>
              <td><code>api-key</code></td>
              <td><code>your_api_key</code></td>
              <td>Your merchant API key</td>
            </tr>
            <tr>
              <td><code>api-secret</code></td>
              <td><code>your_api_secret</code></td>
              <td>Your merchant API secret</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Code Examples</h2>

      <h3>cURL</h3>
      <pre><code>{curlExample}</code></pre>

      <h3>JavaScript / Node.js</h3>
      <pre><code>{jsExample}</code></pre>

      <h3>PHP</h3>
      <pre><code>{phpExample}</code></pre>

      <h2>Authentication Errors</h2>
      <p>If authentication fails, you will receive one of the following error responses:</p>

      <div className="space-y-4 my-6 not-prose">
        <div className="p-4 rounded-lg bg-red-50 border border-red-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-1 text-xs font-bold bg-red-100 text-red-700 rounded">401</span>
            <span className="font-semibold text-red-800">Unauthorized</span>
          </div>
          <p className="text-sm text-red-700">Invalid or missing API credentials</p>
        </div>

        <div className="p-4 rounded-lg bg-red-50 border border-red-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-1 text-xs font-bold bg-red-100 text-red-700 rounded">403</span>
            <span className="font-semibold text-red-800">Forbidden</span>
          </div>
          <p className="text-sm text-red-700">API key does not have permission for this operation</p>
        </div>
      </div>



      <PageNavigation
        previous={{ title: 'Introduction', href: '/' }}
        next={{ title: 'Create Payment', href: '/api/create-payment' }}
      />
    </div>
  );
}
