var endereco = { rua: "Rua dos Pinheiros", numero: 1293, bairro: "Centro", cidade: "São Paulo", uf: "SP" }

function buscarEndereco() {
    console.log(`O usuário mora em ${endereco.cidade} / SP, no bairro ${endereco.bairro}, na ${endereco.rua} com nº ${endereco.numero}.`);
};

buscarEndereco();