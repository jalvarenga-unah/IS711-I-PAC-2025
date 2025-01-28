const edad = 18 // numerico
// >, <, >=, <=, ==, !=,           (!== , ===,)

// FALSY: 0, false, '', NaN
// NULISH: undefined, null
// TRUTHY: cualquier otro valor

// NaN: Not a Number, no se puede evaluar

let nombre
console.log(Number(nombre))
console.log(nombre)
console.log(typeof nombre) // devuelve el tipo de dato en formato string

if (nombre) {
    console.log('Se cumple la condición')
} else {
    console.log('no se cumple nada')
}

// OPERADORES LOGICOS
// AND: &&
// OR: ||
// NOT: !