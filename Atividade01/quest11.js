const n1 = 10
const n2 = 20
const n3 = 30

let sum = 0


if(n1 > n2 & n1 > n3){
    sum = n1 + n2
    console.log(sum)
}
if(n1 > n3 & n3> n2){
    sum = n1 + n3
    console.log(sum)
}
if(n3 > n2 & n2 > n1){
    sum = n3 + n2
    console.log(sum)
}
