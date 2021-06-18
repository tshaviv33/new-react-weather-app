import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  const { isCelsius, setIsCelsius } = props;
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
          <WeatherTemp
            temp={temp}
            tempMax={tempMax}
            tempMin={tempMin}
            isCelsius={isCelsius}
            setIsCelsius={setIsCelsius}
          />
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
