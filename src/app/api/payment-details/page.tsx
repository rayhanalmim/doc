import { ApiPageWrapper } from '@/components/ApiPageWrapper';

export default function PaymentDetailsPage() {
  const successResponse = `{
  "status": 200,
  "message": "Payment request details fetched successfully",
  "data": {
    "payment_id": "PAY-abc123xyz",
    "qr_code": "TW1234567890ABCDEF",
    "amount": "100.00",
    "transaction_fee": "2.50",
    "donation_amount": "0.00",
    "currency": "USD",
    "status": "completed",
    "created_at": "2024-12-25 14:30:00",
    "is_sandbox_transaction": false,
    "client": {
      "name": "John Doe",
      "email": "john@example.com",
      "phone_dial_code": "+1",
      "phone": "1234567890"
    },
    "user": {
      "id": 123,
      "name": "Tahweel User",
      "email": "user@tahweel.io",
      "phone": "0987654321",
      "tahweel_id": "TW123456"
    },
    "store": {
      "name": "My Store",
      "logo": "https://example.com/logo.png",
      "domain": "mystore.com",
      "email": "store@example.com",
      "phone": "1234567890"
    },
    "webhook": {
      "url": "https://yoursite.com/webhook",
      "called_at": "2024-12-25 14:35:00",
      "response": { "status": "received" }
    },
    "reference": {
      "id": "ORDER-12345",
      "note": "Payment for order #12345"
    },
    "request_amount": {
      "amount": "100.00",
      "currency": "USD",
      "conversion_rate": "1.0000"
    },
    "payload": {
      "custom_field": "custom_value"
    },
    "products": [
      {
        "name": "Product Name",
        "quantity": 2,
        "price": "50.00"
      }
    ]
  }
}`;

  const errorResponse = `{
  "status": 404,
  "message": "Payment request not found"
}`;

  const curlExample = `curl -X GET "https://connect.tahweel.io/merchant/payment/PAY-abc123xyz" \\
  -H "api-key: your_api_key" \\
  -H "api-secret: your_api_secret"`;

  return (
    <ApiPageWrapper
      previous={{ title: 'Create Payment', href: '/api/create-payment' }}
      next={{ title: 'Payment Status', href: '/api/payment-status' }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="px-3 py-1 text-xs font-bold bg-green-100 text-green-700 rounded-full">GET</span>
        <h1 className="!mb-0">Payment Details</h1>
      </div>
      <p className="text-gray-600 text-lg mb-8">
        Retrieve complete details of a payment transaction including customer info, 
        store details, webhook status, and products.
      </p>

      <h2>Endpoint</h2>
      <div className="bg-gray-900 text-gray-100 p-4 rounded-xl my-4 not-prose">
        <code className="text-green-400">GET</code>
        <code className="ml-2">/merchant/payment/&#123;paymentId&#125;</code>
      </div>

      <h2>Path Parameters</h2>
      <div className="overflow-x-auto my-6">
        <table>
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Type</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>paymentId</code></td>
              <td>string</td>
              <td><span className="px-2 py-0.5 text-xs bg-red-100 text-red-700 rounded">Required</span></td>
              <td>The payment ID returned from create payment API</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>cURL Example</h2>
      <pre><code>{curlExample}</code></pre>

      <h2>Response</h2>
      
      <h3>Success Response (200)</h3>
      <pre><code>{successResponse}</code></pre>

      <div className="my-8 not-prose">
        <div className="mb-6">
          <h4 className="text-xl font-bold text-gray-900 mb-2">Response Fields Explained</h4>
          <p className="text-sm text-gray-600">Detailed breakdown of all fields returned in the payment details response</p>
        </div>
        
        <div className="space-y-4">
          {/* Payment Info Card */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-pink-200 hover:shadow-lg transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center shadow-lg shadow-pink-500/25">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h5 className="text-lg font-bold text-gray-900">Payment Info</h5>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 hover:bg-pink-50 transition-colors">
                <code className="text-sm font-mono font-semibold text-pink-600 bg-pink-100 px-2 py-1 rounded">payment_id</code>
                <span className="text-sm text-gray-600 leading-relaxed">Unique payment identifier</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 hover:bg-pink-50 transition-colors">
                <code className="text-sm font-mono font-semibold text-pink-600 bg-pink-100 px-2 py-1 rounded">amount</code>
                <span className="text-sm text-gray-600 leading-relaxed">Net amount after fees</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 hover:bg-pink-50 transition-colors">
                <code className="text-sm font-mono font-semibold text-pink-600 bg-pink-100 px-2 py-1 rounded">transaction_fee</code>
                <span className="text-sm text-gray-600 leading-relaxed">Applied transaction fee</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 hover:bg-pink-50 transition-colors">
                <code className="text-sm font-mono font-semibold text-pink-600 bg-pink-100 px-2 py-1 rounded">currency</code>
                <span className="text-sm text-gray-600 leading-relaxed">Store currency code</span>
              </div>
            </div>
          </div>

          {/* Status Values Card */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-purple-200 hover:shadow-lg transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/25">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h5 className="text-lg font-bold text-gray-900">Status Values</h5>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-yellow-50 border border-yellow-200 hover:shadow-md transition-all">
                <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                <span className="text-sm font-semibold text-yellow-700">pending</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-green-50 border border-green-200 hover:shadow-md transition-all">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-sm font-semibold text-green-700">completed</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-50 border border-red-200 hover:shadow-md transition-all">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                <span className="text-sm font-semibold text-red-700">failed</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-50 border border-blue-200 hover:shadow-md transition-all">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span className="text-sm font-semibold text-blue-700">refunded</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 hover:shadow-md transition-all">
                <span className="w-2 h-2 rounded-full bg-gray-500"></span>
                <span className="text-sm font-semibold text-gray-700">expired</span>
              </div>
            </div>
          </div>

          {/* User Object Card */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-lg transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/25">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h5 className="text-lg font-bold text-gray-900">User Object</h5>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed pl-13">
              Contains information about the Tahweel user who made the payment. Only populated after a successful payment.
            </p>
          </div>

          {/* Webhook Object Card */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-indigo-200 hover:shadow-lg transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/25">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h5 className="text-lg font-bold text-gray-900">Webhook Object</h5>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed pl-13">
              Contains webhook delivery information including the URL, timestamp of the call, and the response received from your server.
            </p>
          </div>
        </div>
      </div>

      <h3>Error Response (404)</h3>
      <pre><code>{errorResponse}</code></pre>
    </ApiPageWrapper>
  );
}
