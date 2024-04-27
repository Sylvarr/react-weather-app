import languages from "./languageObject.js";
import { useState } from "react";
import "./App.css";

const SearchBar = ({ fetchData, language }) => {
  const [cityInput, setCityInput] = useState("");
  const { searchBarPlaceholder, searchBarButton } = languages[language];

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
        placeholder={searchBarPlaceholder}
        className="search-input"
        value={cityInput}
        onChange={handleInputChange}
      />
      <button type="submit" className="search-button">
        {searchBarButton}
      </button>
    </form>
  );
};

export default SearchBar;
