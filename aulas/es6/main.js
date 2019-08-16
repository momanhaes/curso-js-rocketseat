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
class Matematica {
    static soma(a, b) {
        return a + b;
    }
}

console.log(Matematica.soma(1, 2));

//Var, const e let
const a = 1;

const usuarios = {
    nome: 'Fulano'
};

usuarios.nome = 'Matheus';