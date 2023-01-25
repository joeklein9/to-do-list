const addTaskBtn = document.getElementById("add-task-btn")
const taskList = document.getElementById ("tasks")
const taskInput = document.getElementById("task-input")

addTaskBtn.addEventListener("click", function () {
    taskList.innerHTML += taskInput.value
})


