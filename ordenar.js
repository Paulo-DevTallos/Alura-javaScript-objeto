//ordenando lista
const clientes = require("./clientes.json");

function ordenar(lista, prop) {
	const resultado = lista.sort((a, b) => {
		if (a[prop] < b[prop]) {
			return -1;
		}

		if (a[prop] > b[prop]) {
			return 1;
		}

		return 0;
	});

	return resultado;
}

const ordenadoPorNome = ordenar(clientes, "nome");

console.log(ordenadoPorNome);
