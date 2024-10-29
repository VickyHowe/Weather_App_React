import React, { useState, useEffect } from "react";
import ForecastCard from "./components/ForecastCard"
import DailyForecast from "./components/DailyForecast"; 
import WeatherForm from "./components/WeatherForm";
import WeatherDisplay from "./components/WeatherDisplay";
import useWeather from "./hooks/useWeather";
import { groupByDay } from "./utils/groupByDay";
import Nav from "./components/Nav";

function App() {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const [cityname, setCityname] = useState("");
  const [metric, setMetric] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const { weatherData, forecastData, loading, error, fetchWeatherAndForecast } = useWeather(API_KEY);

  const toggleUnits = () => {
    setMetric((prevMetric) => !prevMetric);
  };

  // useEffect(() => {
  //   if (cityname) {
  //     fetchWeatherAndForecast(cityname, metric ? "metric" : "imperial");
  //   }
  // }, [metric]);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  const dailyForecast = forecastData ? groupByDay(forecastData) : {};

  return (
    <div className={`h-screen ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Nav 
        cityname={cityname}
        currentTemperature={weatherData ? weatherData.main.temp : null} 
        weatherCondition={weatherData ? weatherData.weather[0].description : "Loading..."} 
        toggleTheme={toggleTheme} 
        toggleUnits={toggleUnits} 
        metric={metric} 
        darkMode={darkMode} 
      />

      {cityname && <h1>{cityname}</h1>}
      <h1>Weather Forecast</h1>
      <WeatherForm
        cityname={cityname}
        setCityname={setCityname}
        fetchWeatherAndForecast={fetchWeatherAndForecast}
        loading={loading}
        metric={metric}
        toggleUnits={toggleUnits}
      />
      {error && <h5 id="error">{error}</h5>}
      {weatherData && <WeatherDisplay weatherData={weatherData} metric={metric} />}
      {Object.keys(dailyForecast).length > 0 && (
        <DailyForecast dailyData={dailyForecast} />
      )}
    </div>
  );
}

export default App;