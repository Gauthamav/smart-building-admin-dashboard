import React, { useEffect, useState } from 'react';
import WidgetHeading from '../WidgetHeading';
import OverviewCard from './OverviewCard';

type OverviewItem = {
  id: number;
  name: string;
  value: number;
  icon: string;
};

const OrganizationOverview = () => {
  const [items, setItems] = useState<OverviewItem[]>([]);
  const fetchData = async () => {
    const result = await fetch('/data/organization.json');
    const data = await result.json();
    setItems(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" w-full bg-white  border-[1px] border-gray-300 rounded-md p-2">
      <WidgetHeading heading="Organization Overview" />
      <div className="grid xl:grid-cols-3 sm:grid-cols-2  items-center pt-5  gap-5">
        {items.length !== 0 ? (
          items.map(item => (
            <OverviewCard key={item.id} name={item?.name} value={item?.value} icon={item?.icon}></OverviewCard>
          ))
        ) : (
          <p>Loading..</p>
        )}
      </div>
    </div>
  );
};

export default OrganizationOverview;
