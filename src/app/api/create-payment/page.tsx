import { ApiPageWrapper } from '@/components/ApiPageWrapper';

export default function CreatePaymentPage() {
  const requestBody = `{
  "amount": 100.00,
  "currency": "USD",
  "client": {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "1234567890",
    "phone_dial_code": "+1"
  },
  "products": [
    {
      "name": "Product Name",
      "quantity": 2,
      "price": 50.00
    }
  ],
  "payload": {
    "order_id": "ORD-12345",
    "custom_field": "custom_value"
  },
  "reference_id": "ORDER-12345",
  "reference_note": "Payment for order #12345",
  "webhook_url": "https://yoursite.com/webhook"
}`;

  const successResponse = `{
  "message": "Payment request created successfully",
  "data": {
    "payment_id": "PAY-abc123xyz",
    "qr_code": "TW1234567890ABCDEF",
    "instructions": "<div>Open the Tahweel App...</div>"
  }
}`;

  const errorResponse = `{
  "status": 400,
  "message": "Validation error",
  "errors": [
    {
      "field": "amount",
      "message": "Amount is required"
    }
  ]
}`;

  const curlExample = `curl -X POST "https://connect.tahweel.io/merchant/payment/create" \\
  -H "Content-Type: application/json" \\
  -H "api-key: your_api_key" \\
  -H "api-secret: your_api_secret" \\
  -d '{
    "amount": 100,
    "currency": "USD",
    "reference_id": "ORDER-12345"
  }'`;

  return (
    <ApiPageWrapper
      previous={{ title: 'Authentication', href: '/authentication' }}
      next={{ title: 'Payment Details', href: '/api/payment-details' }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="px-3 py-1 text-xs font-bold bg-blue-100 text-blue-700 rounded-full">POST</span>
        <h1 className="!mb-0">Create Payment</h1>
      </div>
      <p className="text-gray-600 text-lg mb-8">
        Create a new payment request and generate a QR code for the customer to scan and pay.
      </p>

      <h2>Endpoint</h2>
      <div className="bg-gray-900 text-gray-100 p-4 rounded-xl my-4 not-prose">
        <code className="text-pink-400">POST</code>
        <code className="ml-2">/merchant/payment/create</code>
      </div>

      <h2>Request Parameters</h2>
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
              <td><code>amount</code></td>
              <td>number</td>
              <td><span className="px-2 py-0.5 text-xs bg-red-100 text-red-700 rounded">Required</span></td>
              <td>Transaction amount (must be greater than 0)</td>
            </tr>
            <tr>
              <td><code>currency</code></td>
              <td>string</td>
              <td><span className="px-2 py-0.5 text-xs bg-red-100 text-red-700 rounded">Required</span></td>
              <td>Currency code (e.g., USD, EUR, SAR)</td>
            </tr>
            <tr>
              <td><code>client</code></td>
              <td>object</td>
              <td><span className="px-2 py-0.5 text-xs bg-gray-100 text-gray-700 rounded">Optional</span></td>
              <td>Customer information (name, email, phone required if provided)</td>
            </tr>
            <tr>
              <td><code>products</code></td>
              <td>array</td>
              <td><span className="px-2 py-0.5 text-xs bg-gray-100 text-gray-700 rounded">Optional</span></td>
              <td>Array of products (name, quantity, price required for each)</td>
            </tr>
            <tr>
              <td><code>payload</code></td>
              <td>object</td>
              <td><span className="px-2 py-0.5 text-xs bg-gray-100 text-gray-700 rounded">Optional</span></td>
              <td>Custom data object to store with payment</td>
            </tr>
            <tr>
              <td><code>reference_id</code></td>
              <td>string</td>
              <td><span className="px-2 py-0.5 text-xs bg-gray-100 text-gray-700 rounded">Optional</span></td>
              <td>Your unique order/reference ID</td>
            </tr>
            <tr>
              <td><code>reference_note</code></td>
              <td>string</td>
              <td><span className="px-2 py-0.5 text-xs bg-gray-100 text-gray-700 rounded">Optional</span></td>
              <td>Note or description for the payment</td>
            </tr>
            <tr>
              <td><code>webhook_url</code></td>
              <td>string</td>
              <td><span className="px-2 py-0.5 text-xs bg-gray-100 text-gray-700 rounded">Optional</span></td>
              <td>URL to receive payment status updates</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Request Body Example</h2>
      <pre><code>{requestBody}</code></pre>

      <h2>cURL Example</h2>
      <pre><code>{curlExample}</code></pre>

      <h2>Response</h2>
      
      <h3>Success Response (200)</h3>
      <pre><code>{successResponse}</code></pre>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-6 not-prose">
        <h4 className="font-semibold mb-4">Response Fields</h4>
        <div className="space-y-3 text-sm">
          <div className="flex gap-4">
            <code className="text-pink-600 bg-pink-50 px-2 py-1 rounded">payment_id</code>
            <span className="text-gray-600">Unique identifier for the payment. Use this to check status or get details.</span>
          </div>
          <div className="flex gap-4">
            <code className="text-pink-600 bg-pink-50 px-2 py-1 rounded">qr_code</code>
            <span className="text-gray-600">A QR code number will be sent, which needs to be converted to a scannable QR Code.</span>
          </div>
          <div className="flex gap-4">
            <code className="text-pink-600 bg-pink-50 px-2 py-1 rounded">instructions</code>
            <span className="text-gray-600">HTML instructions for the customer on how to complete the payment.</span>
          </div>
        </div>
      </div>

      <h3>Error Response (400)</h3>
      <pre><code>{errorResponse}</code></pre>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 rounded-r-lg">
        <h4 className="font-semibold text-blue-800 mb-2">Important Notes</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Amount must be within your store&apos;s minimum and maximum transaction limits.</li>
          <li>• Daily and monthly transaction limits apply based on your merchant settings.</li>
          <li>• If client object is provided, all fields (name, email, phone) are required.</li>
          <li>• If products array is provided, each product must have name, quantity, and price.</li>
          <li>• Use the webhook_url to receive real-time payment status updates.</li>
        </ul>
      </div>
    </ApiPageWrapper>
  );
}
