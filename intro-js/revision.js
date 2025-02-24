
// #ejercicio 1

const palindormo = (cadena) => {
    const invertida = cadena     // -> 'hola'
        .split('')  // -> ['h', 'o', 'l', 'a']
        .reverse()  // -> ['a', 'l', 'o', 'h']
        .join('') // -> 'aloh'

    return cadena === invertida
}

// console.log(palindormo('hola')) // false
// console.log(palindormo('ana')) // true

// #ejercicio 2

const hayUnPar = (lista) => {

    // return lista.some((numero) => numero % 2 == 0)

    // for (let num of lista) {
    for (let num = 0; num < lista.length; num++) {
        if (lista[num] % 2 == 0) {
            return true // poner fin a la iteración y a la ejecución de la función 
        }

        console.log('continua el ciclo for')
    }

    console.log('terminó el for')



    return false
}

console.log(hayUnPar([1, 3, 5, 7, 9])) // false
console.log(hayUnPar([2, 3, 5, 7, 8])) // true