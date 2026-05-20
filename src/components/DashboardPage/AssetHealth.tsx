
import WidgetHeading from '../WidgetHeading';
import BuildingHealthAccordion from './BuildingHealthAccordion';
import Error from '../Error';
import { useFetchData } from '../../hooks/useFetchData';
import SkeltonAssetHealth from '../SkeltonAssetHealth';
type Floor = {
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
  id: number;
  building: string;
  floors: Floor[];
};

const AssetHealth = () => {
  const { data, loading, error, handleRefetch } = useFetchData<AssetHealthProps[]>('/data/assetHealth.json');

  if (loading || data === null) {
    return <SkeltonAssetHealth />;
  }

  if (error) {
    return <Error error={error} refetch={handleRefetch} />;
  }

  if (data?.length === 0) {
    return <Error error={'Something went wrong'} refetch={handleRefetch} />;
  }

  return (
    <div className="  bg-white w-full   border-[1px] border-gray-300 rounded-md p-2">
      <WidgetHeading heading="Asset Health" />
      <div className="flex flex-col mt-3 w-full gap-3">
        {data?.map(item => (
          <BuildingHealthAccordion key={item.id} name={item.building} floor={item.floors}></BuildingHealthAccordion>
        ))}
      </div>
    </div>
  );
};

export default AssetHealth;
