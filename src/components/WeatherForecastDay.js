import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function formatDay(date) {
    const formattedDate = new Date(date * 1000);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[formattedDate.getDay()];
  }

  if (props.isCelsius) {
    return (
      <div className="d-flex flex-column align-items-center">
        <h3>{formatDay(props.forecastData.dt)}</h3>
        <WeatherIcon iconCode={props.forecastData.weather[0].icon} />
        <div className="temps">
          <span>{Math.round(props.forecastData.temp.max)}°</span>
          <span className="temp-min ms-1">
            {Math.round(props.forecastData.temp.min)}°
          </span>
        </div>
      </div>
    );
  } else {
    const fahrenheitTempMax = Math.round(
      (props.forecastData.temp.max * 9) / 5 + 32
    );
    const fahrenheitTempMin = Math.round(
      (props.forecastData.temp.min * 9) / 5 + 32
    );

    return (
      <div className="d-flex flex-column align-items-center">
        <h3>{formatDay(props.forecastData.dt)}</h3>
        <WeatherIcon iconCode={props.forecastData.weather[0].icon} />
        <div className="temps">
          <span>{fahrenheitTempMax}°</span>
          <span className="temp-min ms-1">{fahrenheitTempMin}°</span>
        </div>
      </div>
    );
  }
}
