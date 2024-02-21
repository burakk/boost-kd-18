const MOCK_API_BASE_URL = "https://638a06e04eccb986e8a1804b.mockapi.io";

async function testing() {
  //asenkron fonksiyonlar içerisinde await keyword'ü kullanarak asenkron işlemlerde satırı bekletebilirsiniz.

  return 3;
}

//her async function bir promise objesi döndürür
console.log(testing()); //Promise object loglanır

async function getTodos() {
  try {
    const response = await fetch(`${MOCK_API_BASE_URL}/todos`);
    if (!response.ok) {
      throw new Error("Ters giden bir şeyler var sanki...");
    }
    const data = await response.json();

    return data;
  } catch (err) {
    console.log();
  }
}

/*
getTodos()
.then()
*/
