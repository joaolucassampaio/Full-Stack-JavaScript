// Arrays dentro de arrays
// Arrays podem receber qualquer tipo da dado, inclusive outros arrays
const arr = [
    "1º Nível",
    ["2º nível", 42, true],
    [
      ["3º nível, 1º item", "Olá, mundo!"],
      ["3º nível, 2º item", "Oi, mundo!"],
    ],
    []
  ]

// Arrays podem ter várias “dimensões”
// Sugestão: Peça ao ChatGPT representar uma matriz com 4 dimensões.
// Cada par de colchetes referencia um nível mais interno do array
console.log(arr[0])       // Saída: '1º Nível'
console.log(arr[1])       // Saída: [ '2º nível', 42, true ]
console.log(arr[1][0])    // Saída: '2º nível'
console.log(arr[1][1])    // Saída: 42
console.log(arr[2])       // Saída: [ [ '3º nível, 1º item', 'Olá, mundo!' ], [ '3º nível, 2º item', 'Oi, mundo!' ] ]
console.log(arr[2][0])    // Saída: [ '3º nível, 1º item', 'Olá, mundo!' ]
console.log(arr[2][1][1]) // Saída: 'Oi, mundo!'

// Matrizes
// Podemos ver claramente a estrutura de uma matriz em uma tabela
// Abaixo temos uma matriz bidimensional de três elementos
const matriz = [
    ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
    ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
    ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
  ]
  console.table(matriz)

// Iterando sobre arrays bidimensionais (ou de qualquer dimensão)
// Podemos usar vários níveis de laços FOR para iterar facilmente pela matriz
// Basicamente, usado para acessar diferentes itens em diferentes níveis e colunas da matriz
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      const elemento = matriz[i][j]
      console.log("Posição: (" + i + ", " + j + ") Valor: " + elemento)
    }
  }

// Explicando o código acima:
// matriz.lenght se trata da quantidade das arrays mais externas (no caso acima, 3)
  console.log(matriz.length)
// matriz[i].lenght se trata da quantidade dos itens dentro de uma array mais externa (no caso acima, 4 itens por array)
console.log(matriz[0].length)
// Os dois for acima estão iterando item por item em cada array, abra o live server e o console para entender melhor
// O primeiro for passa pelas matrizes externas, e o segundo pelos itens dentro de cada uma delas
// Por exemplo: quando o i = 0, estará acessando a primeira array, quando o j = 0, estará acessando o primeiro item dentro da primeira array. O i e j vão aumentando, até chegarem na quantidade máxima das arrays e dos itens.
// Perceba que o i e o j sempre serão menores que a matriz.lenght e matriz[i].lenght, respectivamente. Isso acontece porque o interpretador lê começando do 0, enquanto a propriedade .lenght retorna a quantidade total de itens.