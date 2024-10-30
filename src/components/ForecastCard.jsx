const DailyForecast = ({ dailyData, metric }) => {
  return (
    <div>
      <h2>5-Day Forecast</h2>
      <div className="forecast-container"> {/* Add a container for Flexbox */}
        {Object.entries(dailyData).map(([date, entries]) => {
          const tempSum = entries.reduce((sum, entry) => sum + entry.main.temp, 0);
          const avgTemp = (tempSum / entries.length).toFixed(2);
          const weatherDescription = entries[0].weather[0].description;

          return (
            <ForecastCard 
              key={date} 
              date={date} 
              temperature={avgTemp} 
              weatherCondition={weatherDescription} 
            />
          );
        })}
      </div>
    </div>
  );
};

export default DailyForecast;