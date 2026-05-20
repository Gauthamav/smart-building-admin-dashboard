import React from 'react';

const SkeltonAssetHealth = () => {
  return (
    <div className="relative min-h-full w-full bg-white border border-gray-200 rounded-md p-3 ">
      <div className="h-4 w-40 shimmer bg-gray-300 rounded"></div>
      <div className="flex flex-col mt-3 gap-3">
        <div className="h-[35px]  shimmer bg-gray-300 rounded"></div>
        <div className="h-[35px]  shimmer bg-gray-300 rounded"></div>
        <div className="h-[35px] shimmer bg-gray-300 rounded"></div>
        <div className="h-[35px] shimmer bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default SkeltonAssetHealth;
