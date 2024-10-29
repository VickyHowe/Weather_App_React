import React from "react";
import { Link } from "react-scroll";
import { WiCloudy, WiRain, WiSnow, WiDaySunny } from 'react-icons/wi';
import { FaMoon, FaSun } from 'react-icons/fa';
import { FaTemperatureHigh, FaTemperatureLow } from 'react-icons/fa';

const NavLink = ({ to, children }) => (
  <Link spy={true} smooth={true} to={to}>
    <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
      {children}
    </li>
  </Link>
);

const Nav = ({ cityname, currentTemperature, weatherCondition, toggleTheme, toggleUnits, metric, darkMode }) => {
  const getWeatherIcon = (condition) => {
    switch (condition) {
      case "Clouds":
        return <WiCloudy size={30} />;
      case "Rain":
        return <WiRain size={30} />;
      case "Snow":
        return <WiSnow size={30} />;
      case "Clear":
        return <WiDaySunny size={30} />;
      default:
        return <WiCloudy size={30} />;
    }
  };

  return (
    <nav className={`h-16 flex justify-between items-center z-50 lg:py-5 px-20 py-4 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <div className="flex items-center flex-1">
        <span className="text-3xl font-bold flex items-center">
          {cityname && (
            <span className="flex items-center">
              <span className="mr-2">{cityname}</span>
              {getWeatherIcon(weatherCondition)}
              <span className="ml-2">
                {currentTemperature !== null ? `${currentTemperature}°${metric ? 'C' : 'F'}` : "Loading..."}
              </span>
            </span>
          )}
        </span>
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

        {/* Units Toggle Button */}
        <button 
          onClick={toggleUnits} 
          className="bg-transparent border border-white rounded px-2 py-1 hover:bg-white hover:text-black transition"
        >
          <div className="flex items-center">
            {metric ? <FaTemperatureHigh size={24} /> : <FaTemperatureLow size={24} />}
            <span className="ml-2">{metric ? "C" : "F"}</span>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Nav;