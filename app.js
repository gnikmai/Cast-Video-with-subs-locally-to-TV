import React, { useState, useEffect } from 'react';

function WeatherApp() {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    // Fetch the weather data for today's weather
    fetch('https://api.open-meteo.com/v1/forecast?latitude=20.86&longitude=106.68&hourly=temperature_2m')
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

