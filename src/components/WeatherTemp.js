export default function WeatherTemp(props) {
  const { isCelsius, setIsCelsius, temp, tempMax, tempMin } = props;

  function showFahrenheit(event) {
    event.preventDefault();
    setIsCelsius(false);
  }

  function showCelsius(event) {
    event.preventDefault();
    setIsCelsius(true);
  }

  if (isCelsius) {
    return (
      <div className="d-flex flex-column justify-content-center ms-1">
        <h2>
          {temp}°
          <span className="units ms-1">
            C |{" "}
            <a href="/" onClick={showFahrenheit}>
              F
            </a>
          </span>
        </h2>
        <p className="high-low-temps">
          High: <span className="result me-2">{tempMax}°</span> Low:{" "}
          <span className="result">{tempMin}°</span>
        </p>
      </div>
    );
  } else {
    const fahrenheitTemp = Math.round((temp * 9) / 5 + 32);
    const fahrenheitTempMax = Math.round((tempMax * 9) / 5 + 32);
    const fahrenheitTempMin = Math.round((tempMin * 9) / 5 + 32);

    return (
      <div className="d-flex flex-column justify-content-center ms-1">
        <h2>
          {fahrenheitTemp}°
          <span className="units ms-1">
            <a href="/" onClick={showCelsius}>
              C
            </a>{" "}
            | F
          </span>
        </h2>
        <p className="high-low-temps">
          High: <span className="result me-2">{fahrenheitTempMax}°</span> Low:{" "}
          <span className="result">{fahrenheitTempMin}°</span>
        </p>
      </div>
    );
  }
}
