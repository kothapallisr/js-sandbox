const todoInputEl = document.querySelector(".todo__input");
const todoListEl = document.querySelector(".todo__list");
const todoItemEl = document.querySelectorAll(".todo__item");

function addListItem() {
  todoInputEl.addEventListener("keypress", function(event) {
    if(event.keyCode === 13) {
      let newListItem = createListItem(todoInputEl.value);
      //todoListEl.appendChild(newListItem);
      todoListEl.insertBefore(newListItem, todoListEl.childNodes[0])
      todoInputEl.value = "";
    }
  })
}

function toggleDone() {
  todoListEl.addEventListener("click", function(event) {
    if(event.target.classList.contains("todo__item")){
      event.target.classList.toggle("done");
    }
  })
}

function createListItem(text) {
  const newListElement = document.createElement("li");
  newListElement.textContent = text;
  newListElement.setAttribute("class", "todo__item");
  return newListElement;
}

toggleDone();
addListItem();
