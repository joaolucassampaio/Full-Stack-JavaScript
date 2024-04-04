// Explicando a utilidade do SWITCH de forma prática:
const resultado = prompt("Escolha uma alternativa:\na)\nb)\c)") //Cria uma variável constante, responsável por armazenar a alternativa (a, b ou c) escolhida pelo usuário.

// Switch, em português br, significa troca. Em sua estrutura, é passada uma variável e ela fica trocando entre varias opções entra as suas possíveis alternativas. Por excmplo:
switch (resultado) { 
    case "a":
        alert("O resultado é 'a'")
        break

    case "b":
        alert("O resultado é 'b'")
        break

    case "c":
        alert("O resultado é 'c'")
        break

    default:
        alert("Finalizando...")
}