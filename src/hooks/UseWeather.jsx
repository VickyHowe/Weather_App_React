import { useState } from "react";
import axios from "axios";

const useWeather = (API_KEY) => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeatherAndForecast = async (cityname, units) => {
    if (!cityname) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true); // Start loading

    try {
      const weatherData = await fetchWeatherData(cityname, API_KEY, units);
      const forecastData = await fetchForecastData(cityname, API_KEY, units);

      setWeatherData(weatherData);
      setForecastData(forecastData);
      setError(""); // Clear error on successful fetch
    } catch (error) {
      handleFetchError(error);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  const fetchWeatherData = async (city, apiKey, units) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    const response = await axios.get(url);
    return response.data;
  };

  const fetchForecastData = async (city, apiKey, units) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`;
    const response = await axios.get(url);
    return response.data.list; // Return the forecast entries directly
  };

  const handleFetchError = (error) => {
    console.error(error);
    setError("Could not fetch weather data. Please check the city name.");
    setWeatherData(null);
    setForecastData(null);
  };

  return {
    weatherData,
    forecastData,
    loading,
    error,
    fetchWeatherAndForecast,
  };
};

export default useWeather;