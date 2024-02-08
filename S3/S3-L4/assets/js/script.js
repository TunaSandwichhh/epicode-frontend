const numeriEstratti = [];

const creaTabella = () => {
  const tabelleDiv = document.getElementById("tabelle");
  for (let i = 1; i <= 90; i++) {
    const cella = document.createElement("div");
    cella.innerHTML = `<h3>${i}</h3>`;
    cella.id = `cella${i}`;
    tabelleDiv.appendChild(cella);
  }
};

creaTabella();

const estraiNumero = () => {
  const numeroEstrattoH3 = document.getElementById("numero-estratto");
  let numeroEstratto = Math.floor(Math.random() * 90) + 1;
  if (numeriEstratti.includes(numeroEstratto)) {
    estraiNumero();
  } else {
    numeriEstratti.push(numeroEstratto);
    numeroEstrattoH3.innerText = `Numero estratto: ${numeroEstratto}`;
    evidenziaCella(numeroEstratto);
  }
};

const evidenziaCella = (id) => {
  const cellaEstratta = document.getElementById(`cella${id}`);
  if (cellaEstratta) {
    cellaEstratta.classList.add("estratto");
  }
};

const eventHandler = (e) => {
  e.preventDefault();
  estraiNumero();
};

const button = document.getElementById("estrai");
button.addEventListener("click", eventHandler);
