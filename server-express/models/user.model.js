import db from '../config/database.js'

export async function getAllUsers() {

    const pool = await db.getConnection()

    const [results] = await pool.query(`SELECT BIN_TO_UUID(id) AS id,  name,  username,  email,  phone,  
        role,  password,  must_change_password FROM users`)

    return results
}