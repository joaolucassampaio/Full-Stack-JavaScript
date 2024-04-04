let option = ""
let registeredProperties = 0
const propertyQueue = []
const propertyName = [] 
let message = ""
let choice = ""
let selectedProperty = ""

do {
    let properties = ""
    for (let i = 0; i < propertyName.length; i++) {
        properties += (i + 1) + "º - " + propertyName[i] + "\n"
    }

    option = prompt(
        "Seja bem vindo(a) ao Cadastro Online de Imóveis!" +
        "\nAtualmente possuímos " + (registeredProperties === 1 ? "1 imóvel cadastrado." : registeredProperties + " imóveis cadastrados.") + "\n" +
        "\nComo posso ajudá-lo hoje?" +
        "\n1. Salvar imóvel;" + "\n2. Imóveis cadastrados;" + "\n3. Sair."
    )

    switch (option) {
        case "1":
            let newPropriety = {}
            newPropriety.name = prompt("Dê um nome para essa propriedade:")
            newPropriety.proprietary = prompt("Informe o nome do proprietário:")
            newPropriety.room = prompt("O imóvel possui quantos quartos?")
            newPropriety.bathroom = prompt("O imóvel possui quantos banheiros?")
            newPropriety.garage = prompt("O imóvel possui garagem? (Sim/Não)")

            const confirmation = confirm(
                "Salvar este imóvel?\n" +
                "\nPropriedade: " + newPropriety.name +
                "\nProprietário: " + newPropriety.proprietary +
                "\nQuartos: " + newPropriety.room +
                "\nBanheiros: " + newPropriety.bathroom +
                "\nPossui garagem? " + newPropriety.garage
            )

            if (confirmation) { 
                propertyName.push(newPropriety.name)
                propertyQueue.push(newPropriety)
                registeredProperties += 1
                alert("A propriedade foi salva com sucesso!")
            } else {
                alert("Voltando ao menu...")
            }
            break

        case "2":
            choice = parseInt(prompt(
                "Qual propriedade você gostaria de verificar?" +
                "\n" + properties))

            if (choice >= 1 && choice <= propertyName.length) {
                selectedProperty = propertyQueue[choice - 1]
                message = "Nome da propriedade: " + selectedProperty.name +
                "\nNome do proprietário: " + selectedProperty.proprietary +
                "\nQuantidade de quartos: " + selectedProperty.room +
                "\nQuantidade de banheiros: " + selectedProperty.bathroom +
                "\nPossui garagem? " + selectedProperty.garage
                alert(message)
            } else {
                alert("Propriedade inválida!")
            }
            break

        case "3":
            alert("Encerrando o programa...")
            break

        default:
            alert("Opção inválida!")
            break
    }

} while (option !== "3")

alert("Programa encerrado.")

// ESCLARECENDO O CÓDIGO
// 1 ao 7 - Declaração de variáveis e arrays;

// 9 - Utilização da estrutura de repetição 'do...while' (usada para repetir um bloco de código até que uma condição seja falsa);

// 10 - Declaração da variável 'properties' inicializada com uma string vazia.

// 11 - Loop 'for' iterando sobre a variável propertyName. Inicialmente, esse trecho de código não será executado, porque i será igual a propertyName.length (ambos 0). Entretanto, ao salvar o primeiro imóvel, será dado início ao looping (i sendo sempre menor que propertyName.length). Simplificadamente, esse código funciona concatenando a soma (i + 1), a string ("º - ") e o valor dentro da array de índice [i] (retornando algo parecido com: 1° - Casa Branca). A propertyName[i] serve para acessar, dentro da array, os valores digitados pelo usuário (começando por 0, porque o interpretar lê dessa forma). Já a soma (i + 1), serve para ajustar a contagem para se iniciar em 1;

// 15 - Utilização do prompt para capturar a resposta do usuário sobre quais opções ele deseja acessar. Note que o trecho de código, (registeredProperties === 1 ? "1 imóvel cadastrado." : registeredProperties + " imóveis cadastrados."), está utilizando o operador ternário (condição ? expressão_se_verdadeira : expressão_se_falsa) para ajustar a gramática das frases em situações de singular e plural;

// 22 - Utilização do switch para dar funcionalidade a cada uma das opções;

// 24 - Declaração do objeto vazio newPropriety;

// 25 ao 29 - Definição das propriedades utilizando o prompt para receber valores do usuário;

// 31 ao 38 - Fazendo uma confirmação através da função 'confirm';

// 40 ao 47 - Utilizando o 'if/else' para adicionar os objetos às arrays e somar +1 no contador de propriedades registradas, caso o usuário decida salvar o imóvel. Caso contrário, mostra um alerta dizendo que o programa está o redirecionando para o início do menu;

// 51 ao 53 - Esta parte é responsável por mostrar todos os imóveis que foram salvos e concatenados na variável properties, além de receber e converter para Int a escolha de qual imóvel o usuário deseja acessar;

// 55 ao 65 - Responsável por mostrar os dados do imóvel selecionado pelo usuário. Note que selectedProperty = propertyQueue[choice - 1] está ajustando o índice para começar em 0, conforme o interpretador lê em arrays;

// 68 ao 70 - Emite um alerta para sinalizar que o programa será encerrado;

// 72 ao 74 - Responsável por alertar ao usuário que o que ele digitou está fora do escopo permitido;

// 77 - Encerra o looping caso a opção escolhida for "3";

// 79 - Alerta que o programa foi encerrado.