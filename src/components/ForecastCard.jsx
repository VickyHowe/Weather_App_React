import React from "react";
import { formatToLocalTime, iconUrlFromCode } from "../utils/utils";

const ForecastCard = ({ dailyData }) => {
  const { dt, temp, weather } = dailyData;

  return (
    <div className="flex flex-col items-center justify-center m-2 rounded-md text-center shadow-md bg-white dark:bg-gray-800">
      <h2 className="text-lg font-semibold mb-1">
        {formatToLocalTime(dt, "short")}
      </h2>
      <img
        src={iconUrlFromCode(weather[0].icon)}
        alt={weather[0].description}
        className="w-12 h-12 mb-2"
      />
      <p className="text-gray-600 dark:text-gray-300">
        {temp.day.toFixed(0)}°
      </p>
      <p className="text-gray-500 dark:text-gray-400">
        {weather[0].description}
      </p>
    </div>
  );
};

export default ForecastCard;