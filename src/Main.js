import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./main.css";
import axios from "axios";

export default function Main(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: "Tuesday 11:00",
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      imgUrl: response.data.condition.icon_url,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Main">
        <div className="current-weather">
          <div>
            <h1 className="current-city">{props.defaultCity}</h1>
            <div className="current-weather-details">
              <p>
                <span>{weatherData.date}</span>
                <br />
                <span className="text-capitalize">
                  {" "}
                  {weatherData.description}
                </span>
                <br />
                Humidity: <strong>{weatherData.humidity} %</strong>
                <br />
                Wind:
                <strong> {weatherData.wind} km/h</strong>
              </p>
            </div>
          </div>
          <div className="current-temperature">
            <img
              className="emoji"
              src={weatherData.imgUrl}
              alt={weatherData.description}
            />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="celsius">ºC</span>
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
  } else {
    let apiKey = "t3f3af9b184481d0306edc82cbo6ff8c";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
