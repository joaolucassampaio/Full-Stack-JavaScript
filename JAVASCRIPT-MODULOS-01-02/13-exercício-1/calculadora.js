alert("Isso é calculadora de 4 operações")
const valor1 = prompt("Digite um número")
const valor2 = prompt("Digite outro número")

const floatValor1 = parseFloat(valor1)
const floatValor2 = parseFloat(valor2)

soma = floatValor1 + floatValor2
subtracao = floatValor1 - floatValor2
multiplicacao = floatValor1 * floatValor2
divisao = floatValor1 / floatValor2

alert(
    "A soma deu: " + soma +
    "\nA subtração deu: " + subtracao +
    "\nA multiplicação deu: " + multiplicacao +
    "\nA divisão deu: " + divisao
)

console.log(soma)
console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)