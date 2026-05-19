import React from 'react';
import WidgetHeading from '../WidgetHeading';

const ProductUpdate = () => {
  return (
    <div className=" w-[70%] max-w-full bg-white  border-[1px] border-gray-300 rounded-md p-2">
      <WidgetHeading heading="Project Update" />
      <div className='mt-5'>
        <div className="flex   gap-5">
          <div className="flex flex-col items-center">
            <div className="w-4 max-h-4 rounded-full max-w-full h-full bg-white border-2 border-[#006bd6]"></div>
            <div className="w-[2.5px] h-full bg-gray-500"></div>
          </div>
          <div className="flex flex-col ">
            <div className="flex gap-2">
              <p>Customisable dashboard released</p>
              <p className="p-1 bg-blue-200 rounded-xl text-blue-600 text-xs">v3.40</p>
            </div>
            <p className="text-xs py-3">Dec 10,2023 .5.20 PM</p>
          </div>
        </div>

        <div className="flex   gap-5">
          <div className="flex flex-col items-center">
            <div className="w-4 max-h-4 rounded-full max-w-full h-full bg-white border-2 border-[#006bd6]"></div>
            <div className="w-[2.5px] h-full bg-gray-500"></div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <p>Customisable dashboard released</p>
              <p className="p-1 bg-blue-200 rounded-xl text-blue-600 text-xs">v3.40</p>
            </div>
            <p className="text-xs">Dec 10,2023 .5.20 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductUpdate;
