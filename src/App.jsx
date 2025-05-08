import React, { useState } from "react";
import "./App.css";
import About from "./components/About.js";
import Navbar from "./components/Navbar.js";
import Alert from './components/Alert.js'


import TextForm from "./components/TextForm.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // sate Variable -: whether
  //dark mode is enabled or not

  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";

      // setInterval(() => {
      //   document.tiltle = "TextUtils is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has beeen enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      <Router>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        aboutText="About TextUtils" 
      />
       <Alert alert={alert} />
      
        <Routes
            title="TextUtils"
            mode={mode}
            toggleMode={toggleMode}
            aboutText="About TextUtils"
          >
          
          
            <Route exact path="/about" element={<About />}/>
             

            <Route exact path="/" element={<TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                mode={mode}
              />}>
              
            </Route>

            
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
