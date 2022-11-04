const inputForm = document.querySelector('#tarefa')
const butt = document.querySelector('#add_button')
const father = document.querySelector('.sub_list')

butt.onclick = function(e){
    e.preventDefealt()

    const chield = father.firstChild

    const createLi = document.createElement("li")

    createLi.setAttribute('class', 'sub_li')
    createLi.innerHTML = `${inputForm.value}`

    father.insertBefore(createLi, chield)
    
}