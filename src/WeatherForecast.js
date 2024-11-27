import React from "react";
import "./weatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data.coordinates);
  }

  let apiKey = "t3f3af9b184481d0306edc82cbo6ff8c";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="forecast-day">
        <div className="day-of-week">Mon</div>
        <div className="forecast-icon">☀️</div>
        <div className="temperature-wrapping">
          <div className="day-high-temperature">
            <strong>20º</strong>
          </div>
          <div className="day-low-temperature">5º</div>
        </div>
      </div>
    </div>
  );
}
