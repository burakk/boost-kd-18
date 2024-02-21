const API_BASE_URL = "https://638a06e04eccb986e8a1804b.mockapi.io";

//Data güncellemek

const fetchOptions = {
  method: "PUT",
  headers: { "Content-type": "application/json" },
  body: JSON.stringify({ name: "Food Unknown" }),
};

fetch(`${API_BASE_URL}/products/17`, fetchOptions)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
