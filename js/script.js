"use strict";

const input = document.getElementById("task-add");

const addBtn = document.getElementById("add-task-btn");

const taskBoard = document.getElementById("task-board");

// function to add a task

let count = 0;

const addTask = function () {
  let taskBox = document.createElement("div");
  let newCount = count++;
  taskBox.setAttribute("id", "task-box" + newCount);
  // console.log(taskBox);

  // creating a new task

  let task = document.createElement("li");
  task.innerText = input.value;
  task.setAttribute("id", "task" + newCount);
  // console.log(task);

  // creating a new edit button
  let editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.id = "editBtn";

  // creating a new delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.id = "delete-task-btn";

  // appending  task, edit and delete button to the task box

  taskBox.append(task, editBtn, deleteBtn);

  // appnding taskbox(task container) to task board
  taskBoard.append(taskBox);

  // deleting the tasks
  deleteBtn.onclick = function () {
    deleteTask("task-box" + newCount);
  };

  // Editting the Input field
  editBtn.onclick = function () {
    editTask("task" + newCount);
  };
};

let getDltButton = document.getElementById("delete-task-btn");

if (getDltButton) {
  getDltButton.addEventListener("click", deleteTask());
}

// function to delete a task

const deleteTask = function (newId) {
  console.log(newId);
  document.getElementById(newId).remove();
  return;
};

// function to edit a task

const editTask = function (newId) {
  console.log(newId);
  let editedTask = prompt("Enter new task: ");
  document.getElementById(newId).innerHTML = editedTask;
};

// adding event listener to the add task btn

addBtn.addEventListener("click", addTask);
