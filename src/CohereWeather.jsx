import "./App.css";

function CohereDisplay({ response }) {
  return (
    <div className="cohere-text">
      <h3 className="cohere-title">Weather Summary</h3>
      <p>{response.generations[0].text}</p>
    </div>
  );
}

export default CohereDisplay;
