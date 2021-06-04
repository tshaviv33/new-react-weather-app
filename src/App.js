import "./App.css";
import WeatherInfo from "./components/WeatherInfo";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App container d-flex flex-column justify-content-center align-items-center vh-100">
      <WeatherInfo />
      <Footer />
    </div>
  );
}
