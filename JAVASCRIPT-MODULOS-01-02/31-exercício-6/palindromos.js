const word = prompt("Digite uma palavra para conferir se é um palíndromo:")
let invertedWord = ""

for (i = word.length - 1; i >= 0; i--) {
    invertedWord += word[i]
}

if (word == invertedWord) {
    alert("Essa palavra é um palíndromo.")
} else {
    alert(invertedWord + "\nEssa palavra não é um palíndromo.")
}

/* COMO ESTÁ FUNCIONANDO O CÓDIGO ACIMA?

1°) Executa uma variável índice (i), sendo igual a quantidade total de caracteres da string, recebida pela variável word, -1.
        Por que -1 ? A propriedade .lenght retorna a quantidade total de caracteres de uma string. Entretanto, caso você queira acessar alguma letra em particular, lembre-se que o interpretador lê começando do 0. Então, caso você queira acessar a letra final de uma palavra com 10 caracteres, precisará selecionar a posição 9. Como, no exercício,estamos invertando a palavra, o primeiro caractere a ser acessado deve ser o último, por isso o -1.

2°) Verifica se o i é menor ou igual 0.
        Caso for, concatenará um caractere, da palavra recebida, à variável invertedWord (Começando pela última).

3°) Diminuí 1 do i.

4°) Repete o processo até o índice ser igual a 0, concatenando as letras conforme o [i], de trás para frente.

5°) Confere se a palavra reescrita de trás para frente é igual a palavra na sua forma original.
        Caso for, alertará que aquela palavra é um palíndromo.
        Caso não for, mostrará a palavra reescrita de trás para frente e alertará que ela não é um palíndromo.
*/