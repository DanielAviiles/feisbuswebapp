var express = require('express');
var router = express.Router();

router.post('/auth-user', async (req, res, next) => {
  // const resp = await loginC.verify();
  res.json({});
});

router.post('/register-user', async (req, res) => {
  // Planteaminto de registro de usuario enviando data al back(DB)
  // res.render();
  // res.json();
});

module.exports = router;
