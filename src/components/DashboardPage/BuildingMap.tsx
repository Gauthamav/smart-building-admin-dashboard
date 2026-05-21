import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import WidgetHeading from '../WidgetHeading';
import SkeltonMap from '../SkeltonMap';
import { useFetchData } from '../../hooks/useFetchData';
import Error from '../Error';

type BuildingMapType = {
  id: number;
  name: string;
  city: string;
  area: number;
  totalFloors: number;
  healthScore: number;
  geoLocation: [number, number];
};
type Position = {
  positions: [number, number][];
};

function FindBounds({ positions }: Position) {
  const map = useMap();
  useEffect(() => {
    if (positions.length > 0) {
      map.fitBounds(L.latLngBounds(positions), { padding: [50, 50] });
    }
  }, [positions, map]);
  return null;
}

const BuildingMap = () => {
  const { data, loading, error, handleRefetch } = useFetchData<BuildingMapType[]>('/data/buildingMap.json');

  if (loading || data === null) {
    return <SkeltonMap />;
  }

  if (error) {
    return <Error error={error} refetch={handleRefetch} />;
  }

  if (data?.length === 0) {
    return <Error error={'Something went wrong'} refetch={handleRefetch} />;
  }

  const positions: [number, number][] = data?.map(item => item.geoLocation);
  const customIcon = new L.Icon({
    iconUrl: '/marker.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });
  return (
    <div className=" md:max-w-[400px] w-full  bg-white  border-[1px] border-gray-300 rounded-md p-2">
      <WidgetHeading heading="Building Map" />
      <div className="md:max-w-[400px] sm:h-[400px] h-[300px] pt-2  overflow-hidden">
        <MapContainer center={[20.5937, 78.9629]} zoom={13} scrollWheelZoom={false} className="h-full w-full ">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <FindBounds positions={positions} />
          {data?.map(item => (
            <Marker key={item.id} icon={customIcon} position={item.geoLocation}>
              <Popup className="rounded-md">
                <b>{item.name}</b> <br />
                City: {item.city} <br />
                Area: {item.area} sq ft <br />
                Floors: {item.totalFloors} <br />
                Health Score: {item.healthScore}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default BuildingMap;
