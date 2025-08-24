import { StatCard } from "@/components/shared/StatCard";
import { EarningIcon } from "@/icons";
import React from "react";

const EarningStatContainer = () => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-4 `}>
      <StatCard
        title="Total Earning"
        value="$1,250.00"
        icon={<EarningIcon />}
        className="bg-black text-white"
      />
      <StatCard
        title="Subscription Purchased"
        value="$2,000"
        icon={<EarningIcon />}
        className="bg-black text-white"
      />
    </div>
  );
};

export default EarningStatContainer;
