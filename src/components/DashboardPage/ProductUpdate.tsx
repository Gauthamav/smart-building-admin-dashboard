import React from 'react';
import WidgetHeading from '../WidgetHeading';
import UpdateTimeline from './UpdateTimeline';
import { useState, useEffect } from 'react';

type TimelineItems = {
  id: number;
  title: string;
  version: string;
  releaseDate: number;
  length: number;
  index: number;
};

const ProductUpdate = () => {
  const [items, setItems] = useState<TimelineItems[]>([]);

  const fetchData = async () => {
    const result = await fetch('/data/productUpdate.json');
    const data = await result.json();
    setItems(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" md:w-[70%] w-full max-w-full bg-white  border-[1px] border-gray-300 rounded-md p-2">
      <WidgetHeading heading="Project Update" />
      <div className="mt-5">
        {items.map((item, index) => (
          <UpdateTimeline
            key={item.id}
            title={item.title}
            version={item.version}
            date={item.releaseDate}
            length={items.length}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductUpdate;
