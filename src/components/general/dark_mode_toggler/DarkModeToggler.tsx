import React, { useEffect, useState, useContext, useRef } from "react";
import "./dark_mode_toggler.css";
import Sun from "../../../../static/etc/images/icons/dark_mode_toggler/sunny.png";
import Moon from "../../../../static/etc/images/icons/dark_mode_toggler/moon.png";

const getUserDarkThemePreference = () => {
  let localPreference = localStorage.getItem("dark_mode");
  if (localPreference) {
    return JSON.parse(localPreference);
  }

  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
};

console.log("localStorage 'dark_mode':", localStorage.getItem("dark_mode"));
const DarkModeToggler = () => {
  const [dark, setDark] = useState(getUserDarkThemePreference());

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("dark_mode", "true");
    } else {
      localStorage.setItem("dark_mode", "false");
      document.documentElement.classList.remove("dark");
    }

    console.log("localStorage 'dark_mode':", localStorage.getItem("dark_mode"));
  }, [dark]);

  const toggleDark = () => {
    setDark(!dark);
  };

  return (
    <div className="mt-4">
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        defaultChecked={dark}
      ></input>
      <label htmlFor="checkbox" onClick={toggleDark} className="label">
        <img className="moon" src={Moon} />
        <img className="sun" src={Sun} />
        <div className="ball"></div>
      </label>
    </div>
  );
};
export default DarkModeToggler;
