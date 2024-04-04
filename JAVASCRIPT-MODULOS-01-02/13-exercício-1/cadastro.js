/* */
const nome = prompt("Insira o seu nome")
const sobrenome = prompt("Insira o seu sobrenome")
const campoDeEstudo = prompt("Qual é o seu campo de estudo?")
const anoDeNascimento = prompt("Em que ano você nasceu?") 

const nomeCompleto = nome + " " + sobrenome
parseFloat(anoDeNascimento) /*Converte string em float*/
const idade = 2023 - anoDeNascimento

console.log(nomeCompleto)
console.log(campoDeEstudo)
console.log(idade)

alert(
    "Recruta cadastrado com sucesso!\n" +
    "\nNome Completo: " + nomeCompleto +
    "\nCampo de Estudo: " + campoDeEstudo +
    "\nIdade: " + idade
)