const todos = document.querySelector(".todos");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__button");
const form = document.querySelector(".new-form");

// form 제어, onAdd호출
form.addEventListener("submit", (e) => {
  e.preventDefault();
  onAdd();
});

// onAdd 함수
function onAdd() {
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }
  // todo Paint, createToDo호출
  const todo = createToDo(text);
  todos.appendChild(todo);
  todo.scrollIntoView({ block: "center", behavior: "smooth" });
  input.value = "";
}

// createToDo 함수
let id = 0;
function createToDo(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");
  itemRow.setAttribute("data-id", id);
  itemRow.innerHTML = `<div class="item">
            <span class="item__name">${text}</span>
            <button class="item__checkBtn">
              <i class="far fa-check-circle fa-lg" data-id=${id}></i>
            </button>
          </div>
          <div class="item__divider"></div>`;
  id++;
  return itemRow;
}

// todo remove
todos.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id && e.target.tagName === "I") {
    const checked = document.querySelector(`.item__row[data-id='${id}']`);
    checked.remove();
    // console.log(id);
  }
});
