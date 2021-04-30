const pool = require('../database');

const baseInfoUserModel = async (userId) => {
  const data = await pool.query(`SELECT * FROM feisbus.usuario, feisbus.perfil
    WHERE usuario.id = ${userId} AND perfil.usuario_id = ${userId}`);
  const urlImgPerfil = await pool.query(`SELECT foto.imagen
    FROM foto, perfil WHERE foto.id = ${data[0].img_perfil}`);
  data[0].imgUrlPerfil = urlImgPerfil[0].imagen;
  return data;
}

module.exports = {
  baseInfoUserModel
}