const express = require('express');
const { invoiceController } = require('../controller/invoiceController');

const router = express.Router();

router.get('/', invoiceController.findAll);

module.exports = router