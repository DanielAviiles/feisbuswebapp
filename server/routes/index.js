var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/datauser/:userid', async (req, res) => {
  // Se consultara la informacion de la tabla usuario y perfil del usuario logueado
  const { userid } = req.params;
  res.json();
});

router.get('/infouser', async (req, res) => {
  // Planteamiento para devolver la data del usuario logueado en perfil
  res.json();
});

module.exports = router;
