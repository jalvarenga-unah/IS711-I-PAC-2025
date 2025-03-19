import { Router } from 'express';
import UserController from '../controllers/user.js'
import { isAuth } from '../middlewares/is_auth.js';
import isAdmin from '../middlewares/is_admin.js';

// "creando la instancia de Router"
const userRoutes = Router(); // pseudo-instancia de express

userRoutes.get('/users', isAuth, UserController.getAll)
userRoutes.get('/users/:userId', isAuth, UserController.getById)

userRoutes.post('/users', [isAuth, isAdmin], UserController.create)
userRoutes.patch('/users/:userId', [isAuth, isAdmin], UserController.update)
userRoutes.delete('/users/:userId', [isAuth, isAdmin], UserController.delete)


export default userRoutes