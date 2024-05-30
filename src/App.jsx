import "./App.css";
import LanguageButtons from "./LanguageButtons.jsx";
import Header from "./Header.jsx";
import TimeAndDate from "./TimeAndDate.jsx";
import SearchBar from "./SearchBar.jsx";
import WeatherDisplay from "./WeatherDisplay.jsx";
import CityNotFound from "./CityNotFound.jsx";
import Footer from "./Footer.jsx";
import CohereDisplay from "./CohereWeather.jsx";
import LoadingWeather from "./LoadingWeather.jsx";
import LoadingSummary from "./LoadingSummary.jsx";
import { weatherKey, cohereKey } from "./apikeys.js";
import { useEffect, useState } from "react";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [isCityFound, setIsCityFound] = useState(true);
  const [cohereResponse, setCohereResponse] = useState(null);
  const [isWeatherLoading, setIsWeatherLoading] = useState(false);
  const [isCohereLoading, setIsCohereLoading] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");

  useEffect(() => {
    languageReset();
  }, [currentLanguage]);

  function languageReset() {
    setWeatherData(null);
    setCohereResponse(null);
  }

  function createWeatherPrompt(language, name, weather, main, wind) {
    const templates = {
      en: `Current weather in ${name}: ${
        weather[0].main
      }, temperature ${main.temp.toFixed()}°C, wind speed ${(
        wind.speed * 3.6
      ).toFixed()} km/h. Summarize this weather using only one sentence. Immediately follow this with exactly one actionable suggestion based on these conditions. Exclude any additional prompts or offers of further information.`,
      es: `Clima actual en ${name}: ${
        weather[0].main
      }, temperatura ${main.temp.toFixed()}°C, velocidad del viento ${(
        wind.speed * 3.6
      ).toFixed()} km/h. Resume este clima en una sola frase. Inmediatamente después, proporciona exactamente una sugerencia práctica basada en estas condiciones. Excluye cualquier otro tipo de instrucciones o ofertas de más información.`,
    };

    return templates[language];
  }

  const DataFetch = async (cityInput) => {
    setIsWeatherLoading(true);
    setWeatherData(null);
    setCohereResponse(null);
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${weatherKey}&units=metric&lang=${currentLanguage}`;
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

      const weatherPrompt = createWeatherPrompt(
        currentLanguage,
        name,
        weather,
        main,
        wind
      );
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
        body: JSON.stringify({
          model: "command-r-plus",
          prompt: prompt,
        }),
      });

      const cohereResult = await cohereData.json();
      if (cohereResult.error) {
        console.log("Cohere API Error:", cohereResult.error);
        throw new Error("Failed to generate text from Cohere");
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
        <LanguageButtons setLanguage={setCurrentLanguage} />
        <Header />
        <TimeAndDate language={currentLanguage} />
        <SearchBar fetchData={DataFetch} language={currentLanguage} />
        {isWeatherLoading && <LoadingWeather language={currentLanguage} />}
        <WeatherDisplay weatherData={weatherData} language={currentLanguage} />
        {!isCityFound && <CityNotFound language={currentLanguage} />}
        {isCohereLoading && <LoadingSummary language={currentLanguage} />}
        {cohereResponse && (
          <CohereDisplay response={cohereResponse} language={currentLanguage} />
        )}
      </div>
      <Footer language={currentLanguage} />
    </>
  );
}

export default App;
