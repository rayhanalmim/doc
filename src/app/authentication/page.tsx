import { PageNavigation } from '@/components/PageNavigation';

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

      <h2>Base URLs</h2>
      <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
        <div className="p-4 rounded-xl bg-green-50 border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <h4 className="font-semibold text-green-800">Production</h4>
          </div>
          <code className="text-sm text-green-800 bg-green-100 px-2 py-1 rounded">
            https://connect.tahweel.io
          </code>
        </div>
        <div className="p-4 rounded-xl bg-orange-50 border border-orange-200">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <h4 className="font-semibold text-orange-800">Sandbox</h4>
          </div>
          <code className="text-sm text-orange-800 bg-orange-100 px-2 py-1 rounded">
            https://connect.tahweelbuild.site
          </code>
        </div>
      </div>

      <PageNavigation
        previous={{ title: 'Introduction', href: '/' }}
        next={{ title: 'Create Payment', href: '/api/create-payment' }}
      />
    </div>
  );
}
