// AULA 01
//Introdução: Visão geral sobre o JS

// AULA 02
// Declaração de variáveis e dados
var nome = "Matheus";
var idade = 23;
var peso = 80.5;
var humano = true;

var alunos = ['Diego', 'Gabriel', 'Lucas'];
var aluno = {
    nome: alunos[0],
    idade: 23,
    peso: 90,
    humano: true
};

console.log(alunos[0]);
console.log(aluno.nome);

// AULA 03
// Operações matemáticas
var x = 10, y = 5;
console.log(x, y);

var resultado = x + y;
console.log(resultado);

x = x + 3;
console.log(x);

// AULA 04
// Funções
function soma(n1, n2) {
    var resultado = n1 + n2;
    return resultado;
}

var resultado = soma(1, 2);
console.log(resultado);
console.log(soma(1, 2));

// AULA 05
// Condições
function retornaSexo(sexo) {
    // if (sexo === 'M') {
    //     return 'Masculino';
    // }
    // else if (sexo === 'F') {
    //     return 'Feminino';
    // }
    // else
    //     return 'Sexo inválido';

    switch (sexo) {
        case 'M':
            return 'Masculino';
        case 'F':
            return 'Feminino';
        default: 'Sexo inválido';
    }
}

var resultado = retornaSexo('F');
console.log(resultado);

// AULA 06
// Operadores lógicos
var sexo = 'M', idade = 23;
if (sexo === 'M' && idade >= 18) {
    console.log('OK');
}
if (sexo !== 'M') {
    var masculino = true;
    console.log('OK');
}

var sexo = 'F';

var masculino;

if (sexo === 'M') {
    masculino = true;
}
else {
    masculino = false;
}
console.log(masculino);

var sexo = 'F';
var masculino = (sexo === 'M');
console.log(masculino);

// AULA 07
// Condição ternária
var sexo = 'M';

var retorno = sexo === 'M' ? 'Masculino' : 'Feminino';

console.log(retorno);

// AULA 08
// Estruturas de repetição
for (var i = 0; i <= 100; i++) {
    console.log(i);
}

var j = 0;
while (j <= 100) {
    console.log(j);
    j++;
}

var j = 15156465132;
while (j > 50) {
    console.log(j);
    j /= 5;
}

// AULA 09
// Invervalo e timeout
function exibeAlgo() {
    console.log('Hello World');
}

setInterval(exibeAlgo(), 1000);
setInterval(exibeAlgo, 1000);

setTimeout(exibeAlgo, 5000);

Módulo 2 - Aula 01
function mostraAlerta() {
    alert('Interação com o botão');
}

var inputElement = document.getElementById('idNome');

// Sempre retorna um vetor / Podemos setar quem queremos retornar.
var inputElement = document.getElementsByTagName('input')[0];

var inputElement = document.getElementsByClassName('cNome')[0];

console.log(inputElement);
// Em classe usamos . e id usamos #
var inputElement = document.getElementsByTagName('input');
var inputElement = document.getElementsByClassName('nome');
var inputElement = document.querySelector('div#app input');
var inputElement = document.querySelector('input[name=nome]');
var inputElement = document.querySelector('input[name=nome]');

var inputElement = document.querySelector('input[name=nome]');

var btnElement = document.querySelector('button.botao');
// console.log(btnElement);

btnElement.onclick = function () {
    var text = inputElement.value;
    alert(text);
}

// Módulo 2 - Aula 02
var linkElement = document.createElement('a');

linkElement.setAttribute('href', 'http://www.google.com.br');
linkElement.setAttribute('target', '_blank');
linkElement.setAttribute('title', 'Site do Google');

var textElement = document.createTextNode('Acessar Google');

linkElement.appendChild(textElement);

var containerElement = document.querySelector('#app');

containerElement.appendChild(linkElement);

var inputElement = document.querySelector('#nome');
containerElement.removeChild(inputElement);

// Módulo 2 - Aula 03
var boxElement = document.querySelector('div.box');
boxElement.style.width = '100px';
boxElement.style.height = '100px';
boxElement.style.backgroundColor = '#f00';


