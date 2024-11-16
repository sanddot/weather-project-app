import React from "react";
import "./main.css";

export default function Main() {
  let weatherData = {
    city: "Paris",
    date: "Tuesday 11:00",
    description: "sunny",
    temperature: 25,
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 68,
    wind: 10,
  };

  return (
    <div className="Main">
      <div className="current-weather">
        <div>
          <h1 className="current-city">{weatherData.city}</h1>
          <div className="current-weather-details">
            <p>
              <span>{weatherData.date}</span>
              <br />
              <span> {weatherData.description}</span>
              <br />
              Humidity: <strong>{weatherData.humidity} %</strong>
              <br />
              Wind:
              <strong> {weatherData.wind} km/h</strong>
            </p>
          </div>
        </div>
        <div className="current-temperature">
          <div className="emoji">☀️</div>
          <div className="temperature">{weatherData.temperature}</div>
          <div className="celsius">ºC</div>
        </div>
      </div>
      <div className="forecast">Forecast for 5 days</div>
    </div>
  );
}
