const listaDeCompras = ["Açucar", false] //Pode armazenar qualquer tipo de dado e ter qualquer tamanho;
console.log(listaDeCompras)

listaDeCompras[0] = "Arroz" //Modificou o item da posição 0 (Açucar) para "Arroz";
listaDeCompras[1] = "Feijão" //Modificou o item da posição 1 (false) para "Feijão";
listaDeCompras[2] = 7 //Adiciou o item 7 na posição 2;
listaDeCompras[5] = "Batata" //É possível criar um item em uma posição mais na frente, sem, necessariamente, preencher as posições anteriores;

console.log(listaDeCompras)

console.log(listaDeCompras[10]) //O js permite referenciar posições que não existem, mas retorna undefined.
