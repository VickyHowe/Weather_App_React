export const groupByDay = (forecastList) => {
  return forecastList.reduce((acc, entry) => {
    // Extract the date from the entry's timestamp
    const date = new Date(entry.dt * 1000).toISOString().split('T')[0]; // Converts to YYYY-MM-DD format

    // Initialize the array for this date if it doesn't exist
    if (!acc[date]) {
      acc[date] = [];
    }

    // Push the current entry into the array for this date
    acc[date].push(entry);
    
    return acc;
  }, {});
};