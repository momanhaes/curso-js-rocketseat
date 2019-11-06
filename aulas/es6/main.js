//Classes
class List {
    constructor() {
        this.data = [];
    }
    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

//Herança
class TodoList extends List {
    // constructor() {
    //     this.todos = [];
    // }

    // addTodo() {
    //     this.todos.push('Novo todo');
    //     console.log(this.todos);
    // }
    constructor() {
        super();

        this.usuario = 'Matheus';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
}

//Instanciação de classe
const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
    MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();

//Classes com métodos estáticos
// Chamadas a métodos estáticos são feitas diretamente na classe e não podem ser feitas em uma instância da classe. 
// Métodos estáticos são comumente utilizados como funções utilitárias.
class Matematica {
    static soma(a, b) {
        return a + b;
    }
}

console.log(Matematica.soma(1, 2));

//Var, const e let
// Mutação e reatribuição
const a = 1;

const usuarios = {
    nome: 'Fulano'
};

usuarios.nome = 'Matheus';

console.log(usuarios);

function teste(x) {
    let y = 2;

    if (x > 5) {
        console.log(x, y);
    }
}

teste(10);

// Operações em Array
// Map - Alterar valores no array
const lista = [1, 3, 4, 5, 8, 9];

const novaLista = lista.map(function (item, index, array) {
    return item * 2;
    // return index;
    // return array;
});

console.log(novaLista);

//Reduce - Esta função serve para reduzirmos o conteúdo de um Array para apenas um elemento.
// O exemplo mais clássico é somar todos os valores de um Array.
const soma = lista.reduce(function (total, next) {
    return total + next;
});

console.log(soma);

//Filter - Como o próprio nome indica, serve para filtrarmos os elementos de um Array. 
//Passamos para ele uma função. Se essa função retornar true, o elemento será inserido no novo Array que será criado. 
//Se a função retornar false, o elemento será ignorado.
const filtro = lista.filter(function (item) {
    return item % 2 === 0;
});

console.log(filtro);

// Find - Procura um item dentro do array
const procurar = lista.find(function (item) {
    return item === 4;
});

console.log(procurar);

//Arrow functions
const arr = [1, 3, 4, 5, 6];

const novoArr = arr.map(item => item * 2);
console.log(novoArr);

const testar = () => ({ nome: 'Matheus' });
console.log(testar());

const newArr = arr.map((item) => {
    return item * 2;
});

//Valores padrão
const soma = (a = 3, b = 6) => a + b;

console.log(soma(1));
console.log(soma());

//Desestruturação de objetos
const usuario = {
    nome: 'Matheus',
    idade: 23,
    endereco: {
        cidade: 'Magé',
        estado: 'Rio de Janeiro',
    },
};

const { nome, idade, endereco: { cidade } } = usuario;

console.log(nome, idade, cidade);

function mostraNome(usuario) {
    console.log(usuario.nome);
}

function mostrarNome({ nome }) {
    console.log(nome);
}

mostraNome(usuario);
mostrarNome(usuario);

// Operadores rest/spread
// REST - Pega o resto das propriedades
const usuario = {
    nome: 'Matheus',
    idade: 12,
    empresa: 'ED'
};

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

const arr = [1, 2, 3, 4];
const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

function soma(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(soma(1, 2, 3));

function soma(a, b, ...params) {
    return params;
}

console.log(soma(1, 2, 3));

// SPREAD
// Junta dois arrays em um
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const usuario1 = {
    nome: 'Fulano',
    idade: 23,
    empresa: 'ED',
};

console.log(usuario1);

const usuario2 = { ...usuario1, nome: 'Matheus' };

console.log(usuario2);

//Template Literals
const nome = 'Matheus';
const idade = 23;

console.log(`Meu nome é ${nome} e tenho ${idade} anos`);

//Short syntax de objetos - Usada quando o nome da propriedade de um objeto é igual 
//ao nome da propriedade de outro objeto que queremos repasssar.
const nome = 'Matheus'
const idade = 23;

const usuario = {
    nome,
    idade,
    empresa: 'ED',
};

console.log(usuario);

//Async e Await
const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Ok')
    }, 2000);
});

//Promise
minhaPromise().then(response => {
    console.log(response);
})

    .catch(err => {
        console.log(err)
    });

// Uma async function sempre vira uma promise
async function executaPromise() {
    // A próxima linha só executa quando o await terminar.
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

// //Função async com arrow function
// const executaPromise = async () => {
//     // A próxima linha só executa quando o await terminar.
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
// }

// Await só pode ser executado dentro de uma função assíncrona
executaPromise();

// Axios
class Api {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        }
        catch (err) {
            console.warn('Erro na API');
        }
    }
}

Api.getUserInfo('momanhaes');
