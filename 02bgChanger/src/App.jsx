import { useState } from "react";
import "./App.css";  // Import CSS file

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      style={{
        backgroundColor: color,
        width: "100vw",
        height: "100vh",
        transition: "background-color 0.3s ease",
        position: "relative",
      }}
    >
      <div className="bottom-bar">
        <button className="btn red" onClick={() => setColor("red")}>
          Red
        </button>
        <button className="btn blue" onClick={() => setColor("blue")}>
          Blue
        </button>
        <button className="btn green" onClick={() => setColor("green")}>
          Green
        </button>
        <button className="btn yellow" onClick={() => setColor("yellow")}>
          Yellow
        </button>
      </div>
    </div>
  );
}

export default App;
