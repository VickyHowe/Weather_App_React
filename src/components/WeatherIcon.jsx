import React from "react";
import {
  WiCloudy,
  WiRain,
  WiSnow,
  WiDaySunny,
  WiRainMix,
  WiThunderstorm,
  WiFog,
} from "react-icons/wi";

const WeatherIcon = ({ condition, size = 70 }) => {
  const normalizedCondition = condition ? condition.toLowerCase() : "";

  let icon;
  let description;

  switch (normalizedCondition) {
    case "clear sky":
      icon = <WiDaySunny size={size} />;
      description = "Clear Sky";
      break;
    case "broken clouds":
    case "scattered clouds":
    case "few clouds":
    case "overcast clouds":
      icon = <WiCloudy size={size} />;
      description = "Cloudy";
      break;
    case "drizzle":
      icon = <WiRainMix size={size} />;
      description = "Drizzle";
      break;
    case "rain":
    case "light rain":
    case "moderate rain":
    case "heavy rain":
    case "shower rain":
      icon = <WiRain size={size} />;
      description = "Rainy";
      break;
    case "thunderstorm":
      icon = <WiThunderstorm size={size} />;
      description = "Thunderstorm";
      break;
    case "light snow":
    case "snow":
      icon = <WiSnow size={size} />;
      description = "Snow";
      break;
    case "mist":
    case "fog":
    case "haze":
      icon = <WiFog size={size} />;
      description = "Mist/Fog";
      break;
    default:
      icon = <WiCloudy size={size} />;
      description = "Unknown Weather Condition";
      break;
  }

  return (
    <div className="flex flex-col items-center">
      {icon}
      <span className="text-sm">{description}</span>
    </div>
  );
};

export default WeatherIcon;
