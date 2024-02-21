const API_BASE_URL = "https://638a06e04eccb986e8a1804b.mockapi.io";

function getTodos() {
  return fetch(`${API_BASE_URL}/todos`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Bir şeyler ters gitti..");
      }

      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
}

function deleteTodo(id) {
  const fecthOptions = { method: "DELETE" };

  return fetch(`${API_BASE_URL}/todos/${id}`, fecthOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Bir şeyler ters gitti..");
      }

      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}

async function addTodo(todoObj) {
  const fetchOptions = {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ name: Math.random() + " işini yap" }),
  };

  const response = await fetch(`${API_BASE_URL}/todos/`, fetchOptions);
  if (!response.ok) {
    throw new Error("Ters giden bir şeyler var");
  }
  return response;
}

function editTodo(id, updatedData) {}
