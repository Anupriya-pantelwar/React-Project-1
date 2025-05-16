import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [buttonBgColor, setButtonBgColor] = useState("red");
  const [buttonTextColor, setButtonTextColor] = useState("white");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 1) {
      setButtonBgColor("blue");
    }
    if (count === 2) {
      setButtonBgColor("white");
      setButtonTextColor("black");
    }
    if (count === 4) {
      setButtonBgColor("red");
      setButtonTextColor("white");

      setCount(0);
    }
  }, [count]);
  return (
    <>
      <div>
        <h1>App Component Count {count}</h1>
      </div>
      <div
        className="App"
        style={{
          backgroundColor: count === 3 ? "green" : "",
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px",
        }}
      >
        <button
          onClick={() => setCount(count + 1)}
          style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
        >
          Click Me
        </button>
      </div>
    </>
  );
}

export default App;
