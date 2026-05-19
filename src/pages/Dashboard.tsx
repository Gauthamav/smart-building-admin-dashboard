import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Calendar from '../components/DashboardPage/Calender';
import OrganizationOverview from '../components/DashboardPage/OrganizationOverview';
import ProductUpdate from '../components/DashboardPage/ProductUpdate';

const Dashboard = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className=" h-full  w-full ">
        <Navbar />
        <div className="bg-white wrapper">
          <div className="flex items-center justify-between">
            <div className="text-[#006bd6]">
              <h2 className="font-bold">Dashboard</h2>
              <p>Welcome back, John 👋</p>
            </div>
            <Calendar></Calendar>
          </div>

          <div className="flex mt-4 gap-4">
            <OrganizationOverview />
            <ProductUpdate />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
