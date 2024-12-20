import { useState } from "react";

const useWeather = (API_KEY) => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherAndForecast = async (cityname, units) => {
    setLoading(true);
    setError(null);

    try {
      // Fetch coordinates using the Geocoding API with units
      const geoResponse = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_KEY}&units=${units}`
      );
      const geoData = await geoResponse.json();

      if (!geoResponse.ok) {
        throw new Error(geoData.message || "Failed to fetch coordinates, please verify input");
      }

      const { lat, lon } = geoData.coord;

      // Fetch weather data using the coordinates
      const forecastResponse = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${units}`
      );
      const forecastData = await forecastResponse.json();

      if (!forecastResponse.ok) {
        throw new Error(
          forecastData.message || "Please Enter a Valid Location"
        );
      }

      setWeatherData(geoData);
      setForecastData(forecastData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { weatherData, forecastData, loading, error, fetchWeatherAndForecast };
};

export default useWeather;
