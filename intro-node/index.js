import { createServer } from 'node:http'

// nuestra instacia del servidor web
const server = createServer((request, response) => {

    console.log('Se ha recibido una solicitud')
    console.log(request.url)
    console.log(request.method)
    console.log(request.body)
    console.log(request.query)

    // request: contiene la información de la solicitud realizada por el cliente
    // los datos que el cliente envía al servidor, encabezados, cuerpo, etc.
    // metodo a través del cual se realizó la solicitud, la url, etc.
    // path, query, url, headers, etc.

    //response: contiene la información que el servidor enviará al cliente
    // cuerpo de la respuesta, encabezados, cookies, codigos de estado, etc.

    // establecemos el código de estado de la respuesta
    // establecemos el tipo de contenido que se enviará en la respuesta
    response.writeHead(200, { 'Content-Type': 'application/json' })

    if (request.url === '/') {
        response.end('Hola mundo desde Node JS!!!')
    } else if (request.url === '/users') {
        response.end('El listado de usuarios')
    } else {
        response.end('Ruta no encontrada')
    }

    //termina la solicitud y envía la respuesta al cliente
    // response.end('Hola Mundo, desde un servidor en NODE JS')
})

// indicamos un puerto en el cual el servidor estará escuchando las solicitudes
const puerto = 3000

//vamos a iniciar a escuchar las solicitudes / peticiones al servidor
server.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`)
})
