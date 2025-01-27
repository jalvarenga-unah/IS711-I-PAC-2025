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

// console.log(postres)

const backup = postres.slice(0, 3) // slice no muta la lista original y devuelve una nueva lista con los elementos seleccionados
const eliminados = postres.splice(0, 3) // splice muta la lista original y devuelve una nueva lista con los elementos eliminados

// console.log(backup)
// console.log(eliminados)
//sobreescribiendo la referencia de la lista
// postres = [
//     'torta de chocolate',
// ]

// console.log(postres)

// * Objetos / Mapas / Diccionarios

// clave - valor
const mascota = {
    nombre: 'Apolo',
    raza: 'Terrier'
}

//agrega una propiedad al objeto
mascota.edad = 3
mascota['apodo'] = 'Apolito' //modifica el valor

//elimina una propiedad del objeto
delete mascota['edad']

console.log(mascota)

// esto no es una copia
// const copiaMascota = mascota

// copiaMascota.nombre = 'Zeus'

// console.log(mascota)

// Desestructuración
// ... spread / rest
const copiaMascota = { ...mascota }

copiaMascota.nombre = 'Zeus'

const copiaNumeros = [...postres]

// console.log('original: ', mascota)
// console.log('copia', copiaMascota)

// console.log('original: ', postres)
// copiaNumeros.push('Torta de chocolate')

// console.log('copia', copiaNumeros)

const nombre = 'Juan Perez'
const edadMascota = mascota.edad

const { nombre: nombreMascota, edad, raza } = mascota

const user = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
};


// const company = { ...user.company }
const { company } = user
const { name, queso } = company

// const { company: { name } } = user

console.log(queso) // esto es undefined
console.log(company)
console.log(name)

const { address } = user
const { geo, city, zipcode } = address
const { lat, lngs } = geo

const superHeroes = [
    'Superman',
    'Batman',
    'flash',
    'Wonder Woman'
]

// const firtHero = superHeroes[0]
const [primerValor, segundoValor, ...restantes] = superHeroes

console.log(primerValor)
console.log(segundoValor)
console.log(restantes)