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
const verifyInfo = async (query) => {
  let where = `WHERE (usuario.email LIKE '%${query}%') OR (usuario.celular LIKE '%${query}%')`;
  return await pool.query(`SELECT COUNT(*) exist FROM usuario ${where}`);
}
const authRegister = async (newUser, newPerfil) => {
  try {
    await pool.query('INSERT INTO usuario SET ?', [newUser])
      .then(async (res) => {
        let datosPerfil = {
          usuario_id: res.insertId,
          fecha_nacimiento: newPerfil.fecha_nacimiento,
          orientacion_sexual_id: newPerfil.orientacion_sexual
        }
        await pool.query('INSERT INTO perfil SET ?', [datosPerfil])
          .then((res) => console.log(`REGISTRO EXITOSO DE PERFIL N${res.insertId}`))
          .catch((err) => console.error(err));
    }).catch((err) => console.error(err));
  } catch (err) {
    console.warn(err);
  }
}
const infoGeneros = async () => {
  try {
    return await pool.query('SELECT * FROM orientacion_sexual');
  } catch (err) {
    return { status: 400, msg: err };
  }
}

module.exports = {
  authLoginM,
  authRegister,
  verifyInfo,
  infoGeneros
}