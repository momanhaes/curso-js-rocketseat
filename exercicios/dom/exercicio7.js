
var divLista = document.querySelector('#divLista');

var nomes = ["Diego", "Gabriel", "Lucas"];

var listaNomes = document.createElement('ul');

for (nome of nomes) {
    var itemNome = document.createElement('li');
    var textoNome = document.createTextNode(nome);
    itemNome.appendChild(textoNome);
    listaNomes.appendChild(itemNome);
    divLista.appendChild(listaNomes);
}

