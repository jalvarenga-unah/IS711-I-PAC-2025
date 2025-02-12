import express from 'express' // "importando la instancia de express"
import users from './local_db/users.json' with { type: 'json' }

// createServer
const app = express() // "creando la instancia de express"

app.disable('x-powered-by') // "desactivando la cabecera x-powered-by"

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
    const parsedId = Number(userId)

    if (isNaN(parsedId)) {
        res.status(400).json({
            success: false,
            message: 'El id debe ser un número'
        })
    }

    const user = users.find((user) => user.id === parsedId)

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

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`)
})