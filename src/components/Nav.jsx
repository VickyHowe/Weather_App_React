import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import WeatherIcon from "./WeatherIcon";


const Nav = ({
  cityname,
  setCityname,
  fetchWeatherAndForecast,
  loading,
  currentTemperature,
  weatherCondition,
  currentHumidity,
  currentPressure,
  toggleTheme,
  metric,
  darkMode,
  setMetric,
  weatherData,
}) => {
  const handleGetWeather = (e) => {
    e.preventDefault();
    fetchWeatherAndForecast(cityname, metric);
  };

  return (
    <nav
      className={`absolute top-0 left-0 right-0 flex flex-col lg:flex-row justify-between items-start z-50  ${
        darkMode ? "text-white" : "text-gray-900 px-10"
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
        {cityname && (
          <span className="lg:text-2xl font-bold flex items-center justify-left text-center ml-1">
            <span className="mr-1 mt-3 items-start">
              {cityname}

              {/* Display latitude and longitude */}
              {weatherData && (
                <div className="text-sm mt-7 items-start text-left ">
                  Lat: {weatherData.coord.lat}°, Long: {weatherData.coord.lon}°
                </div>
              )}
            </span>
            <div className="ml-5">
              <WeatherIcon condition={weatherCondition} />
            </div>

            {/* Temperature Display */}
            <span className="ml-8 mr-5 mt-3 items-start">
              {currentTemperature !== null
                ? `${currentTemperature}°${metric === "metric" ? "C" : "F"}`
                : "Loading..."}

              {/* Humidity Display */}
              <div className="align-center text-sm mt-1">
                {currentPressure !== null
                  ? `Pressure: ${currentPressure} hPa`
                  : "Loading..."}
              </div>

              {/* Wind Speed Display */}
              <div className="align-center text-sm mt-1">
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
          value={metric}
          onChange={(e) => setMetric(e.target.value)} 
          className={`ml-20 mt-9 bg-transparent rounded px-2 py-1 hover:bg-white hover:text-black transition ${
            darkMode ? "border-white" : "border-black"
          } border`}
        >
          <option value="metric">°C</option>
          <option value="imperial">°F</option>
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
