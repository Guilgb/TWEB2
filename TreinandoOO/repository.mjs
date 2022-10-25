class RepositoryCarro{
    carros = [];
    
    registerRepository(Carro){
        this.carros.push(Carro);
    }
    
    listarRepository(){
        console.log(this.carros)
    }
}
export default RepositoryCarro;