import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
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
    <div className="WeatherInfo w-100 ps-4 pe-4 pt-2">
      <h1>{city}</h1>
      <ul className="list-unstyled">
        <FormattedDate date={date} />
        <li className="text-capitalize">{description}</li>
      </ul>
      <div className="d-flex justify-content-around align-items-center">
        <div className="d-flex align-items-center">
          <WeatherIcon iconCode={icon} />
          <div className="d-flex flex-column justify-content-center ms-1">
            <h2>
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
