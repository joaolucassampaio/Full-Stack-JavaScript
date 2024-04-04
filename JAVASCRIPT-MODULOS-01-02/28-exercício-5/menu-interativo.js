let choice = ""

do {
    choice = prompt(
        "Bem vindo, usuário! Escolha entre as 5 opções abaixo para prosseguirmos:" + 
        "\nA) Opção A;" +
        "\nB) Opção B;" + 
        "\nC)Opção C;" +
        "\nD) Opção D;" + 
        "\nE) Encerrar." 
        )

    switch(choice) {
        case "A":
            alert("Você escolheu a opção A!")
            break
        case "B":
            alert("Você escolheu a opção B!")
            break
        case "C":
            alert("Você escolheu a opção C!")
            break
        case "D":
            alert("Você escolheu a opção D!")
            break
        case "E":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida!")
            break
    }
}while(choice !== "E") 

alert("O programa está encerrado!")