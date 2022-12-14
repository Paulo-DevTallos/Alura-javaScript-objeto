const cliente = {
    nome: 'Joao',
    idade: 24,
    email: 'joao@email.com',
    telefone: ['11988505846', '83985625895'],
}

cliente.enderecos = [
    {
        rua: 'R. Capitao Boanerges',
        numero: 1337,
        apartamento: true,
        complemento: 'ap. 305 bloco C',
    }
]

/*sintaxe de espalhamento utilizando spread - 
situação: chamando função que será responsável por ligar para os números comerciais e residenciais*/
function ligaParacliente(telComercial, telResidencial) {
    console.log(`ligando para ${telComercial}`)
    console.log(`ligando para ${telResidencial}`)
}

// modo convencional - ligaParacliente(cliente.telefone[0], cliente.telefone[1])
ligaParacliente(...cliente.telefone)

/*utilizando abordagem com objetos
situação: realizar um envio de uma carta para o cliente*/
const encomenda = {
    destinatario: cliente.nome,
    endereco: cliente.enderecos
}

/*suponha que nesse caso o nosso novo objeto nao possa ter um outro objeto aninhado
em um caso comum teriamos que digitar todos os dados na mão, essa seria a nossa forma bruta se por assim dizer
dentro do objeto teriamos { endereco: cliente.enderecos[0].rua, numero: cliente.enderecos[0].numero }
*/

//utilizando spread
const encomendaSpread = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0]
}

console.log(encomenda, encomendaSpread);

/*
retorno no log - essa abordagem cria um unico objeto com uma estrutura completa 
{
  destinatario: 'Joao',
  rua: 'R. Capitao Boanerges',
  numero: 1337,
  apartamento: true,
  complemento: 'ap. 305 bloco C'
}
*/
