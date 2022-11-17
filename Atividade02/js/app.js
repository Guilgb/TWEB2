const button = document.querySelector("#add_tarefa");
const load = document.querySelector("#a-fazer");
const finish = document.querySelector("#feito");
document.querySelector("#tarefa").focus

const addTask = function(event){
    if(event) event.preventDefault();

    const task = document.querySelector("#tarefa").value

    if(task > 1 ){
        return
    }

    const newTask = document.createElement("li")
    newTask.innerText = task

    load.appendChild(newTask)
    
    document.querySelector("#tarefa").value = ""
}

button.addEventListener("click", addTask)