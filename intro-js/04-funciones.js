

console.log(saludo);
const nombre = 'Pedro'
// orden de declaración de funciones es de nivel superior

// las funciones retornan undefined si no se les asigna un valor de retorno
function saludo() {
    this.nombre = 'Juan';
    console.log('Hola ' + nombre);
}


function saludo2(nombre, apellido, edad) {

    // return 'Holaaaaa ' + nombre + ' ' + apellido + ' ' + edad;
    return `Hola ${nombre} ${apellido}, tengo ${edad} años  `
}


// argumentos con nombre
function saludo3({ nombre, apellido, edad }) {
    return `Hola ${nombre} ${apellido}, tengo ${edad} años  `
}

// saludo3 = 'algo'

console.log(saludo3)

console.log(saludo());
console.log(saludo2('Juan', 'Alvarenga', 4));

// parámetros posicionales
console.log(saludo2(4, 'Alvarenga', 'Juan'));

const params = {
    edad: 4,
    apellido: 'Alvarenga',
    nombre: 'Juan',
    carrera: 'Ing. en Sistemas'
}

console.log(saludo3({
    nombre: 'Pedro',
    apellido: 'Perez',
    edad: 40,
}));

// función de flecha (funciones lambda)

const saludo4 = function () {
    console.log('Hola, soy una función anonima pasada como referencia');
}

//TODO: restricciones del objeto "this"
const saludo5 = () => {
    console.log('Hola, soy una función flecha');
}

saludo4()
saludo5()