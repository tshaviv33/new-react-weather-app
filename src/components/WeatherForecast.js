import { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [forecastData, setForecastData] = useState({ ready: false });

  function handleForecastData(data) {
    setForecastData({
      ready: true,
      day: data.daily[0].dt,
      icon: data.daily[0].weather[0].icon,
      tempMax: Math.round(data.daily[0].temp.max),
      tempMin: Math.round(data.daily[0].temp.min),
    });
  }

  if (forecastData.ready) {
    return (
      <div className="WeatherForecast d-flex justify-content-around m-4">
        <WeatherForecastDay forecastData={forecastData} />
      </div>
    );
  } else {
    const { lat, lon } = props;
    const apiKey = "edcd663668b8087c96e88fbd0856ea83";
    const weatherForecastApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    fetch(weatherForecastApiUrl)
      .then((response) => response.json())
      .then((data) => {
        handleForecastData(data);
      });

    return null;
  }
}
