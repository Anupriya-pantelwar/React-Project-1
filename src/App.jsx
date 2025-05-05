import { useState } from "react";
import "./App.css";
import About from "./components/About.js";
import Navbar from "./components/Navbar.js";

import TextForm from "./components/TextForm.js";
function App() {
  const [mode, setMode] = useState("light"); // sate Variable -: whether
  //dark mode is enabled or not

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      {/*<Navbar
        title="TextUtils"
        mode={mode}
       toggleMode={toggleMode}
        aboutText="About TextUtils" 
      /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" mode={mode} />
        <About />
      </div>
    </>
  );
}

export default App;
