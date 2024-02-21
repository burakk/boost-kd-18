const API_BASE_URL = "https://638a06e04eccb986e8a1804b.mockapi.io";

const newProduct = {
  name: "laptop",
  stockCount: 10,
  description: "lorem lorem lorem",
};

const btnAddNewProduct = document.querySelector("button");

btnAddNewProduct.addEventListener("click", handleAddNewProduct);

function handleAddNewProduct() {
  const fetchOptions = {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(newProduct),
  };

  fetch(`${API_BASE_URL}/products`, fetchOptions)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}
