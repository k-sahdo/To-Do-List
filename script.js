const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-butt");
const tasksContainer = document.querySelector(".tasks-container");

const validateInput = () => inputElement.value.trim().length > 0;
// {
//     if(inputElement.ariaValueMax.trim().length>0){
//         return true;
//     }
//     else{
//         return false
//     }
// }
const handleAddTask = () => {
    const inputIsValid = validateInput();
    console.log(!inputIsValid);

    if(!inputIsValid){
       return inputElement.classList.add("error");
    }

    const taskItemContainer = document.createElement("div");
    taskItemContainer.classList.add("task-item");

    const taskContent = document.createElement("p");
    taskContent.innerText = inputElement.value;

    taskContent.addEventListener("click", () => handleClick(taskContent))

    const deleteItem = document.createElement("i");
    deleteItem.classList.add("fa-solid");
    deleteItem.classList.add("fa-xmark");

    deleteItem.addEventListener("click", () => handleDeleteClick(taskItemContainer, taskContent))

    taskItemContainer.appendChild(taskContent);
    taskItemContainer.appendChild(deleteItem);

    tasksContainer.appendChild(taskItemContainer);

    inputElement.value = "";
};

//  ACTIVITY COMPLETED ERROR --   !!! 
const handleClick = (taskContent) => {
    const tasks = tasksContainer.childNodes;
    for (const task of tasks) {
        if (task.firstChild.isSameNode(taskContent)){
            task.firstChild.classList.toggle("completed");
        }
    }
}
const handleDelete = (tasksContainer, taskContent) => {
    const tasks = tasksContainer.childNodes;
    for (const task of tasks) {
        if (task.firstChild.isSameNode(taskContent)){
            taskItemContainer.remove()
        }
    }
}

// DELETE ERROR --------- !!

const handleInputChange = () => {
    const inputIsValid = validateInput();

    if(inputIsValid){
        return inputElement.classList.remove("error");
    }
};
addTaskButton.addEventListener("click", () => handleAddTask());

inputElement.addEventListener("change", () => handleInputChange());