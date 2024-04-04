alert("Consultório Cardiologico Bate Bate Coração")

const array = ["1° - João Lucas", " 2° - Thiago", " 3° - Marcos", " 4° - Marcelo", " 5° - José", " 6° - Antônio", " 7° - Carlos", " 8° - Luiz", " 9° - André", " 10° - Leonardo"]

let choice = ""
let newPatient = ""
let consultedPatient = ""

do {
    choice = prompt(
        "Lista de espera:\n" + array + "\n" +
        "\n1. Novo paciente;" +
        "\n2. Consultar paciente;" +
        "\n3. Sair."
    )

    switch (choice) {
        case "1":
            newPatient = array.push(prompt("Qual é o nome do paciente?"))
            break
        
        case "2":
            consultedPatient = array.shift()
            alert("O paciente " + consultedPatient + " foi consultado.")
            break

        case "3":
            alert("Encerrando o programa...")
            break

        default:
            alert("Opção inválida!")
            break
    }
} while(choice !== "3")

alert("O programa foi encerrado.")

// Obeservação: Nesse programa não é adicionado, automaticamente, a posição da fila de novos pacientes. Essa tarefa teria que ser realizada pelo operador, o que não é muito prático. Como um programador, devo simplificar, ao máximo, a tarefa do operador ou usuário.