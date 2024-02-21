const API_BASE_URL = "https://638a06e04eccb986e8a1804b.mockapi.io";

//Data güncellemek

const fetchOptions = {
  method: "DELETE",
};

fetch(`${API_BASE_URL}/products/1`, fetchOptions)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
