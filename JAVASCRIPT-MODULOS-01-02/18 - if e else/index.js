const idade = prompt("Informe a sua idade:")

if (idade >= 18) {
   alert("Você é maior de idade!")
} else if (idade >= 12){
    alert("Você é menor de idade!")
} else if (idade >= 4) {
    alert("Você é criança!")
}

const resultado = (6 == 6) ? "Verdadeiro" : "Falso"
alert(resultado)

// 6 é igual a 6, por isso será exibido no alert a string "Verdadeiro".
// Caso fosse um resultado falso ( 7 == 6), seria ixibido a string "Falso".