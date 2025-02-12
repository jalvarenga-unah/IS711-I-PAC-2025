import express from 'express' // "importando la instancia de express"


// createServer
const app = express() // "creando la instancia de express"

// La creacion de las rutas de mi aplicación
app.get('/', (req, res) => {
    res.send('Hello World')

})

app.get('/users', (req, res) => {

})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`)
})