import { ChevronDown, ChevronUp } from 'lucide-react';
import  { useState } from 'react';
import BuildingFloorCard from './BuildingFloorCard';
import { Building2 } from 'lucide-react';

type FloorItems = {
  id: number;
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
type AssetHealthProps = {
  name: string;
  floor: FloorItems[];
};

const BuildingHealthAccordion = ({ name, floor }: AssetHealthProps) => {
  const [active, setActive] = useState(false);

  const handleAccordion = () => {
    setActive(prev => !prev);
  };
  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="py-2 px-2 flex items-center justify-between border-[1px] rounded-md border-gray-300 ">
        <div className="flex items-center gap-2">
          <Building2 className="text-[#006bd6] " size={20} />
          <h5>{name}</h5>
        </div>
        <button onClick={handleAccordion}>
          {active ? (
            <ChevronUp size={20} className="cursor-pointer outline-none" />
          ) : (
            <ChevronDown size={20} className="cursor-pointer outline-none" />
          )}
        </button>
      </div>
      {active && (
        <div className="h-full overflow-y-auto  pb-3">
          <div className="grid grid-cols-[1fr_2.5fr_1.5fr]  border-x-[2px] bg-gray-100 border-gray-200  items-center">
            <div className="border-r-[1px]  lg:text-base sm:text-sm text-xs flex items-center justify-center  h-full text-[#006bd6] bg-gray-100 w-full text-center border-gray-200">
              Floor
            </div>

            <div className="border-r-[1px]  h-full flex flex-col bg-gray-100 border-gray-200">
              <p className="border-b-[1px] py-3  lg:text-base sm:text-sm text-xs   border-gray-200 w-full text-center text-[#006bd6]">
                Assets
              </p>
              <div className="grid grid-cols-3">
                <p className="text-green-400 py-3  lg:text-base sm:text-sm text-xs   border-r-[1px] border-gray-200  w-full text-center">
                  Healthy
                </p>
                <p className="text-yellow-400 py-3  lg:text-base sm:text-sm text-xs   border-r-[1px] border-gray-200 w-full text-center">
                  Warning
                </p>
                <p className="text-red-400 py-3  lg:text-base sm:text-sm text-xs w-full text-center">Critical</p>
              </div>
            </div>
            <div className="  h-full flex flex-col bg-gray-100 w-full">
              <p className="border-b-[1px]  lg:text-base sm:text-sm text-xs  w-full text-center border-gray-200 text-[#006bd6] py-3 ">
                Energy
              </p>
              <div className="grid grid-cols-[2fr_1fr]">
                <p className="text-violet-400 min-w-0 py-3 truncate  lg:text-base sm:text-sm text-xs  border-r-[1px] w-full text-center border-gray-200 ">
                  Consumption
                </p>
                <p className="text-green-700 py-3  lg:text-base sm:text-sm text-xs    border-r-[1px] w-full text-center border-gray-200">
                  Unit
                </p>
              </div>
            </div>
          </div>
          <div className=" border-[1px] border-gray-300">
            {floor.map(item => (
              <BuildingFloorCard key={item.id} name={item.name} assets={item.assets} energy={item.energy} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BuildingHealthAccordion;
