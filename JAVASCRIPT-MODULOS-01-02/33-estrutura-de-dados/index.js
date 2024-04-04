//Em JavaScript, "valor" e "referência" são dois conceitos importantes que se referem à forma como os dados são tratados e manipulados.

//Valor: Um valor em JavaScript é um dado primitivo, como um número, uma string, um booleano, null ou undefined. Quando você atribui um valor primitivo a uma variável, a própria variável contém esse valor. Quando você copia uma variável que contém um valor primitivo, você está copiando o valor real.

//Exemplo de valor:

let x = 10;
let y = x; // y contém uma cópia do valor de x
x = 20;
console.log(y); // Ainda será 10, pois y contém uma cópia do valor original de x


//Referência: Em contraste, quando você lida com objetos, arrays e funções em JavaScript, você está lidando com referências. Uma referência é um endereço de memória onde os dados estão armazenados. Quando você atribui um objeto a uma variável, essa variável contém uma referência ao objeto, não o objeto em si. Portanto, se você copiar uma variável que contém uma referência a um objeto, você estará copiando a referência, não o objeto em si. Ambas as variáveis apontam para o mesmo objeto na memória.

//Exemplo de referência:

let array1 = [1, 2, 3];
let array2 = array1; // array2 agora contém uma referência ao mesmo array que array1

array1.push(4);
console.log(array2); // Ambos array1 e array2 refletem a modificação, pois apontam para o mesmo array na memória


//Portanto, a diferença fundamental entre valor e referência é como os dados são armazenados e manipulados na memória. Valores são dados primitivos e são manipulados diretamente, enquanto referências apontam para locais na memória onde os dados estão armazenados e são manipulados indiretamente através dessas referências.