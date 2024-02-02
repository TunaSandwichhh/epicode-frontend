/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

const printPets = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

//printPets(pets);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

const sortPets = (arr) => {
  let sortedArr = arr.sort();
  for (let i = 0; i < sortedArr.length; i++) {
    console.log(sortedArr[i]);
  }
};

//sortPets(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

const invertedPets = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
};

//invertedPets(pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

const changeIndex = (arr) => {
  const first = arr.shift();
  arr.push(first);
  return arr;
};

// changeIndex(pets);
// printPets(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

function createLicensePlate() {
  const randomLetters = (length) => {
    let res = "";
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < length; i++) {
      res += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return res;
  };

  const randomNums = (length) => {
    let res = "";
    for (let i = 0; i < length; i++) {
      res += Math.floor(Math.random() * 10);
    }
    return res;
  };

  return randomLetters(2) + randomNums(3) + randomLetters(2);
}

const addProperty = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].licensePlate = createLicensePlate();
  }
};

// addProperty(cars);
// console.log(cars[0].licensePlate);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const addCar = (car) => {
  for (const property in car) {
    if (property === undefined) {
      return;
    }
  }
  cars.push(car);
};

const removeLastTrim = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].trims.pop();
  }
};

// ----- FUNCTION CALLING ------

const newCar = {
  brand: "FIAT",
  model: "Panda",
  color: "black",
  trims: ["life", "style", "r-line"],
};

addCar(newCar);

// for (let car of cars) {
//   console.log(car.brand);
//   console.log(car.color);
//   console.log(car.model);
//   console.log(car.trims);
// }

// removeLastTrim(cars);

// for (let car of cars) {
//   console.log(car.brand);
//   console.log(car.color);
//   console.log(car.model);
//   console.log(car.trims);
// }

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

const getFirstTrim = (arr) => {
  const justTrims = [];

  for (let i = 0; i < arr.length; i++) {
    justTrims.push(arr[i].trims[0]);
  }

  return justTrims;
};

// console.log(getFirstTrim(cars));

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

// const fizzBuzz = (arr) => {
//   for (let car of cars) {
//     car.color.charAt(0) === "b" ? console.log("Fizz") : console.log("Buzz");
//   }
// };

const fizzBuzz = (arr) => {
  let value = "";

  for (let i = 0; i < arr.length; i++) {
    const firstLetter = arr[i].color.substring(0, 1);
    if (firstLetter === "b") {
      value = "Fizz";
    } else {
      value = "Buzz";
    }
    console.log(value);
  }
};

// fizzBuzz(cars);

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

const printTilTarget = (arr, target) => {
  if (!arr.includes(target)) {
    console.log("Value not present in provided array");
    return;
  }

  let i = 0;

  while (arr[i] !== target) {
    console.log(arr[i]);
    i++;
  }
};

// NOTE: Il ciclo si interrompe al numero precedente il target.
//       Per stampare il target incluso:
/**
 *      let i = 0;
 *      while(i < arr.length)
 *        console.log(arr[i])
 *        if(arr[i]) === target)
 *           break;
 *        i++
 *
 */

// printTilTarget(numericArray, 32);
// printTilTarget(numericArray, 99);

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];

const alphabet = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};

const lettersToNums2 = (arr) => {
  const newArr = [];
  for (let letter of arr) {
    newArr.push(alphabet[letter]);
  }
  return newArr;
};

// VERSIONE PER ESERCIZIO
// ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓

const lettersToNums = (arr) => {
  const newArr = [];
  for (let letter of arr) {
    switch (letter) {
      case "a":
        newArr.push(1);
        break;
      case "b":
        newArr.push(2);
        break;
      case "c":
        newArr.push(3);
        break;
      case "d":
        newArr.push(4);
        break;
      case "e":
        newArr.push(5);
        break;
      case "f":
        newArr.push(6);
        break;
      case "g":
        newArr.push(7);
        break;
      case "h":
        newArr.push(8);
        break;
      case "i":
        newArr.push(9);
        break;
      case "j":
        newArr.push(10);
        break;
      case "k":
        newArr.push(11);
        break;
      case "l":
        newArr.push(12);
        break;
      case "m":
        newArr.push(13);
        break;
      case "n":
        newArr.push(14);
        break;
      case "o":
        newArr.push(15);
        break;
      case "p":
        newArr.push(16);
        break;
      case "q":
        newArr.push(17);
        break;
      case "r":
        newArr.push(18);
        break;
      case "s":
        newArr.push(19);
        break;
      case "t":
        newArr.push(20);
        break;
      case "u":
        newArr.push(21);
        break;
      case "v":
        newArr.push(22);
        break;
      case "w":
        newArr.push(23);
        break;
      case "x":
        newArr.push(24);
        break;
      case "y":
        newArr.push(25);
        break;
      case "z":
        newArr.push(26);
        break;
      default:
        console.log("Not a valid letter");
    }
  }
  return newArr;
};

// console.log(lettersToNums2(charactersArray));
// console.log(lettersToNums(charactersArray));
