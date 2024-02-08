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

const generaTotTabelleGiocatore = () => {
  const quantity = document.getElementById("quantity").value;
  const spazioGiocatore = document.getElementById("spazio-giocatore");
  for (let i = 0; i < quantity; i++) {
    creaTabellaGiocatore();
  }

  spazioGiocatore.style.display = "block";
};

const creaTabellaGiocatore = () => {
  const tabelleDivGiocatore = document.getElementById("tabella-giocatore");
  const numeriEstrattiGiocatore = [];
  const titolo = document.createElement("h4");
  titolo.innerText = `Tabella Giocatore`;
  tabelleDivGiocatore.appendChild(titolo);
  while (numeriEstrattiGiocatore.length < 24) {
    let random = Math.floor(Math.random() * 90) + 1;
    if (!numeriEstrattiGiocatore.includes(random)) {
      const cella = document.createElement("div");
      cella.innerHTML = `<h3>${random}</h3>`;
      cella.id = `cella-giocatore${random}`;
      tabelleDivGiocatore.appendChild(cella);
      numeriEstrattiGiocatore.push(random);
    }
  }
};

const hideForm = () => {
  const form = document.querySelector("form");
  form.style.display = "none";
};

const estraiNumero = () => {
  const numeroEstrattoH3 = document.getElementById("numero-estratto");
  let numeroEstratto = Math.floor(Math.random() * 90) + 1;
  if (numeriEstratti.includes(numeroEstratto)) {
    estraiNumero();
  } else {
    numeriEstratti.push(numeroEstratto);
    numeroEstrattoH3.innerText = `Numero estratto: ${numeroEstratto}`;
    evidenziaCella(numeroEstratto);
    evidenziaCellaGiocatore(numeroEstratto);
  }
};

const evidenziaCella = (id) => {
  const cellaEstratta = document.getElementById(`cella${id}`);
  if (cellaEstratta) {
    cellaEstratta.classList.add("estratto");
  }
};

const evidenziaCellaGiocatore = (id) => {
  const cellaEstratta = document.getElementById(`cella-giocatore${id}`);
  if (cellaEstratta) {
    cellaEstratta.classList.add("estratto-giocatore");
  }
};

const eventHandler = (e) => {
  e.preventDefault();
  estraiNumero();
};

const button = document.getElementById("estrai");
button.addEventListener("click", eventHandler);

const conferma = document.getElementById("conferma");
conferma.addEventListener("click", (e) => {
  e.preventDefault();
  generaTotTabelleGiocatore();
  hideForm();
});
