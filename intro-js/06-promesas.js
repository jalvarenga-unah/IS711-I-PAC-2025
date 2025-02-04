

function suma(a, b) {
    return a + b
}

// Promesas -> una tarea que se resuelve o falla en el futuro
// es una función que recibe un callbac y me permite
// trabajar con tareas asincronas

//de forma asincrona, que no bloquea el hilo principal

// de forma sincrona, que detiene el hilo principal


//Estados de las promesas
// 1. Pendiente
// 2. Resuelta / Aceptada
// 3. Rechazada

// es una función asincrona
const miPromesa = (n1, n2) => {

    return new Promise((resolve, reject) => {
        // voy hacer la logica de la operación asincrona
        setTimeout(() => {
            const resultado = suma(n1, n2)

            if (resultado > 10) {
                // voy a ejecutar para indicar que la promesa se resolvio

                resolve(resultado)

            }

            reject('Ocurrió un error inesperado')
        }, 2000)
    }) // la instancia de la promesa 

}

// asincrono
// miPromesa(5, 30)
//     .then((resultado) => {
//         console.log('Estoy dentro del metodo then')
//         console.log('El resultado es: ', resultado)

//         console.log('Fin del programa: ', resultado)
//     })
//     .catch((error) => {
//         console.log('Estoy dentro del metodo catch')
//         console.log('Ocurrió un error: ', error)
//     })
//     .finally(() => {
//         //Siempre se ejecuta al finalizar sin importar si se resuelve o rechaza
//         console.log('Estoy dentro del metodo finally')
//     })

// sincrono

// async function funcionAsincrona2() { 

// }

// const funcionAsincrona = async () => {


(async () => {


    console.log('Inicio del programa')

    // try {
    //     const resultado = await miPromesa(5, 30)
    //     console.log('El resultado es: ', resultado)
    //     const resultado2 = await miPromesa(54, 30)
    //     console.log('El resultado2 es: ', resultado2)
    //     const resultado3 = await miPromesa(55, 30)
    //     console.log('El resultado3 es: ', resultado3)

    // } catch (error) {
    //     console.log('Ocurrió un error: ', error)
    // }



    miPromesa(5, 30).then((resultado) => {
        console.log('Estoy dentro del metodo then')
        console.log('El resultado es: ', resultado)

        console.log('Fin del programa: ', resultado)
    })
        .catch((error) => {
            console.log('Estoy dentro del metodo catch')
            console.log('Ocurrió un error: ', error)
        })


    miPromesa(15, 30).then((resultado) => {
        console.log('Estoy dentro del metodo then')
        console.log('El resultado es: ', resultado)

        console.log('Fin del programa: ', resultado)
    })
        .catch((error) => {
            console.log('Estoy dentro del metodo catch')
            console.log('Ocurrió un error: ', error)
        })



    miPromesa(53, 30).then((resultado) => {
        console.log('Estoy dentro del metodo then')
        console.log('El resultado es: ', resultado)

        console.log('Fin del programa: ', resultado)
    })
        .catch((error) => {
            console.log('Estoy dentro del metodo catch')
            console.log('Ocurrió un error: ', error)
        })
    console.log('Fin del programa')
})();
