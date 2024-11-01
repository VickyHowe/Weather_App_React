import React from "react";

const Legend = ({ layer }) => {
  return (
    <div className="flex justify-center">
      <div className="legend bg-white bg-opacity-80 p-4 rounded-lg max-w-xs">
        <h3 className="text-md font-semibold pb-5">Legend</h3>
        {/* Precipitation Layer */}
        {layer === "precipitation" && (
          <div>
            <h4>Rain (mm)</h4>
            <div className="flex items-center">
              <div className="h-2 bg-blue-400 opacity-30 w-1/4"></div>
              <span className="ml-2">Light Rain</span>
            </div>
            <div className="flex items-center">
              <div className="h-2 bg-blue-600 opacity-70 w-1/4"></div>
              <span className="ml-2">Moderate Rain</span>
            </div>
            <div className="flex items-center">
              <div className="h-2 bg-blue-800 opacity-90 w-1/4"></div>
              <span className="ml-2">Heavy Rain</span>
            </div>
          </div>
        )}
        {/* Cloud Layer */}
        {layer === "clouds" && (
          <div>
            <h4>Cloud Coverage (%)</h4>
            <div className="flex items-center">
              <div className="h-2 bg-gray-300 w-1/4"></div>
              <span className="ml-2">Overcast</span>
            </div>
          </div>
        )}
        {/* Temperature Layer */}
        {layer === "temperature" && (
          <div>
            <h4>Temperature (°C)</h4>
            <div className="flex items-center">
              <div className="h-2 bg-purple-600 w-1/4"></div>
              <span className="ml-2">Very Cold</span>
            </div>
            <div className="flex items-center">
              <div className="h-2 bg-yellow-400 w-1/4"></div>
              <span className="ml-2">Warm</span>
            </div>
          </div>
        )}
        {/* Wind Layer */}
        {layer === "windspeed" && (
          <div>
            <h4>Wind Speed (m/s)</h4>
            <div className="flex items-center">
              <div className="h-2 bg-white opacity-0 w-1/4"></div>
              <span className="ml-2">Calm</span>
            </div>
            <div className="flex items-center">
              <div className="h-2 bg-pink-200 opacity-40 w-1/4"></div>
              <span className="ml-2">Light Breeze</span>
            </div>
            <div className="flex items-center">
              <div className="h-2 bg-purple-600 opacity-70 w-1/4"></div>
              <span className="ml-2">Moderate Breeze</span>
            </div>
            <div className="flex items-center">
              <div className="h-2 bg-purple-800 opacity-80 w-1/4"></div>
              <span className="ml-2">Strong Breeze</span>
            </div>
            <div className="flex items-center">
              <div className="h-2 bg-indigo-600 opacity-90 w-1/4"></div>
              <span className="ml-2">Gale</span>
            </div>
            <div className="flex items-center">
              <div className="h-2 bg-indigo-900 w-1/4"></div>
              <span className="ml-2">Strong Gale</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Legend;
