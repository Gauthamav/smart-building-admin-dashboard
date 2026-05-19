import React from 'react';

type OverviewCardProps = {
  name: string;
  value: number;
  icon: string;
};

const OverviewCard = ({ name, value, icon }: OverviewCardProps) => {
  return (
    <div className="p-3 border-[1px] w-full cursor-pointer border-gray-300 rounded-md flex gap-4 items-center">
      <div className="rounded-full  bg-white shadow-lg flex justify-center items-center w-12 h-12 shrink-0 ">
        <img src={icon} className='w-7 h-7'></img>
      </div>
      <div className="flex flex-col min-w-0 gap-2">
        <p className="capitalize truncate w-full">{name}</p>
        <h3 className="font-bold">{value}</h3>
      </div>
    </div>
  );
};

export default OverviewCard;
