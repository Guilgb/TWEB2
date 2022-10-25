class endereco{
    constructor(rua, numero){
        this.rua = rua;
        this.numero = numero;
    }

    getRua(){
        return this.rua
    }
    setRua(rua){
        this.rua = rua;
    }

    getNumero(){
        return this.numero;
    }

    setNumero(numero){
        this.numero = numero;
    }
}

class Pessoa extends endereco{
    constructor(nome, idade) {
        super();
        this.nome = nome;
        this.idade = idade;
    }

    getNome(){
        return this.nome;
    }
    setNome(nome){
        this.nome = nome;
    }

    getIdade(){
        return this.idade;
    }
    setIdade(idade){
        this.nome = idade;
    }

    #nada(){
        return 'Essa nomenclatura diz que esse metodo é privado a somente essa classe'
    }
}

class Controller{
    repository = new Repository;

    registerController(Pessoa){
        this.repository.registerRepository(Pessoa);
    }
    listarController(){
        this.repository.listarRepository()
    }
}

class Repository{
    pessoas = []

    registerRepository(Pessoa){
        this.pessoas.push(Pessoa);
    }

    listarRepository(){
       console.log(this.pessoas);
    }
}

p2 = new Pessoa('Rubens', 24);
p1 = new Pessoa('Guilherme', '23');
pc = new Controller;

p1.setNumero(316);
p1.setRua('Pedro Lopes');

pc.registerController(p2);
pc.registerController(p1);
pc.listarController();