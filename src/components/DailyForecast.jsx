import React from "react";
import ForecastCard from "./ForecastCard";

const DailyForecast = ({ dailyData }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {Object.keys(dailyData).map((date) => (
        <div key={date} className="m-2">
          {dailyData[date].map((data) => (
            <ForecastCard key={data.dt} dailyData={data} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default DailyForecast;