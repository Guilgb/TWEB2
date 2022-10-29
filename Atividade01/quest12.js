const entrada = 10

let ant = 0
let suc = 1
let arm =  0

for(let i=1; i <= entrada; i++){
    arm = ant + suc
    suc = ant
    ant = arm
    console.log(arm)
}