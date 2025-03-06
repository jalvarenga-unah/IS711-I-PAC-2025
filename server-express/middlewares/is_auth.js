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
        const { role } = jwt.verify(token, process.env.SECRET_KEY);

        req.params.role = role

        // console.log(role)
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