const API_KEY = 'f7fdb99a7d19c0331381a9cc142379c5';

const getCurrent = async (city) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
  return response.json();
}

const getCurrentAndForecast = async ({ lat = 32.7153, lon = -117.1573 }) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`);
  return response.json();
}

export {
  getCurrent,
  getCurrentAndForecast,
}

