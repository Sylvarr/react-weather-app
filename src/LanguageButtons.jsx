import "./App.css";

export default function LanguageButtons({ setLanguage }) {
  return (
    <div className="language-buttons">
      <button
        className="language-button"
        onClick={() => {
          setLanguage("en");
        }}
      >
        English
      </button>
      <button
        className="language-button"
        onClick={() => {
          setLanguage("es");
        }}
      >
        Español
      </button>
    </div>
  );
}
