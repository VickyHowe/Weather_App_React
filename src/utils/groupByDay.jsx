export const groupByDay = (forecastData) => {
  const grouped = {};
  
  forecastData.forEach(item => {
    const date = new Date(item.dt * 1000).toLocaleDateString(); // Convert timestamp to date string
    if (!grouped[date]) {
      grouped[date] = [];
    }
    grouped[date].push(item);
  });

  return grouped;
};