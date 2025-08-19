import { StatCard } from "@/components/shared/StatCard";
import { EarningIcon, UsersIcon } from "@/icons";

const StatContainer = () => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-4 `}>
      <StatCard
        title="Total Users"
        value="7,265"
        className="bg-[#000] text-white"
        icon={<UsersIcon />}
      />
      <StatCard
        title="Total Earning"
        value="$5,000"
        className="bg-[#000] text-white"
        icon={<EarningIcon />}
      />
      
    </div>
  );
};

export default StatContainer;
