import React from 'react'

export default function DeliveryPolicy() {
  return (
    <div>
      <div className="space-y-4 text-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Delivery Information</h2>

        <p>Orders are processed within 1-2 business days and delivered within 5-7 business days via shipping.</p>

        <div className="space-y-2">
          <p>
            <strong>Delivery Address</strong>
          </p>
          <p>
            Please ensure your delivery address is correct and complete at the time of checkout. FASHI-ON is not
            responsible for lost or delayed shipments due to incorrect or incomplete addresses.
          </p>
          <p>
            If you need to update your address after placing your order, please contact customer support as soon as
            possible, and we will do our best to accommodate the change before shipping.
          </p>
        </div>
      </div>
    </div>
  )
}
