const pool = require('../database');

const authLoginM = async (email, passwd) => {
  return await pool.query(`SELECT COUNT(*) exist 
    FROM usuario 
    WHERE
        usuario.email = '${email}' 
        AND usuario.passwd = '${passwd}'`);
}

const authRegister = async (newUser) => {
  const exist = await pool.query(`SELECT COUNT(*) exist 
    FROM usuario 
    WHERE
        usuario.email = '${newUser.email}'`);
  if (JSON.stringify(resp[0].exist) == '1') {
    console.log('Existe un usario');
    return JSON.stringify(exist[0].exist);
  }
  console.log('No existe');
}

module.exports = {
  authLoginM,
  authRegister
}