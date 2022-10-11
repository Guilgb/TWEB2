const b = 3;
const h = 3;

const area = (b * h)/2
const somaQuadrados = (b**2 + h**2)


let dividido = 0;
let divisor = 1;
for(let i=0; i<somaQuadrados; i++){
    dividido = somaQuadrados/divisor;
    divisor = (dividido + divisor) /2;
}

const perimetro = b + h + divisor




console.log("Area consiste em:", area)
console.log("Perimetro consiste em:", perimetro)
