
const isAdmin = (req, res, next) => {


    if (req.params.role !== 'admin') {

        res.status(401).json(
            {
                success: false,
                message: 'No tiene permisos para realizar esta acción'
            }
        )

    }

    next()


}

export default isAdmin