var express = require('express');
var router = express.Router();
const infoModel = require('../model/baseInfoModel');

/* GET home page. */
router.get('/:userid', async (req, res) => {
  // Se consultara la informacion de la tabla usuario y perfil del usuario logueado
  const { userid } = req.params;
  try {
    const dataUser = await infoModel.baseInfoUserModel(userid);
    res.json({ dataUser });
  } catch (err) {
    console.log(err)
  }
});

router.get('/infouser', async (req, res) => {
  // Planteamiento para devolver la data del usuario logueado en perfil
  res.json();
});

module.exports = router;
