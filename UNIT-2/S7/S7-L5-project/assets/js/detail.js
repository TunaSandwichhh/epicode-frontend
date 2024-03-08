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
    <p>${product.brand}</p>
    <h2>${product.name}</h2>
    <p>${product.price}</p>
    <p>${product.description}</p>
`;
};

document.addEventListener("DOMContentLoaded", async () => {
  const product = await getProduct(productId);
  displayProduct(product);
});
