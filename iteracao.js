const cliente = {
  nome: "Luizinho",
  idade: 30,
  email: "emailluiz@example.com",
  telefone: ["11988704658", "11987705687"],
};

cliente.enderecos = [
  {
    rua: "Rua da praia",
    numero: 1337,
    apartamento: true,
    complemento: "Ap 934",
  },
];

//iterando objeto de clientes
for (let chave in cliente) {
  //console.log(chave) é retornado todas as chaves que temos no nosso objeto
  //console.log(cliente[chave]) // é possível retornar o valor das chaves

  let tipo = typeof cliente[chave];
  //essa checkagem faz um filtro
  if (tipo !== "object" && tipo !== "function") {
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
  }
}

let arr = [1, 2, 3];

function testeArray(arrayNumber) {
  return [...arrayNumber];
}

console.log(testeArray([1, 2, 3, 4]));
