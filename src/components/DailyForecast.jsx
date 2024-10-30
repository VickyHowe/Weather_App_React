import React from 'react';
import ForecastCard from './ForecastCard'; // Ensure you import ForecastCard

const DailyForecast = ({ dailyData, metric }) => {
  return (
    <div>
      <h2>5-Day Forecast</h2>
      {Object.entries(dailyData).map(([date, entries]) => {
        const tempSum = entries.reduce((sum, entry) => sum + entry.main.temp, 0);
        const avgTemp = (tempSum / entries.length).toFixed(2); // Calculate average temperature for the day
        const weatherDescription = entries[0].weather[0].description; // Use the description from the first entry

        return (
          <ForecastCard 
            key={date} 
            date={date} 
            temperature={avgTemp} // Pass the average temperature
            weatherCondition={weatherDescription} // Pass the weather condition
          />
        );
      })}
    </div>
  );
};

export default DailyForecast;