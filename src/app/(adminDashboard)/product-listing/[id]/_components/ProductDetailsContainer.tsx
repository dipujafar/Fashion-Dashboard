import React from "react";
import SellerInfoCard from "./SellerInfoCard";
import ProductDetailsCard from "./ProductDetailsCard";
import ProductImagesAndDetails from "./ProductImagesAndDetails";
import {  Tabs } from "antd";
import ProductDescription from "./ProductDescription";
import ShippingReturnPolicy from "./ShippingReturnPolicy";
import DeliveryPolicy from "./DeliveryPolicy";
import { Button } from "@/components/ui/button";

const tabData = [
  {
    label: "Description",
    key: "1",
    children: <ProductDescription />,
  },
    {
    label: "Shipping & Returns",
    key: "2",
    children: <ShippingReturnPolicy />,
  },
  {
    label: "Delivery Policy",
    key: "3",
    children: <DeliveryPolicy />,
  }
];

export default function ProductDetailsContainer() {
  return (
    <div className="grid xl:grid-cols-3 gap-5">
      <div className="space-y-5">
        <SellerInfoCard />
        <ProductDetailsCard />
      </div>
      <div className="xl:col-span-2 space-y-5">
        <ProductImagesAndDetails />
        <Tabs defaultActiveKey="1" centered items={tabData} />
        <div className="flex gap-x-3">
          <Button className="w-full h-11">Approve</Button>
          <Button className="w-full h-11  bg-transparent text-black border-b-2 border-r-2 border-black hover:bg-gray-200">Reject</Button>
        </div>
      </div>
    </div>
  );
}
