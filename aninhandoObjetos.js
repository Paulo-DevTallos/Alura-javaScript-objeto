// criando um array de objetos dentro de um objeto ja existente
const cliente = {
  nome: "Luizinho",
  idade: 30,
  email: "emailluiz@example.com",
  telefone: ["11988704658", "11987705687"],
};

cliente.enderecos = [{
  rua: "Rua da praia",
  numero: 1337,
  apartamento: true,
  complemento: "Ap 934",
}];

cliente.enderecos.push({
  rua: "Rua da esquina",
  numero: 240,
  apartamento: false,
  complemento: "Casa",
})

console.log(cliente);

const listaApartamentos = cliente.enderecos.filter(endereco => {
  endereco.apartamento === true
})

console.log(listaApartamentos)

//=====================================================================================================
//guardando funcoes dentro de um objeto
const funcoesDoCliente = {
  nome: "Luizinho",
  idade: 30,
  email: "emailluiz@example.com",
  telefone: ["11988704658", "11987705687"],
  saldo: 200,
  efetuarPagamento: (valor) => {
    if (valor > this.saldo) {
      console.log('Saldo insuficiente!')
    } else {
      this.saldo -= valor
      console.log(`Pagamento realizado. Novo saldo ${this.saldo}`)
      console.log(this.saldo)
    }
  } 
};

funcoesDoCliente.efetuarPagamento(25)