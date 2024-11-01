import React from "react";
import ForecastCard from "./ForecastCard";

const DailyForecast = ({ dailyData, metric }) => {
  if (
    !dailyData ||
    typeof dailyData !== "object" ||
    Object.keys(dailyData).length === 0
  ) {
    return <p>No forecast data available.</p>;
  }

  return (
    <div className="forecast-container">
      {Object.entries(dailyData)
        .slice(0, 5)
        .map(([date, entries]) => {
          
          // Get high and low temps
          const highTemp = Math.max(
            ...entries.map((entry) => entry.main.temp_max)
          ).toFixed(2);
          const lowTemp = Math.min(
            ...entries.map((entry) => entry.main.temp_min)
          ).toFixed(2);

          // Calculate total rain in mm based on rain volume in the last 3 hours
          const totalRain = entries
            .reduce((total, entry) => {
              return (
                total +
                (entry.rain && entry.rain.hasOwnProperty("3h")
                  ? entry.rain["3h"]
                  : 0)
              );
            }, 0)
            .toFixed(2);

          // Calculate total snow in cm based on snow volume in the last 3 hours
          const totalSnow = entries
            .reduce((total, entry) => {
              return (
                total +
                (entry.snow && entry.snow.hasOwnProperty("3h")
                  ? entry.snow["3h"]
                  : 0)
              );
            }, 0)
            .toFixed(2);
            // Get Windspeed
            const windSpeed = entries[0].wind.speed;

          const weatherDescription = entries[0].weather[0].description;

          return (
            <ForecastCard
              key={date}
              date={date}
              highTemperature={highTemp}
              lowTemperature={lowTemp}
              totalPrecipitation={totalRain}
              totalSnowfall={totalSnow}
              windSpeed={windSpeed}
              weatherCondition={weatherDescription}
              metric={metric}
            />
          );
        })}
    </div>
  );
};

export default DailyForecast;
