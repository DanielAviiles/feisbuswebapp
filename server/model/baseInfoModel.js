const pool = require('../database');

const baseInfoUserModel = async (userId) => {
  const data = await pool.query(`SELECT * FROM feisbus.usuario, feisbus.perfil
    WHERE usuario.id = ${userId} AND perfil.usuario_id = ${userId}`);
  const urlImgPerfil = await pool.query(`SELECT foto.imagen
    FROM foto, perfil WHERE foto.id = ${data[0].img_perfil}`);
  data[0].imgUrlPerfil = urlImgPerfil[0].imagen;
  return data;
}

const postRealizados = async (perfilId) => {
  // Solo se hara consultas a publicaciones propias
  // del usuario actualmente logueado
  const data = await pool.query(`SELECT 
      foto.imagen urlimg, 
      publicacion.descripcion,
      publicacion.perfil_id perfilId,
      publicacion.fecha_post fechaRealizada 
    FROM 
      publicacion, 
      foto 
    WHERE 
      publicacion.perfil_id = ${perfilId} AND 
      publicacion.id = foto.publicacion_id`);
  return data;
}

module.exports = {
  baseInfoUserModel,
  postRealizados
}