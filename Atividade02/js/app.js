
let tarefa = document.getElementById("tarefa")
let button = document.getElementById("add_tarefa");

button.onclick = function(e){
    e.preventDefault();

    const li = document.createElement("li");
    li.setAttribute("class", "sub-list");
    li.innerHTML = `${tarefa.value}`;

}
button.addEventListener("click", e);