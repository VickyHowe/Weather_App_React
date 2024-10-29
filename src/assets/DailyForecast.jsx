import React from 'react';

const DailyForecast = ({ dailyData, metric }) => {
  return (
    <div>
      <h2>5-Day Forecast</h2>
      {Object.entries(dailyData).map(([date, entries]) => {
        const tempSum = entries.reduce((sum, entry) => sum + entry.main.temp, 0);
        const avgTemp = (tempSum / entries.length).toFixed(2); // Average temperature for the day
        const weatherDescription = entries[0].weather[0].description; // Use the description from the first entry

        return (
          <div key={date}>
            <p>Date: {date}</p>
            <p>
              Average Temperature: {avgTemp}°{metric ? "C" : "F"}
            </p>
            <p>Weather: {weatherDescription}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DailyForecast;