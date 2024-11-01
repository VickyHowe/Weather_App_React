import React, { useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { useMap } from 'react-leaflet/hooks';
import Legend from './Legend';

const attribution = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors';


{/* Get Layer URL*/}
const getTileUrl = (layer, API_KEY) => {
  let tileKey;

  switch (layer) {
    case 'precipitation':
      tileKey = 'precipitation_new';
      break;
    case 'clouds':
      tileKey = 'clouds_new';
      break;
    case 'temperature':
      tileKey = 'temp_new';
      break;
    case 'windspeed':
      tileKey = 'wind_new';
      break;
    default:
      return null;
  }
  
  return `https://tile.openweathermap.org/map/${tileKey}/{z}/{x}/{y}.png?appid=${API_KEY}`;
};

const RecenterMap = ({ lat, lon }) => {
  const map = useMap();

  useEffect(() => {
    map.setView([lat, lon], map.getZoom());
  }, [lat, lon, map]);

  return null;
};

const MapComponent = ({ lat, lon, layer, setLayer, API_KEY }) => {
  const tileUrl = getTileUrl(layer, API_KEY);

  return (
    <div className="relative pb-20">
      {/* Select Layer dropdown */}
      <div className="absolute z-10 top-7 left-12">
        <select
          value={layer}
          onChange={(e) => setLayer(e.target.value)}
          className="bg-white p-2 rounded shadow text-black"
        >
          <option value = "none">Select</option>
          <option value = "precipitation">Precipitation</option>
          <option value = "clouds">Clouds</option>
          <option value = "temperature">Temperature</option>
          <option value = "windspeed">Wind Speed</option>
        </select>
      </div>

      {/* Map Container */}
      <MapContainer center={[lat, lon]} zoom={8} className="h-96 w-full relative z-0">
        <TileLayer
          url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution = {attribution}
          opacity = {0.6}
        />
        {tileUrl && (
        <TileLayer
          url={tileUrl}
          attribution={attribution}
        />
        )}
        <RecenterMap lat={lat} lon={lon} />
      </MapContainer>

      {/* Legend */}
      <div className="absolute top-10 right-10 p-4 z-20 text-black text-sm">
      <Legend layer={layer}  />
      </div>
    </div>
  );
};

export default MapComponent;


