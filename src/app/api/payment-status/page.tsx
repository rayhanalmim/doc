import { ApiPageWrapper } from '@/components/ApiPageWrapper';

export default function PaymentStatusPage() {
  const successResponse = `{
  "status": 200,
  "message": "Payment request status fetched successfully",
  "data": {
    "payment_id": "PAY-abc123xyz",
    "status": "completed"
  }
}`;

  const pendingResponse = `{
  "status": 200,
  "message": "Payment request status fetched successfully",
  "data": {
    "payment_id": "PAY-abc123xyz",
    "status": "pending"
  }
}`;

  const errorResponse = `{
  "status_code": 404,
  "message": "Invalid payment id"
}`;

  const curlExample = `curl -X GET "https://connect.tahweel.io/merchant/payment/PAY-abc123xyz/status" \\
  -H "api-key: your_api_key" \\
  -H "api-secret: your_api_secret"`;

  return (
    <ApiPageWrapper
      previous={{ title: 'Payment Details', href: '/api/payment-details' }}
      next={{ title: 'Refund Payment', href: '/api/refund' }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="px-3 py-1 text-xs font-bold bg-green-100 text-green-700 rounded-full">GET</span>
        <h1 className="!mb-0">Payment Status</h1>
      </div>
      <p className="text-gray-600 text-lg mb-8">
        Check the current status of a payment. Use this endpoint for polling the payment status 
        or as an alternative to webhooks.
      </p>

      <h2>Endpoint</h2>
      <div className="bg-gray-900 text-gray-100 p-4 rounded-xl my-4 not-prose">
        <code className="text-green-400">GET</code>
        <code className="ml-2">/merchant/payment/&#123;paymentId&#125;/status</code>
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
      
      <h3>Success Response (200) - Completed</h3>
      <pre><code>{successResponse}</code></pre>

      <h3>Success Response (200) - Pending</h3>
      <pre><code>{pendingResponse}</code></pre>

      <h2>Payment Status Values</h2>
      <div className="space-y-3 my-6 not-prose">
        <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700 w-24 text-center">pending</span>
          <p className="text-sm text-gray-600">Payment is awaiting customer action. QR code has not been scanned yet.</p>
        </div>
        <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 w-24 text-center">completed</span>
          <p className="text-sm text-gray-600">Payment was successful. Funds have been transferred.</p>
        </div>
        <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700 w-24 text-center">failed</span>
          <p className="text-sm text-gray-600">Payment failed due to insufficient balance or other error.</p>
        </div>
        <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 w-24 text-center">refunded</span>
          <p className="text-sm text-gray-600">Payment was refunded to the customer.</p>
        </div>
        <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 w-24 text-center">expired</span>
          <p className="text-sm text-gray-600">Payment request expired before customer completed payment.</p>
        </div>
      </div>

      <h3>Error Response (404)</h3>
      <pre><code>{errorResponse}</code></pre>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 rounded-r-lg">
        <h4 className="font-semibold text-blue-800 mb-2">Polling Best Practices</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Poll every 3-5 seconds for active payment sessions</li>
          <li>• Stop polling once status changes from &quot;pending&quot;</li>
          <li>• Use webhooks for production to reduce API calls</li>
          <li>• Payment requests typically expire after 15 minutes if not completed</li>
        </ul>
      </div>
    </ApiPageWrapper>
  );
}
