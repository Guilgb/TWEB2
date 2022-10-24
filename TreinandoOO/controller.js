import require.{ RepositoryCarro } from "./repository";

class ControllerCarro{
    repository = new RepositoryCarro;
    
    registerCarro(carro){
        this.repository.registerRepository(carro);
    }
    
    listarCarro(){
        this.repository.listarRepository()
    }
}

export {ControllerCarro};