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
const verifyInfo = async (query, type) => {
  let where = '';
  switch (type) {
    case 'email':
      where = `WHERE usuario.email LIKE '%${query}%'`;
      break;
    case 'cel':
      where = `WHERE usuario.celular LIKE '%${query}%'`;
      break;
  }
  return await pool.query(`SELECT COUNT(*) exist FROM usuario ${where}`);
}
const authRegister = async (newUser) => {
  
}

module.exports = {
  authLoginM,
  authRegister,
  verifyInfo
}