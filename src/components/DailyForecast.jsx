import React from "react";
import ForecastCard from "./ForecastCard";

const DailyForecast = ({ dailyData }) => {
  return (
    <div className="flex flex-wrap justify-center mt-8">
      {Object.keys(dailyData).map((date, index) => {
        const dayForecast = dailyData[date][0]; // Assuming the first entry is the day's forecast
        return (
          <ForecastCard
            key={index}
            dailyData={dayForecast}
          />
        );
      })}
    </div>
  );
};

export default DailyForecast;