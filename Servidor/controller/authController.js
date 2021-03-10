const authM = require('../model/authModel');

const authLogin = async (req) => {
  const { email, passwd } = req.body;
  return await authM.authLoginM(email, passwd);
}

module.exports = {
  authLogin
}