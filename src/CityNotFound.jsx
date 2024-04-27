import languages from "./languageObject.js";
import "./App.css";

const CityNotFound = ({ language }) => {
  const { error } = languages[language];
  return (
    <div className="error-container">
      <h1>{error}</h1>
      <img className="error-image" src="404.png" alt="City Not Found" />
    </div>
  );
};
export default CityNotFound;
