const logButton = document.getElementById("log");
const clearButton = document.getElementById("clear");

const editParagraph = () => {
  const greet = document.getElementById("greet");
  let localValue = localStorage.getItem("userValue");
  if (localValue) {
    greet.innerHTML = `Hello ${localValue}`;
  } else {
    greet.innerHTML = "No data";
  }
};

const startTimer = () => {
  const timerParagraph = document.getElementById("timerParagraph");

  if (!sessionStorage.getItem("seconds")) {
    sessionStorage.setItem("seconds", "0");
  }

  const timer = setInterval(() => {
    let currSecond = Number(sessionStorage.getItem("seconds")) + 1;
    sessionStorage.setItem("seconds", currSecond.toString());
    timerParagraph.textContent = `Sono passati ${currSecond} secondi`;
  }, 1000);
};

const handleLogClick = (e) => {
  e.preventDefault();
  const userValue = document.querySelector("input").value;
  localStorage.setItem("userValue", userValue);
  editParagraph();
};

const handleClearClick = (e) => {
  e.preventDefault();
  localStorage.clear();
  editParagraph();
};

const handleLoad = () => {
  startTimer();
};

logButton.addEventListener("click", handleLogClick);

clearButton.addEventListener("click", handleClearClick);

document.addEventListener("DOMContentLoaded", handleLoad);
