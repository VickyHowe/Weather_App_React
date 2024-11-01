import React from "react";

const Legend = ({ layer }) => {
  return (
    <div className="flex justify-center">
      <div className="legend bg-white bg-opacity-80 p-4 rounded-lg max-w-xs">
        <h3 className="text-lg font-semibold pb-5">Legend</h3>
        {layer === "precipitation" && (
          <div>
            <strong>Rain (mm)</strong>
            <div className="flex items-center">
              <div className="h-2 bg-blue-400 opacity-30 w-1/2"></div>
              <span className="ml-2">Light Rain</span>
            </div>
            <div className="flex items-center">
              <div className="h-2 bg-blue-600 opacity-70 w-1/2"></div>
              <span className="ml-2">Moderate Rain</span>
            </div>
            <div className="flex items-center">
              <div className="h-2 bg-blue-800 opacity-90 w-1/2"></div>
              <span className="ml-2">Heavy Rain</span>
            </div>
          </div>
        )}
        {layer === "clouds" && (
          <div>
            <strong>Cloud Coverage (%)</strong>
            <div className="flex items-center">
              <div className="h-2 bg-gray-200 opacity-0 w-1/2"></div>
              <span className="ml-2">No Clouds</span>
            </div>
            <div className="flex items-center">
              <div className="h-2 bg-gray-300 w-1/2"></div>
              <span className="ml-2">Overcast</span>
            </div>
          </div>
        )}
        {layer === "temperature" && (
          <div>
            <strong>Temperature (°C)</strong>
            <div className="flex items-center">
              <div className="h-2 bg-purple-600 w-1/2"></div>
              <span className="ml-2">Very Cold</span>
            </div>
            <div className="flex items-center">
              <div className="h-2 bg-yellow-400 w-1/2"></div>
              <span className="ml-2">Warm</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Legend;
