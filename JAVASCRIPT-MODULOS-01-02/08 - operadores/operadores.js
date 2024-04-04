// Dica de estudo: compare os resultados que aparecem no live server com o código abaixo.

alert("Estudo de Operadores e Expressões!")

alert(
    "Operador de Concatenação de strings:" +
    "\n+" +
    "\nExemplo de funcionamento:" +
    "\nalert("+
    "\n    \"\\nEssa é uma string\" +" +
    "\n    \"\\nEssa é outra string\"" +
    "\n)"
)

//Curiosidade: Em JavaScript, você pode escrever as aspas duplas (""") sem criar uma string, usando a sequência de escape \"Texto aqui dentro\".
// Se você deseja que o texto "\n" apareça literalmente na sua string e não seja interpretado como um caractere de nova linha, você precisa digitar o caractere de barra invertida duas vezes "\\n Aqui eu apareço como uma string".

alert(
    "Operadores Aritméticos:" +
    "\n+, -, *, / e %" +
    "\nSoma: 10 + 10 = " + (10 + 10) +
    "\nSubtração: 10 - 10 = " + (10 - 10) +
    "\nMultiplicação: 10 * 10 = " + (10 * 10) +
    "\nDivisão: 10 / 10 = " + (10 / 10) +
    "\nResto: 10 % 10 = " + (10 % 10)
)

//O operador de módulo (%) em programação retorna o resto da divisão de dois números. Em outras palavras, ele calcula o valor que sobra após a divisão inteira de um número pelo outro.
//Por exemplo, se você calcular 5 % 2, o resultado será 1, porque quando 5 é dividido por 2, o quociente é 2 e o resto é 1. Da mesma forma, 10 % 3 resultaria em 1, pois 10 dividido por 3 é 3 com um resto de 1.

alert(
    "Operador de Agrupamento:" +
    "\n()" +
    "\nÉ utilizado para controlar a precedência das operações em uma expressão. Por exemplo:" +
    "\nresultado = 2 + 3 * 4 = 14" +
    "\nresultado = (2 + 3) * 4 = 20"
)

let variavel = 80

alert(
    "Operador de Atribuição:" +
    "\n =, +=, -=, *=, /= e %=" +
    "\nExemplos de funcionamento:" +
    "\n let variavel = 80" +
    "\n variavel += 20 (varivel = " + (variavel += 20) + ")" +
    "\n variavel -= 20 (variavel = " + (variavel -= 20) + ")" +
    "\n variavel *= 20 (variavel = " + (variavel *= 20) + ")" +
    "\n variavel /= 20 (variavel = " + (variavel /= 20) + ")" +
    "\n variavel %= 20 (variavel = " + (variavel %= 20) + ")" +
    "\n" +
    "\n Resumidamente, os Operadores de Atribuição atribuem o valor da direita à esquerda. Em casos de operações matemáticas, eles realizam a operação com o valor da direita e depois atribuem o resultado à variável da esquerda; que passa a conter esse novo valor."
)

alert(
    "Operador de Incrementar (++) e Decrementar (--):" +
    "\nSão usados para aumentar ou diminuir o valor de uma variável em uma unidade, respectivamente." +
    "\nSe aplicado antes da variável (++variavel), ele primeiro incrementa o valor da variável em uma unidade e, em seguida, retorna o novo valor." +
    "\nSe aplicado depois da variável (variavel++), ele primeiro retorna o valor original da variável e, em seguida, incrementa o valor em uma unidade." +
    "\nDa mesma forma o de decrementar."
)

