import { Router } from "express";
import { AuthController } from "../controllers/auth.js";
import { isAuth } from "../middlewares/is_auth.js";

const authRoutes = Router();

authRoutes.post('/login', AuthController.login)
authRoutes.post('/set-password', isAuth, AuthController.setPassword)

export default authRoutes;