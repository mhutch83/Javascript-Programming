//A function to add a task
function addTask() {

    //create a variable to store the input from the textbox
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText !== "" ){

        const ul = document.createElement("ul");

        //create a list item
        const li = document.createElement("li");

        //create a task text element (span) and 
        const span = document.createElement("span");
        span.textContent(taskText);

        //create the edit button w/ the edit edit task functoin
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = () => editTask(span);

        //create the remove task button and function
        const removeTask = document.createElement("button");
        removeTask.textContent("Remove Task");
        removeTask.onclick = () => removeTask(li);

        //append buttons to the list items
        li.appendChild(span); li.appendChild(editButton); li.appendChild(removeTask);

        //append list items to the unordered list
        ul.appendChild(li);
    }
    else {
        alert("Please enter valid task");
        }
}

//Edit function 
function editTask(span) {

    //prompt the user for the new text
    const newTask = prompt("Edit your task:" span.textContent);
    
    //Update a task only if the content isn't null or empty
    if (newTask !== null && newTask.trim() !== ""){
        span.textContent = newTask.trim(); //sets the new task text
    }        
}
function removeTask(task) {
    const currentList = document.getElementById('todoList');
    //create the button and function that  will remove the task
    const deleteButton = document.createElement("button");
    currentList.removeChild(task);
}