import React from 'react';
import WidgetHeading from '../WidgetHeading';
import BuildingHealthAccordion from './BuildingHealthAccordion';

const AssetHealth = () => {
  const data = [
    {
      building: 'Garuda Bhive',
      floors: [
        {
          name: 'Floor 1',
          assets: { healthy: 120, warning: 18, critical: 4 },
          energy: { consumption: 240, unit: 'kWh' },
        },
        {
          name: 'Floor 2',
          assets: { healthy: 98, warning: 11, critical: 2 },
          energy: { consumption: 190, unit: 'kWh' },
        },
      ],
    },
    {
      building: 'Marathon Futurex',
      floors: [
        {
          name: 'Ground Floor',
          assets: { healthy: 85, warning: 9, critical: 1 },
          energy: { consumption: 130, unit: 'kWh' },
        },
      ],
    },
  ];
  return (
    <div className=" max-w-full bg-white w-[50%]   border-[1px] border-gray-300 rounded-md p-2">
      <WidgetHeading heading="Asset Health" />
      <div className="flex flex-col mt-3 w-full gap-3">
        {data.map(item => (
          <BuildingHealthAccordion name={item.building} floor={item.floors}></BuildingHealthAccordion>
        ))}
      </div>
    </div>
  );
};

export default AssetHealth;
