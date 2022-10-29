const num = 17
let res = 0
for(let i=2; i<=num/2; i++){
    if(num % i == 0){
        res++
        break
    }
}
if(res == 0){
    console.log('Numero é primo')
}else{
    console.log('Numero não é primo')
}