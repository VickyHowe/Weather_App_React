import React, { useState, useEffect } from "react";
import useWeather from "./hooks/useWeather";
import { groupByDay } from "./utils/groupByDay";
import Nav from "./components/Nav";
import DailyForecast from "./components/DailyForecast"; 


function App() {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const [cityname, setCityname] = useState("Vancouver");
  const [metric, setMetric] = useState("metric");
  const [darkMode, setDarkMode] = useState(false);
  const { weatherData, forecastData, loading, error, fetchWeatherAndForecast } = useWeather(API_KEY);

  const toggleUnits = () => {
    setMetric((prevMetric) => (prevMetric === "metric" ? "imperial" : "metric")); 
  };

  useEffect(() => {
    if (cityname || metric) {
      fetchWeatherAndForecast(cityname,metric); 
    }
  }, [cityname, metric]); 

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  // Group daily forecast data
  const dailyForecast = forecastData && forecastData.list ? groupByDay(forecastData.list) : {};
  console.log("dailyForecast Response:", dailyForecast); // Log the dailyForecast response

  return (
    <div className={`h-screen ${darkMode ? "dark-mode" : "light-mode"} pt-10`}>
      <Nav 
        cityname={cityname}
        setCityname={setCityname} 
        fetchWeatherAndForecast={fetchWeatherAndForecast} 
        currentTemperature={weatherData ? weatherData.main.temp : null} 
        currentHumidity={weatherData ? weatherData.main.humidity : null}
        weatherCondition={weatherData ? weatherData.weather[0].description : "Loading..."} 
        toggleTheme={toggleTheme} 
        metric={metric} 
        darkMode={darkMode} 
        setMetric={setMetric} 
        toggleUnits={toggleUnits} 
        weatherData={weatherData}
      />
      <div className="mt-40 pb-10">
        <h2 className="text-4xl font-bold">5-Day Forecast</h2>
      </div>


      {/* Display loading and error states */}
      {loading && <p>Loading forecast...</p>}
      {error && <p>Error fetching forecast: {error.message}</p>}


      <DailyForecast dailyData={dailyForecast} metric={metric} />

    </div>
  );
}

export default App;