import React from "react";
import EarningStatContainer from "./EarningStatContainer";
import { Input, Tabs } from "antd";
import SubscriptionEarningsTable from "./SubscriptionEarningsTable";
import { Search } from "lucide-react";
import CommissionEarningsTable from "./CommissionEarningsTable";

const tabData = [
  {
    label: "Subscription Earnings",
    key: "1",
    children: <SubscriptionEarningsTable />,
  },
  {
    label: "Commission Earnings",
    key: "2",
    children: <CommissionEarningsTable />,
  },
];

export default function EarningPageContainer() {
  return (
    <div>
      <div className="space-y-4">
        <EarningStatContainer />

        <div className="flex justify-between items-center ">
          <div></div>
          <Input
            className="md:!min-w-[280px] lg:!w-[250px] !py-2 placeholder:text-white !border-none !bg-[#dbdbdb]"
            placeholder="Search here..."
            prefix={<Search size={16} color="#000"></Search>}
          ></Input>
        </div>
        <Tabs defaultActiveKey="1" centered items={tabData} />
      </div>
    </div>
  );
}
