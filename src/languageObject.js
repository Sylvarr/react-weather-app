const getCurrentDate = (locale) => {
  const date = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let now = date.toLocaleDateString(locale, options);
  now = now.charAt(0).toUpperCase() + now.slice(1);

  return now;
};

const languages = {
  en: {
    intro: "Hello! Today is",
    currentDate: getCurrentDate("en"),
    searchBarPlaceholder: "Search for a city",
    searchBarButton: "Search",
    loadingWeather: "Loading Weather Information...",
    loadingSummary: "Loading Summary...",
    weatherFeelsLike: "Feels like",
    windSpeed: "Wind Speed",
    error: "City not found.",
    summary: "Weather Summary",
    footer: "Weather App",
  },
  es: {
    intro: "Hola! Hoy es",
    currentDate: getCurrentDate("es"),
    searchBarPlaceholder: "Buscar una ciudad",
    searchBarButton: "Buscar",
    loadingWeather: "Cargando información del clima...",
    loadingSummary: "Cargando información...",
    weatherFeelsLike: "Se siente como",
    windSpeed: "Velocidad del viento",
    error: "Ciudad no encontrada.",
    summary: "Resumen del clima",
    footer: "Aplicación del Clima",
  },
};

export default languages;
