import React from "react";
import WeatherIcon from "./WeatherIcon";
import { WiRaindrop } from "react-icons/wi";
import { FaRegSnowflake, FaWind  } from "react-icons/fa";

const ForecastCard = ({
  date,
  highTemperature,
  lowTemperature,
  totalPrecipitation,
  totalSnowfall,
  weatherCondition,
  metric,
  windSpeed,
}) => {
  const [year, month, day] = date.split("-");
  const dateObject = new Date(Date.UTC(year, month - 1, day));

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayIndex = dateObject.getUTCDay();
  const dayOfWeek = dayNames[dayIndex];

  return (
    <div className="flex mt-2">
      <div className="forecast-card">
        <div className="p-5">
          <h2 className="text-3xl font-bold pb-2">{dayOfWeek}</h2>
          <h3>{date}</h3>
        </div>
        <div className="p-1 ">
          <p>High: {`${highTemperature}°${metric === "metric" ? "C" : "F"}`}</p>
          <p>Low: {`${lowTemperature}°${metric === "metric" ? "C" : "F"}`}</p>
          <WeatherIcon condition={weatherCondition} size={150} />
          <p>
            <WiRaindrop size={40} className="inline-block ml-1 mr-1" />
            {`${totalPrecipitation} mm`}
          </p>
          {totalSnowfall > 0 && (
            <p>
              <FaRegSnowflake
                size={20}
                className="inline-block ml-1 mr-1 pr-1"
              />
              {`${totalSnowfall} cm`}
            </p>
          )}
          <p>
          <FaWind 
                size={20}
                className="inline-block ml-1 mr-1 pr-1"
              />
            {windSpeed} {metric === "metric" ? "m/s" : "mph"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;
