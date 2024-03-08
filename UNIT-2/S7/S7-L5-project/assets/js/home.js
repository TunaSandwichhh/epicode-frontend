const getProducts = async () => {
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/product/",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhY2I3YjJkN2IxMTAwMTkwZTZkYzAiLCJpYXQiOjE3MDk4ODYzMzEsImV4cCI6MTcxMTA5NTkzMX0.RHVaySalIC3-4-ekqrpHlAOMhYt5o08IG31A77sPSQA",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

const createCard = (product) => {
  const colDiv = document.createElement("div");
  colDiv.classList.add("col-md-4");

  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card", "mb-4", "shadow-sm");
  cardDiv.innerHTML = `
      <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
      <div class="card-body">
        <h3 class="card-text">${product.name}</h3>
        <p class="card-text">${product.description}</p>
        <p class="card-text">$${product.price}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary edit-btn" data-id="${product._id}">Edit</button>
            <button type="button" class="btn btn-sm btn-outline-secondary more-btn">More</button>
          </div>
        </div>
      </div>
    `;

  colDiv.appendChild(cardDiv);

  const editBtn = colDiv.querySelector(".edit-btn");
  editBtn.addEventListener("click", () => {
    window.location.href = `backoffice.html?id=${product._id}`;
  });

  const moreBtn = cardDiv.querySelector(".more-btn");
  moreBtn.addEventListener("click", () => {
    window.location.href = `detail.html?id=${product._id}`;
  });

  return colDiv;
};

const handleLoad = async () => {
  const rowDiv = document.querySelector(".row");
  const products = await getProducts();

  for (let product of products) {
    const col = createCard(product);
    rowDiv.appendChild(col);
  }
};

document.addEventListener("DOMContentLoaded", handleLoad);
