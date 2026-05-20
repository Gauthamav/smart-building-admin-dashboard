import React from 'react';

type ErrorProps = {
  error: string | null;
  refetch: () => void;
};

const Error = ({ error, refetch }: ErrorProps) => {
  return (
    <div className="w-full h-[600px] flex flex-col items-center justify-center text-red-400 border border-gray-300 rounded-md">
      <p>{error}</p>
      <button onClick={refetch} className="mt-3 px-4 py-1 bg-[#006bd6] text-white rounded-md ">
        Retry
      </button>
    </div>
  );
};

export default Error;
