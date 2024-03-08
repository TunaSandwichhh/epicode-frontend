const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

const productDescCol = document.getElementById("product-desc");
const productImgCol = document.getElementById("product-img");

const getProduct = async (productId) => {
  try {
    const options = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhY2I3YjJkN2IxMTAwMTkwZTZkYzAiLCJpYXQiOjE3MDk4ODYzMzEsImV4cCI6MTcxMTA5NTkzMX0.RHVaySalIC3-4-ekqrpHlAOMhYt5o08IG31A77sPSQA",
      },
    };
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/product/${productId}`,
      options
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

const displayProduct = (product) => {
  productImgCol.innerHTML = `
        <img src="${product.imageUrl}" class="img-fluid">
    `;
  productDescCol.innerHTML = `
    <p class="fs-5 m-0">${product.brand}</p>
    <h2 class="display-5 fw-normal">${product.name}</h2>
    <p class="bg-black text-warning fw-bold p-1 rounded-5 text-center w-25">$${product.price}</p>
    <p class="fs-5">${product.description}</p>
`;
};

document.addEventListener("DOMContentLoaded", async () => {
  const product = await getProduct(productId);
  displayProduct(product);
});
