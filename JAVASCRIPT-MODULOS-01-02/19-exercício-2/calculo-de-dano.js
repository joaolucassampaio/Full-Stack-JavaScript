const firstCharacter = prompt("Insira o nome de um personagem.")
const firstCharacterAtk = prompt("Insira um poder de ataque para esse personagem (0-100).")

const secondCharacter = prompt("Insira o nome de outro personagem.")
const secondCharacterLife = prompt("Insira a quantidade de pontos de vida para esse personagem (0-100).")
const secondCharacterDef = prompt("Insira o poder de defesa para esse personagem (0-100).")
const secondCharacterShield = prompt("Esse personagem possui escudo? Se sim, digite 1. Se não, digite 2.")

const atk = parseFloat(firstCharacterAtk)
const life = parseFloat(secondCharacterLife)
const def = parseFloat(secondCharacterDef)

let damage = null
let newLife = null

if (atk > def && secondCharacterShield == "2") {
    damage = atk - def
    newLife = life - damage
    alert(firstCharacter + " causou " + damage + " de dano.\n" +
    secondCharacter + " está com " + newLife + " de vida.")
} else if (atk > def && secondCharacterShield == "1") {
    damage = (atk - def) / 2
    newLife = life - damage
    alert(firstCharacter + " causou " + damage + " de dano.\n" +
    secondCharacter + " está com " + newLife + " de vida.")
} else if (atk <= def) {
    alert("O dano causado foi 0.")
}

// Esse if abaixo foi escrito simplesmente para mostrar no alert final se o personagem possuí escudo ou não. Optei pelo uso do 1 e 2 porque, nessa etapa do curso, não foi ensinado a deixar a primeira letra em CAPS LOCK, o que evita erro caso for digitado em minúsculo. Não é a maneira convencional, mas quebra o galho.
if (secondCharacter == "1") {
    possuiEscudo = "Sim"
} else if (secondCharacterShield == "2") {
    possuiEscudo = "Não"
}

alert(
    firstCharacter + "\nPoder de ataque: " + firstCharacterAtk + "\n\n" +
    secondCharacter + "\nPontos de vida: " + newLife +
    "\nPoder de defesa: " + secondCharacterDef + 
    "\nPossui escudo: " + possuiEscudo
)

//Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:
//1. Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa.
//2. Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.
//3.Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.
//Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens.