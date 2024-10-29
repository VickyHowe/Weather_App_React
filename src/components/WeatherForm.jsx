import React from 'react';
import { FaTemperatureHigh, FaTemperatureLow } from 'react-icons/fa';

const WeatherForm = ({ cityname, setCityname, fetchWeatherAndForecast, loading, metric, toggleUnits }) => {
  const handleGetWeather = (e) => {
    e.preventDefault(); 
    fetchWeatherAndForecast(cityname, metric ? "metric" : "imperial"); 
  };

  return (
    <div>
      <input
        type="text"
        value={cityname}
        onChange={(e) => setCityname(e.target.value)}
        placeholder="Enter City"
      />
      <button onClick={handleGetWeather} disabled={loading}>
        {loading ? "Loading..." : "Get Weather Forecast"}
      </button>
      <button onClick={toggleUnits}>
        <div className="flex items-center">
          {metric ? <FaTemperatureHigh size={24} /> : <FaTemperatureLow size={24} />}
          <span className="ml-2">{metric ? "Imperial" : "Metric"}</span>
        </div>
      </button>
    </div>
  );
};

export default WeatherForm;