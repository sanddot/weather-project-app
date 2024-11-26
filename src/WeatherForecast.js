import React from "react";
import "./weatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="forecast-day">
        <div className="day-of-week">Mon</div>
        <div>☀️</div>
        <div className="temperature-wrapping">
          <div className="day-high-temperature">
            <strong>20º</strong>
          </div>
          <div class="day-low-temperature">5º</div>
        </div>
      </div>
    </div>
  );
}
