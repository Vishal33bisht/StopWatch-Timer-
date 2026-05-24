import { useEffect, useState } from "react";
import beepSound from "../assets/beep.mp3";
function Timer() {
  const [input, setInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      const audio = new Audio(beepSound);
      audio.play();
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const handleStart = () => {
    if (input <= 0) return;

    setTimeLeft(Number(input));
    setIsRunning(true);
  };

  const formatTime = () => {
    const mins = String(Math.floor(timeLeft / 60)).padStart(2, "0");

    const secs = String(timeLeft % 60).padStart(2, "0");

    return `${mins}:${secs}`;
  };

  return (
    <div className="card">
      <h2>Timer</h2>

      <input
        type="number"
        placeholder="Enter seconds"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="time">{formatTime()}</div>

      <div className="buttons">
        <button onClick={handleStart}>
          Start
        </button>

        <button onClick={() => setIsRunning(false)}>
          Pause
        </button>

        <button
          onClick={() => {
            setIsRunning(false);
            setTimeLeft(0);
            setInput("");
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;