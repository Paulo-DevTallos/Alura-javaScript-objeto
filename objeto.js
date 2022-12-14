const listDadosPessoais = [
  {
    nome: "Jose Carneiro",
    idade: 32,
    CPF: "000.000.000-79",
  },
  {
    nome: "Antonio Costa",
    idade: 25,
    CPF: "000.000.000-80",
  },
];

/* 
caracteristicas de um objeto em javaScript 

composta por um par, chave e valor
chave: designativo da caracteristica Ex.: nome:
valor: designativo do resultado atribuido a chave: 'Joao Carneiro'
*/

//============================================================================================================

//primeira abordagem - acesso ponto de uma loja com clientes
const cliente = {
  nome: 'Andre',
  idade: 32,
  cpf: '00125636579',
  email: 'andre@dominio.com'
}
// na notação de objeto utilizamos o "." para acessar as propriedades desse objeto
console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade}.`)

//criando metodos com objeto
console.log(`Os tres primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`)

//segunda abordagem - acesso com colchetes - utilizamos esse caso quando nao sabemos as propriedades (chaves)
console.log(`O nome do cliente é ${cliente['nome']} e essa pessoa tem ${cliente['idade']}.`)

const chaves = ['nome', 'idade', 'cpf', 'email']

chaves.forEach(chave => {
  console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)
})
//obs: caso vc liste uma propriedade inexistente dentro do objeto ele retornará um valor undefined

//============================================================================================================

//alterando dados do objeto
const pessoa = {
  nome: 'Lima',
  profissao: 'Engenheiro'
} 

console.log(pessoa.nome)
//criando uma nova propriedade
pessoa.telefone = '11 32458969'

//alterando uma propriedade
pessoa.nome = 'Lima Silva'
console.log(pessoa)

/*obsrvacao = é proibido a reatribuição de um objeto criado a partir de uma constante 
Ex.: const pessoa = { name: 'Fulano' }
const novaPessoa = { idade: 32 }

pessoa = novaPessoa => retorna um erro de reatribuição
*/

//============================================================================================================
//tipos
const arrayCliente = {
  nome: 'Joaozinho',
  idade: 24,
  email: 'email@example.com',
  telefone: ['11988704658', '11987705687'],
}

//acrescentando um novo objeto dentro de um objeto ja existente
const objetoCliente = {
  nome: 'Luizinho',
  idade: 30,
  email: 'emailluiz@example.com',
  telefone: ['11988704658', '11987705687'],
} 

objetoCliente.endereco = {
  rua: 'Rua da praia',
  numero: 1337,
  apartamento: true,
  complemento: 'Ap 934'
}

console.log(objetoCliente['endereco'])
console.log(objetoCliente.endereco.numero)