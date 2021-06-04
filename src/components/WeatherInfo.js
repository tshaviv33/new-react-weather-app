import CitySearch from "./CitySearch";
import "./WeatherInfo.css";

export default function WeatherInfo() {
  return (
    <div className="WeatherInfo w-100 shadow-lg rounded p-4 pt-2">
      <CitySearch />
      <h1>New York</h1>
      <ul className="list-unstyled">
        <li>Wednesday 07:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="d-flex justify-content-around align-items-center">
        <div className="d-flex align-items-center">
          <i className="fas fa-sun weather-icon me-2"></i>
          <h2 className="ms-1">
            6°<span className="units">C | F</span>
          </h2>
        </div>
        <div>
          <ul className="list-unstyled">
            <li>Feels Like: 6°</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
