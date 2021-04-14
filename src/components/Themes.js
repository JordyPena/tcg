import { useState, useEffect } from "react";
import "../styling/themes.css";
import { BsMoon } from "react-icons/bs";
import { BsSun } from "react-icons/bs";

export default function Themes() {
 
  const [ theme, setTheme ] = useState(localStorage.getItem("theme") || "light-mode");


  useEffect(() => {
    const bodyElement = document.body;
    if (theme === "dark-mode") bodyElement.classList.add("theme");
    else bodyElement.classList.remove("theme");
  }, [theme]);

  const handleThemeButton = () => {
    console.log(theme)
    setTheme((prevTheme) => {
      let newTheme = "dark-mode"

      if (prevTheme === newTheme)
        newTheme = "light-mode"

      localStorage.setItem("theme", newTheme)

      return newTheme
    })
  }

  return (
    <div className={theme === "dark-mode" ? "dark-mode" : "light-mode"}>
      <div className="container-themes">
        {theme === "dark-mode" ? (
          <span
            onClick={() => handleThemeButton()}
            style={{ color: theme !== "dark-mode" ? "grey" : "yellow" }}
          >
            <BsSun />
          </span>
        ) : (
          <span
            onClick={() => handleThemeButton()}
            style={{ color: theme === "light-mode" ? "#c96dfd" : "grey" }}
          >
            <BsMoon />
          </span>
        )}
      </div>
    </div>
  );
}
