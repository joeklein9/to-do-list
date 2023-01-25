const addTaskBtn = document.getElementById("add-task-btn")
const clearTasksBtn = document.getElementById("clear-tasks-btn")
const taskList = document.getElementById ("tasks")
const taskInput = document.getElementById("task-input")

const taskArray = []

addTaskBtn.addEventListener("click", function () {
    if (taskInput.value != ""){
    taskArray.push (taskInput.value)
    for (let i=0; i<taskArray.length; i++) {
        if (i === taskArray.length - 1) {
            
    taskList.innerHTML += `
    <input type="checkbox" id="task-item-${i}">
<label for="taskitem-${i}"> ${taskArray[taskArray.length-1]}</label><br> 
    
`
        }
    }
    taskInput.value = ""
}})


clearTasksBtn.addEventListener("click", function (){
    taskList.innerHTML = ""
    taskArray = []
})


