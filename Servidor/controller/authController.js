const authM = require('../model/authModel');

const authLogin = async (req) => {
  const { email, passwd } = req.body;
  return await authM.authLoginM(email, passwd);
}
const verifyEmail = async (query) => (await authM.verifyEmailExist(query));
const verifyCelphone = async (query) => (await authM.verifyCelExist(query));

module.exports = {
  authLogin,
  verifyEmail,
  verifyCelphone
}