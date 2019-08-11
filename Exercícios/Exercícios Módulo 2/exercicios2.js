// Exercício 1 e 2
var divBotao = document.querySelector('#divBotao');

var botao = document.createElement('button');
botao.setAttribute('id', 'idBotao');
botao.style.marginBottom = '10px';

var textoBotao = document.createTextNode('Clique aqui para criar um quadrado vermelho');

var paragrafoMouse = document.createElement('p');
var textoMouse = document.createTextNode('Passe o mouse sobre o quadrado para mudá-lo de cor');

paragrafoMouse.appendChild(textoMouse);

botao.appendChild(textoBotao);

divBotao.appendChild(botao);
divBotao.appendChild(paragrafoMouse);

botao.onclick = function () {

    var divCaixa = document.createElement('div');

    divCaixa.style.width = '100px';
    divCaixa.style.height = '100px';
    divCaixa.style.backgroundColor = '#F00';
    divCaixa.style.marginBottom = '2px';
    divCaixa.style.marginTop = '2px';


    divCaixa.onmouseover = function () {
        divCaixa.style.backgroundColor = gerarCorAleatoria();
    }

    divBotao.appendChild(divCaixa);
}
//Fim Exercício 1 e 2


function gerarCorAleatoria() {
    var caracteres = "0123456789ABCDEF";
    var cor = "#";
    for (let i = 0; i < 6; i++) {
        cor = cor + caracteres[Math.floor(Math.random() * 16)];
    }
    return cor;
}

//Exercício 3
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
//Fim Exercício 3

//Exercício 4
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
//Fim Exercício 4


