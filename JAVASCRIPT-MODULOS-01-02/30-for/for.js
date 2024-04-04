// O FOR funciona da seguinte maneira (Considere o trecho de código abaixo): 

let nome = "batata" // lenght = 6
let nomeEspacado = ""

//(INICIALIZAÇÃO; CONDIÇÃO; FINALIZAÇÃO)
for (i = 0; i < nome.length; i++) {
    nomeEspacado += nome[i] + " "
}

alert(nomeEspacado)

/* ETAPAS DE FUNCIONAMENTO DO FOR:

1°) Executa o que estiver na inicialização;

2°) Verifica se a condição é verdadeira;
          Se verdadeira -> Altera/Executa o código entre {}
          Se falsa -> Encerra o looping

3°) Executa o que estiver na finalização.
*/

/* COMO O FOR ESTÁ FUNCIONANDO NO CÓDIGO ACIMA?

1°) Cria a variável índice (i=0);

2°) Confere se i é menor que a quantidade total de caracteres da string definida na variável nome(batata).
          Se for -> Concatena a letra definida pelo índice
          Se não for -> Encerra o looping

3°) Soma +1 ao índice.

Nota: o [] em nome[i] serve para selecionar uma letra dentro da string. Pode ser escolhido entre 0 até a quantidade final de caracteres. Por exemplo:
          let nome = "batata"
          console.log(nome[1]) // Será exibido "b".
*/






//for (let indice = 0; indice <= 3; indice++) {
//    alert("Índice = " + indice)
//}

// let nome = "Joao"
// for(let i = 0; i < nome.lenght; i++) {
//      console.log(nome[i])
//}

// O FOR é utilizado para criar repetições controladas. Ou seja, repetições até atingir um valor desejado.

//Esqueleto: 
//for(inicialização; condição; finalização) {
//    ...
//}

//Inicialização: Geralmente se cria uma variável índice(i);
//Condição: Se passa uma condição para que exista a repetição (repetição controlada);
//Finalização: É o que será feito ao final de cada repetição.