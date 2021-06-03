var express = require('express');
var router = express.Router();
const infoModel = require('../model/baseInfoModel');

/* GET home page. */
router.get('/user/:userid', async (req, res) => {
  // Se consultara la informacion de la tabla usuario y perfil del usuario logueado
  const { userid } = req.params;
  try {
    const dataUser = await infoModel.baseInfoUserModel(userid);
    if (dataUser.length === 0) {
      res.json({ dataUser: [], posteos: [] });
      return;
    }
    const posteos = await infoModel.postRealizados(userid);
    res.json({ dataUser, posteos });
  } catch (err) {
    console.log(err)
  }
});

router.get('/typesprivicy', async (req, res) => {
  try {
    const typesPrivicy = await infoModel.privacidadData();
    res.json({ typesPrivicy });
  } catch (err) {
    console.warn(err);
  }
});

module.exports = router;
