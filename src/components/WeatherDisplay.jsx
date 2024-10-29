import React from 'react';

const WeatherDisplay = ({ weatherData, metric }) => {
  return (
    <>
      <h2>Current Weather</h2>
      <p>
        Temperature: {weatherData.main.temp}°{metric === 'metric' ? 'C' : 'F'}
      </p>
      <p>Weather: {weatherData.weather[0].description}</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
    </>
  );
};

export default WeatherDisplay;