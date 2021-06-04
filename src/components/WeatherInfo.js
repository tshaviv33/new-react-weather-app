import CitySearch from "./CitySearch";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  const {
    city,
    date,
    description,
    feelsLike,
    humidity,
    temp,
    tempMax,
    tempMin,
    icon,
    wind,
  } = props.weatherData;

  return (
    <div className="WeatherInfo w-100 shadow-lg rounded p-4 pt-2">
      <CitySearch />
      <h1>{city}</h1>
      <ul className="list-unstyled">
        <li>
          Wednesday <span className="result">07:00</span>
        </li>
        <li className="text-capitalize">{description}</li>
      </ul>
      <div className="d-flex justify-content-around align-items-center">
        <div className="d-flex align-items-center">
          <i className="fas fa-sun weather-icon me-2"></i>
          <div className="d-flex flex-column justify-content-center">
            <h2 className="ms-1">
              {temp}°<span className="units ms-1">C | F</span>
            </h2>
            <p className="high-low-temps">
              High: <span className="result me-2">{tempMax}°</span> Low:{" "}
              <span className="result">{tempMin}°</span>
            </p>
          </div>
        </div>
        <div>
          <ul className="list-unstyled">
            <li>
              Feels Like: <span className="result">{feelsLike}°</span>
            </li>
            <li>
              Humidity: <span className="result">{humidity}%</span>
            </li>
            <li>
              Wind: <span className="result">{wind} km/h</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
