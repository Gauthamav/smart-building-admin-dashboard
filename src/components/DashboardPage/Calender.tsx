import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarDays } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  return (
    <div className="flex flex-col relative gap-0 mr-[40px]">
      <DatePicker
        selected={selectedDate}
        onChange={(date: Date | null) => setSelectedDate(date!)}
        dateFormat="MMM dd, yyyy"
        calendarClassName="custom-calendar "
        className="w-full pl-7 py-1 pr-7  max-w-[160px] text-[#006bd6] outline-none cursor-pointer border-[1px] border-[#006bd6] rounded-md"
      />
      <div className="absolute top-[6px] pl-1">
        <CalendarDays className="text-[#006bd6]" size={20} />
      </div>
      <div className="absolute top-[8px] cursor-pointer  pr-2 right-0">
        <ChevronDown className="text-[#006bd6]" size={20} />
      </div>
    </div>
  );
};

export default Calendar;
