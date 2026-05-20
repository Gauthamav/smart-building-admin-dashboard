
import useFormatDate from '../../hooks/useFormatDate';

type TimelineProps = {
  title: string;
  version: string;
  date: number;
  length: number;
  index: number;
};

const UpdateTimeline = ({ title, version, date, length, index }: TimelineProps) => {
  const { parseDate } = useFormatDate();
  return (
    <div className="flex max-w-full   gap-5">
      <div className="flex flex-col items-center">
        <div className="w-4 max-h-4 rounded-full max-w-full h-full bg-white border-2 border-[#006bd6]"></div>
        {index < length - 1 && <div className="w-[2.5px] h-full bg-gray-500"></div>}
      </div>
      <div className="flex flex-col  gap-1">
        <div className="flex  sm:flex-row flex-col  gap-2">
          <p className=" truncate break-all text-sm sm:text-md w-full ">{title}</p>
          <p className=" bg-blue-200 rounded-xl text-blue-600 items-center  text-xs flex max-h-fit justify-center py-1 w-[70px] max-w-[100px]">
            {version} v
          </p>
        </div>
        <p className="text-xs pb-4">{parseDate(date)}</p>
      </div>
    </div>
  );
};

export default UpdateTimeline;
