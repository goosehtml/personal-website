"use strict";

const darkMode = localStorage.getItem("darkMode");
const codeBlockTheme = document.getElementById("code-block-theme");
let isEnabled;

if (darkMode === null) {
  document.body.classList.remove("darkmode");
  codeBlockTheme.setAttribute(
    "href",
    "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/foundation.min.css"
  );
  isEnabled = false;
} else {
  document.body.classList.add("darkmode");
  codeBlockTheme.setAttribute(
    "href",
    "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/base16/tomorrow-night.min.css"
  );
  isEnabled = true;
}
