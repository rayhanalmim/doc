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

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-6 not-prose">
        <h4 className="font-semibold mb-4">Response Fields Explained</h4>
        
        <div className="space-y-6">
          <div>
            <h5 className="font-medium text-sm mb-2">Payment Info</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <div className="flex gap-2">
                <code className="text-pink-600">payment_id</code>
                <span className="text-gray-500">- Unique payment identifier</span>
              </div>
              <div className="flex gap-2">
                <code className="text-pink-600">amount</code>
                <span className="text-gray-500">- Net amount after fees</span>
              </div>
              <div className="flex gap-2">
                <code className="text-pink-600">transaction_fee</code>
                <span className="text-gray-500">- Applied transaction fee</span>
              </div>
              <div className="flex gap-2">
                <code className="text-pink-600">currency</code>
                <span className="text-gray-500">- Store currency code</span>
              </div>
            </div>
          </div>

          <div>
            <h5 className="font-medium text-sm mb-2">Status Values</h5>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">pending</span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">completed</span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">failed</span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">refunded</span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">expired</span>
            </div>
          </div>

          <div>
            <h5 className="font-medium text-sm mb-2">User Object</h5>
            <p className="text-sm text-gray-500">
              Contains information about the Tahweel user who made the payment. 
              Only populated after a successful payment.
            </p>
          </div>

          <div>
            <h5 className="font-medium text-sm mb-2">Webhook Object</h5>
            <p className="text-sm text-gray-500">
              Contains webhook delivery information including the URL, timestamp of the call, 
              and the response received from your server.
            </p>
          </div>
        </div>
      </div>

      <h3>Error Response (404)</h3>
      <pre><code>{errorResponse}</code></pre>
    </ApiPageWrapper>
  );
}
