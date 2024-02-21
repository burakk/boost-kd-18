const frmAddtodoItem = document.getElementById("frm-add-todo-item");
const todoListEl = document.getElementById("todo-list");

frmAddtodoItem.addEventListener("submit", handleAddTodo);

function handleAddTodo(e) {
  e.preventDefault(); //formun varsayılı data gönderme davranışını engelle ( çünkü sayfa refresh oluyor )
}
function refreshList() {
  getTodos()
    .then((todoListData) => {
      createHtmlTodoList(todoListData);
    })
    .catch(() => {});
}

function createHtmlTodoList(todoListData) {
  emptyHtmlTodoList();
  todoListData.forEach((todoItemData) => {
    const listItemEl = document.createElement("li");
    listItemEl.textContent = todoItemData.name;
    listItemEl.dataset.id = todoItemData.id;
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "sil";
    btnDelete.dataset.id = todoItemData.id;
    btnDelete.classList.add("btn-delete");
    listItemEl.append(btnDelete);
    todoListEl.append(listItemEl);
  });
}

function emptyHtmlTodoList() {
  //todoListEl.innerHTML = "";

  while (todoListEl.childNodes[0]) {
    todoListEl.childNodes[0].remove();
  }
}

todoListEl.addEventListener("click", handleTodoListClick);

function handleTodoListClick(e) {
  const target = e.target;

  console.log(target.dataset.id, target.tagName);
  //Delete logic
  if (target.classList.contains("btn-delete")) {
    const id = target.dataset.id;
    deleteTodo(id)
      .then((resp) => {
        //api listesini al html olarak yazdır
        refreshList();
      })
      .catch(() => {});
  }
}


refreshList();

addTodo();