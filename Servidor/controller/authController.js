const authM = require('../model/authModel');

const authLogin = async (req) => {
  const { email, passwd } = req.body;
  return await authM.authLoginM(email, passwd);
}
const verifyEmail = async (query) => (await authM.verifyEmailExist(query));

module.exports = {
  authLogin,
  verifyEmail
}