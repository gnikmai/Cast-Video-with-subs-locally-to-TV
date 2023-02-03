import React, { useState, useEffect } from 'react';

function WeatherApp() {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    // Fetch the weather data for today's weather
    fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=YOUR_API_KEY')
      .then(response => response.json())
      .then(data => {
        setWeatherData(data);
      });
  }, []);

  return (
    <div>
      {weatherData.main && (
        <div>
          <h1>Today's Weather in {weatherData.name}</h1>
          <p>Temperature: {weatherData.main.temp}°F</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;

