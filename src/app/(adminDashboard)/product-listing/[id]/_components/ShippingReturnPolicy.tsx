import React from "react";

export default function ShippingReturnPolicy() {
  return (
    <div>
      <div className="space-y-6 text-gray-700">
        {/* Shipping Information */}
        <div>
          <p className="mb-4">
            All orders are processed within 5 - 7 business days. We partner with
            trusted carriers including USPS, FedEx, and UPS to ensure your order
            is handled with care and delivered on time.
          </p>

          <div className="space-y-2">
            <p>
              <strong>Shipping Methods & Costs:</strong>
            </p>
            <p>Shipping Cost: 5-7 business days, starting at $15.</p>
            <p>Free Shipping: More than one orders over $50 within the US.</p>
            <p>
              International Shipping: We currently ship to Canada, UK, and
              select European countries. Shipping fees will be calculated at
              checkout.
            </p>
            <p>
              Track Your Order: Once shipped, a tracking number will be emailed
              to you for tracking your order.
            </p>
          </div>
        </div>

        {/* Returns Section */}
        <div>
          <h3 className="text-lg font-semibold text-blue-600 mb-3">Returns:</h3>
          <div className="space-y-2">
            <p>
              We accept returns within 30 days of purchase. To return an item:
            </p>
            <p>Contact support@fashi-on.com to initiate the return.</p>
            <p>Provide your order number and reason for return.</p>
            <p>We will send you a prepaid return shipping label.</p>
            <p>Pack your item securely and send it back to us.</p>
            <p>
              Once we receive the item, we'll process a refund to your original
              payment method.
            </p>
            <p>
              Exchanges: You can exchange items for a different size or color if
              available.
            </p>
          </div>
        </div>

        {/* Refunds & Shipping Costs */}
        <div>
          <h3 className="text-lg font-semibold text-blue-600 mb-3">
            Refunds & Shipping Costs:
          </h3>
          <div className="space-y-2">
            <p>
              Refunds will be issued to the original payment method within 5-7
              business days after we receive the returned item.
            </p>
            <p>
              You are responsible for the cost of return shipping, unless the
              item is defective or incorrect.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
