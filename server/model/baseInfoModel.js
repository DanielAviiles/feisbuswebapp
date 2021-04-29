const pool = require('../database');

const baseInfoUserModel = async (userId) => (
  await pool.query(`SELECT * FROM feisbus.usuario, feisbus.perfil
    WHERE usuario.id = ${userId} AND perfil.usuario_id = ${userId}`)
);

module.exports = {
  baseInfoUserModel
}