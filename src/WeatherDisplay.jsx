import "./App.css";
const WeatherDisplay = ({ weatherData }) => {
  const iconsList = {
    200: "thunderstorm.png",
    201: "thunderstorm.png",
    202: "thunderstorm.png",
    210: "thunderstorm.png",
    211: "thunderstorm.png",
    212: "thunderstorm.png",
    221: "thunderstorm.png",
    230: "thunderstorm.png",
    231: "thunderstorm.png",
    232: "thunderstorm.png",

    300: "rain.png",
    301: "rain.png",
    302: "rain.png",
    310: "rain.png",
    311: "rain.png",
    312: "rain.png",
    313: "rain.png",
    314: "rain.png",
    321: "rain.png",

    500: "rain.png",
    501: "rain.png",
    502: "rain.png",
    503: "rain.png",
    504: "rain.png",
    511: "rain.png",
    520: "rain.png",
    521: "rain.png",
    522: "rain.png",
    531: "rain.png",

    600: "snow.png",
    601: "snow.png",
    602: "snow.png",
    611: "snow.png",
    612: "snow.png",
    613: "snow.png",
    615: "snow.png",
    616: "snow.png",
    620: "snow.png",
    621: "snow.png",
    622: "snow.png",

    701: "mist.png",
    711: "mist.png",
    721: "mist.png",
    731: "mist.png",
    741: "mist.png",
    751: "mist.png",
    761: "mist.png",
    762: "mist.png",
    771: "mist.png",
    781: "mist.png",

    800: "sunny.png",

    801: "fewclouds.png",
    802: "cloudy.png",
    803: "cloudy.png",
    804: "cloudy.png",
  };

  if (!weatherData) {
    return;
  }

  const { name, main, weather, wind } = weatherData;
  const iconUrl = iconsList[weather[0].id];
  const iconElement = (
    <img src={iconUrl} alt="Weather Icon" className="weather-icon" />
  );
  const windSpeedKmH = (wind.speed * 3.6).toFixed();
  const tempRoundedUp = main.temp.toFixed();
  const minTemp = main.temp_min.toFixed();
  const maxTemp = main.temp_max.toFixed();
  const minMax = main.feels_like.toFixed();
  const description = weather[0].description;
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="weather-display">
      <h1>
        {name}, {weatherData.sys.country}
      </h1>
      <p>{iconElement}</p>
      <div className="weather-info">
        <p>
          <span className="weather-degrees">{tempRoundedUp}°C</span>,
          <span className="weather-name">
            {" "}
            {capitalizeFirstLetter(description)}
          </span>
        </p>
        <p className="weather-minmax">
          {maxTemp}/{minTemp}, Feels like: {minMax}°C
        </p>
        <p></p>
        <p className="weather-minmax">
          {`\uD83D\uDCA8`}Wind Speed: {windSpeedKmH} km/h
        </p>
      </div>
    </div>
  );
};

export default WeatherDisplay;
