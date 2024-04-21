import moment from "moment";
import "./App.css";

const currentDay = moment().format("dddd");

const currentDate = moment().format("MMMM Do YYYY");

export default function TimeAndDate() {
  return (
    <div id="timeAndDate">
      <h3>Hello! Today is</h3>
      <h4>
        {currentDay}, {currentDate}
      </h4>
    </div>
  );
}
