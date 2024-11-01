import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { useMap } from 'react-leaflet/hooks';
import Legend from './Legend';

const RecenterMap = ({ lat, lon }) => {
  const map = useMap();
  React.useEffect(() => {
    map.setView([lat, lon], map.getZoom());
  }, [lat, lon, map]);
  return null;
};

const MapComponent = ({ lat, lon, layer, setLayer, API_KEY }) => {
  return (
    <div className="relative pb-20">
      {/* Select dropdown */}
      <div className="absolute z-10 top-7 left-12">
        <select
          value={layer}
          onChange={(e) => setLayer(e.target.value)}
          className="bg-white p-2 rounded shadow text-black"
        >
          <option value="none">Select</option>
          <option value="precipitation">Precipitation</option>
          <option value="clouds">Clouds</option>
          <option value="temperature">Temperature</option>
        </select>
      </div>

      {/* Map Container */}
      <MapContainer center={[lat, lon]} zoom={8} className="h-96 w-full relative z-0">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          opacity={0.6}
        />
        {layer === "precipitation" && (
          <TileLayer
            url={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          />
        )}
        {layer === "clouds" && (
          <TileLayer
            url={`https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          />
        )}
        {layer === "temperature" && (
          <TileLayer
            url={`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          />
        )}
        <RecenterMap lat={lat} lon={lon} />
      </MapContainer>
      {/* Legend */}
      <div className="absolute top-10 right-10 p-4 z-20 text-black">
      <Legend layer={layer}  />
      </div>
    </div>
  );
};

export default MapComponent;


