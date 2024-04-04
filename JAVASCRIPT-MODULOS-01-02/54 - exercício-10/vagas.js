let vagas = [] // Array para armazenar as vagas criadas

const menu = function() { // Função anônima que retorna um valor obtido através do prompt
    return prompt(
        "Bem vindo(a) ao Sistema de Vagas de Emprego!\n\n" +
        "Como posso ajudar?\n" +
        "1. Listar vagas disponíveis;\n" +
        "2. Criar uma nova vaga;\n" +
        "3. Visualizar uma vaga;\n" +
        "4. Inscrever um candidato em uma vaga;\n" +
        "5. Excluir uma vaga;\n" +
        "6. Sair."
    )
}

const listarVagas = function() {
    const vagasEmTexto = vagas.reduce(function() {})
}

const criarVaga = function() { // Função anônima 
    const nome = prompt("Informe o nome da vaga:")
    const descricao = prompt("Informe uma descricação para a vaga:")
    const dataLimite = prompt("Informe uma data limite (dd/mm/aaaa) para a vaga:")

    const confirmar = confirm(
        "Gostaria de salvar essa vaga?\n" +
        "\nNome: " + nome +
        "\nDescrição: " + descricao +
        "\nData limite: " + dataLimite 
    )

    if(confirmar) {
        const novaVaga = {
            nome: nome,
            descricao: descricao,
            dataLimite: dataLimite
        }
        vagas.push(novaVaga)
    }
}

const executarMenu = function() { // Função anônima responsável por executar o menu e abrigar a estrutura de repetição switch
    let opcao = ""
    do {
        opcao = menu() // Executa a função menu e, ao mesmo tempo, atribuí o retorno dela para variável opcao

        switch(opcao) { // Estrutura de repetição para dar funcionalidade a cada opção declarada no menu
            case "1":
                alert("Opção 1.")
                break
            case "2":
                alert("Opção 2.")
                break
            case "3":
                alert("Opção 3.")
                break
            case "4":
                alert("Opção 4.")
                break
            case "5":
                alert("Opção 5.")
                break
            case "6":
                alert("Finalizando o programa...")
                break
            default:
                alert("Opção inválida.")
                break
        }
    } while(opcao !== "6") {
        alert("Programa finalizado.")
    }
}

executarMenu()