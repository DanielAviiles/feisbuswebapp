const express = require('express');
const router = express.Router();
const loginC = require('../controller/authController');

router.post('/login', async (req, res) => {
  try {
    const resp = await loginC.authLogin(req);
    res.json(JSON.stringify(resp[0].exist));
  } catch (err) {
    console.warn(err);
  }
});

router.get('/verifyEmailExist', async (req, res) => {
  try {
    const { q } = req.query;
    const exist = await loginC.verifyEmail(q);
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
