"use client";
import { Card } from "@/components/ui/card";
import { userTagColor } from "@/lib/userTagColor";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";

export default function UserProfileCard() {
    const userRole = useSearchParams().get('userRole');
  return (
    <Card className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header with background image and close button */}
      <div className="relative">
        <div
          className="h-32 bg-cover bg-center"
          style={{ backgroundImage: "url('/dummyImages/user_profile_cover_image.png')" }}
        ></div>

        {/* Profile photo positioned over the header */}
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="size-20 rounded-full border-4 border-white overflow-hidden bg-gray-200">
            <img
              src="/dummyImages/user_profile_profile_image.png"
              alt="User_profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Profile content */}
      <div className="pt-12 pb-6 px-6">
        {/* Name and badge */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Anna Suraiya
          </h2>
          <span style={{ backgroundColor: userTagColor(userRole as string) }} className={cn("inline-block  text-white text-xs font-medium px-3 py-1 rounded-full")}>
            {userRole}
          </span>
        </div>

        {/* Personal Details */}
        <div className="space-y-4 border border-[#E6E6FA] p-2 rounded-md">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Personal Details
          </h3>

          <div className="space-y-3">
            <div className="flex justify-between items-center border-b border-[#E6E6FA] py-1">
              <span className="text-gray-600 text-sm">First Name:</span>
              <span className="text-gray-900 font-medium">Anna</span>
            </div>

            <div className="flex justify-between items-center border-b border-[#E6E6FA] py-1">
              <span className="text-gray-600 text-sm">Last Name:</span>
              <span className="text-gray-900 font-medium">Suraiya</span>
            </div>

            <div className="flex justify-between items-center border-b border-[#E6E6FA] py-1">
              <span className="text-gray-600 text-sm">User Name:</span>
              <span className="text-gray-900 font-medium">Suraiya</span>
            </div>

            <div className="flex justify-between items-center border-b border-[#E6E6FA] py-1">
              <span className="text-gray-600 text-sm">Email:</span>
              <span className="text-gray-900 font-medium">
                anna879@gmail.com
              </span>
            </div>

            <div className="flex justify-between items-center border-b border-[#E6E6FA] py-1">
              <span className="text-gray-600 text-sm">Phone Number:</span>
              <span className="text-gray-900 font-medium">(234) 555-1234</span>
            </div>

            <div className="flex justify-between items-center border-b border-[#E6E6FA] py-1">
              <span className="text-gray-600 text-sm">Location:</span>
              <span className="text-gray-900 font-medium">
                123/A, Florida, UK
              </span>
            </div>

            <div className="flex justify-between items-center border-b border-[#E6E6FA] py-1">
              <span className="text-gray-600 text-sm">Total Sales:</span>
              <span className="text-gray-900 font-medium">24</span>
            </div>

            <div className="flex justify-between items-center border-b border-[#E6E6FA] py-1">
              <span className="text-gray-600 text-sm">Total Earning:</span>
              <span className="text-gray-900 font-medium">$240.00</span>
            </div>

            <div className="flex justify-between items-center border-b border-[#E6E6FA] py-1">
              <span className="text-gray-600 text-sm">Total Followers:</span>
              <span className="text-gray-900 font-medium">30</span>
            </div>

            <div className="flex justify-between items-center border-b border-[#E6E6FA] py-1">
              <span className="text-gray-600 text-sm">Total Fund Raised:</span>
              <span className="text-gray-900 font-medium">$120.00</span>
            </div>

            <div className="flex justify-between items-center border-b border-[#E6E6FA] py-1">
              <span className="text-gray-600 text-sm">Product Listing:</span>
              <span className="text-gray-900 font-medium">35</span>
            </div>
 
            <div className="flex justify-between items-center border-b border-[#E6E6FA] py-1">
              <span className="text-gray-600 text-sm">Charity Support:</span>
              <span className="text-gray-900 font-medium">15</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
