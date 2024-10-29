import React, { useState, useEffect } from "react";
import DailyForecast from "./components/DailyForecast"; 
import WeatherDisplay from "./components/WeatherDisplay";
import useWeather from "./hooks/useWeather";
import { groupByDay } from "./utils/groupByDay";
import Nav from "./components/Nav";
import ForecastCard from "./components/ForecastCard"; // Import ForecastCard

function App() {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const [cityname, setCityname] = useState("");
  const [metric, setMetric] = useState("metric"); 
  const [darkMode, setDarkMode] = useState(false);
  const { weatherData, forecastData, loading, error, fetchWeatherAndForecast } = useWeather(API_KEY);

  const toggleUnits = () => {
    setMetric((prevMetric) => (prevMetric === "metric" ? "imperial" : "metric")); // Toggle between metric and imperial
  };

  useEffect(() => {
    if (cityname) {
      fetchWeatherAndForecast(cityname, metric ? "metric" : "imperial");
    }
  }, [metric]); // Ensure cityname is included in the dependencies

    // Log the temperature whenever weatherData changes
    useEffect(() => {
      if (weatherData) {
        console.log("Current Temperature:", weatherData.main.temp);
      }
    }, [weatherData]);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  // Group daily forecast data
  const dailyForecast = forecastData && forecastData.daily ? groupByDay(forecastData.daily) : [];

  return (
    <div className={`h-screen ${darkMode ? "dark-mode" : "light-mode"} pt-10`}>
      <Nav 
        cityname={cityname}
        setCityname={setCityname} 
        fetchWeatherAndForecast={fetchWeatherAndForecast} 
        currentTemperature={weatherData ? weatherData.main.temp : null} 
        weatherCondition={weatherData ? weatherData.weather[0].description : "Loading..."} 
        toggleTheme={toggleTheme} 
        metric={metric} 
        darkMode={darkMode} 
        setMetric={setMetric} 
        toggleUnits={toggleUnits} 
      />
      {error && <h5 id="error">{error}</h5>}
      {loading ? (
        <h5>Loading...</h5> // Display loading message
      ) : (
        <>
          {weatherData && <WeatherDisplay weatherData={weatherData} metric={metric} />}
          
          {/* Display 5-day forecast */}
          <div className="flex justify-around flex-wrap">
            {dailyForecast.map((dayData, index) => (
              <ForecastCard key={index} dailyData={dayData} />
            ))}
          </div>
          
          {Object.keys(dailyForecast).length > 0 && (
            <DailyForecast dailyData={dailyForecast} />
          )}
        </>
      )}
    </div>
  );
}

export default App;