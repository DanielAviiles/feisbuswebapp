const pool = require('../database');

const authLoginM = async (email, passwd) => {
  const exist = await pool.query(`SELECT COUNT(*) exist 
    FROM usuario 
    WHERE
        (usuario.email = '${email}' 
          AND usuario.passwd = '${passwd}') 
        OR (usuario.celular = '${email}'
          AND usuario.passwd = '${passwd}')`);
  if (exist[0].exist == 1) {
    const idUser = await pool.query(`SELECT usuario.id idUser 
      FROM usuario 
      WHERE
          (usuario.email = '${email}' 
            AND usuario.passwd = '${passwd}') 
          OR (usuario.celular = '${email}'
            AND usuario.passwd = '${passwd}')`);
    
    return {
      exist: exist[0].exist,
      userLogin: idUser[0].idUser
    }
  }
  return { exist: 0, userLogin: '' };
}
/* SELECT COUNT(*) exist 
FROM usuario 
WHERE
    (usuario.email = '317526513' 
    	AND usuario.passwd = 'abcd.1234')
    OR 
    (usuario.celular = '317526513'
    	AND usuario.passwd = 'abcd.1234') */
const verifyEmailExist = async (query) => (
  await pool.query(`SELECT COUNT(*) exist
    FROM usuario
    WHERE usuario.email LIKE '%${query}%'`)
);
const verifyCelExist = async (query) => (
  await pool.query(`SELECT COUNT(*) exist
      FROM perfil 
      WHERE perfil.celular LIKE '%${query}%'`)
);
const authRegister = async (newUser) => {
  
}

module.exports = {
  authLoginM,
  authRegister,
  verifyEmailExist,
  verifyCelExist
}