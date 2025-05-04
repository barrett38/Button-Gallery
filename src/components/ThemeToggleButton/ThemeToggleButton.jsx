import React, { useState, useEffect } from "react";
import "./ThemeToggleButton.css";

const ThemeToggleButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <button
      className={`theme-toggle ${darkMode ? "dark" : "light"}`}
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Toggle theme"
    >
      <div className="icon">{darkMode ? "🌙" : "☀️"}</div>
    </button>
  );
};

export default ThemeToggleButton;
