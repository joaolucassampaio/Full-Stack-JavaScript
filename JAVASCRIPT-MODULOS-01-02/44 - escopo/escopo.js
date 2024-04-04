// O que é escopo e como funciona?
// Escopo é o contexto onde a variável foi declarada, podendo ser mais externo, ou mais interno (se estiver dentro de um bloco)

// Variáveis no escopo mais externo podem ser usadas dentro de escopos mais internos
let pokemon = "Charmander"

function evoluir() {
  pokemon = "Charmeleon"
}

console.log(pokemon)
evoluir()
console.log(pokemon)

// Variáveis no escopo mais interno não podem ser usadas fora dele em escopos mais externos
function criarAnimal() {
  let animal = "Gato"
}

criarAnimal()
console.log(animal) // Gera erro

// Escopo com var e let (ou const)
// Apenas variáveis declaradas com var ficam disponíveis em um escopo mais externo
function avaliarNota(nota) {
    if (nota > 60) {
      var aprovado = true
      let situacao = "Aprovado"
    } else {
      var aprovado = false
      let situacao = "Reprovado"
    }
  
    console.log(nota)
    console.log(aprovado)
    console.log(situacao) // Gera erro
  }
  avaliarNota(83)
  avaliarNota(49)
  
  // Mas mesmo o var não consegue "sair" para fora do escopo da função
  function ola() {
    var texto = "Olá, mundo!" // funciona apenas em estruturas mais internas dentro do function, como o if e else
  }
  console.log(texto) // Gera erro

// Inicialização de variáveis com var e let (ou const)
// Apenas variáveis declaradas com var são carregadas, sempre, no começo do código, acima de todo o resto
console.log(nome) // retorna undefined devido ao içamento da variável var ao topo do código (acontece sem carregar o valor atribuído)
console.log(sobrenome) // error
var nome = "Isaac"
let sobrenome = "Pontes" // com a variável let o içamento é controlado (hoisting controlado)
console.log(nome)
console.log(sobrenome)

//Recomenda-se utilizar mais a variável let do que var por algumas razões:

//Escopo de Bloco: A variável let possui escopo de bloco, o que significa que ela só é acessível dentro do bloco em que foi declarada. Isso ajuda a evitar problemas de vazamento de variáveis e torna o código mais previsível.

//Hoisting Controlado: Com let, o hoisting (içamento) da variável é controlado. Isso significa que a variável não é içada até que a declaração let seja alcançada durante a execução do código. Em contraste, as variáveis declaradas com var são içadas para o topo do escopo, o que pode levar a comportamentos inesperados.

//Reatribuição de Variáveis em Loops: Em loops for que executam de forma assíncrona, o uso de let evita problemas comuns associados à redeclaração de variáveis no escopo do loop.

//Mais Seguro em Módulos: Quando você está trabalhando com módulos, let é uma escolha mais segura, pois cada módulo tem seu próprio escopo. Usar var pode levar a variáveis globais não intencionais e a possíveis colisões de nomes.

//Legibilidade e Boas Práticas: O uso de let é considerado uma prática recomendada em JavaScript moderno. O código que utiliza let é geralmente mais legível e menos propenso a erros, especialmente em situações onde o escopo é importante.

//Em resumo, let oferece um escopo mais controlado e seguro, além de seguir as práticas recomendadas de desenvolvimento em JavaScript. No entanto, em certos contextos, como em código legado ou em situações em que você realmente deseja variáveis globais, var ainda pode ser usada.





