import { Router } from 'express';
import UserController from '../controllers/user.js'

// "creando la instancia de Router"
const userRoutes = Router(); // pseudo-instancia de express

userRoutes.get('/users', UserController.getAll)
userRoutes.get('/users/:userId', UserController.getById)
userRoutes.post('/users', UserController.create)
userRoutes.patch('/users/:userId', UserController.update)
userRoutes.delete('/users/:userId', UserController.delete)


export default userRoutes