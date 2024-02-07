const task = document.getElementById("task");
const create = document.getElementById("create");
const list = document.getElementById("list");
const errore = document.getElementById("errore");

create.addEventListener("click", (event) => {
  event.preventDefault();
  if (!task.value) {
    errore.innerText = "Inserisci un task!";
  } else {
    errore.innerText = "";
    const listItem = document.createElement("li");
    listItem.innerText = task.value;

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Elimina";

    deleteButton.addEventListener("click", () => {
      list.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);

    list.appendChild(listItem);

    listItem.addEventListener("click", () => {
      listItem.classList.toggle("completed");
    });
  }

  task.value = "";
});

document.addEventListener("DOMContentLoaded", () => {
  const oggi = new Date();
  const giorniSettimana = [
    "Domenica",
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
  ];
  const mesi = [
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

  const giornoSettimana = giorniSettimana[oggi.getDay()];
  const mese = mesi[oggi.getMonth()];
  const giorno = oggi.getDate();
  const anno = oggi.getFullYear();

  const dataCompleta = `${mese} ${giorno.toString().padStart(2, "0")}, ${anno}`;

  document.getElementById("giornoSettimana").innerText = giornoSettimana;
  document.getElementById("dataCompleta").innerText = dataCompleta;
});
