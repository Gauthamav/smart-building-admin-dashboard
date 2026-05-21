import WidgetHeading from '../WidgetHeading';
import OverviewCard from './OverviewCard';
import { useFetchData } from '../../hooks/useFetchData';
import SkeltonOverview from '../SkeltonOverview';
import Error from '../Error';
type OverviewItem = {
  id: number;
  name: string;
  value: number;
  icon: string;
};

const OrganizationOverview = () => {
  const { data, loading, error, handleRefetch } = useFetchData<OverviewItem[]>('/data/organization.json');

  if (loading || data === null) {
    return <SkeltonOverview />;
  }

  if (error) {
    return <Error error={error} refetch={handleRefetch} />;
  }

  if (data?.length === 0) {
    return <Error error={'Something went wrong'} refetch={handleRefetch} />;
  }

  return (
    <div className=" w-full bg-white  border-[1px] border-gray-300 rounded-md p-2">
      <WidgetHeading heading="Organization Overview" />
      <div className="grid xl:grid-cols-3 grid-cols-2  items-center pt-5  gap-2 sm:gap-5">
        {data?.map(item => (
          <OverviewCard key={item.id} name={item.name} value={item.value} icon={item.icon} />
        ))}
      </div>
    </div>
  );
};

export default OrganizationOverview;
