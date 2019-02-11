tasks = [];
const taskPlace = document.getElementById("allTasks");
const newTaskPlace = document.getElementById("newTask");

// const addNewTask = (e) => {
//     if(newTaskPlace.value != ''){
//         tasks.push(newTaskPlace.value);
//         newTaskPlace.value = '';
//         showAllTasks();
//     }
// }

const addNewTask = (e) => {
    if(newTaskPlace.value !== ''){
        let newCheckbox = document.createElement("input");
        newCheckbox.type = "checkbox";
        newCheckbox.className = "currentCheckbox";
        let newP = document.createElement("p");
        newP.innerHTML = newTaskPlace.value;
        let newLi = document.createElement("li");
        let newSpan = document.createElement("span");
        newSpan.appendChild(newCheckbox);
        newSpan.appendChild(newP);
        newSpan.className = "currentItem";
        let newImg = document.createElement("img");
        newImg.src = "trashcan.jpg";
        newCheckbox.onchange = function(){
            if(newCheckbox.checked){
                newP.style.textDecoration = "line-through";
            }
            else{
                newP.style.textDecoration = "none";
            }
        }
        newImg.className = "image";
        newImg.onclick = function(){
            let el = newImg.parentNode;
            el.parentNode.remove();
        }
        newSpan.appendChild(newImg);
        newLi.appendChild(newSpan);
        taskPlace.appendChild(newLi);
        newTaskPlace.value = '';
    }
}

// function showAllTasks(){
//     let newCheckbox = document.createElement("input");
//     newCheckbox.type = "checkbox";
//     newCheckbox.className = "currentCheckbox";
//     let newP = document.createElement("p");
//     newP.value = tasks[tasks.length-1];
//     let newLi = document.createElement("li");
//     let newSpan = document.createElement("span");
//     newSpan.appendChild(newCheckbox);
//     newSpan.appendChild(newP);
//     let newImg = document.createElement("img");
//     newCheckbox.onchange = function(){
//         if(newP.style.textDecoration !== "line-through"){
//             newP.style.textDecoration = "line-through";
//         }
//     }
//     newImg.className = "image";
//     newImg.onclick = function(){
//         let el = newImg.parentNode;
//         el.remove();
//     }
//     newSpan.appendChild(newImg);
//     newLi.appendChild(newSpan);
//     taskPlace.appendChild(newLi);
// }