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
          <div className="emoji">
            <img src={weatherData.imgUrl} alt="weather description icon" />
          </div>
          <div className="temperature">{weatherData.temperature}</div>
          <div className="celsius">ºC</div>
        </div>
      </div>

      <div className="forecast">
        <div className="forecast-day">
          <div className="day-of-week">Mon</div>
          <div>
            <img
              src={weatherData.imgUrl}
              className="day-emoji"
              alt="weather description icon"
            />
          </div>
          <div className="temperature-wrapping">
            <div className="day-high-temperature">
              <strong>20º</strong>
            </div>
            <div class="day-low-temperature">5º</div>
          </div>
        </div>
        <div className="forecast-day">
          <div className="day-of-week">Tue</div>
          <div>
            <img
              src={weatherData.imgUrl}
              className="day-emoji"
              alt="weather description icon"
            />
          </div>
          <div className="temperature-wrapping">
            <div className="day-high-temperature">
              <strong>21º</strong>
            </div>
            <div class="day-low-temperature">2º</div>
          </div>
        </div>
        <div className="forecast-day">
          <div className="day-of-week">Wed</div>
          <div>
            <img
              src={weatherData.imgUrl}
              className="day-emoji"
              alt="weather description icon"
            />
          </div>
          <div className="temperature-wrapping">
            <div className="day-high-temperature">
              <strong>17º</strong>
            </div>
            <div class="day-low-temperature">0º</div>
          </div>
        </div>
        <div className="forecast-day">
          <div className="day-of-week">Thu</div>
          <div>
            <img
              src={weatherData.imgUrl}
              className="day-emoji"
              alt="weather description icon"
            />
          </div>
          <div className="temperature-wrapping">
            <div className="day-high-temperature">
              <strong>22º</strong>
            </div>
            <div class="day-low-temperature">3º</div>
          </div>
        </div>
        <div className="forecast-day">
          <div className="day-of-week">Fri</div>
          <div>
            <img
              src={weatherData.imgUrl}
              className="day-emoji"
              alt="weather description icon"
            />
          </div>
          <div className="temperature-wrapping">
            <div className="day-high-temperature">
              <strong>25º</strong>
            </div>
            <div class="day-low-temperature">7º</div>
          </div>
        </div>
      </div>
    </div>
  );
}
