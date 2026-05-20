import SkeltonChart from '../SkeltonChart';
import WidgetHeading from '../WidgetHeading';
import Error from '../Error';
import { useFetchData } from '../../hooks/useFetchData';
import { LineChart, XAxis, YAxis, Tooltip, Legend, Line, ResponsiveContainer } from 'recharts';

type DeviceHealthAnalyticsTypes = {
  month: string;
  healthy: number;
  warning: number;
  critical: number;
};

const DeviceHealthAnalytics = () => {
  const { data, loading, error, handleRefetch } = useFetchData<DeviceHealthAnalyticsTypes[]>(
    '/data/deviceHealthAnalytics.json',
  );
  if (loading || data === null) {
    return <SkeltonChart />;
  }
  if (error) {
    return <Error error={error} refetch={handleRefetch} />;
  }
  if (data?.length === 0) {
    return <Error error={'Something went wrong'} refetch={handleRefetch} />;
  }
  return (
    <>
      {data && (
        <div className="w-full bg-white border-[1px] h-[350px]  border-gray-300 rounded-md pb-4 p-2">
          <WidgetHeading heading="Device Health Analytics " />
          <ResponsiveContainer width="100%" height={320}>
            <LineChart
              responsive
              data={data}
              margin={{
                top: 20,
                right: 20,
                left: -30,
                bottom: 8,
              }}>
              <XAxis
                dataKey="month"
                axisLine={{ stroke: '#d1d5db', strokeWidth: 3 }}
                tickLine={false}
                tick={{ fill: '#6b7280', fontSize: 10 }}
              />
              <YAxis
                axisLine={{ stroke: '#d1d5db', strokeWidth: 3 }}
                tickLine={false}
                tick={{ fill: '#6b7280', fontSize: 10 }}
              />
              <Tooltip cursor={false} />
              <Legend
                verticalAlign="top"
                align="right"
                iconType="circle"
                iconSize={6}
                wrapperStyle={{
                  top: 5,
                  right: 0,
                  fontSize: '12px',
                }}
              />
              <Line
                type="monotone"
                dataKey="warning"
                dot={{
                  r: 5,
                  fill: '#4254FB',
                  stroke: '#fff',
                  strokeWidth: 2,
                }}
                strokeWidth={3}
                stroke="#4254FB"
              />
              <Line
                type="monotone"
                dataKey="critical"
                dot={{
                  r: 5,
                  fill: '#E53935',
                  stroke: '#fff',
                  strokeWidth: 2,
                }}
                strokeWidth={3}
                stroke="#E53935"
              />
              <Line
                type="monotone"
                dataKey="healthy"
                dot={{
                  r: 5,
                  fill: '#82ca9d',
                  stroke: '#fff',
                  strokeWidth: 2,
                }}
                strokeWidth={3}
                stroke="#82ca9d"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
};

export default DeviceHealthAnalytics;
