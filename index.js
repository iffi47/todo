const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const searchTodo = document.querySelector(".search input");
const generateTemplate = (todo) => {
  const html = `<li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>${todo}</span>
          <i class="far fa-trash-alt delete"></i>
        </li>`;
  list.innerHTML += html;
};
//Add Todos
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  } else {
    alert("Enter Some Data");
  }

  console.log(todo);
});
//Delete Todos
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    console.log(e.target.parentElement);
    e.target.parentElement.remove();
  }
});
//Search TODOS
const filterTodos = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));
  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};
searchTodo.addEventListener("keyup", (e) => {
  const term = searchTodo.value.trim().toLowerCase();
  filterTodos(term);
});
