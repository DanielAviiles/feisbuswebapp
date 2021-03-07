var express = require('express');
var router = express.Router();

/* GET home page. */
router.get(['/', '/home'], async (req, res, next)  => {
  // Planteamiento del la data de las publicaciones del home
  res.json();
});

router.get('/infouser', async (req, res) => {
  // Planteamiento para devolver la data del usuario logueado en perfil
  res.json();
});

module.exports = router;
