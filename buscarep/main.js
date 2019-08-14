var divExercicios = document.querySelector('#exercicios');

var inputNome = document.createElement('input');
inputNome.setAttribute('placeholder', 'Digite o nome de usuário do GitHub');
inputNome.setAttribute('size', '27');

var btnBuscar = document.createElement('button');
btnBuscar.setAttribute('onclick', 'buscarRepositorio()');
var textoBotao = document.createTextNode('Buscar Repositórios');
btnBuscar.appendChild(textoBotao);
btnBuscar.style.marginLeft = '5px';

divExercicios.appendChild(inputNome);
divExercicios.appendChild(btnBuscar);

var valorNome = inputNome.value;

btnBuscar.onclick = buscarRepositorio;

function mostrarLoading() {
    listaRep.innerHTML = "";
    var loadingElement = document.createElement('li');
    var textLoading = document.createTextNode('Carregando...');
    loadingElement.appendChild(textLoading);
    listaRep.appendChild(loadingElement);
}

function mostrarError() {
    listaRep.innerHTML = "";
    var textElement = document.createTextNode('Erro!');
    var errorElement = document.createElement('li');
    errorElement.style.color = "#F00";
    errorElement.appendChild(textElement);
    listaRep.appendChild(errorElement);
}

function buscarRepositorio() {

    var msgErro = document.createElement('p');
    var textoMsgErro = document.createTextNode('Você não digitou um usuário.');
    msgErro.style.color = '#F00';
    msgErro.appendChild(textoMsgErro);

    if (!inputNome.value) return listaRep.appendChild(msgErro);

    axios.get(`https://api.github.com/users/${inputNome.value}/repos`)
        // axios.get(`https://swapi.co/api/people/`)
        // https://anapioficeandfire.com/api/characters/583
        .then(function (response) {
            listaRep.innerHTML = "";
            var descricaoUsario = document.createElement('h3');
            var textoDescricaoUsuario = document.createTextNode(`Repositórios públicos do usuário '${inputNome.value}' no GitHub`);
            descricaoUsario.appendChild(textoDescricaoUsuario);
            listaRep.appendChild(descricaoUsario);
            inputNome.value = "";
            // for (let i = 0; response.data.length-1; i++) Usado para repetições simples
            // for (repo of response.data) Usado para 'breakar' quando a condição é verdadeira
            response.data.forEach(element => { // Usado para percorrer Arrays
                // console.log('Nome do repositório:', element.name);
                var listaRep = document.querySelector('#listaRep');
                var itemListaRep = document.createElement('li');
                var textoItemListaRep = document.createTextNode(element.name);
                itemListaRep.appendChild(textoItemListaRep);
                listaRep.appendChild(itemListaRep);
            });
        })
        .catch(function () {
            mostrarError();
        })
}