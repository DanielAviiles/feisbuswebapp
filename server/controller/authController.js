const authM = require('../model/authModel');

const authLogin = async (req) => {
  const { email, passwd } = req.body;
  return await authM.authLoginM(email, passwd);
}
const verifyData = async (query, type) => (await authM.verifyInfo(query, type));
const registerUser = async (req) => {
  const {
    nombres, apellidos,
    email, celular, passwd,
    fecha_nacimiento, orientacion_sexual
  } = req.body;
  const newUser = {
    nombres, apellidos,
    email, celular, passwd,
  }
  const newPerfil = { fecha_nacimiento, orientacion_sexual }
  return await authM.authRegister(newUser, newPerfil);
}

module.exports = {
  authLogin,
  verifyData,
  registerUser
}