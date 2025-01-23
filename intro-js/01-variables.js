// ? Global Scope / Scope (alcance)
// variables

// ❌ no deberíamos definir una variable

//define las variables a nivel Global
var nombre = 'Juan'
var nombre = 'Pedro' // <- sobreescribiendo el valor de la variable orginal

//muestra un mensaje en consola
//? console.log(nombre)

// su alcance es de bloque
// let apellido = 'Alvarenga'

//? console.log(apellido)

//constante de bloque
const host = '127.0.0.1'
// host = '127.0.0.2' // ! no se puede reasignar el valor de una constante

//? console.log(host)

console.log('Scope Global')
console.log(nombre)
console.log(apellido)
console.log(host)

console.log('-------------------')
// un nuevo scope
{// scope hijo

    let nombre = 'Maria'
    nombre = 23
    var apellido = 'Nuevo apellido'

    {
        // scope nieto
        const nombre = 'Otro nombre'
        console.log('Scope nieto')
        console.log(nombre)
    }

    // nombre = 'Otro Otro nombre'

    console.log('Scope de bloque')
    console.log(nombre)
    console.log(apellido)
    console.log(host)

}
console.log('-------------------')
console.log('Despues del scope de bloque')
console.log(nombre)
console.log(apellido) // no ha sido declarada