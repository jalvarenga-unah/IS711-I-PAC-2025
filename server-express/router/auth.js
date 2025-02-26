import { Router } from "express";

const authRoutes = Router();


authRoutes.post('/login', (req, res) => {
    const { email, password } = req.body

    res.json({
        success: true,
        data: {
            email,
            password
        }
    })

})

export default authRoutes;