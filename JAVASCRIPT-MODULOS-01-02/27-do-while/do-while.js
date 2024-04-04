let velocidade = 0

do {
    alert("A velocidade do veículo é: " + velocidade + " km/h.")
    velocidade -= 20
} while (velocidade > 0)

alert("Velocidade final: " + velocidade + " km/h.")

// A estrutura do Do While funciona da seguinte maneira:
// do(FAÇA) alguma coisa while(ENQUANTO) condição(verdadeira)

// do {
//    faça o que estiver aqui dentro
// } while(enquanto essa condição for verdadeira)

// A parte de código do "do" sempre será executada, pelo menos, uma vez.
// Como assim? Lembra que o interpretador sempre lê da esquerda para direita e de cima para baixo? Então, a parte do "do" é lida primeiro que a do "while". Assim sendo, mesmo que o "while" seja inicialmente falso, o "do" será executado.
// Quando o while for falso, o interpretador sairá do bloco "do while" e continuará lendo o restante do código.
// Se tratando de um problema que exige uma repetição até que um critério seja atendido, do while é a melhor opção.