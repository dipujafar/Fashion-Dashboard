import Card from "antd/es/card/Card";

export default function ProductDetailsCard() {
  return (
    <Card className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header with background image and close button */}

      {/* Profile content */}
      <div className="py-4 px-6">
        {/* Personal Details */}
        <div className="space-y-4 border border-[#E6E6FA] p-2 rounded-md">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Product Details
          </h3>

          <div className="space-y-3">
            <div className="flex  items-center border-b border-[#E6E6FA] py-1">
              <span className="text-gray-600 text-sm w-[200px]">
                Item Number:
              </span>
              <span className="text-gray-900 font-medium">#A12345</span>
            </div>

            <div className="flex  items-center border-b border-[#E6E6FA] py-1">
              <span className="text-gray-600 text-sm w-[200px]">Category:</span>
              <span className="text-gray-900 font-medium">Women</span>
            </div>

            <div className="flex  items-center border-b border-[#E6E6FA] py-1 gap-x-4">
              <span className="text-gray-600 text-sm w-[200px]">Tags:</span>
              <span className="text-gray-900 font-medium">
                Sweatshirt, Women's Clothing, Casual Wear, Heart Design
              </span>
            </div>

            <div className="flex items-center border-b border-[#E6E6FA] py-1">
              <span className="text-gray-600 text-sm w-[200px]">
                Condition:
              </span>
              <span className="text-gray-900 font-medium">2 Months Used</span>
            </div>

            <div className="flex  items-center border-b border-[#E6E6FA] py-1">
              <span className="text-gray-600 text-sm w-[200px]">Fabric:</span>
              <span className="text-gray-900 font-medium">Cotton Blend</span>
            </div>
            <div className="flex  items-center border-b border-[#E6E6FA] py-1">
              <span className="text-gray-600 text-sm w-[200px]">Brand:</span>
              <span className="text-gray-900 font-medium">Gucci</span>
            </div>
            <div className="flex  items-center border-b border-[#E6E6FA] py-1">
              <span className="text-gray-600 text-sm w-[200px]">
                Available Size:
              </span>
              <span className="text-gray-900 font-medium">S, M, L</span>
            </div>
            <div className="flex  items-center border-b border-[#E6E6FA] py-1">
              <span className="text-gray-600 text-sm w-[200px]">Color:</span>
              <span className="text-gray-900 font-medium size-7 p-2 bg-[#A9A9A9] rounded-full border border-black"></span>
            </div>
            <div className="flex gap-x-2  items-center border-b border-[#E6E6FA] py-1">
              <span className="text-gray-600 text-sm w-[200px]">
                Care Instruction:
              </span>
              <span className="text-gray-900 font-medium">
                Machine wash cold, tumble dry low, do not bleach
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
