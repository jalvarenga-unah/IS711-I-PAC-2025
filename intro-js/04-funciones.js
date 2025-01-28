

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

console.log(saludo());
console.log(saludo2('Juan', 'Alvarenga', 4));
console.log(saludo2(4, 'Alvarenga', 'Juan'));