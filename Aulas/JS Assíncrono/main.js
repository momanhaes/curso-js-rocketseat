// // Requisições AJAX
// var xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://api.github.com/users/momanhaes');
// xhr.send(null);

// //onreadystatechange é executada toda vez que o atributo readyState é modificado.
// xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4) {
//         console.log(JSON.parse(xhr.responseText));
//     }
// }

// // Promises

// var minhaPromise = function () {
//     return new Promise(function (resolve, reject) {
//         var xhr = new XMLHttpRequest();
//         xhr.open('GET', 'https://api.github.com/users/momanhaes');
//         xhr.send(null);

//         xhr.onreadystatechange = function () {
//             if (xhr.readyState === 4) {
//                 if (xhr.status === 200) {
//                     resolve(JSON.parse(xhr.responseText));
//                 }
//                 else {
//                     reject('Erro na requisição');
//                 }
//             }
//         }
//     });
// }

// var resultado = minhaPromise();
// console.log(resultado);

// minhaPromise()

//Axios
axios.get('https://api.github.com/users/momanhaes')
    .then(function(response) {
        console.log(response.data.avatar_url);
    })
    .catch(function(error) {
        console.warn(error);
    });