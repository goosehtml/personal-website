"use strict";

const darkMode = localStorage.getItem("darkMode");
const themeButton = document.getElementById("theme-button");
let isEnabled;

if (darkMode === null) {
  document.body.classList.remove("darkmode");
  themeButton.textContent = "!light-mode";
  isEnabled = false;
} else {
  document.body.classList.add("darkmode");
  themeButton.textContent = "!dark-mode";
  isEnabled = true;
}

const toggleTheme = () => {
  isEnabled = !isEnabled;

  if (isEnabled) {
    localStorage.setItem("darkMode", "enabled");
    document.body.classList.add("darkmode");
    themeButton.textContent = "!dark-mode";
  } else {
    localStorage.removeItem("darkMode");
    document.body.classList.remove("darkmode");
    themeButton.textContent = "!light-mode";
  }
};

themeButton.addEventListener("click", toggleTheme);

