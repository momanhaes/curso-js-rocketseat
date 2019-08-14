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

function gerarCorAleatoria() {
    var caracteres = "0123456789ABCDEF";
    var cor = "#";
    for (let i = 0; i < 6; i++) {
        cor = cor + caracteres[Math.floor(Math.random() * 16)];
    }
    return cor;
}