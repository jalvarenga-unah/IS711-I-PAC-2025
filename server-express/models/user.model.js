import db from '../config/database.js'

export async function getAllUsers({ role = null }) {

    const pool = await db.getConnection()

    let condicion = ''
    if (role) {
        condicion = `WHERE role = ? `
    }

    const [results] = await pool.query(`SELECT BIN_TO_UUID(id) AS id,  name,  username,  email,  phone,  
        role,  password,  must_change_password FROM users ${condicion}`, [role])

    return results
}

export async function getUserById(id) {


    const pool = await db.getConnection()

    const [results] = await pool.query(`SELECT BIN_TO_UUID(id) AS id,  name,  
        username,  email,  phone,  
        role,  password,  must_change_password
        FROM users WHERE  BIN_TO_UUID(id) = ? `, [id]) //bind params

    return results

}

export async function createUser(data) {

    const pool = await db.getConnection()

    const [results] = await pool.query(`INSERT INTO users (id, name, username, email, phone, role, 
                                        password, must_change_password) 
                                        VALUES ( UUID_TO_BIN(:id), :name, :username, :email, :phone, :role, NULL, 1  ) `, data)

    return results

}