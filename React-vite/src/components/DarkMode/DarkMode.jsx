import React, { useCallback, useEffect } from "react";
import "./DarkMode.css";

const DarkMode = () => {
  const setDarkMode = useCallback(() => {
    localStorage.setItem("theme", "dark");
    document.querySelector("body").setAttribute("data-theme", "dark");
  }, []);

  const setLightMode = useCallback(() => {
    localStorage.setItem("theme", "light");
    document.querySelector("body").setAttribute("data-theme", "light");
  }, []);

  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode();
    else if (theme === "light") setLightMode();
  }, [setDarkMode, setLightMode]);

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        {/* <i className="uil uil-sun sun"></i>
        <i className="uil uil-moon moon"></i> */}
      </label>
    </div>
  );
};

export default DarkMode;