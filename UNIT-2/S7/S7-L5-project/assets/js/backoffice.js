const form = document.getElementById("form");

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

const deleteBtn = document.getElementById("delete");
const resetBtn = document.getElementById("reset-btn");

const backTitle = document.getElementById("back-title");

const modalError = document.getElementById("modalError");
modalError.style.display = "none";

//@DELETE
const deleteProduct = async (productId) => {
  try {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/product/${productId}`,
      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhY2I3YjJkN2IxMTAwMTkwZTZkYzAiLCJpYXQiOjE3MDk4ODYzMzEsImV4cCI6MTcxMTA5NTkzMX0.RHVaySalIC3-4-ekqrpHlAOMhYt5o08IG31A77sPSQA",
        },
      }
    );
    console.log("Product deleted successfully");
    window.location.href = "index.html";
  } catch (e) {
    console.log(e);
  }
};

//@UPDATE
const updateProduct = async (productId, product) => {
  const options = {
    method: "PUT",
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhY2I3YjJkN2IxMTAwMTkwZTZkYzAiLCJpYXQiOjE3MDk4ODYzMzEsImV4cCI6MTcxMTA5NTkzMX0.RHVaySalIC3-4-ekqrpHlAOMhYt5o08IG31A77sPSQA",
    },
  };
  try {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/product/${productId}`,
      options
    );
    const data = await response.json();
    console.log(data);

    console.log("Product updated successfully");
    window.location.href = "index.html";
  } catch (e) {
    console.log(e);
  }
};

//@CREATE
const createProduct = async (product) => {
  const options = {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhY2I3YjJkN2IxMTAwMTkwZTZkYzAiLCJpYXQiOjE3MDk4ODYzMzEsImV4cCI6MTcxMTA5NTkzMX0.RHVaySalIC3-4-ekqrpHlAOMhYt5o08IG31A77sPSQA",
    },
  };
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/product/",
      options
    );
    const data = await response.json();
    console.log(data);

    console.log("Product created");
    window.location.href = "index.html";
  } catch (e) {
    console.log(e);
  }
};

//@READ
const getProductDetails = async (id) => {
  try {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/product/${id}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhY2I3YjJkN2IxMTAwMTkwZTZkYzAiLCJpYXQiOjE3MDk4ODYzMzEsImV4cCI6MTcxMTA5NTkzMX0.RHVaySalIC3-4-ekqrpHlAOMhYt5o08IG31A77sPSQA",
        },
      }
    );
    return await response.json();
  } catch (e) {
    console.log(e);
  }
};

//@READ
const getAllProducts = async () => {
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
    return await response.json();
  } catch (e) {
    console.log(e);
    return [];
  }
};

const prefillForm = async (id) => {
  const product = await getProductDetails(id);
  if (product) {
    document.getElementById("name").value = product.name;
    document.getElementById("description").value = product.description;
    document.getElementById("brand").value = product.brand;
    document.getElementById("image").value = product.imageUrl;
    document.getElementById("price").value = product.price;
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const productData = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    brand: document.getElementById("brand").value,
    imageUrl: document.getElementById("image").value,
    price: document.getElementById("price").value,
  };

  const products = await getAllProducts();

  const productstWithSameName = products.filter(
    (product) =>
      product.name.toLowerCase() === productData.name.toLowerCase() &&
      product._id !== productData._id
  );
  console.log(productstWithSameName);

  if (productstWithSameName.length > 0) {
    modalError.style.display = "block";
  }

  if (productId) {
    await updateProduct(productId, productData);
  } else {
    await createProduct(productData);
  }
};

form.addEventListener("submit", handleSubmit);

resetBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let conf = window.confirm("Are you sure?");
  if (conf) form.reset();
});

console.log(form);

if (productId) {
  prefillForm(productId);
}

if (productId) {
  deleteBtn.style.display = "block";
  deleteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let confirm = window.confirm("Are you sure?");
    if (confirm) deleteProduct(productId);
  });
} else {
  backTitle.innerText = "Add Product";
  deleteBtn.style.display = "none";
}
