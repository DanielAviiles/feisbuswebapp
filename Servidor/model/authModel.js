const pool = require('../database');

const authLoginM = async (email, passwd) => (
  await pool.query(`SELECT COUNT(*) exist 
    FROM usuario 
    WHERE
        usuario.email = '${email}' 
        AND usuario.passwd = '${passwd}'`)
);
const verifyEmailExist = async (query) => (
  await pool.query(`SELECT COUNT(*) exist
    FROM usuario
    WHERE usuario.email LIKE '%${query}%'`)
);
const authRegister = async (newUser) => {
  
}

module.exports = {
  authLoginM,
  authRegister,
  verifyEmailExist
}