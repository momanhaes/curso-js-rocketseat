//Exercício 1
var endereco = { rua: "Rua dos Pinheiros", numero: 1293, bairro: "Centro", cidade: "São Paulo", uf: "SP" }

function buscarEndereco() {
    console.log(`O usuário mora em ${endereco.cidade} / SP, no bairro ${endereco.bairro}, na ${endereco.rua} com nº ${endereco.numero}.`);
    // O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com nº 1293.
};

buscarEndereco();
// Fim Exercício 1

//Exercício 2
function pares(x, y) {
    var x, y;
    while (x <= y) {
        if (x % 2 === 0)
        console.log(`${x}` );
        x++; 
    }     
};

pares(11, 100);
// Fim Exercício 2

// // Exercício 3
// function temHabilidade(skills) {
//     var tem = false;
//     for (var i = 0; i <= skills.length - 1; i++) {
//         console.log(skills[i]); 
//         tem = skills[i] === 'JS' ? true : false;
//     }
//     return console.log(tem);
// }

// var skills = ['Java', 'C', 'JS'];
// console.log(temHabilidade(skills));

function temHabilidade(skills) {

    var tem = false;

    for (var i = 0; i <= skills.length - 1; i++) {

        if (skills.indexOf('JS') !== -1)
            tem = true;
        else
            tem = false;
    }

    return tem;
}

var skills = ['Java', 'C', 'JS'];
console.log(temHabilidade(skills));

// Fim Exercício 3

// Exercício 4
function experiencia(anos) {

    var exp = 'Não retornado';

    switch (anos) {
        case 0:
        case 1: exp = 'Iniciante';
            break;
        case 2:
        case 3: exp = 'Intermediário';
            break;
        case 4:
        case 5:
        case 6: exp = 'Avançado';
            break;
        case 7: exp = 'Jedi Master';
            break;
    }
    console.log(exp);
}

function experiencia(anos) {
    var exp;

    if (anos >= 0 && anos <= 1)
        exp = 'Iniciante';

    else if (anos > 1 && anos <= 3)
        exp = 'Intermediário';

    else if (anos > 3 && anos <= 6)
        exp = 'Avançado';

    else if (anos >= 7)
        exp = 'Jedi Master';

    else
        exp = 'Idade inválida';

    return console.log(exp);

}

var anosEstudo = -10;
experiencia(anosEstudo);
//Fim Exercício 4

// Exercício 5
function exibeHabilidades(usuarios) {
    for (usuario of usuarios) {
        console.log(
            "O " +
            usuario.nome +
            " possui as habilidades: " +
            usuario.habilidades.join(", ")
        );
    }
}

function exibeHabilidades(usuarios) {

    for (usuario of usuarios) {
        console.log(`O ${usuario.nome} possui as habilidades: ${usuario.habilidades.join(", ")}`);
    }
}

var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

exibeHabilidades(usuarios);

//O Diego possui as habilidades: Javascript, ReactJS, Redux
//O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir


// //Fim Exercício 5