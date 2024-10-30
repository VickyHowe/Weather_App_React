import React from "react";
import { Link } from "react-scroll";
import { FaMoon, FaSun } from "react-icons/fa";
import WeatherIcon from "./WeatherIcon";

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
  currentHumidity,
  toggleTheme,
  metric,
  darkMode,
  setMetric,
  weatherData, // Add weatherData to props
}) => {
  const handleGetWeather = (e) => {
    e.preventDefault();
    fetchWeatherAndForecast(cityname, metric ? "metric" : "imperial");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 flex flex-col lg:flex-row justify-between items-start z-50 py-4 ${
        darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900 px-10"
      }`}
    >
      <div className="flex items-start flex-1 mt-10">
        {/* City Search Bar */}
        <form
          onSubmit={handleGetWeather}
          className="flex items-start flex-1 ml-10 "
        >
          <input
            type="text"
            value={cityname}
            onChange={(e) => setCityname(e.target.value)}
            placeholder="Enter City"
            className={`border rounded px-2 py-1 mr-2  ${
              darkMode
                ? "bg-gray-700 text-white placeholder-gray-400"
                : "bg-white text-gray-900 placeholder-gray-600"
            }`}
            style={{ maxWidth: "200px", flexGrow: 1 }}
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-slate-500 text-white rounded px-3 py-1 min-w-[120px] h-10"
          >
            {loading ? "Loading..." : "Get Weather"}
          </button>
        </form>
      </div>

      {/* City Name and Weather Info */}
      <div className="flex margin-left flex-1 text-center items-start">
        <h1 className="font-bold text-3xl text-left ">
          Current Conditions
        </h1>
        {cityname && (
          <span className="text-xl lg:text-2xl font-bold flex items-left justify-left text-left ml-5">
            <span className="mr-2 items-start">
              {cityname}

              {/* Display latitude and longitude */}
              {weatherData && (
                <div className="text-sm mt-7 items-start ">
                  Latitude: {weatherData.coord.lat}°, Longitude:{" "}
                  {weatherData.coord.lon}°
                </div>
              )}
            </span>
            <WeatherIcon condition={weatherCondition} />

            {/* Temperature Display */}
            <span className="ml-8 mr-5 items-start">
              {currentTemperature !== null
                ? `${currentTemperature}°${metric ? "C" : "F"}`
                : "Loading..."}

              {/* Humidity Display */}
              <div className="align-center text-sm mt-7">
                {currentHumidity !== null
                  ? `Humidity: ${currentHumidity}%`
                  : "Loading..."}
              </div>
            </span>
          </span>
        )}
      </div>

      <div className="flex flex-1 items-start space-x-4 mt-5 lg:mt-0">
        {/* Units Dropdown Selector */}
        <select
          value={metric ? "C" : "F"}
          onChange={(e) => setMetric(e.target.value === "C")}
          className={`ml-20 mt-9 bg-transparent rounded px-2 py-1 hover:bg-white hover:text-black transition ${
            darkMode ? "border-white" : "border-black"
          } border`}
        >
          <option value="C"> °C</option>
          <option value="F">°F</option>
        </select>
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className={`mt-8 border rounded px-20 py-1 transition ${
          darkMode ? "border-white" : "border-black"
          } hover:bg-white hover:text-black`}
        >
          <div className="flex items-center">
            {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
            <span className="ml-2">
              {darkMode ? "Light Mode" : "Dark Mode"}
            </span>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
