// //Exercício 1
// console.log('1');
// console.log('2');

// function checaIdade(idade) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             return idade >= 18 ? resolve() : reject();
//         }, 2000);

//     })
// }
// checaIdade(15)
//     .then(function () {
//         console.log("Maior que 18");
//     })
//     .catch(function () {
//         console.log("Menor que 18");
//     });

// console.log('3');
// console.log('4');
// console.log('5');

// //Fim Exercício 1

// //Exercício 2
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

function buscarRepositorio(valorNome) {
    axios.get(`https://api.github.com/users/${valorNome}`)
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    })
}

// //Fim Exercício 2

