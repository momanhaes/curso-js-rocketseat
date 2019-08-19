"use strict";

// //Classes
// class List {
//     constructor() {
//         this.data = [];
//     }
//     add(data) {
//         this.data.push(data);
//         console.log(this.data);
//     }
// }
// //Herança
// class TodoList extends List {
//     // constructor() {
//     //     this.todos = [];
//     // }
//     // addTodo() {
//     //     this.todos.push('Novo todo');
//     //     console.log(this.todos);
//     // }
//     constructor() {
//         super();
//         this.usuario = 'Matheus';
//     }
//     mostraUsuario() {
//         console.log(this.usuario);
//     }
// }
// //Instanciação de classe
// const MinhaLista = new TodoList();
// document.getElementById('novotodo').onclick = function () {
//     MinhaLista.add('Novo todo');
// }
// MinhaLista.mostraUsuario();
// //Classes com métodos estáticos
// class Matematica {
//     static soma(a, b) {
//         return a + b;
//     }
// }
// console.log(Matematica.soma(1, 2));
// //Var, const e let
//Mutação e reatribuição
// const a = 1;
// const usuarios = {
//     nome: 'Fulano'
// };
// usuarios.nome = 'Matheus';
// console.log(usuarios);
// function teste(x) {
//     let y = 2;
//     if (x > 5) {
//         console.log(x, y);
//     }
// }
// teste(10);
//Operações em Array
//Map - Alterar valores no array
// const lista = [1, 3, 4, 5, 8, 9];
// const novaLista = lista.map(function (item, index, array) {
//     return item * 2;
//     // return index;
//     // return array;
// });
// console.log(novaLista);
// //Reduce - Esta função serve para reduzirmos o conteúdo de um Array para apenas um elemento.
// // O exemplo mais clássico é somar todos os valores de um Array.
// const soma = lista.reduce(function (total, next) {
//     return total + next;
// });
// console.log(soma);
// //Filter - Como o próprio nome indica, serve para filtrarmos os elementos de um Array. 
// //Passamos para ele uma função. Se essa função retornar true, o elemento será inserido no novo Array que será criado. 
// //Se a função retornar false, o elemento será ignorado.
// const filtro = lista.filter(function(item){
//     return item % 2 === 0;
// });
// console.log(filtro);
//Find - Procura um item dentro do array
// const procurar = lista.find(function(item) {
//     return item === 4;
// });
// console.log(procurar);
// //Arrow functions
// const arr = [1, 3, 4, 5, 6];
// const newArr = arr.map(item => item * 2);
// console.log(newArr);
// const teste = () => ({ nome: 'Matheus' });
// console.log(teste());
// const newArr = arr.map((item) => {
//     return item * 2;
// });
// //Valores padrão
// const soma = (a = 3, b = 6) => a + b;
// console.log(soma(1));
// console.log(soma());
//Desestruturação de objetos
var usuario = {
  nome: 'Matheus',
  idade: 23,
  endereco: {
    cidade: 'Magé',
    estado: 'Rio de Janeiro'
  }
};
var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome, idade, cidade);

function mostraNome(usuario) {
  console.log(usuario.nome);
}

function mostrarNome(_ref) {
  var nome = _ref.nome;
  console.log(nome);
}

mostraNome(usuario);
mostrarNome(usuario);
