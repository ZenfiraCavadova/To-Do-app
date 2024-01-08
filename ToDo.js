const qSel = function (selector) {
  return document.querySelector(selector);
};

const qSelAll = function (selector) {
  return document.querySelectorAll(selector);
};

const byClass = function (selector) {
  return document.getElementsByClassName(selector);
};

const byId = function (selector) {
  return document.getElementById(selector);
};

const inputTask = byId("inp-task");
const listContainer = qSel(".list-container");

const addTask = function () {
  if (inputTask.value == "") {
    alert("Task is required ");
  } else {
    let li = document.createElement("li");
    let taskText = document.createTextNode(inputTask.value);
    li.appendChild(taskText);
    li.classList.add("task");
    let img = document.createElement("img");
    img.src = "./assets/bin.png";
    li.appendChild(img);
    listContainer.appendChild(li);
    inputTask.value = "";
  }
  saveData();
};

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "IMG") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
