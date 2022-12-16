const dados = require("./cliente.json");

console.log(dados);
console.log(typeof dados);

const clienteJson = JSON.stringify(dados);

console.log(clienteJson);
console.log(typeof clienteJson);

const parseJsonClient = JSON.parse(clienteJson);
console.log(typeof parseJsonClient);

// caso necessitarmos efetuar alguma alteração diretamente no arquivo json é possível ela será replicada onde esse arquivo for usado!

/*const cliente = {
	nome: "Joao",
	email: "joao@example.com.br",
	telefone: ["1188985896", "85996108058"],
	endereco: {
		rua: "Rua da esquina",
		numero: 1337,
		apartamento: true,
		complemento: "Ap 934",
	},
};


console.log(clienteJson);*/

/*
estrutura em JSON
{
	"nome": "Joao",
	"email": "joao@example.com.br",
	"telefone": ["1188985896", "85996108058"],
	"endereco": {
		"rua": "Rua da esquina",
		"numero": 1337,
		"apartamento": true,
		"complemento": "Ap 934"
	}
}*/

// trabalhando com os objetos json em clientes

const filterClientes = require("./clientes.json");

function findClient(list, key, value) {
	return list.find((item) => item[key].includes(value));
}

const find = findClient(filterClientes, "nome", "Kirby");
const anotherFind = findClient(filterClientes, "telefone", "1918820860");

//console.log(find, anotherFind);

function findComplementFilter(clientList) {
	return clientList.filter((client) => {
		return (
			client.endereco.apartamento &&
			!client.endereco.hasOwnProperty("complemento")
		);
	});
}

const findComplementFiltered = findComplementFilter("Emillee");

console.log(findComplementFiltered);
