import "./App.css";
import CitySearch from "./components/CitySearch";
import WeatherInfo from "./components/WeatherInfo";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App container">
      <CitySearch />
      <WeatherInfo />
      <Footer />
    </div>
  );
}
