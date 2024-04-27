import languages from "./languageObject.js";
import "./App.css";

function CohereDisplay({ response, language }) {
  const { summary } = languages[language];
  return (
    <div className="cohere-text">
      <h3 className="cohere-title">{summary}</h3>
      <p>{response.generations[0].text}</p>
    </div>
  );
}

export default CohereDisplay;
