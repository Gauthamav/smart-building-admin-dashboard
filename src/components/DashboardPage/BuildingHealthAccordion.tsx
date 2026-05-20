import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';
import BuildingFloorCard from './BuildingFloorCard';

type floorItems = {
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
  floor: floorItems[];
};

const BuildingHealthAccordion = ({ name, floor }: AssetHealthProps) => {
  const [active, setActive] = useState(false);

  const handleAccordion = () => {
    setActive(prev => !prev);
  };
  return (
    <div className="py-2 px-2 flex items-center justify-between border-[1px] border-gray-300 ">
      <h5>{name}</h5>
      <button onClick={handleAccordion}>
        {active ? (
          <ChevronUp size={20} className="cursor-pointer" />
        ) : (
          <ChevronDown size={20} className="cursor-pointer" />
        )}
      </button>
      {floor.map(item => (
        <BuildingFloorCard name={item.name} assets={item.assets} energy={item.energy} />
      ))}
    </div>
  );
};

export default BuildingHealthAccordion;
