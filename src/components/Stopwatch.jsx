import { useEffect, useState } from "react";

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = () => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");

    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");

    const secs = String(seconds % 60).padStart(2, "0");

    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <div className="card">
      <h2>Stopwatch</h2>

      <div className="time">{formatTime()}</div>

      <div className="buttons">
        <button className="button primary" onClick={() => setIsRunning(true)}>
          Start
        </button>

        <button className="button secondary" onClick={() => setIsRunning(false)}>
          Pause
        </button>

        <button
          className="button ghost"
          onClick={() => {
            setIsRunning(false);
            setSeconds(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;