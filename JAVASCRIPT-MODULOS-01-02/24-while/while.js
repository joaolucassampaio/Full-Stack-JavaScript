let velocidade = 80

while (velocidade > 0) {
    alert("O carro está a " + velocidade + "km/h")
    velocidade -= 20 // "-=" é um operador de atribuição.
    alert("Diminuindo 20 km/h") // O programa está anunciando ao usuário o que foi feito na linha de código acima.
}

alert("O carro parou.") // O interpretador do código só sairá do bloco while quando a condição for falsa.