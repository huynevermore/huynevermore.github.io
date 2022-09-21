import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(10);
  const [isPause, setIsPause] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPause) {
        setTime((prev) => prev - 1);
      }
    }, 1000);
    if (time <= 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [time, isPause]);

  // useEffect(() => {
  //   // const timer = setInterval(() => {
  //   //   setTime((prev) => prev - 1);
  //   // }, 1000);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [isPause]);
  return (
    <div className="App">
      <h1>{time <= 0 ? "Hết giờ" : time}</h1>
      <button
        onClick={() => {
          setIsPause(!isPause);
        }}
      >
        {isPause ? "Continue " : "Pause"}
      </button>
      <button
        onClick={() => {
          setTime(10);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
