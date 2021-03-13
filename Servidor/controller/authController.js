const authM = require('../model/authModel');

const authLogin = async (req) => {
  const { email, passwd } = req.body;
  return await authM.authLoginM(email, passwd);
}
const verifyData = async (query, type) => (await authM.verifyInfo(query, type));

module.exports = {
  authLogin,
  verifyData
}