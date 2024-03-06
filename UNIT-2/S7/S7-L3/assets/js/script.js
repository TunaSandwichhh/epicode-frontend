const addDiscardFunctionality = (col, book) => {
  const discardButton = col.querySelector(".discard-btn");
  discardButton.addEventListener("click", () => {
    col.remove();
  });

  const buyButton = col.querySelector(".buy-btn");
  buyButton.addEventListener("click", () => {
    addToCart(book);
  });
};

const addToCart = (book) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(book);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
};

const displayCart = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  cart.forEach((book, index) => {
    if (book) {
      const li = document.createElement("li");
      li.className = "list-group-item";
      li.textContent = `${book.title} - ${book.price} €`;
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Rimuovi";
      removeBtn.className = "btn btn-danger btn-sm float-end";
      removeBtn.onclick = () => removeFromCart(index);
      li.appendChild(removeBtn);
      cartItems.appendChild(li);
    }
  });
};

const removeFromCart = (index) => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
};

const createBookCard = (book) => {
  const col = document.createElement("div");
  col.className = "col-lg-3 col-md-4 col-sm-6 mb-4";

  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
      <img src="${book.img}" class="card-img-top" alt="${book.title}">
      <div class="card-body">
        <h5 class="card-title">${book.title}</h5>
        <p class="card-text">${book.price} €</p>
        <button class="btn btn-primary discard-btn">Scarta</button>
        <button class="btn btn-success buy-btn">Compra ora</button>
      </div>
    `;

  col.appendChild(card);

  addDiscardFunctionality(col, book);

  return col;
};

const displayBooks = (books) => {
  const booksRow = document.getElementById("books-row");

  books.forEach((book) => {
    const bookCard = createBookCard(book);
    booksRow.appendChild(bookCard);
  });
};

const fetchBooks = async () => {
  const response = await fetch("https://striveschool-api.herokuapp.com/books");
  const books = await response.json();
  return books;
};

const init = async () => {
  const books = await fetchBooks();
  displayBooks(books);
};

document.addEventListener("DOMContentLoaded", () => {
  init();
  displayCart();
});
