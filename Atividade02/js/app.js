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

const moveToFinish = function(e){
    const taskFinish = e.target.innerText

    finish.appendChild(taskFinish)
    load.removeChild(taskFinish.target)

    const newTaskFinish = document.createElement("li")
    const newIco = document.createElement("i")
    const deleteIco = document.createElement("i")

    newIco.className = "fa fa-check-square-o"
    deleteIco.className = "fa fa-trash-o delete-icon"

    newTaskFinish.appendChild(newIco)
    newTaskFinish.appendChild(deleteIco)
    

}