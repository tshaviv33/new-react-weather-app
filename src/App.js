import { useState } from "react";
import "./App.css";
import WeatherInfo from "./components/WeatherInfo";
import Footer from "./components/Footer";

export default function App() {
  const defaultCity = "tel aviv";
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleData(data) {
    setWeatherData({
      ready: true,
      city: data.name,
      date: data.dt,
      feelsLike: Math.round(data.main.feels_like),
      humidity: Math.round(data.main.humidity),
      temp: Math.round(data.main.temp),
      tempMax: Math.round(data.main.temp_max),
      tempMin: Math.round(data.main.temp_min),
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      wind: Math.round(data.wind.speed),
      lat: data.coord.lat,
      lon: data.coord.lon,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="App container d-flex flex-column justify-content-center align-items-center vh-100">
        <WeatherInfo weatherData={weatherData} />
        <Footer />
      </div>
    );
  } else {
    const apiKey = "edcd663668b8087c96e88fbd0856ea83";
    const weatherApiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${apiKey}&units=metric `;

    fetch(weatherApiUrl)
      .then((response) => response.json())
      .then((data) => {
        handleData(data);
      });
    return (
      <div className="App container d-flex flex-column justify-content-center align-items-center vh-100">
        Loading...
        <Footer />
      </div>
    );
  }
}
