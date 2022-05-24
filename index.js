"use strict";

const darkMode = localStorage.getItem("darkMode");
const themeButton = document.getElementById("theme-button");
let isEnabled;

if (darkMode === null) {
  document.body.classList.remove("darkmode");
  themeButton.textContent = "☼";
  isEnabled = false;
} else {
  document.body.classList.add("darkmode");
  themeButton.textContent = "☾";
  isEnabled = true;
}

const toggleTheme = () => {
  isEnabled = !isEnabled;

  if (isEnabled) {
    localStorage.setItem("darkMode", "enabled");
    document.body.classList.add("darkmode");
    themeButton.textContent = "☾";
  } else {
    localStorage.removeItem("darkMode");
    document.body.classList.remove("darkmode");
    themeButton.textContent = "☼";
  }
};

themeButton.addEventListener("click", toggleTheme);
