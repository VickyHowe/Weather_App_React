import React from 'react';
import { WiCloudy, WiRain, WiSnow, WiDaySunny, WiRainMix, WiThunderstorm, WiFog } from 'react-icons/wi';

const WeatherIcon = ({ condition }) => {
  const normalizedCondition = condition ? condition.toLowerCase() : "";

  let icon;
  let description;

  switch (normalizedCondition) {
    case "clear sky":
      icon = <WiDaySunny size={70} />;
      description = "Clear Sky";
      break;
    case "broken clouds":
    case "few clouds":
    case "overcast clouds":
      icon = <WiCloudy size={70} />;
      description = "Overcast Clouds";
      break;
    case "drizzle":
      icon = <WiRainMix size={70} />;
      description = "Drizzle";
      break;
    case "rain":
    case "light rain":
    case "moderate rain":
    case "heavy rain":
    case "shower rain":
      icon = <WiRain size={70} />;
      description = "Rainy";
      break;
    case "thunderstorm":
      icon = <WiThunderstorm size={70} />;
      description = "Thunderstorm";
      break;
    case "light snow":
    case "snow":
      icon = <WiSnow size={70} />;
      description = "Snow";
      break;
    case "mist":
    case "fog":
    case "haze":
      icon = <WiFog size={70} />;
      description = "Mist/Fog";
      break;
    default:
      icon = <WiCloudy size={70} />;
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