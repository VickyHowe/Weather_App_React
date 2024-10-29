export const groupByDay = (forecastData) => {
  const grouped = {};

  forecastData.forEach((item) => {
    const date = new Date(item.dt * 1000).toLocaleDateString();
    if (!grouped[date]) {
      grouped[date] = {
        dt: item.dt,
        temp: item.main.temp,
        weather: item.weather[0].description,
      };
    }
  });

  return Object.values(grouped).slice(0, 5);
};