
import WidgetHeading from '../WidgetHeading';
import UpdateTimeline from './UpdateTimeline';
import { useFetchData } from '../../hooks/useFetchData';
import SkeltonProduct from '../SkeltonProduct';
import Error from '../Error';

type TimelineItems = {
  id: number;
  title: string;
  version: string;
  releaseDate: number;
  length: number;
  index: number;
};

const ProductUpdate = () => {
  const { data, loading, error, handleRefetch } = useFetchData<TimelineItems[]>('/data/productUpdate.json');

  if (loading || data === null) {
    return <SkeltonProduct />;
  }

  if (error) {
    return <Error error={error} refetch={handleRefetch} />;
  }

  if (data?.length === 0) {
    return <Error error={'Something went wrong'} refetch={handleRefetch} />;
  }

  return (
    <div className=" md:w-[70%] w-full max-w-full bg-white  border-[1px] border-gray-300 rounded-md p-2">
      <WidgetHeading heading="Product Update" />
      <div className="mt-5">
        {data?.map((item, index) => (
          <UpdateTimeline
            key={item.id}
            title={item.title}
            version={item.version}
            date={item.releaseDate}
            length={data.length}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductUpdate;
