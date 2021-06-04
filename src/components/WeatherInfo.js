import CitySearch from "./CitySearch";
import "./WeatherInfo.css";

export default function WeatherInfo() {
  return (
    <div className="WeatherInfo w-100 shadow-lg rounded p-4 pt-2">
      <CitySearch />
      <h1>New York</h1>
      <ul className="list-unstyled">
        <li>
          Wednesday <span className="result">07:00</span>
        </li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="d-flex justify-content-around align-items-center">
        <div className="d-flex align-items-center">
          <i className="fas fa-sun weather-icon me-2"></i>
          <h2 className="ms-1">
            6°<span className="units ms-1">C | F</span>
          </h2>
        </div>
        <div>
          <ul className="list-unstyled">
            <li>
              Feels Like: <span className="result">6°</span>
            </li>
            <li>
              Humidity: <span className="result">72%</span>
            </li>
            <li>
              Wind: <span className="result">13 km/h</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
