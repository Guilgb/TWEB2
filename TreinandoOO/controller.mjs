import { RepositoryCarro } from "./repository.mjs";
class ControllerCarro{
    repository = new RepositoryCarro;

    registerController(Carro){
        this.repository.registerRepository(Carro);
    }

    listarController(){
        this.repository.listarRepository()
    }
}