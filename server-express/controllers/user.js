// se va a encargar de manejar las peticiones de los usuarios
import users from '../local_db/users.json' with { type: 'json' }
import { validateUser, validateUserPartial } from '../schemas/user.js'
import { randomUUID, randomBytes } from 'node:crypto'
import { sendResponse } from '../utils/response.js'
import * as UserModel from '../models/user.model.js'

export default class User {

    //no requiere una instancia para ser llamado
    static getAll = async (req, res) => {

        try {

            const { role } = req.query

            const resultados = await UserModel.getAllUsers({ role })

            sendResponse(res, 200, resultados, 'Lista de usuarios')
        } catch (error) {
            sendResponse(res, 500, null, error)
        }


        // sendResponse({ res, status: 200, data: users, message: 'Lista de usuarios' })
    }

    static getById = async (req, res) => {
        const { userId } = req.params

        try {
            const user = await UserModel.getUserById(userId)

            console.log(user)

            if (!user) {
                sendResponse(res, 204, null, 'No se encontró el usuario')
            }

            const response = {
                success: true,
                data: user ?? null
            }

            sendResponse(res, 200, response, 'Información del usuario')
        } catch (error) {
            sendResponse(res, 500, null, error)
        }
    }

    static create = (req, res) => {

        //✅ obteniendo los datos del body
        const data = req.body

        // validar que los datos estén completos o sean correctos
        const result = validateUser(data)

        if (!result.success) {

            sendResponse(res, 400, response, result.error.errors.map(error => ({
                message: error.message,
                path: error.path[0]
            })))
        }

        // insertar los datos en la BBDD
        const id = randomUUID()

        result.data.id = id //TODO: revisar que pasó al guardar el registro

        console.log(result.data)
        UserModel.createUser(result.data)

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