import { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [ready, setReady] = useState(false);
  const [forecastData, setForecastData] = useState();

  useEffect(() => {
    setReady(false);
  }, [props.coords]);

  function handleForecastData(data) {
    setForecastData(data);
    setReady(true);
  }

  function load() {
    const { coords } = props;
    const apiKey = "edcd663668b8087c96e88fbd0856ea83";
    const weatherForecastApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}&units=metric`;

    fetch(weatherForecastApiUrl)
      .then((response) => response.json())
      .then((data) => {
        handleForecastData(data.daily);
      });
  }

  if (ready) {
    return (
      <div className="WeatherForecast d-flex justify-content-around m-4">
        {forecastData.map((day, i) => {
          if (i > 0 && i < 6) {
            return (
              <WeatherForecastDay
                forecastData={day}
                key={i}
                isCelsius={props.isCelsius}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    load();
    return (
      <div class="WeatherForecast d-flex justify-content-center m-4">
        <div class="spinner-grow text-warning" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
}
