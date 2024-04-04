// O que é um parâmetro?
// Um parâmetro é um valor que pode ser passado para uma função quando ela é chamada. Ele é uma variável especial que representa um valor que a função espera receber para poder realizar suas operações. Dentro do corpo da função, o parâmetro é tratado como uma variável local, e seu valor é determinado pelo argumento passado quando a função é chamada. Em resumo, os parâmetros permitem que as funções sejam mais flexíveis e reutilizáveis, pois permitem que diferentes valores sejam passados para a mesma função em diferentes chamadas.
// O parâmetro é a entrada da função. Ele é como uma variável que fica disponível dentro da função mas que é informada na hora de chamar a função.

// x é um parâmetro
function dobro(x) { 
    console.log("O dobre de " + x + " é " + (x * 2))
  }
//5 e 7 são argumentos que também são considerados parâmetros 
  dobro(5)
  dobro(7)

// Parâmetro não informado tem valor undefined
// Se uma função for chamada sem informar o parâmetro, o valor usado para ele será o undefined

dobro()

// Valor padrão para os parâmetros
// Mas podemos declarar um valor padrão para um parâmetro, assim, se ele não for informado, o valor padrão será usado no lugar do undefined

function dizerOla(nome = "mundo") {
    console.log("Olá, " + nome + "!")
  }
  dizerOla("Isaac")
  dizerOla()

// É possível ter vários parâmetros
// Uma função pode ter quantos parâmetros quisermos, basta separaá-los por vírgula
function soma(a, b) {
    console.log(a + b)
  }
  soma(1, 1)
  soma(34, 5)

// A ordem dos parâmetros é importante
// Ao usar vários parâmetros, é recomendado deixar aqueles com valor padrão por último
function criarUsuario(nome, email, senha, tipo = "leitor") {
    const usuario = { nome, email, senha, tipo }
    console.log(usuario)
  }
  
  function novoUsuario(nome, tipo = "leitor", email, senha) {
    const usuario = { nome, email, senha, tipo }
    console.log(usuario)
  }
  
  criarUsuario("Isaac", "isaac@email.com", "1234")
  novoUsuario("Isaac", "isaac@email.com", "1234")


//Funções com muitos parâmetros
// Ao criarmos uma função com muitos parâmetros,
// uma boa prática é substituí-los por um objeto
function parametrosDoJeitoErrado(nome, telefone, endereco, aniversario, email, senha) {
    // ...
  }
  function parametrosDoJeitoCerto(usuario) {
    // ...
  }
  // Além de facilitar na chamada da função, a ordem dos parâmetros se torna irrelevante
  parametrosDoJeitoErrado("nome", "telefone", "endereco", "aniversario", "email", "senha")
  const dadosDoUsuario = {
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    aniversario: "",
    endereco: ""
  }
  parametrosDoJeitoCerto(dadosDoUsuario)

