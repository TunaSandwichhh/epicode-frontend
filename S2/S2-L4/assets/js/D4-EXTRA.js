// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const checkArray = (arr) => {
  let res = 0;

  for (let number of arr) {
    if (number > 5) {
      res += number;
      console.log("Maggiore di 5");
    } else {
      console.log("Minore di 5");
    }
  }
};

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const shoppingCart = [
  {
    price: 57,
    name: "item1",
    id: "0x999138ndjsb",
    quantity: 3,
  },
  {
    price: 7,
    name: "item2",
    id: "0x8288ndjsb",
    quantity: 20,
  },
  {
    price: 90,
    name: "item3",
    id: "0x828138ndjsb",
    quantity: 1,
  },
];

const shoppingCartTotal = () => {
  let res = 0;

  for (let item of shoppingCart) {
    res += item.price * item.quantity;
  }

  return res;
};

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const addToShoppingCart = (newItem) => {
  shoppingCart.push(newItem);

  let res = 0;
  for (let item of shoppingCart) {
    res += item.quantity;
  }

  return res;
};

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const maxShoppingCart = (cart) => {
  let mostExpensive = cart[0];

  for (let item of cart) {
    if (item.price > mostExpensive.price) {
      mostExpensive = item;
    }
  }

  return mostExpensive.name;
};

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const latestShoppingCart = (cart) => {
  return cart[cart.length - 1].id;
};

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const loopUntil = (n) => {
  let streak = 0;

  if (n < 0 || n > 9) {
    console.log("Numero invalido");
    return;
  }

  while (streak < 3) {
    let random = Math.floor(Math.random() * 10);
    if (random > n) {
      streak++;
    } else {
      streak = 0;
    }
    console.log(random);
  }
};

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const average = (arr) => {
  let sum = 0;
  let nums = 0;

  for (let value of arr) {
    if (typeof value === "number") {
      sum += value;
      nums++;
    }
  }

  return sum / nums;
};

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const longest = (arr) => {
  let longest = "";

  for (let str of arr) {
    if (str.length > longest.length) {
      longest = str;
    }
  }

  return longest;
};

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const noSpam = (emailContent) => {
  return !emailContent.includes("SPAM") || !emailContent.includes("SCAM");
};

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const calculateTime = (date) => {
  const today = new Date();
  const timeDifference = today - date;
  const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return daysPassed;
};

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const matrixGenerator = (x, y) => {
  const matrix = [];

  for (let i = 0; i < x; i++) {
    const row = [];
    for (let j = 0; j < y; j++) {
      row.push(`${i}${j}`);
    }
    matrix.push(row);
  }

  return matrix;
};
