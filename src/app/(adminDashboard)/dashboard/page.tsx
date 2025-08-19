
import { EarningOverviewChart } from "./_components/EarningOverviewChart";
import RecentlyUser from "./_components/RecentlyUser";
import StatContainer from "./_components/StatContainer";
import UserOverviewChart from "./_components/UserOverviewChart";

const DashboardPage = () => {
  return (
    <div className="lg:space-y-5 space-y-3 ">
      <StatContainer></StatContainer>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <UserOverviewChart></UserOverviewChart>
        <EarningOverviewChart></EarningOverviewChart>
      </div>
      <RecentlyUser />
    </div>
  );
};

export default DashboardPage;
