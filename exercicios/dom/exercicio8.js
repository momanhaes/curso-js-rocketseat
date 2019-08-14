var inputNome = document.createElement('input');
inputNome.setAttribute('type', 'text');
inputNome.setAttribute('id', 'idNome');
inputNome.setAttribute('name', 'nome');
inputNome.setAttribute('size', '20');
inputNome.setAttribute('placeholder', 'Digite um nome');
divInput.appendChild(inputNome);

var divInout = document.querySelector('#divInput');
var botaoNome = document.createElement('button');
var textoNomeBotao = document.createTextNode('Clique para adicionar o nome à lista');
botaoNome.appendChild(textoNomeBotao);
botaoNome.style.marginLeft = '3px';
divInput.appendChild(botaoNome);

botaoNome.onclick = function () {
    var valorInput = document.querySelector('#idNome');
    valorInput = valorInput.value;
    var textoNome = document.createTextNode(valorInput);
    var itemNome = document.createElement('li');
    itemNome.appendChild(textoNome);
    listaNomes.appendChild(itemNome);
    divLista.appendChild(listaNomes);
    inputNome.value = "";
}

// Gabarito

// var nomes = ['Diego', 'Gabriel', 'Lucas'];
// var listElement = document.querySelector('ul');
// var inputElement = document.querySelector('input');
// function addItem(text) {
//     var liElement = document.createElement('li');
//     var textElement = document.createTextNode(text);
//     liElement.appendChild(textElement);
//     listElement.appendChild(liElement);
// }
// function adicionar() {
//     addItem(inputElement.value);
//     inputElement.value = "";
// }
// for (nome of nomes) {
//     addItem(nome);
// }