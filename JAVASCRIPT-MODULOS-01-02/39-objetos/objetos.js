// CRIANDO PROPRIEDADES PARA UM OBJETO:

// const objeto = {}
// objeto.propriedade1 = ""
// objeto[propriedade2] = 123

// ADICIONANDO VARIÁVEIS EM UM OBJETO:

const nome = "João Lucas";
const idade = 23;

const pessoa = {
    nome: nome,
    idade: idade
};

console.log(pessoa.nome); // Saída: "João"
console.log(pessoa.idade); // Saída: 30


// A partir do ECMAScript 2015 (ES6), quando o nome da propriedade de um objeto é o mesmo que o nome da variável que você deseja atribuir a ele, você pode usar a sintaxe de inicialização de objeto abreviado:

//const nome = "João";
//const idade = 30;

//const pessoa = {
//    nome,
//    idade
//};

//console.log(pessoa.nome); // Saída: "João"
//console.log(pessoa.idade); // Saída: 30


// TAMBÉM É POSSÍVEL ADICIONAR OU MODIFICAR PROPRIEDADES DE UM OBJETO MESMO DEPOIS DE TER SIDO INICIALMENTE DEFINIDO:

//const pessoa = {};

//const nome = "João";
//const idade = 30;

//pessoa.nome = nome;
//pessoa["idade"] = idade;

//console.log(pessoa.nome); // Saída: "João"
//console.log(pessoa.idade); // Saída: 30


// ADICIONANDO UM ARRAY COMO VALOR DE UMA PROPRIEDADE DE UM OBJETO:

const objeto = {
    propriedadeArray: []
};

//ou
//const objeto = {};
//objeto.propriedadeArray = [];