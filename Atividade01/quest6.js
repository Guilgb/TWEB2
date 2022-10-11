let n1 = 113;
let n2 = 12;
let n3 = 13;

if(n1 < n2 & n1 < n3){
    let o1;
    let o2;
    let o3;
    
    o1 = n1;
    if(n2 < n3){
        o2 = n2;
        o3 = n3;
    }else{
        o2 = n3;
        o3 = n2;
    }
    console.log(o1, o2, o3)
}

if(n3 < n1 & n3 < n2){
    let o1;
    let o2;
    let o3;
    o1 = n3;
    if(n2 < n1){
        o2 = n2;
        o3 = n1
    }else{
        o2 = n1;
        o3 = n1
    }
    console.log(o1, o2, o3)
}

if(n2 < n1 & n2 < n3){
    let o1;
    let o2;
    let o3;
    o1 = n2;
    if(n1 < n3){
        o2 = n1;
        o3 = n3;
    }else{
        o2 = n3;
        o3 = n1;
    }
    console.log(o1, o2, o3)
}