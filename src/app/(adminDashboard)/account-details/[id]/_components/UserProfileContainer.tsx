"use client";
import { Tabs } from "antd";
import UserProfileCard from "./UserProfileCard";
import ProductListingTable from "./ProductListingTable";
import CharitySupportTable from "./CharitySupportTable";
import { useSearchParams } from "next/navigation";
import FundRaisedTable from "./FundRaisedTable";

export default function UserProfileContainer() {
  const userRole = useSearchParams().get("userRole");

  const tabData = [
    {
      label: "Product Listing",
      key: "1",
      children: <ProductListingTable />,
    },
    userRole !== "Eco-Friendly Shop" && {
      label: "Charity Support",
      key: "2",
      children: <CharitySupportTable />,
    },
  ];

  const charitableOrganizationTabData = [
    {
      label: "Total Fund Raised",
      key: "2",
      children: <FundRaisedTable />,
    },
  ];

  return (
    <div className="grid xl:grid-cols-3 gap-5">
      <div className="">
        <UserProfileCard />
      </div>
      <div className="xl:col-span-2">
        {/* @ts-ignore */}
        <Tabs defaultActiveKey="1" centered items={userRole === "Charitable Organization" ?  charitableOrganizationTabData :  tabData} />
      </div>
    </div>
  );
}
