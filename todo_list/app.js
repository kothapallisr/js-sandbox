const todoInputEl = document.querySelector(".todo__input");
const todoListEl = document.querySelector(".todo__list");
const todoItemEl = document.querySelectorAll(".todo__item");

function addListItem() {
  todoInputEl.addEventListener("keypress", function(event) {
    if(event.keyCode === 13) {
      console.log(todoInputEl.value);
    }
  })
}

addListItem();
