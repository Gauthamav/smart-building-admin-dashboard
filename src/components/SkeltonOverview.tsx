import React from 'react';
import Spinner from './Spinner';

const SkeltonOverview = () => {
  return (
    <div className="relative w-full h-full bg-white border border-gray-200 rounded-md p-3 ">
      <div className="h-4 w-40 shimmer bg-gray-300 rounded"></div>
      <div className="h-[600px] mt-2 shimmer bg-gray-300 rounded"></div>
      <Spinner />
    </div>
  );
};

export default SkeltonOverview;
