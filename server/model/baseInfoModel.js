const pool = require('../database');

const baseInfoUserModel = async (userId) => {
  const data = await pool.query(`SELECT * FROM feisbus.usuario, feisbus.perfil
    WHERE usuario.id = ${userId} AND perfil.usuario_id = ${userId}`);
  if (data.length > 0) {
    const urlImgPerfil = await pool.query(`SELECT foto.imagen
      FROM foto, perfil WHERE foto.id = ${data[0].img_perfil}`);
    data[0].imgUrlPerfil = urlImgPerfil[0].imagen;
  }
  return data;
}

const postRealizados = async (perfilId) => {
  /* Solo se hara consultas a publicaciones propias
  del usuario actualmente logueado */
  const data = await pool.query(`SELECT 
      f.imagen urlimg, 
      p.descripcion,
      p.perfil_id perfilId,
      p.fecha_post fechaRealizada 
    FROM publicacion p
    LEFT JOIN foto f ON p.id = f.publicacion_id 
    WHERE p.perfil_id = ${perfilId} 
    ORDER BY p.fecha_post DESC`);
  return data;
}

const privacidadData = async () => (
  await pool.query('SELECT * FROM privacidad')
)

const postDataPublicacion = async (data) => {
  const resp = await pool.query(`INSERT INTO publicacion (descripcion, perfil_id, privacidad_id)
    VALUES('${data.descripcion}', ${data.perfil_id}, ${data.privacidad_id})`);
  return resp.insertId;
}

module.exports = {
  baseInfoUserModel,
  postRealizados,
  privacidadData,
  postDataPublicacion
}