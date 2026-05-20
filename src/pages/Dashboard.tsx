
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Calendar from '../components/DashboardPage/Calender';
import OrganizationOverview from '../components/DashboardPage/OrganizationOverview';
import ProductUpdate from '../components/DashboardPage/ProductUpdate';
import AssetHealth from '../components/DashboardPage/AssetHealth';
import DeviceHealthAnalytics from '../components/DashboardPage/DeviceHealthAnalytics';
import BuildingMap from '../components/DashboardPage/BuildingMap';

const Dashboard = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className=" h-full  w-full ">
        <Navbar />
        <div className="bg-white wrapper">
          <div className="flex sm:items-center sm:flex-row flex-col gap-4 justify-between">
            <div className="text-[#006bd6]">
              <h2 className="font-bold">Dashboard</h2>
              <p>Welcome back, John 👋</p>
            </div>
            <Calendar />
          </div>

          <div className="flex my-4 md:flex-row flex-col gap-4">
            <OrganizationOverview />
            <ProductUpdate />
          </div>
          <DeviceHealthAnalytics />
          <div className="flex md:flex-row flex-col my-4 gap-3">
            <AssetHealth />
            <BuildingMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
