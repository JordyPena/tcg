import { useState, useEffect } from "react";
import "../styling/themes.css";
import { BsMoon } from "react-icons/bs";
import { BsSun } from "react-icons/bs";

export default function Themes() {
  const [darkMode, setDarkMode] = useState(false);
  const [lightMode, setLightMode] = useState(true);

  useEffect(() => {
    const bodyElement = document.body;
    if (darkMode) bodyElement.classList.add("dark-mode");
    else bodyElement.classList.remove("dark-mode");
  }, [darkMode]);

  useEffect(() => {
    if (localStorage.getItem("darkMode")) setDarkMode(true);
    else return;
  }, []);

  useEffect(() => {
    if (localStorage.getItem("lightMode")) setLightMode(true);
    else return;
  }, []);

  useEffect(() => {
    if (lightMode === true)
      localStorage.setItem("lightMode", JSON.stringify(lightMode));
    else localStorage.removeItem("lightMode");
  }, [lightMode]);

  useEffect(() => {
    if (darkMode === true) {
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
      setLightMode(false);
    } else if (darkMode === false) {
      localStorage.removeItem("darkMode");
      setLightMode(true);
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container-themes">
        {darkMode ? (
          <span
            onClick={() => setDarkMode(false)}
            style={{ color: !darkMode ? "grey" : "yellow" }}
          >
            <BsSun />
          </span>
        ) : (
          <span
            onClick={() => setDarkMode(true)}
            style={{ color: !darkMode ? "#c96dfd" : "grey" }}
          >
            <BsMoon />
          </span>
        )}
      </div>
    </div>
  );
}
