import {useState} from "react";
import Stopwatch from "./components/Stopwatch";
import Timer from "./components/Timer";
import "./components/style.css";


function App() {
  const[darkMode, setDarkMode]=useState(true);
  return (
    <div className={darkMode ? "app dark" : "app light"}>
        <button className="dark-mode-toggle" onClick={()=>setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      <h1>Stopwatch & Timer App</h1>
      <div className="container">
        <Stopwatch />
        <Timer />
      </div>
    </div>
  );
}

export default App;