"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ArrowRight, Check } from "lucide-react"

interface Package {
  _id: string
  title: string
  subTitle: string
  description: string
  price: string
  duration: string
}

interface PricingCardsProps {
  packages: Package[],
  openEditModal: (packageId: boolean) => void
}

export function PackageCard({ packages, openEditModal}: PricingCardsProps) {
  const handleEdit = (packageId: string) => {
    console.log("Edit package:", packageId);
    openEditModal(true);
  }

  const handleDelete = (packageId: string) => {
    console.log("Delete package:", packageId);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {packages?.map((pkg) => (
        <Card key={pkg._id} className="bg-slate-100 shadow-lg">
          <CardHeader className="text-center pb-4">
            <h2 className="text-2xl font-bold text-[#0F3732]">{pkg.title}</h2>
            <p className="text-[#8A8A8A] text-sm">{pkg.subTitle}</p>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Price Section */}
            <div className="text-center">
              {pkg.price === "free" ? (
                <div className="bg-white rounded-lg py-4 px-6">
                  <span className="text-3xl font-bold text-[#0F3732]">Free</span>
                </div>
              ) : (
                <div className=" bg-white rounded-lg py-4 px-6">
                  <span className="text-3xl font-bold text-[#0F3732]">
                    {pkg.price}
                    <span className="text-lg font-medium">/{pkg.duration}</span>
                  </span>
                </div>
              )}
            </div>

            {/* Description with Check Icon */}
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 size-10 bg-[#0F3732] rounded-full flex items-center justify-center mt-0.5">
               <ArrowRight className="size-6 text-white" />
              </div>
              <p className="text-gray-700 text-base leading-relaxed">{pkg.description}</p>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              <Button onClick={() => handleEdit(pkg._id)} className="bg-black hover:bg-gray-800 text-white font-medium">
                EDIT
              </Button>
              <Button
                onClick={() => handleDelete(pkg._id)}
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 font-medium"
              >
                DELETE
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
