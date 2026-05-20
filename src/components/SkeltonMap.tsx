
import Spinner from './Spinner';

const SkeltonMap = () => {
  return (
    <div className="relative md:max-w-[400px] w-full h-full bg-white border border-gray-200 rounded-md p-3 ">
      <div className="h-4 w-40 shimmer bg-gray-300 rounded"></div>
      <div className="h-[400px] mt-2 shimmer bg-gray-300 rounded"></div>
      <Spinner />
    </div>
  );
};

export default SkeltonMap;
