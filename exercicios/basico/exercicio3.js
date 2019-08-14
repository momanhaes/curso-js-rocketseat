
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