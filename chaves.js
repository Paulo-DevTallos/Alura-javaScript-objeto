const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@email.com",
  telefone: ["11988505846", "8398562589"],
};

cliente.enderecos = [
  {
    rua: "R. Capitao Boanerges",
    numero: 1337,
    apartamento: true,
    complemento: "ap. 305 bloco C",
  },
];

//Object.keys() cria um array com as chaves do objeto. Ex: const Objeto = { 'chave': 'valor' }
const chavesDoObjeto = Object.keys(cliente);
//console.log(chavesDoObjeto)

if (!chavesDoObjeto.includes("enderecos")) {
  console.error("Erro. É necessario ter um endereço cadastrado");
}

//https://api.coincap.io/v2/assets/bitcoin/history?interval=m30&start=1671014040000&end=1671015840000

const url = `https://api.coincap.io/v2/assets/bitcoin/history?interval=m30&start=1671014040000&end=1671015840000`;

fetch(url)
  .then((res) => res.json())
  .then((res) => console.log(res));
