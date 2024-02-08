//generazione griglia calendario

const now = new Date();
const getMonth = now.getMonth();
const getYear = now.getFullYear();

const appointments = [];

const monthNames = [
  "Gennaio",
  "Febbraio",
  "Marzo",
  "Aprile",
  "Maggio",
  "Giugno",
  "Luglio",
  "Agosto",
  "Settembre",
  "Ottobre",
  "Novembre",
  "Dicembre",
];

const printCurrentMonth = () => {
  const title = document.querySelector("h1");
  const currentMonth = monthNames[getMonth];
  title.innerText = currentMonth;
};

const dayInThisMonth = () => {
  const lastDayInMonth = new Date(getYear, getMonth + 1, 0); //ottengo l'ultimo giorno del mese corrente
  const numberOfTheDay = lastDayInMonth.getDate();
  return numberOfTheDay;
};

const unselectAllDays = () => {
  const previousSelected = document.querySelector(".selected");
  if (previousSelected) {
    previousSelected.classList.remove("selected");
  }
};

const changeMeetingDaySection = (indexOfDay) => {
  const rightSpan = document.getElementById("new-meeting-day");
  rightSpan.classList.add("hasDay");
  rightSpan.innerText = indexOfDay + 1;
};

const createDays = (numberOfDays) => {
  const calendarDiv = document.getElementById("calendar");
  for (let i = 0; i < numberOfDays; i++) {
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("day");
    dayDiv.addEventListener("click", () => {
      unselectAllDays();
      dayDiv.classList.add("selected");
      changeMeetingDaySection(i);
    });
  }
};
