class Carro{
    constructor(modelo, ano){
        this.modelo = modelo;
        this.ano = ano;
    }
    
    getModelo(){
        return this.modelo;
    }
    setModelo(modelo){
        this.modelo = modelo;
    }
    
    getAno(){
        return this.ano;
    }
    setAno(ano){
        this.ano = ano;
    }
    
}
export default Carro;