import express, { json } from 'express' // "importando la instancia de express"
import userRoutes from './router/users.js'
import authRoutes from './router/auth.js'
import cors from 'cors'
import dotenv from 'dotenv'

// createServer
const app = express() // "creando la instancia de express"

dotenv.config() // hacemos disponible las variables de entorno

app.disable('x-powered-by') // "desactivando la cabecera x-powered-by"

// Middlewares

// me permite recibir datos en formato json en el body de la solicitud
app.use(json())
app.use(cors({
    // origin: 'http://localhost:53734'
    // origin: [
    //     'http://localhost:53734',
    //     'https://midominio.com',
    //     'https://dev.midominio.com',
    // ],
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
})) // <- habilita todos los origenes de peticiones

//Rutas
app.use(authRoutes)
app.use(userRoutes) // la adicion de las rutas de el recurso de Usuarios

// La creacion de las rutas de mi aplicación
app.get('/', (req, res) => {
    res.send('Hola mundo desde Express js')

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