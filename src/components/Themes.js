import { useState, useEffect } from "react";
import "../styling/themes.css";
import { BsMoon } from "react-icons/bs";
import { BsSun } from "react-icons/bs";

export default function Themes() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const bodyElement = document.body;
    if (darkMode) bodyElement.classList.add("dark-mode");
    else bodyElement.classList.remove("dark-mode");
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
