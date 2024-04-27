import "./App.css";
import languages from "./languageObject.js";

const TimeAndDate = ({ language }) => {
  const { intro, currentDate } = languages[language];

  return (
    <div id="timeAndDate">
      <h3>{intro}</h3>
      <h4>{currentDate}</h4>
    </div>
  );
};

export default TimeAndDate;
