import { StatCard } from "@/components/shared/StatCard";
import { EarningIcon } from "@/icons";

export default function FundStatCards() {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-3 gap-4 `}>
      <StatCard
        title="Total Donations"
        value="$25,000"
        className="bg-[#000] text-white"
        icon={<EarningIcon />}
      />
      <StatCard
        title="Direct Donations"
        value="$10,000"
        className="bg-[#000] text-white"
        icon={<EarningIcon />}
      />
      <StatCard
        title="Sales Contributions"
        value="$5,000"
        className="bg-[#000] text-white"
        icon={<EarningIcon />}
      />
    </div>
  );
}
