console.log('estructuras')

// * Listas
const postres = [1, 2, 3]

postres.push('Torta de chocolate')
postres.push('Helado')
postres.unshift('Tiramisu')
postres.push(true)
postres.push([1, 2])

postres.pop() // elimina el último elemento
console.log(postres.length) // cantidad de elementos
console.log(postres[0])

console.log(postres)

const backup = postres.slice(0, 3) // slice no muta la lista original y devuelve una nueva lista con los elementos seleccionados
const eliminados = postres.splice(0, 3) // splice muta la lista original y devuelve una nueva lista con los elementos eliminados

console.log(backup)
console.log(eliminados)
//sobreescribiendo la referencia de la lista
// postres = [
//     'torta de chocolate',
// ]

console.log(postres)

// * Objetos / Mapas / Diccionarios

// clave - valor
const mascota = {
    nombre: 'Apolo',
    raza: 'Terrier'
}

mascota.edad = 3
mascota['apodo'] = 'Apolito'

console.log(mascota)