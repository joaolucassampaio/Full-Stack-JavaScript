// Funções como valores no javascript
// No javascript, as funções podem ser atribuidas a variáveis como se elas fossem valores:
function somar(a,b) {
    return a + b
}
const operacao = somar // Repare que não usamos os () ao lado do nome da função, porque ao fazer isso estaríamos executando a função
console.log(operacao(4,5))

// O que são funcões anônimas?
// Funcções anônimas, como o próprio nome diz, são funções que não têm nome
// É necessário, para elas existirem, serem atribuídas a alguma variável

const subtrair = function (a, b) {
    return a - b
}
console.log(subtrair(36,13))

// Possíveis usos
// Com as funções anônimas podemos, por exemplo, atribuir uma função a uma chave de objeto
const calculadora = {}
calculadora.somar = somar
calculadora.subtrair = subtrair
calculadora.multiplicar = function (a, b) {
  return a * b
}
console.log(calculadora.multiplicar(3, 7))

// Perigos das funções anônimas
// Funções anônimas só podem ser chamadas após a atribuição da variável, elas não são jogadas para o topo do arquivo como funções normais

olaMundo()
oiMundo() // Error

function olaMundo() {
  console.log("Olá, mundo!")
}

const oiMundo = function () {
  console.log("Oi, mundo!")
}