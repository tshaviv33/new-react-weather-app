import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast d-flex justify-content-around m-4">
      <div className="d-flex flex-column align-items-center">
        <h3>Sat</h3>
        <WeatherIcon iconCode="01d" />
        <div className="temps">
          <span>23°</span>
          <span className="ms-1">10°</span>
        </div>
      </div>
    </div>
  );
}
