alert("Bem vindo ao conversor online de medidas!")
const meters = parseFloat(prompt("Insira um valor em metros."))
const option = prompt(
    "Para qual unidade de medida deseja converter? Escolha uma letra." +
    "\na) Milímetro (mm)" +
    "\nb) Centímetro (cm)" +
    "\nc) Decímetro (dm)" +
    "\nd) Decâmetro (dam)" +
    "\ne) hectômetro (hm)" +
    "\nf) Quilômetro (km)"
)

switch (option) {
    case "a":
        alert("O resultado é: " + meters * 1000 + " mm")
        break

    case "b":
        alert("O resultado é: " + meters * 100 + " cm")
        break

    case "c":
        alert("O resultado é: " + meters * 10 + " dm")
        break

    case "d":
        alert("O resultado é: " + meters / 10 + " dam")
        break

    case "e":
        alert("O resultado é: " + meters / 100 + " hm")
        break

    case "f":
        alert("O resultado é: " + meters / 1000 + " km")
        break

    default:
        alert("Opção inválida.")
        break
}

//Escreva um programa em javascript que funcione como um conversos de medidas. O programa deverá pedir por um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são:

//- milímetro (mm)
//- centímetro (cm)
//- decímetro (dm)
//- decâmetro (dam)
//- hectômetro (hm)
//- quilômetro (km)

//O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.
//O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário insira uma opção diferente das disponíveis (use o break e o default para isso).