import { z } from 'zod'

const userSchema = z.object({
    "name": z.string({
        required_error: "El nombre es obligatorio",
        invalid_type_error: "El nombre debe ser un texto",
    }).min(3).max(100),
    "username": z.string().min(6).max(20),
    "email": z.string().email().endsWith('@unah.hn', {
        message: "Debe ser un estudiante de la UNAH"
    }),
    "phone": z.number({
        required_error: "El teléfono es obligario",
        invalid_type_error: "El teléfono debe ser un número",
    }).int().positive().optional(),
    "role": z.enum(['admin', 'viewer'])
})

export const validateUser = (data) => {
    return userSchema.safeParse(data)
}

export const validateUserPartial = (data) => {
    return userSchema.partial().safeParse(data)
}