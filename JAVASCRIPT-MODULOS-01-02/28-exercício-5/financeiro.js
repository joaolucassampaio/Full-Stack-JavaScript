//Como se trata de um problema de repetição e múltiplas alternativas, usamos as estruturas de repetição do while juntamente com switch.

let option = "" // Declarei a variável option como vazia
let finalMoney = "" // Declarei a variável finalMoney como vazia

// Variáveis vazias são usadas para declarar a existência de uma variável, sem necessariamente atribuir um valor para ela inicialmente. Podendo receber algum valor ao decorrer da escrita do código.

startingMoney = parseFloat(prompt("Informe a quantidade de dinheiro disponível.")) // Criei uma variável para receber, do usuário, a informação sobre a quantidade de dinheiro disponível. Note o uso do parseFloat para conversão de string para float (str -> float) e o prompt para exibir a tela interativa.

// Se tratando de um problema que exige uma repetição até que um critério seja atendido, do while é a melhor opção.

do {
    option = prompt(
        "A quantidade de dinheiro disponível é de " + startingMoney + " reais." +
        "\nO que você gostaria de fazer?" +
        "\n1. Adicionar dinheiro;" +
        "\n2. Remover dinheiro;" +
        "\n3. Sair."
    ) // Eu começo alterando a funcionalidade de variável option. Ela passa a ser um prompt com várias opções para a escolha do usuário.

// Após a escolha de opção do usuário, eu abro uma estrutura de repetição switch para dar funcionalidade a cada uma das escolhas. Note que o problema pede que o menu acima seja repetido até o encerramento do programa, para que isso ocorra basta colocar a estrutura switch dentro da do while. Conforme demostrado abaixo:

    switch(option) {
        case "1":
            additionalMoney = parseFloat(prompt("Quantos reais você gostaria de adicionar?"))
            finalMoney = startingMoney + additionalMoney
            alert("O saldo atual é de " + finalMoney + " reais.")
            break

        case "2":
            moneyRemoved = parseFloat(prompt("Qual valor gostaria de remover?"))
            finalMoney = startingMoney - moneyRemoved
            alert("O saldo atual é de " + finalMoney + " reais.")
            break
        
        case "3":
            alert("Encerrando o programa...")
            break

        default:
            alert("Opção inválida.")
            break
    }

    if(option == "1" || "2") {
        startingMoney = finalMoney
    } // Esse trecho de código, utilizando o if, serve para exibir o novo saldo disponível do usuário, no menu, caso ele adicione ou subtraia algum valor.
// "||" é o operador lógico que significa "ou".

} while(option !== "3") // Coloquei a condição do looping existir enquanto a variável option não seja a opção 3. Ou seja, quando o usuário escolher a opção 3, o interpretador sairá do looping criado pela estrutura de repetição do while.

alert("O progama foi encerrado.") // Quando o looping é encerrado, esse alerta é executado.