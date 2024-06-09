import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const a = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  const forhour = (hour) => {
    return hour == 0 ? 12 : hour > 12 ? hour - 12 : hour;
  };
  const date = (date) => {
    const op = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString(undefined, op);
  };
  return (
    <div className="di">
      <h1>Digital Clock</h1>
      <div className="time">
        {a(forhour(currentTime.getHours()))}:{a(currentTime.getMinutes())}:
        {a(currentTime.getSeconds())}
        {currentTime.getHours() >= 12 ? " PM" : " AM"}
      </div>
      <div className="date">{date(currentTime)}</div>
    </div>
  );
}

export default App;
