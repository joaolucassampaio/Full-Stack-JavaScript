// High-Order Functions utilizadas em Arrays:

// Abaixo, se percebe objetos dentro de arrays
const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

// Map
// Mapeia cada elemento de um array antigo para um novo array. Permite obter um novo array a partir de um array existenste.

// Como o Map funciona:
const nomes = personagens.map(function (personagem) {
    return personagem.nome
})

// Como o Map funciona por trás dos panos:
// const nomes = []
// for (let i = 0; i < personagens.length; i++) {
//   const personagem = personagens[i]
//   nomes.push(personagem.nome)
// }


// Filter
// Permite obter um novo array contendo apenas elementos específicos de um array existente

// Como o Filter funciona:
const orcs = personagens.filter(function (personagem) {
    return personagem.raca === "Orc"
})

// Como o Filter funciona por trás dos panos:
//const orcs = []
//for (let i = 0; i < personagens.length; i++) {
//  const personagem = personagens[i]
//  if (personagem.raca === "Orc") {
//    orcs.push(personagem)
//  }
//}


// Reduce
// Em JavaScript, o método .reduce() é usado principalmente para reduzir um array em um único valor. Ele aceita um callback e um valor inicial opcional. O callback recebe quatro argumentos: acumulador, valor atual, índice atual e o array em si.
// Ao utilizar o método .reduce() em JavaScript, a função de retorno de chamada sempre receberá o acumulador como o primeiro parâmetro. O acumulador é essencial para a funcionalidade do método .reduce(), pois é usado para armazenar e acumular o resultado das operações realizadas em cada elemento do array durante as iterações.

const nivelTotal = personagens.reduce(function (acumulador, personagem) {
    return acumulador + personagem.nivel
}, 0)

// Agrupando personagens da mesma raça/Agrupando diferentes objetos com base em uma propriedade em comum:
const racas = personagens.reduce(function (acumulador, personagem) {
    if (acumulador[personagem.raca]) {
      acumulador[personagem.raca].push(personagem)
    } else {
      acumulador[personagem.raca] = [personagem]
    }
    return acumulador
}, {})

// Sort
// Ordena os elementos de um array a partir de comparações entre duplas de elementos

personagens.sort(function (a, b) {
    return a.nivel - b.nivel
  })

// No exemplo acima, o Sort está ordenando os níveis em ordem crescente.

// O Sort modifica o array original. Uma prática recomendada para evitar que isso ocorra é utilizar o método slice para criar uma cópia da array original antes de alterá-la. Essa cópia pode ser armazenada dentro de uma variável, veja abaixo:

const personagensOrdenados = personagens.slice().sort(function (a, b) {
    return a.nivel - b.nivel
})

console.log(personagensOrdenados)