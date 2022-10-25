class Carro{
    constructor(modelo, ano){
        this.modelo = modelo;
        this.ano = ano;
    }
    getMoelo(){
        return this.modelo;
    }
    setModelo(modelo){
        this.modelo = modelo;
    }

    getCarro(){
        return this.carro;
    }

    setCarro(carro){
        this.carro = carro;
    }
}

class ControllerCarro{
    repostoryController = new RepositoryCarro();

    addCarro(Carro){
        this.repostoryController.repositoryRegister(Carro);
    }

    listCarro(){
        this.repostoryController.repositoryList()
    }
}

class RepositoryCarro{
    carros = []

    repositoryRegister(Carro){
        this.carros.push(Carro);
    }

    repositoryList(){
        console.log(this.carros)
    }
}


carro = new Carro('Corsa', 2010);

controller = new ControllerCarro();

controller.addCarro(carro);

controller.listCarro();