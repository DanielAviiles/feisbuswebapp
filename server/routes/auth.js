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
  */
  try {
    const { q } = req.query;
    await authC.verifyData(q)
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

router.get('/info-generos', async (req, res) => {
  try {
    await authC.getGeneros().then((data) => res.json(data));
  } catch (err) {
    console.warn(err);
  }
});

module.exports = router;
