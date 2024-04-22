import "./App.css";
import Header from "./Header.jsx";
import TimeAndDate from "./TimeAndDate.jsx";
import SearchBar from "./SearchBar.jsx";
import WeatherDisplay from "./WeatherDisplay.jsx";
import CityNotFound from "./CityNotFound.jsx";
import Footer from "./Footer.jsx";
import CohereDisplay from "./CohereWeather.jsx";
import { weatherKey, cohereKey } from "./Apikeys.jsx";
import { useState } from "react";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [isCityFound, setIsCityFound] = useState(true);
  const [cohereResponse, setCohereResponse] = useState(null);
  const [isWeatherLoading, setIsWeatherLoading] = useState(false);
  const [isCohereLoading, setIsCohereLoading] = useState(false);

  const DataFetch = async (cityInput) => {
    setIsWeatherLoading(true);
    setWeatherData(null);
    setCohereResponse(null);
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${weatherKey}&units=metric`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      const { name, main, weather, wind } = data;

      if (!name || !main || !weather || !wind) {
        throw new Error("Incomplete weather data");
      }

      setWeatherData(data);
      setIsCityFound(true);
      setIsWeatherLoading(false);

      const weatherPrompt = `It's ${
        weather[0].main
      } in ${name} with a ${main.temp.toFixed()}°C. The wind is ${wind.speed.toFixed()} km/h. Describe the weather in a realistic way and offer a suggestion. Be very short and only stick to what I'm asking of you. Do not ask for suggestions or offer more details. .`;

      fetchCohereResponse(weatherPrompt);
    } catch (error) {
      console.log(error);
      setIsCityFound(false);
      setIsWeatherLoading(false);
    }
  };

  const fetchCohereResponse = async (prompt) => {
    setIsCohereLoading(true);
    setCohereResponse(null);
    try {
      const cohereData = await fetch("https://api.cohere.ai/v1/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cohereKey}`,
        },
        body: JSON.stringify({ prompt }),
      });

      const cohereResult = await cohereData.json();
      if (cohereResult.error) {
        throw new Error("Failed to generate response from Cohere");
      }

      setCohereResponse(cohereResult);
      setIsCohereLoading(false);
    } catch (error) {
      console.log("Cohere error:", error.message);
    }
  };

  return (
    <>
      <div className="app">
        <Header />
        <TimeAndDate />
        <SearchBar fetchData={DataFetch} />
        {isWeatherLoading && <h3>Loading Weather Information...</h3>}
        <WeatherDisplay weatherData={weatherData} />
        {!isCityFound && <CityNotFound />}
        {isCohereLoading && <h3>Loading Summary...</h3>}
        {cohereResponse && <CohereDisplay response={cohereResponse} />}
      </div>
      <Footer />
    </>
  );
}

export default App;
