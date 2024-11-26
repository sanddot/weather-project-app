import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

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
              <strong> {props.data.wind} m/s</strong>
            </p>
          </div>
        </div>
        <div className="current-temperature">
          <img
            className="emoji"
            src={props.data.imgUrl}
            alt={props.data.description}
          />
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
      </div>
    </div>
  );
}
