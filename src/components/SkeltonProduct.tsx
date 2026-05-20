import React from 'react';

const SkeltonProduct = () => {
  return (
    <div className="relative min-h-full bg-white border border-gray-200 rounded-md p-3  md:w-[70%] w-full max-w-full">
      <div className="h-4 max-w-40 w-full shimmer bg-gray-300 rounded"></div>
      <div className="flex flex-col w-full max-w-full mt-3 gap-3">
        <div className="flex   items-start gap-4">
          <div className="h-[15px]  w-[15px] rounded-full  shimmer bg-gray-300 "></div>
          <div className="flex flex-col gap-2 w-full max-w-full">
            <div className="h-[15px] max-w-full max-w-full  shimmer bg-gray-300 rounded"></div>
            <div className="h-[10px] max-w-[50%]  shimmer bg-gray-300 rounded"></div>
          </div>
        </div>
        <div className="flex   items-start gap-4">
          <div className="h-[15px]  w-[15px] rounded-full  shimmer bg-gray-300 "></div>
          <div className="flex flex-col gap-2 w-full max-w-full">
            <div className="h-[15px] w-full max-w-full  shimmer bg-gray-300 rounded"></div>
            <div className="h-[10px] max-w-[50%]  shimmer bg-gray-300 rounded"></div>
          </div>
        </div>
        <div className="flex   items-start gap-4">
          <div className="h-[15px]  w-[15px] rounded-full  shimmer bg-gray-300 "></div>
          <div className="flex flex-col gap-2 w-full max-w-full">
            <div className="h-[15px] w-full max-w-full  shimmer bg-gray-300 rounded"></div>
            <div className="h-[10px] max-w-[50%]  shimmer bg-gray-300 rounded"></div>
          </div>
        </div>
        <div className="flex   items-start gap-4">
          <div className="h-[15px]  w-[15px] rounded-full  shimmer bg-gray-300 "></div>
          <div className="flex flex-col gap-2 w-full max-w-full">
            <div className="h-[15px] w-full max-w-full  shimmer bg-gray-300 rounded"></div>
            <div className="h-[10px] max-w-[50%]  shimmer bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeltonProduct;
