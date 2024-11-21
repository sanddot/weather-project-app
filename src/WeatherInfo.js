import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="current-weather">
        <div>
          <h1 className="current-city">{props.data.city}</h1>
          <div className="current-weather-details">
            <p>
              <span>
                <FormattedDate date={props.data.date} />
              </span>
              <br />
              <span className="text-capitalize"> {props.data.description}</span>
              <br />
              Humidity: <strong>{props.data.humidity} %</strong>
              <br />
              Wind:
              <strong> {props.data.wind} km/h</strong>
            </p>
          </div>
        </div>
        <div className="current-temperature">
          <img
            className="emoji"
            src={props.data.imgUrl}
            alt={props.data.description}
          />
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="celsius">ºC</span>
        </div>
      </div>
      <div className="forecast">
        <div className="forecast-day">
          <div className="day-of-week">Mon</div>
          <div>
            <img
              src={props.data.imgUrl}
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
              src={props.data.imgUrl}
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
              src={props.data.imgUrl}
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
              src={props.data.imgUrl}
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
              src={props.data.imgUrl}
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
