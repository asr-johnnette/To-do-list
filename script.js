// Create an array to store tasks
const taskItems = [];

// Function to create a new task
function newElement() {
    const taskText = document.getElementById("myInput").value.trim();
    
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }
    
    const taskItem = document.createElement("li");
    const taskTextElement = document.createElement("span");
    taskTextElement.textContent = taskText;
    taskItem.appendChild(taskTextElement);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    taskItem.appendChild(checkbox);

    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            taskTextElement.style.textDecoration = "line-through";
        } else {
            taskTextElement.style.textDecoration = "none";
        }
    });

    document.getElementById("myUL").appendChild(taskItem);
    
    // Add the new task to the taskItems array
    taskItems.push(taskItem);
    
    // Clear the input field
    document.getElementById("myInput").value = "";
}

// Event listener for filtering all tasks
const allButton = document.getElementById("all")
allButton.addEventListener("click",() =>{
    showAllTasks();
})

// Event listener for filtering active tasks
const activeButton = document.getElementById("active")
activeButton.addEventListener("click", ()=>{
    showActiveTasks();
})

// Event listener for filtering completed tasks
const completedButton = document.getElementById("completed")
completedButton.addEventListener("click", () =>{
    showCompletedTasks();
})

// Show all tasks
function showAllTasks(){
    taskItems.forEach((taskItem) =>{
        taskItem.style.display = "block";
    });
}

// Show active tasks (uncompleted tasks)
function showActiveTasks(){
    taskItems.forEach((taskItem) =>{
        if (!taskItem.querySelector("input[type='checkbox']").checked){
            taskItem.style.display = 'block';
        }else{
            taskItem.style.display = "none";
        }
    });
}

// Show completed tasks
function showCompletedTasks(){
    taskItems.forEach((taskItem) => {
        if(taskItem.querySelector("input[type='checkbox']").checked){
            taskItem.style.display = "block";
        } else{
            taskItem.style.display = "none"
        }
    });
}

// Event listener for clearing completed tasks
const clearCompletedButton = document.getElementById("clearCompleted");
clearCompletedButton.addEventListener("click", () => {
    clearCompletedTasks();
});

// Clear completed tasks
function clearCompletedTasks(){
    taskItems.forEach((taskItem)=>{
        if (taskItem.querySelector("input[type='checkbox']").checked) {
            document.getElementById("myUL").removeChild(taskItem);
            // Remove the task from the taskItems array
            const index = taskItems.indexOf(taskItem);
            if (index !== -1) {
                taskItems.splice(index, 1);
            }
        }
    })
}
