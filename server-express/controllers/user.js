// se va a encargar de manejar las peticiones de los usuarios
import users from '../local_db/users.json' with { type: 'json' }
import { validateUser, validateUserPartial } from '../schemas/user.js'
import { randomUUID } from 'node:crypto'

export default class User {

    //no requiere una instancia para ser llamado
    static getAll = (req, res) => {
        const response = {
            success: true,
            data: users
        }

        res.json(response)
    }

    static getById = (req, res) => {
        const { userId } = req.params
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
    }

    static create = (req, res) => {

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

    }

    static update = (req, res) => {
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
    }

    static delete = (req, res) => {

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
    }

}