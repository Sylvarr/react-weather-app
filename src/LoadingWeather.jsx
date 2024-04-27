import languages from "./languageObject.js";

function LoadingWeather({ language }) {
  const { loadingWeather } = languages[language];
  return <h3>{loadingWeather}</h3>;
}

export default LoadingWeather;
