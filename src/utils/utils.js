export const formatToLocalTime = (timestamp, format) => {
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit', 
      hour12: false 
    };
    return new Date(timestamp * 1000).toLocaleString(undefined, options);
  };
  