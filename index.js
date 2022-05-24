"use strict";

const darkMode = localStorage.getItem("darkMode");
const themeButton = document.getElementById("logo");
let isEnabled;

if (darkMode === null) {
  document.body.classList.remove("darkmode");
  isEnabled = false;
} else {
  document.body.classList.add("darkmode");
  isEnabled = true;
}

const toggleTheme = () => {
  isEnabled = !isEnabled;

  if (isEnabled) {
    localStorage.setItem("darkMode", "enabled");
    document.body.classList.add("darkmode");
  } else {
    localStorage.removeItem("darkMode");
    document.body.classList.remove("darkmode");
  }
};

themeButton.addEventListener("click", toggleTheme);
