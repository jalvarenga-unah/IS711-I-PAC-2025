import express, { json } from 'express' // "importando la instancia de express"
import users from './local_db/users.json' with { type: 'json' }
import { validateUser, validateUserPartial } from './schemas/user.js'
import { randomUUID } from 'node:crypto'

// createServer
const app = express() // "creando la instancia de express"

app.disable('x-powered-by') // "desactivando la cabecera x-powered-by"

// Middlewares

// me permite recibir datos en formato json en el body de la solicitud
app.use(json())

// se va a ejecutar en cada solicitud realizada al servidor web
// app.use((req, res, next) => {
//     // evaluar si la solicitud es segura
//     // evaluar si quien hace la solicutd está autenticado
//     // validar las sesiones

//     // evita que continue con la siguiente función
//     if (req.method !== 'POST') next()

//     let body = ''

//     req.on('data', (chunck) => {
//         console.log('chunck', chunck)
//         body += chunck.toString()
//     })

//     req.on('end', () => {
//         req.body = JSON.parse(body)
//         next()
//     })

// })

// La creacion de las rutas de mi aplicación
app.get('/', (req, res) => {
    res.send('Hola mundo desde Express js')

})

app.get('/users', (req, res) => {
    // realizado la conexion a BBDD

    // realizando la consulta a la BBDD

    const response = {
        success: true,
        data: users
    }

    res.json(response)
})

app.get('/users/:userId', (req, res) => {

    const { userId } = req.params

    //es necesario convertir el id a un número, porque
    // el id en la base de datos es un número
    // const parsedId = Number(userId)

    // if (isNaN(parsedId)) {
    //     res.status(400).json({
    //         success: false,
    //         message: 'El id debe ser un número'
    //     })
    // }

    const user = users.find((user) => user.id === userId)

    if (!user) {
        res.status(204).json({
            success: true,
            data: null
        })
    }

    const response = {
        success: true,
        data: user ?? null
    }

    res.status(200).send(response)

})

app.post('/users', (req, res) => {

    //✅ obteniendo los datos del body
    const data = req.body

    // validar que los datos estén completos o sean correctos
    const result = validateUser(data)

    if (!result.success) {
        res.status(400).json({
            success: false,
            message: result.error.errors.map(error => ({
                message: error.message,
                path: error.path[0]
            }))
        })
    }

    // insertar los datos en la BBDD
    const id = randomUUID()

    result.data.id = id

    users.push(result.data)

    //notificar al usuario que se ha creado el recursos

    res.status(201).json({
        success: true,
        data: result.data
    })

})
//user labs
app.patch('/users/:userId', (req, res) => {
    //1. obtener el id en la petción
    const { userId } = req.params

    //2. buscar si el recurso existe
    const user = users.find((user) => user.id === userId)

    //2.5 si no exiten el recurso, devolver un 404
    if (!user) {
        res.status(404).json({
            success: false,
            message: 'Usuario no existe'
        })
    }

    //3. obtener los datos del body y validarlos

    const data = req.body
    const result = validateUserPartial(data)

    if (!result.success) {
        res.status(400).json({
            success: false,
            message: result.error.errors.map(error => ({
                message: error.message,
                path: error.path[0]
            }))
        })
    }

    //4. actualizar los datos del recurso (deberia ser la ejecuion del querie para actualizar)
    const userIndex = users.findIndex((user) => user.id === userId)
    users[userIndex] = { ...user, ...result.data }
    //5. responder al usuario
    res.json({
        success: true,
        data: users[userIndex]
    })
})

app.delete('/users/:userId', (req, res) => {

    const { userId } = req.params

    const user = users.find((user) => user.id === userId)

    if (!user) {
        res.status(404).json({
            success: false,
            message: 'Usuario no existe'
        })
    }

    const userIndex = users.findIndex((user) => user.id === userId)

    if (userIndex === -1) {
        res.status(404).json({
            success: false,
            message: 'Usuario no existe'
        })
    }

    users.splice(userIndex, 1)

    res.json({
        success: true,
        data: user
    })
})


app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Recurso no encontrado'
    })
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`)
})