import React from 'react';
import logo from '../assets/logo.png';
import { sidebarItems } from '../data/SidebarData';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import { toggleSidebar } from '../redux/sidebarSlice';

const Sidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  return (
    <>
      <div
        className={`lg:w-full  w-[350px] ${!isOpen && 'hidden'} z-50 fixed top-0 left-0 max-w-[220px] left-0  lg:block mx-auto px-2 pt-[2px]  lg:block   lg:static min-h-screen bg-[#F1F5F9]`}>
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
        <div onClick={() => dispatch(toggleSidebar())} className="fixed lg:hidden inset-0   -z-1 "></div>
      </div>
    </>
  );
};

export default Sidebar;
