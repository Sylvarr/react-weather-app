import languages from "./languageObject.js";

function LoadingSummary({ language }) {
  const { loadingSummary } = languages[language];
  return <h3>{loadingSummary}</h3>;
}

export default LoadingSummary;
