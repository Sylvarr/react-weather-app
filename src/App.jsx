import "./App.css";
import Header from "./Header.jsx";
import TimeAndDate from "./TimeAndDate.jsx";
import SearchBar from "./SearchBar.jsx";
import WeatherDisplay from "./WeatherDisplay.jsx";
import CityNotFound from "./CityNotFound.jsx";
import Footer from "./Footer.jsx";
import { useState } from "react";
import weatherKey from "./Apikeys.jsx";
function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [isCityFound, setIsCityFound] = useState(false);

  const DataFetch = async (cityInput) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${weatherKey}&units=metric`
      );
      if (!response.ok) {
        setWeatherData(null);
        setIsCityFound(true);
        return;
      }
      const data = await response.json();
      setWeatherData(data);
      setIsCityFound(false);
    } catch (error) {
      console.log(error);
      setWeatherData(null);
      setIsCityFound(true);
    }
  };

  return (
    <>
      <div className="app">
        <Header />
        <TimeAndDate />
        <SearchBar fetchData={DataFetch} />
        <WeatherDisplay weatherData={weatherData} />
        {isCityFound && <CityNotFound />}
      </div>
      <Footer />
    </>
  );
}

export default App;
