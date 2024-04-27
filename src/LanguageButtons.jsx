import "./App.css";

export default function LanguageButtons({ setLanguage, onClick }) {
  return (
    <div className="language-buttons">
      <button
        className="language-button"
        onClick={() => {
          setLanguage("en");
          onClick();
        }}
      >
        English
      </button>
      <button
        className="language-button"
        onClick={() => {
          setLanguage("es");
          onClick();
        }}
      >
        Español
      </button>
    </div>
  );
}
