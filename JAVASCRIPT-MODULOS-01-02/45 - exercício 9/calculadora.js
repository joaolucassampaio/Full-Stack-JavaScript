let option = ""
let x = ""
let y = ""
let z = ""
let result = ""

function triangularArea(x, y) {
    return (x * y) / 2
}

function rectangularArea(x, y) {
    return x * y
}

function squareArea(x) {
    return x * x
}

function trapezoidalArea(x, y, z ) {
    return (x + z) * y / 2
}

function circularArea (x) {
    return Math.PI * x * x
}

do {
    option = prompt(
        "Bem vindo a Calculadora Geométrica Online!\n" +
        "\nDe qual figura geométrica você deseja calcular a área?" +
        "\n1. Triângulo;" +
        "\n2. Retângulo;" +
        "\n3. Quadrado;" +
        "\n4. Trapézio;" +
        "\n5. Círculo;" +
        "\n6. Sair."
    )

    switch(option) {
        case "1":
            x = parseFloat(prompt("Qual é o valor da base (m)?"))
            y = parseFloat(prompt("Qual é o valor da altura (m)?"))
            result = triangularArea(x, y)
            alert("A área do triângulo é: " + result + "m².")
            break

        case "2":
            x = parseFloat(prompt("Qual é o valor da base (m)?"))
            y = parseFloat(prompt("Qual é o valor da altura (m)?"))
            result = rectangularArea(x, y)
            alert("A área do retângulo é: " + result + "m².")
            break

        case "3":
            x = parseFloat(prompt("Qual é o valor do lado (m)?"))
            result = squareArea(x)
            alert("A área do quadrado é: " + result + "m².")
            break

        case "4":
            x = parseFloat(prompt("Qual é o valor da base maior (m)?"))
            z = parseFloat(prompt("Qual é o valor da base menor (m)?"))
            y = parseFloat(prompt("Qual é o valor da altura (m)?"))
            result = trapezoidalArea(x, y, z)
            alert("A área do trapézio é: " + result + "m².")
            break

        case "5":
            x = parseFloat(prompt("Qual é o valor do raio (m)?"))
            result = circularArea(x)
            alert("A área do círculo é: " + result + "m².")
            break

        case "6":
            alert("Encerrando o programa...")
            break
        default:
            alert("Opção Inválida!")
            break
    }


} while (option !== "6")

alert("Programa encerrado.")