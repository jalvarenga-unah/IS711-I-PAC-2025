import jwt from 'jsonwebtoken'

export const isAuth = (req, res, next) => {

    const authHeader = req.headers.authorization // Bearer jbnfewkjf2uy3rlkm4fdwuhef

    if (!authHeader) {
        res.status(401).json(
            {
                success: false,
                message: 'Debe iniciar sesión'
            }
        )
    }

    const token = authHeader.split(' ')[1]

    //comprobar si es un token válido
    try {
        jwt.verify(token, 'jd$63nf028ed23f5ok28345_65=24');
        next()
    } catch (err) {
        res.status(401).json(
            {
                success: false,
                message: err.message
            }
        )
    }

}