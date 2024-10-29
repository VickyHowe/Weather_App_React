import React from "react";
import { Link } from "react-scroll";
import { WiCloudy, WiRain, WiSnow, WiDaySunny, WiRainMix, WiThunderstorm, WiFog } from 'react-icons/wi';
import { FaMoon, FaSun } from 'react-icons/fa';

const NavLink = ({ to, children }) => (
  <Link spy={true} smooth={true} to={to}>
    <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
      {children}
    </li>
  </Link>
);

const Nav = ({ 
  cityname, 
  setCityname, 
  fetchWeatherAndForecast, 
  loading, 
  currentTemperature, 
  weatherCondition, 
  toggleTheme, 
  metric, 
  darkMode, 
  setMetric 
}) => {

  const handleGetWeather = (e) => {
    e.preventDefault(); 
    fetchWeatherAndForecast(cityname, metric ? "metric" : "imperial"); 
  };

  const getWeatherIcon = (condition) => {
    console.log("Weather Condition:", condition);
    const normalizedCondition = condition ? condition.toLowerCase() : "";

    let icon;
    let description;

    switch (normalizedCondition) {
      case "clear sky":
        icon = <WiDaySunny size={50} />;
        description = "Clear Sky";
        break;
      case "few clouds":
        icon = <WiCloudy size={50} />;
        description = "Few Clouds";
        break;
      case "overcast clouds":
        icon = <WiCloudy size={50} />;
        description = "Overcast Clouds";
        break;
      case "drizzle":
        icon = <WiRainMix size={50} />;
        description = "Drizzle";
        break;
      case "rain":
      case "light rain":
      case "moderate rain":
      case "heavy rain":
        icon = <WiRain size={50} />;
        description = "Rainy";
        break;
      case "shower rain":
        icon = <WiRain size={50} />;
        description = "Shower Rain";
        break;
      case "thunderstorm":
        icon = <WiThunderstorm size={50} />;
        description = "Thunderstorm";
        break;
      case "light snow":
      case "snow":
        icon = <WiSnow size={50} />;
        description = "Snow";
        break;
      case "mist":
      case "fog":
      case "haze":
        icon = <WiFog size={50} />;
        description = "Mist/Fog";
        break;
      default:
        icon = <WiCloudy size={50} />;
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

  return (
    <nav className={`h-16 flex justify-between items-center z-50 lg:py-5 px-20 py-4 pb-6 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <div className="flex items-center flex-1">
        {/* City Search Bar */}
        <form onSubmit={handleGetWeather} className="flex items-center">
        <input
          type="text"
          value={cityname}
          onChange={(e) => setCityname(e.target.value)}
          placeholder="Enter City"
          className="border rounded px-2 py-1 mr-2"
          disabled={loading} // Disable input when loading
        />
          <button type="submit" disabled={loading} className="bg-slate-500 text-white rounded px-3 py-1">
            {loading ? "Loading..." : "Get Weather"}
          </button>
        </form>

        {/* City Name and Weather Info */}
        {cityname && (
          <span className="text-3xl font-bold flex items-center ml-4">
            <span className="mr-2">{cityname}</span >
            {getWeatherIcon(weatherCondition)}
            <span className="ml-2">
              {currentTemperature !== null ? `${currentTemperature}°${metric ? 'C' : 'F'}` : "Loading..."}
            </span>
          </span>
        )}
      </div>

      <div className="flex items-center space-x-4">
        {/* Theme Toggle Button */}
        <button 
          onClick={toggleTheme} 
          className="bg-transparent border border-white rounded px-2 py-1 hover:bg-white hover:text-black transition"
        >
          <div className="flex items-center">
            {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
            <span className="ml-2">{darkMode ? "Light Mode" : "Dark Mode"}</span>
          </div>
        </button>

        {/* Units Dropdown Selector */}
        <select 
          value={metric ? 'C' : 'F'} 
          onChange={(e) => setMetric(e.target.value === 'C')}
          className="bg-transparent border border-white rounded px-2 py-1 hover:bg-white hover:text-black transition"
        >
          <option value="C"> °C</option>
          <option value="F">°F</option>
        </select>
      </div>
    </nav>
  );
};

export default Nav;