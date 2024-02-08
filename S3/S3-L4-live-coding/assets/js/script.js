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
printCurrentMonth();

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
  rightSpan.innerText = `${indexOfDay + 1} ${monthNames[getMonth]}`;
};

const showAppointments = (indexOfDay) => {
  const appointmentsForThisDay = appointments[indexOfDay];
  const appointmentsList = document.querySelector("#appointments ul");
  appointmentsList.innerHTML = "";
  appointmentsForThisDay.forEach((appointment) => {
    const newLi = document.createElement("li");
    newLi.innerText = appointment;
    appointmentsList.appendChild(newLi);
  });
  const appointmentDiv = document.getElementById("appointments");
  appointmentDiv.style.display = "block";
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
      if (appointments[i].length > 0) {
        showAppointments(i);
      } else {
        const appointmentDiv = document.getElementById("appointments");
        appointmentDiv.style.display = "none";
      }
    });
    const cellValue = document.createElement("h3");
    cellValue.innerText = i + 1;
    dayDiv.appendChild(cellValue);
    calendarDiv.appendChild(dayDiv);
    appointments.push([]);
  }
};

createDays(dayInThisMonth());

const handleFormSubmit = (e) => {
  e.preventDefault();
  const selectedDay = document.getElementById("new-meeting-day").innerText;
  const meetingTime = document.getElementById("new-meeting-time").value;
  const meetingName = document.getElementById("new-meeting-name").value;

  const meetingString = `${meetingTime} - ${meetingName}`;
  const indiceGiorno = parseInt(selectedDay) - 1;
  appointments[indiceGiorno].push(meetingString);

  const dot = document.createElement("span");
  dot.classList.add("dot");

  const selectedCell = document.querySelector(".selected");
  if (!selectedCell.querySelector(".dot")) {
    selectedCell.appendChild(dot);
  }
  showAppointments(indiceGiorno);
};

const meetingForm = document.querySelector("form");
meetingForm.addEventListener("submit", handleFormSubmit);
