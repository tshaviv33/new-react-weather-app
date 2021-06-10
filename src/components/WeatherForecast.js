import { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [ready, setReady] = useState(false);
  const [forecastData, setForecastData] = useState();

  function handleForecastData(data) {
    setForecastData(data);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="WeatherForecast d-flex justify-content-around m-4">
        {forecastData.map((day, i) => {
          if (i > 0 && i < 6) {
            return <WeatherForecastDay forecastData={day} key={i} />;
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    const { lat, lon } = props;
    const apiKey = "edcd663668b8087c96e88fbd0856ea83";
    const weatherForecastApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    fetch(weatherForecastApiUrl)
      .then((response) => response.json())
      .then((data) => {
        handleForecastData(data.daily);
      });

    return null;
  }
}
