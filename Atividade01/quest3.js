let x = 4;
const n = 4;
let pot = 0;
if(n > 0){
    for(i=0; i<=n; i++){
        res = x * x;
        pot = x * res;
    }
    console.log(pot)
}