const nomeVeiculo1 = prompt("Insira o nome do primeiro veículo.")
const velocVeiculo1 = prompt("Insira a velocidade do primeiro veículo (km/h).")

const nomeVeiculo2 = prompt("Insira o nome do segundo veículo.")
const velocVeiculo2 = prompt("Insira a velocidade do segundo veículo (km/h).")

primeiraVelocidade = parseFloat(velocVeiculo1)
segundaVelocidade = parseFloat(velocVeiculo2)

if (primeiraVelocidade > segundaVelocidade) {
    alert("O " + nomeVeiculo1 + " está mais rápido que o(a) " + nomeVeiculo2 + ".")
} else if (primeiraVelocidade < segundaVelocidade) {
    alert("O " + nomeVeiculo2 + " está mais rápido que o(a) " + nomeVeiculo1 + ".")
} else {
    alert("Os dois veículos estão na mesma velocidade.")
}

//Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso).