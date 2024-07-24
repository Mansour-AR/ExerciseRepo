// Defined Variables
let tasks = [];
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

// Functino to add the tast

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({text: taskText});
        taskInput.value = "";
        displayTasks();
    }
}

// Function to display tasks

function displayTasks() {
           taskList.innerHTML = "";
           tasks.forEach((task, index) => {
              const li = document.createElement("li");
              li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
                   <label for="task-${index}">${task.text}</label>`;
              li.querySelector("input").addEventListener("change", () => toggleTask(index));
              taskList.appendChild(li);
           });
}

// Function to toggle tasks

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

// Function to clear completed tasks

function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

// addEventListener for addTask and clearCompletedTasks

addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);

displayTasks();