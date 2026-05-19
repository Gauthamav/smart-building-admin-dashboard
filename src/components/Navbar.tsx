import React, { useState } from 'react';
import { Search } from 'lucide-react';
import logo from '../assets/logo.png';
import { Menu } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Bell } from 'lucide-react';
import adminImage from '../assets/admin.jpg';

const Navbar = () => {
  const [isHideSearchBar, setIsHideSearchBar] = useState(true);
  const handleClick = () => {
    setIsHideSearchBar(prev => !prev);
  };
  return (
    <div className="flex items-center justify-between wrapper mb-3 h-20 w-full bg-white">
      {!isHideSearchBar && (
        <input
          placeholder="Search...."
          className="max-w-[400px] w-full bg-white text-[#006bd6] top-20 z-20 absolute md:hidden placeholder:text-black cursor-pointer pl-4 shadow-lg px-5 py-3 rounded-lg outline-none border-[1px] border-[#006bd6] placeholder:text-sm"></input>
      )}
      <div className="flex items-center gap-2">
        <div className="lg:hidden group cursor-pointer relative flex items-center justify-center  p-2 rounded-md shadow-lg">
          <Menu className=" text-[#006bd6] cursor-pointer" />
          <span className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-100 px-3 py-1 text-xs text-[#006bd6] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Menu
          </span>
        </div>
        <img alt="company-logo" className="max-w-[100px] h-18" src={logo}></img>
      </div>

      <div className="flex items-center gap-2">
        <div className="p-2 border-[1px] md:hidden shadow-lg relative group border-[#006bd6] rounded-md  ">
          <Search size={20} onClick={handleClick} className="text-[#006bd6] cursor-pointer" />
          <span className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-100 px-3 py-1 text-xs text-[#006bd6] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Settings
          </span>
        </div>

        <div className="md:block hidden">
          <Search size={20} className="absolute top-[30px] cursor-pointer text-[#006bd6] cursor-pointer ml-2" />
          <input
            placeholder="Search...."
            className="max-w-[200px] text-[#006bd6] placeholder:text-black cursor-pointer pl-8 relative shadow-lg px-5 py-2 rounded-lg outline-none border-[1px] border-[#006bd6] placeholder:text-sm"></input>
        </div>
        <div className="p-2 border-[1px] shadow-lg relative group border-[#006bd6] rounded-md  ">
          <Settings size={20} className="text-[#006bd6] cursor-pointer" />
          <span className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-100 px-3 py-1 text-xs text-[#006bd6] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Settings
          </span>
        </div>
        <div className="p-2 border-[1px]  border-[#006bd6] cursor-pointer  shadow-lg relative group ] rounded-md  ">
          <Bell size={20} className="text-[#006bd6] cursor-pointer" />
          <span className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-100 px-3 py-1 text-xs text-[#006bd6] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Notification
          </span>
        </div>
        <div className="rounded-full cursor-pointer relative group max-w-[38px] ">
          <img className="rounded-full" src={adminImage}></img>
          <span className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-100 px-3 py-1 text-xs text-[#006bd6] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Admin
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
