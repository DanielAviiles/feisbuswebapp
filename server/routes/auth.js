const express = require('express');
const router = express.Router();
const authC = require('../controller/authController');

router.post('/login', async (req, res) => {
  try {
    await authC.authLogin(req)
      .then((data) => res.json(data))
      .catch((err) => console.error(err));
  } catch (err) {
    console.warn(err);
  }
});

router.get('/verifyInfo', async (req, res) => {
  /* 
    QUERY PARAMETERS
    (q) => la consulta de email o cel que se desea realizar
    (type) => el tipo de busqueda, solo hay 2 tipos. 
      "email" solo busca por ese tipado
      "cel" colo busca por ese tipado
  */
  try {
    const { q, type } = req.query;
    await authC.verifyData(q, type)
      .then((data) => res.json(data[0].exist))
      .catch((err) => console.error(err));
  } catch (err) {
    console.warn(err);
  }
});

router.post('/register', async (req, res) => {
  try {
    await authC.registerUser(req)
      .then(() => res.json({status: 1, msg: 'Success'}))
      .catch((err) => res.json({status: 0, msg: `Error ${err}`}));
  } catch (err) {
    console.warn(err);
  }
});

module.exports = router;
