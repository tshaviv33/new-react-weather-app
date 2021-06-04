export default function WeatherInfo() {
  return (
    <div className="WeatherInfo">
      <h1>New York</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="d-flex">
        <div className="d-flex align-items-center">
          <i className="fas fa-sun"></i>
          <p>
            6°<span className="units">C | F</span>
          </p>
        </div>
        <div>
          <ul>
            <li>Feels Like: 6°</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
