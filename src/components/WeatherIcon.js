export default function WeatherIcon(props) {
  const { iconCode } = props;

  const iconMapping = {
    "01d": "sun",
    "01n": "moon",
    "02d": "cloud-sun",
    "02n": "cloud-moon",
    "03d": "cloud",
    "03n": "cloud",
    "04d": "cloud",
    "04n": "cloud",
    "09d": "cloud-sun-rain",
    "09n": "cloud-moon-rain",
    "10d": "cloud-rain",
    "10n": "cloud-rain",
    "11d": "bolt",
    "11n": "bolt",
    "13d": "snowflake",
    "13n": "snowflake",
    "50d": "smog",
    "50n": "smog",
  };

  return (
    <i className={`fas fa-${iconMapping[iconCode]} weather-icon me-2`}></i>
  );
}
