var express = require('express');
var router = express.Router();

router.post('/fotos', async (req, res)  => {
  // Planteamiento del servicio para el posteo de fotos en el back(BD)
  res.json();
});

module.exports = router;
