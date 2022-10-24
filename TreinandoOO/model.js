class Carro{
    constructor(modelo, ano){
        this.modelo = modelo;
        this.ano = ano;
    }
    
    get modelo(){
        return this.modelo;
    }
    
    set modelo(modelo){
        this.modelo = modelo;
    }
    
    get ano(){
        return this.ano;
    }
    
    set ano(ano){
        this.ano = ano;
    }
}

export {Carro};