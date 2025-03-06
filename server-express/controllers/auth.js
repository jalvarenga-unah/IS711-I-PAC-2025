import users from '../local_db/users.json' with { type: 'json' }
import jsonwebtoken from 'jsonwebtoken'

export class AuthController {

    static login(req, res) {

        const { username, password } = req.body;

        const user = users.find(user => user.username === username);

        if (!user) {
            res.status(404).json({
                success: false,
                message: 'Credenciales incorrectas'
            });
        }

        if (password !== user.password) {
            res.status(404).json({
                success: false,
                message: 'Credenciales incorrectas'
            });
        }


        if (user.must_change_password === 1) {

            const token = jsonwebtoken.sign({
                'username': user.username,
            }, process.env.SECRET_KEY, {
                expiresIn: '1h'
            });

            res.status(200).json({
                success: true,
                data: {
                    //un token con info necesaria para el cambio de contraseña
                    must_change_password: true,
                    token: token
                }
            });
        }


        const token = jsonwebtoken.sign({
            'iat': new Date().getTime(),
            'username': user.username,
            'role': user.role
        }, process.env.SECRET_KEY)

        res.status(200).json({
            success: true,
            data: {
                name: user.name,
                email: user.email,
                username: user.username,
                token: token
                //token con info para las consultas de los recursos
            }
        });

    }

    static setPassword(req, res) {

        //TODO: 
    }


}