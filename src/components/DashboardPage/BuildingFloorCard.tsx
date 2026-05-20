import React from 'react';

type FloorItems = {
  name: string;
  assets: {
    healthy: number;
    warning: number;
    critical: number;
  };
  energy: {
    consumption: number;
    unit: string;
  };
};
const BuildingFloorCard = ({ name, assets, energy }: FloorItems) => {
  return (
    <div className="grid grid-cols-[1fr_2.5fr_1.5fr]  border-b-[1px] border-gray-200  border-gray-200  items-center">
      <div className="w-full flex items-center justify-center border-r-[1px] lg:text-base sm:text-sm text-xs border-gray-200 py-3">{name}</div>
      <div className="grid grid-cols-3">
        <p className="text-green-400 py-3 pl-1 border-r-[1px] lg:text-base sm:text-sm text-xs w-full text-center border-gray-200 ">
          {assets.healthy}
        </p>
        <p className="text-yellow-400 py-3 pl-1 border-r-[1px] lg:text-base sm:text-sm text-xs w-full text-center border-gray-200">
          {assets.warning}
        </p>
        <p className="text-red-400 py-3 border-r-[1px] lg:text-base sm:text-sm text-xs border-gray-200  w-full text-center pl-1">
          {assets.critical}
        </p>
      </div>
      <div className="grid grid-cols-[2fr_1fr]">
        <p className="text-violet-400 py-3 lg:text-base sm:text-sm text-xs  border-r-[1px] border-gray-200  border-r-[1px] w-full text-center border-gray-200 ">
          {energy.consumption}
        </p>
        <p className="text-green-700 py-3  lg:text-base sm:text-sm text-xs  w-full text-center ">{energy.unit}</p>
      </div>
    </div>
  );
};

export default BuildingFloorCard;
