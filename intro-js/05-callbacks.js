
// Objetos iterables
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < lista.length; i++) {
//     console.log(lista[i]);
// }

// lista.forEach(callback)
lista.forEach(function (value) {
    console.log(value ** 3);
})

function callback(value, index, array) {
    console.log(`${index}: ${value} - ${array}`);
}   