const API_BASE_URL = "https://638a06e04eccb986e8a1804b.mockapi.io";

/*
fetch(`${API_BASE_URL}/products`)
  .then((response) => {
    console.log(response);

    //response objesinin json metodu promise objesi döndürür
    return response.json();
  })
  .then( (data)=>{ console.log(data, data[0].id)} )
  .catch((err) => {
    console.log(err);
  });

  */

fetch(`${API_BASE_URL}/products`)
  .then((response) => {
    console.log(response);
    if (response.ok) {
      return response.json();
    }
    throw new Error("Smt went wrong ");
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// ${API_BASE_URL}/products/1

fetch(`${API_BASE_URL}/products/1`, { method: "GET" })
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Smt wen wrong");
  })
  .then((data) => {
    console.log(data);
  })
  .catch(() => {});
