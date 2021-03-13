const express = require('express');
const router = express.Router();
const loginC = require('../controller/authController');

router.post('/login', async (req, res) => {
  try {
    const resp = await loginC.authLogin(req);
    res.json(resp);
  } catch (err) {
    console.warn(err);
  }
});

router.get('/verifyInfo', async (req, res) => {
  try {
    const { q, type } = req.query;
    const exist = await loginC.verifyData(q, type);
    res.json(exist[0].exist);
  } catch (err) {
    console.warn(err);
  }
});

router.get('/verifyCelExist', async (req, res) => {
  try {
    const { q } = req.query;
    const exist = await loginC.verifyCelphone(q);
    res.json(exist[0].exist);
  } catch (err) {
    console.warn(err);
  }
});

router.post('/register', async (req, res) => {
  try {
    
  } catch (err) {
    console.warn(err);
  }
  // Planteaminto de registro de usuario enviando data al back(DB)
  // res.render();
  // res.json();
});

module.exports = router;
