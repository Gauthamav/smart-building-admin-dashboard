import React from 'react';
import Spinner from './Spinner';

const SkeltonChart = () => {
  return (
    <div className="relative h-[300px] bg-white border border-gray-200 rounded-md p-3 ">
      <div className="h-4 w-40 shimmer bg-gray-300 rounded"></div>
      <div className="h-[240px] shimmer mt-2 bg-gray-300 rounded"></div>
      <Spinner />
    </div>
  );
};

export default SkeltonChart;
