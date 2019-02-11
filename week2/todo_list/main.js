let tasks = ['create ToDo list', 'upload to github'];
const taskPlace = document.getElementById("allTasks");
const newTaskPlace = document.getElementById("newTask");

function showTasks(){
    for(let i=tasks.length-1; i>=0; i--){
        let newCheckbox = document.createElement("input");
        newCheckbox.type = "checkbox";
        newCheckbox.className = "currentItem";
        newCheckbox.id = "currentCheckbox";
        let newP = document.createElement("p");
        let newSpan = document.createElement("span");
        let newLi = document.createElement("li");
        let newImg = document.createElement("img");
        let newButton = document.createElement("button");
        newButton.className = "currentItem currentButton";
        newButton.style.backgroundImage = "url('trashcan.jpg')";
        newButton.style.zIndex = 10;
        newButton.onclick = function(){
            let el = newButton.parentNode;
            el.remove();
        }
        newImg.className = "currentItem";
        newImg.
        newP.className = "currentItem";
        newP.id = "currentP";
        newLi.className = "taskItem";
        newP.innerHTML = tasks[i];
        newSpan.appendChild(newCheckbox);
        newSpan.appendChild(newP);
        newLi.appendChild(newSpan);
        newLi.appendChild(newButton);
        taskPlace.appendChild(newLi);
    }
}


const addNewTask = (e) => {
    if(newTaskPlace.value != ''){
        let newCheckbox = document.createElement("input");
        newCheckbox.type = "checkbox";
        newCheckbox.className = "currentItem currentCheckbox";
        let newP = document.createElement("p");
        let newSpan = document.createElement("span");
        let newLi = document.createElement("li");
        let newImg = document.createElement("img");
        newImg.className = "image currentItem CurrentButton";
        newImg.src = "trashcan.jpg";
        newImg.onclick = function(){
            let el = newImg.parentNode;
            el.remove;
        }
        // let newButton = document.createElement("button");
        // newButton.className = "currentItem currentButton";
        // newButton.style.backgroundImage = newImg;
        // //newButton.setAttribute("style","background-image: url('trashcan.jpg');");
        // newButton.onclick = function(){
        //     let el = newButton.parentNode;
        //     el.remove();
        // }
        newP.className = "currentItem currentP";
        newLi.className = "taskItem";
        newP.innerHTML = newTaskPlace.value;
        newSpan.appendChild(newCheckbox);
        newSpan.appendChild(newP);
        newSpan.appendChild(newImg);
        //newSpan.appendChild(newButton);
        newLi.appendChild(newSpan);
        //newLi.appendChild(newImg);
        //newLi.appendChild(newButton);
        taskPlace.appendChild(newLi);
        newTaskPlace.value = "";
    }
}
