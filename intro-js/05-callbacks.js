
// Objetos iterables
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < lista.length; i++) {
//     console.log(lista[i]);
// }

// lista.forEach(callback) // <- función pasada por referencia
lista.forEach(function (value) {
    // console.log(value ** 3);
})

function callback(value, index, array) {
    console.log(`${index}: ${value} - ${array}`);
}

//? continuación
// for (const valor of lista) {
//     console.log(valor);
// } 

// una copia de la lista original
const nuevaLista = lista.map((valor) => {
    // console.log(valor);
    // return valor // devuelve un nuevo elemento al array que va a retornar el map
    if (valor % 2 === 0) {
        return valor
    }

})

console.log(nuevaLista);


const pares = lista.filter((valor) => {
    return valor % 2 === 0
})

console.log(pares);

const postres = [{
    nombre: 'Torta de chocolate',
    precio: 100
}, {
    nombre: 'Pie de limón',
    precio: 50
}, {
    nombre: 'Gelatina',
    precio: 20
}]

// const evaluacion = postres.filter((postre) => {
//     return postre.precio < 40
// })

const evaluacion = postres.every((postre) => {
    return postre.precio < 40
})

// muta o transforma el array original
lista.sort((a, b) => {
    return a - b
})

const ordenados = lista.toSorted((a, b) => a - b); // no muta el array original

console.log(ordenados);
console.log(evaluacion ? "si hay" : 'No hay postres baratos');


const saludo = () => {
    console.log(`Hola!!`);
}

const persona = {
    'nombre': 'Juan',
    'apellido': 'Perez',
    'edad': 30,
    'accion': saludo
}

persona.accion();

