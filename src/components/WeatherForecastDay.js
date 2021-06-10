import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function formatDay(date) {
    const formattedDate = new Date(date * 1000);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[formattedDate.getDay()];
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <h3>{formatDay(props.forecastData.day)}</h3>
      <WeatherIcon iconCode={props.forecastData.icon} />
      <div className="temps">
        <span>{props.forecastData.tempMax}°</span>
        <span className="temp-min ms-1">{props.forecastData.tempMin}°</span>
      </div>
    </div>
  );
}
