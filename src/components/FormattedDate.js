export default function FormattedDate(props) {
  const formattedDate = new Date(props.date * 1000);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const day = days[formattedDate.getDay()];

  let hours = formattedDate.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = formattedDate.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <li>
      {day}{" "}
      <span className="result">
        {hours}:{minutes}
      </span>
    </li>
  );
}
