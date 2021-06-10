import { useState } from "react";
import "./App.css";
import WeatherInfo from "./components/WeatherInfo";
import WeatherForecast from "./components/WeatherForecast";
import Footer from "./components/Footer";

export default function App() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("Tel Aviv");

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

  function search() {
    const apiKey = "edcd663668b8087c96e88fbd0856ea83";
    const weatherApiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric `;

    fetch(weatherApiUrl)
      .then((response) => response.json())
      .then((data) => {
        handleData(data);
      });
  }

  if (weatherData.ready) {
    return (
      <div className="App container d-flex flex-column justify-content-center align-items-center vh-100">
        <div className="weather-content shadow-lg rounded w-100">
          <form
            className="d-flex m-3"
            onSubmit={(event) => {
              event.preventDefault();
              search();
            }}
          >
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control me-2"
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />
            <button type="submit" className="btn btn-warning">
              Search
            </button>
          </form>
          <WeatherInfo weatherData={weatherData} />
          <WeatherForecast lat={weatherData.lat} lon={weatherData.lon} />
        </div>
        <Footer />
      </div>
    );
  } else {
    search();

    return (
      <div className="App container d-flex flex-column justify-content-center align-items-center vh-100">
        Loading...
        <Footer />
      </div>
    );
  }
}
