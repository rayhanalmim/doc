import { ApiPageWrapper } from '@/components/ApiPageWrapper';

export default function RefundPage() {
  const successResponse = `{
  "status": 200,
  "message": "Refund processed successfully",
  "data": {
    "payment_id": "PAY-abc123xyz",
    "refund_amount": "97.50",
    "refund_fee": "2.50",
    "status": "refunded",
    "refunded_at": "2024-12-25 15:00:00"
  }
}`;

  const errorNotFound = `{
  "status": 404,
  "message": "Payment not found"
}`;

  const errorAlreadyRefunded = `{
  "status": 400,
  "message": "Payment has already been refunded"
}`;

  const errorNotCompleted = `{
  "status": 400,
  "message": "Only completed payments can be refunded"
}`;

  const errorInsufficientBalance = `{
  "status": 400,
  "message": "Insufficient store balance for refund"
}`;

  const curlExample = `curl -X POST "https://connect.tahweel.io/merchant/payment/PAY-abc123xyz/refund" \\
  -H "api-key: your_api_key" \\
  -H "api-secret: your_api_secret"`;

  return (
    <ApiPageWrapper
      previous={{ title: 'Payment Status', href: '/api/payment-status' }}
      next={null}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="px-3 py-1 text-xs font-bold bg-blue-100 text-blue-700 rounded-full">POST</span>
        <h1 className="!mb-0">Refund Payment</h1>
      </div>
      <p className="text-gray-600 text-lg mb-8">
        Process a full refund for a completed payment. The refund will be sent back to the 
        original payer&apos;s Tahweel wallet.
      </p>

      <h2>Endpoint</h2>
      <div className="bg-gray-900 text-gray-100 p-4 rounded-xl my-4 not-prose">
        <code className="text-pink-400">POST</code>
        <code className="ml-2">/merchant/payment/&#123;paymentId&#125;/refund</code>
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
              <td>The payment ID of the completed payment to refund</td>
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
        <h4 className="font-semibold mb-4">Response Fields</h4>
        <div className="space-y-3 text-sm">
          <div className="flex gap-4">
            <code className="text-pink-600 bg-pink-50 px-2 py-1 rounded">payment_id</code>
            <span className="text-gray-600">The payment ID that was refunded.</span>
          </div>
          <div className="flex gap-4">
            <code className="text-pink-600 bg-pink-50 px-2 py-1 rounded">refund_amount</code>
            <span className="text-gray-600">The amount refunded to the customer (original amount minus refund fee).</span>
          </div>
          <div className="flex gap-4">
            <code className="text-pink-600 bg-pink-50 px-2 py-1 rounded">refund_fee</code>
            <span className="text-gray-600">The refund processing fee charged.</span>
          </div>
          <div className="flex gap-4">
            <code className="text-pink-600 bg-pink-50 px-2 py-1 rounded">status</code>
            <span className="text-gray-600">Updated payment status (refunded).</span>
          </div>
        </div>
      </div>

      <h2>Error Responses</h2>
      
      <div className="space-y-6 my-6">
        <div>
          <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
            <span className="px-2 py-0.5 text-xs bg-red-100 text-red-700 rounded">404</span>
            Payment Not Found
          </h4>
          <pre><code>{errorNotFound}</code></pre>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
            <span className="px-2 py-0.5 text-xs bg-red-100 text-red-700 rounded">400</span>
            Already Refunded
          </h4>
          <pre><code>{errorAlreadyRefunded}</code></pre>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
            <span className="px-2 py-0.5 text-xs bg-red-100 text-red-700 rounded">400</span>
            Payment Not Completed
          </h4>
          <pre><code>{errorNotCompleted}</code></pre>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
            <span className="px-2 py-0.5 text-xs bg-red-100 text-red-700 rounded">400</span>
            Insufficient Balance
          </h4>
          <pre><code>{errorInsufficientBalance}</code></pre>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6 rounded-r-lg">
        <h4 className="font-semibold text-yellow-800 mb-2">Important Notes</h4>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>• Only &quot;completed&quot; payments can be refunded.</li>
          <li>• Refunds are full amount only - partial refunds are not supported.</li>
          <li>• Your store must have sufficient balance to cover the refund amount.</li>
          <li>• A refund fee may be applied based on your merchant settings.</li>
          <li>• Refunds are processed immediately and cannot be reversed.</li>
        </ul>
      </div>

      <h2>Refund Flow</h2>
      <div className="space-y-4 my-6 not-prose">
        <div className="flex items-start gap-4">
          <div className="w-7 h-7  mt-3 rounded-full bg-pink-600 text-white flex items-center justify-center text-sm font-medium shrink-0">1</div>
          <div>
            <h4 className="font-medium">Verify Payment Status</h4>
            <p className="text-sm text-gray-500">Ensure the payment status is &quot;completed&quot; before initiating refund.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-7 h-7  mt-3  rounded-full bg-pink-600 text-white flex items-center justify-center text-sm font-medium shrink-0">2</div>
          <div>
            <h4 className="font-medium">Check Store Balance</h4>
            <p className="text-sm text-gray-500">Confirm your store has sufficient balance to cover the refund amount.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-7 h-7  mt-3 rounded-full bg-pink-600 text-white flex items-center justify-center text-sm font-medium shrink-0">3</div>
          <div>
            <h4 className="font-medium">Process Refund</h4>
            <p className="text-sm text-gray-500">Call the refund API endpoint with the payment ID.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-7 h-7  mt-3 rounded-full bg-pink-600 text-white flex items-center justify-center text-sm font-medium shrink-0">4</div>
          <div>
            <h4 className="font-medium">Confirm Refund</h4>
            <p className="text-sm text-gray-500">The refund is sent to the customer&apos;s Tahweel wallet immediately.</p>
          </div>
        </div>
      </div>
    </ApiPageWrapper>
  );
}
