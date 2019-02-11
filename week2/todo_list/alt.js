let tasks = ['create todo list', 'upload to github'];

const taskPlace = document.getElementById("allTasks");
const newTaskPlace = document.getElementById("newTask");

function showTasks(){
    for(let i=tasks.length-1; i>=0; i--){
        let newCheckbox = document.createElement("checkbox");
        let newP = document.createElement("p");
        let newButton = document.createElement("button");
        let newSpan = document.createElement("span");
        let newLi = document.createElement("li");
        newP.innerHTML = tasks[i];
        newSpan.appendChild(newCheckbox);
        newSpan.appendChild(newP);
        newLi.appendChild(newSpan);
        newLi.appendChild(newButton);
    }
}

const addNewTask = () => {
    let inp = newTaskPlace.nodeValue();
    tasks.push(inp);
    newTaskPlace.value = "";
    showTasks();
}