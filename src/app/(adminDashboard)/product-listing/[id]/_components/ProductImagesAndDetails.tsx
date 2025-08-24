import { Tabs } from "antd";
import Image from "next/image";
import React from "react";

const images = [
  "/dummyImages/offer_page_product1.png",
  "/dummyImages/offer_page_product2.png",
  "/dummyImages/offer_page_product3.png",
  "/dummyImages/offer_page_product2.png",
  "/dummyImages/offer_page_product2.png",
];


export default function ProductImagesAndDetails() {
  return (
    <div>
        {/* ------------------------ product images ----------------   */}
      <div className="flex gap-2 ">
        <div className="border  flex-1">
          <Image
            width={220}
            height={220}
            src={images[0] || "/placeholder.svg"}
            alt={`Product Images`}
            className="w-full h-auto max-h-[350px] rounded-md object-cover"
          />
        </div>
        <div className=" grid grid-cols-2 gap-2 flex-1">
          {images.slice(0, 4).map((image, index) => (
            <Image
              width={110}
              height={110}
              key={index}
              src={image || "/placeholder.svg"}
              alt={`Product Images`}
              className="w-full h-auto max-h-[172px]  rounded-md object-cover"
            />
          ))}
        </div>
      </div>

    
    </div>
  );
}
