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

// function experiencia(anos) {
//     var exp;

//     if (anos >= 0 && anos <= 1)
//         exp = 'Iniciante';

//     else if (anos > 1 && anos <= 3)
//         exp = 'Intermediário';

//     else if (anos > 3 && anos <= 6)
//         exp = 'Avançado';

//     else if (anos >= 7)
//         exp = 'Jedi Master';

//     else
//         exp = 'Idade inválida';

//     return console.log(exp);

// }

var anosEstudo = -10;
experiencia(anosEstudo);