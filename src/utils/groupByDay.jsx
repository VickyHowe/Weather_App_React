
export const groupByDay = (forecastList) => {

  return forecastList.reduce((acc, entry) => {
    // Extract the date from the entry's timestamp and convet to  YYYY-MM-DD format
    const date = new Date(entry.dt * 1000).toISOString().split('T')[0]; 

    // Initialize the array 
    if (!acc[date]) {
      acc[date] = [];
    }

    acc[date].push(entry);
    
    return acc;
  }, {});
};