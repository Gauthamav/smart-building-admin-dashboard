import React from 'react';

import logo from '../assets/logo.png';
import { sidebarItems } from '../data/SidebarData';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation()
  return (
    <div className="w-full max-w-[220px]  mx-auto px-2 pt-[2px] hidden lg:block  h-screen bg-[#F1F5F9]">
      <div className="flex text-[#006bd6] items-center gap-2">
        <img alt="company-logo" className="max-w-[100px]  cursor-pointer h-18" src={logo}></img>
        <div>
          <h1 className="font-bold ">Smart Building</h1>
          <p className="text-xs">Admin Dashboard</p>
        </div>
      </div>

      <div className="mt-5 ml-5 flex flex-col gap-4">
        {sidebarItems.map(item => (
          <div
            key={item.id}
            className={`flex  cursor-pointer   items-center gap-4 py-3 pl-5 pr-1 w-full hover:bg-[#006bd6] text-[#006bd6] hover:text-white rounded-lg ${location.pathname === item.pathName ? 'bg-[#006bd6] text-white' : ''} `}>
            <item.icon className="" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
