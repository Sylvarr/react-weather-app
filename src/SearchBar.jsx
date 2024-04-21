import { useState } from "react";
import "./App.css";

const SearchBar = ({ fetchData }) => {
  const [cityInput, setCityInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(cityInput);
  };

  const handleInputChange = (event) => {
    setCityInput(event.target.value);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a city"
        className="search-input"
        value={cityInput}
        onChange={handleInputChange}
      />
      <button className="search-button">Search</button>
    </form>
  );
};

export default SearchBar;
