const express = require('express');
const router = express.Router();
const medidasController = require('../controllers/medidasController');

router.get('/', medidasController.getAllMedidas);
router.get('/:id', medidasController.getMedidaById);
router.post('/', medidasController.addMedida);
router.put('/:id', medidasController.updateMedida);
router.delete('/:id', medidasController.deleteMedida);

module.exports = router;
