const nomeDoTurista = prompt("Bem vindo, turista! Como você se chama?")
let resposta = prompt("Você visitou alguma cidade? (Sim/Não).")

let nomeDaCidade = "" //string vazia
let cidadesVisitadas = "" //string vazia
let contagemCidades = 0

while (resposta == "Sim") {
    nomeDaCidade = prompt("Qual é o nome da cidade visitada?")
    contagemCidades += 1
    resposta = prompt("Você visitou alguma outra cidade? (Sim/Não).")
    cidadesVisitadas += " - " + nomeDaCidade

} if (resposta == "Não") {
    alert("Obrigado pelas informações, " + nomeDoTurista + "! " +
    "\nParece que você já visitou " + contagemCidades + " cidades." + "\nDentre elas: " + cidadesVisitadas)
}
