# SunSpot Weather App

SunSpot is a React-based weather application that provides current weather information for any city globally. It uses the OpenWeatherMap API to fetch weather data and presents it in a user-friendly interface. It uses this data to create a prompt and use it with Cohere API to get a brief summary and a suggestion.

## Features

- Live search for a city to get current weather information.
- Displays details like the city name, temperature, weather condition, min/max temperature, and wind speed.
- Weather conditions are visually represented with icons.
- Error handling for scenarios where a city is not found.
- AI summary of current weather.

## Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

- npm: npm install npm@latest -g

### Installation

1. Clone the repo: git clone https://github.com/Sylvarr/react-weather-app.git
2. Install NPM packages: npm install
3. Create an `Apikeys.jsx` file in the root directory of your project with your OpenWeather and Cohere API keys:

```javascript
const weatherKey = "YOUR_API_KEY";
const cohereKey = "YOUR_API_KEY";

export { weatherKey, cohereKey };
```

### Usage

- Run the application using the command: npm run dev

## Code Structure

- `App.jsx`: The main React component that manages the state and renders child components.
- `SearchBar.jsx`: A component for the search input field and search functionality.
- `WeatherDisplay.jsx`: Component to display the weather data.
- `CohereWeather.jsx`: Displays AI summary of current weather.
- `CityNotFound.jsx`: Component displayed when a city is not found.
- `Header.jsx`, `Footer.jsx`: Components for the application's header and footer.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

## License

Distributed under the MIT License. See LICENSE for more information.
