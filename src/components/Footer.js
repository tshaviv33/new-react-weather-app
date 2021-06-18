import "./Footer.css";

export default function Footer() {
  return (
    <footer className="Footer pt-2 text-muted">
      <small>
        Coded by{" "}
        <a
          href="https://serene-fermat-2b8a8a.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Talia Haviv
        </a>
        , open-sourced on{" "}
        <a
          href="https://github.com/tshaviv33/new-react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        .
      </small>
    </footer>
  );
}
