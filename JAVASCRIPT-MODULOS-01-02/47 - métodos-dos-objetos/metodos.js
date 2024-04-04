// O que são os métodos dos objetos?
// Em JS, os métodos são funções associadas aos objetos
// Um exemplo prático disso é o console.log
// log é um método do console

// Eles são usados para tornar os objetos ainda mais flexíveis

let carro = { // Isso é um objeto
    marca: "Toyota", // Este é um dado deste objeto
    modelo: "Corolla", // Este é um dado deste objeto
    ano: 2022, // Este é um dado deste objeto
    ligar() { // Este é um método deste objeto
        console.log("O carro está ligado!")
    },
    desligar() { // Este é um método deste objeto
        console.log("O carro está desligado!")
    }
}
carro.ligar()
carro.desligar()

// A sintaxe para criar um método é: nomeDoMétodo() {}

// Note que para separar os dados e os métodos, dentro de um objeto, é necessário vírgula

// Os métodos podem acessar e manipular os dados do objeto usando a palavra-chave this. Por exemplo:

let pessoa = {
    nome: "João Lucas",
    idade: 23,
    dizerOla() { 
        console.log("Olá, mundo! Meu nome é " + this.nome + " e tenho " + this.idade + " anos.")
    }
}
console.log(pessoa)
pessoa.dizerOla() // Saída: Olá, mundo! Meu nome é João Lucas e tenho 23 anos.

// Métodos são funções dentro de objetos
// Você pode criar os seus próprios métodos definindo funções dentro de objetos ou pode usar métodos já prontos para uso sem a necessidade de defini-los
// Você pode chamá-los através do "."
// Eles são usados para tornar os objetos ainda mais flexíveis
 
let computador = { // let computador = {} é um objeto
    ligar() { // ligar() é uma função dentro de um objeto, portanto um método
        console.log("O computador está ligado!"); // .log é um método já pronto para o objeto console
    },
    desligar() { // definindo um método dentro de um objeto é possível omitir a palavra-chave "function". Isso é uma abreviação que o JS permite no uso de métodos dentro de objetos.
        console.log("O computador está desligado!");
    }
};
