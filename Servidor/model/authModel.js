const pool = require('../database');

const authLoginM = async (email, passwd) => {
  return await pool.query(`SELECT COUNT(*) exist 
    FROM usuario 
    WHERE
        usuario.email = '${email}' 
        AND usuario.passwd = '${passwd}'`);
}
const verifyEmailExist = async (query) => {
  return await pool.query(`SELECT COUNT(*) exist
    FROM usuario
    WHERE usuario.email LIKE '%${query}%'`);
}
const authRegister = async (newUser) => {
  
}

module.exports = {
  authLoginM,
  authRegister,
  verifyEmailExist
}