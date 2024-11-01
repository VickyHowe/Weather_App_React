import React, { useState, useEffect } from "react";
import useWeather from "./hooks/useWeather";
import { groupByDay } from "./utils/groupByDay";
import Nav from "./components/Nav";
import DailyForecast from "./components/DailyForecast";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";
import Legend from "./components/Legend";
import MapComponent from "./components/MapComponent";


{
  /* Recenter map */
}
const RecenterMap = ({ lat, lon }) => {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lon], map.getZoom());
  }, [lat, lon, map]);
  return null;
};

function App() {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const [cityname, setCityname] = useState("Vancouver");
  const [metric, setMetric] = useState("metric");
  const [darkMode, setDarkMode] = useState(false);
  const [layer, setLayer] = useState("none");
  const { weatherData, forecastData, loading, error, fetchWeatherAndForecast } =
    useWeather(API_KEY);

  const toggleUnits = () => {
    setMetric((prevMetric) =>
      prevMetric === "metric" ? "imperial" : "metric"
    );
  };

  useEffect(() => {
    if (cityname || metric) {
      fetchWeatherAndForecast(cityname, metric);
    }
  }, [metric]);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  {
    /* Group daily forecast data- Default Vancouver */
  }
  const dailyForecast =
    forecastData && forecastData.list ? groupByDay(forecastData.list) : {};

  const lat =
    weatherData && weatherData.coord ? weatherData.coord.lat : 49.2497;
  const lon =
    weatherData && weatherData.coord ? weatherData.coord.lon : -123.1193;

  return (
        <div className={`h-screen ${darkMode ? "dark-mode" : "light-mode"} flex flex-col `}>
          <header>            
      {/* Display Nav Bar */}
      <Nav
        cityname={cityname}
        setCityname={setCityname}
        fetchWeatherAndForecast={fetchWeatherAndForecast}
        currentTemperature={weatherData ? weatherData.main.temp : null}
        currentHumidity={weatherData ? weatherData.main.humidity : null}
        currentPressure={weatherData ? weatherData.main.pressure  : null}
        weatherCondition={
          weatherData ? weatherData.weather[0].description : "Loading..."
        }
        toggleTheme={toggleTheme}
        metric={metric}
        darkMode={darkMode}
        setMetric={setMetric}
        toggleUnits={toggleUnits}
        weatherData={weatherData}
      />
      </header>
      <div className="mt-5 pb-10 flex flex-container relative justify-left">
        <h2 className=" text-4xl font-bold">5-Day Forecast</h2>
      </div>

      {/* Display loading and error states */}
      {loading && <p>Loading forecast...</p>}
      {error && <p>Error Loading Forecast. Please Try Again.: {error.message}</p>}

     {/* Display 5-day Forecast */}
      <DailyForecast dailyData={dailyForecast} metric={metric} />
      <div className="flex-grow">

        {/* Display Map */}
        <div id="map">
        <MapComponent
          lat={lat}
          lon={lon}
          layer={layer}
          setLayer={setLayer}
          API_KEY={API_KEY}
        />
        </div>
      </div>
      <footer className="flex justify-center relative  z-20">
          <p className="font-bold">© 2024 Vicky Howe</p>
        </footer>


    </div>
    
  );
}

export default App;
