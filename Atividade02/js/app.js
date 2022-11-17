let tarefa = document.getElementById("tarefa")
let button = document.getElementById("add_tarefa");
let father = document.getElementsByClassName("sub-list")

button.onclick = function(){ {evento}};
function evento(){
    e.preventDefault();

    let child = father.firstChild;
    
    let li = document.createElement("li");
    li.setAttribute("class", "sub-list");
    li.innerHTML = `${tarefa.value}`;

    child.insertBefore(li, child);
    tarefa.value = "";

}
button.addEventListener("click", evento);