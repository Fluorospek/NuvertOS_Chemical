const express = require('express');
const router = express.Router();
const compoundController = require('../controller/chemical.controller');

router.get('/', compoundController.getAllCompounds);
router.get('/:id', compoundController.getCompoundById);
router.put('/:id', compoundController.updateCompound);
router.delete('/:id', compoundController.deleteCompound);

module.exports = router;
