const express = require('express')

// const { invoiceController } = require('../controller/invoiceController');
const invoiceRouter = require('./invoice.router')

const routers = express.Router()
routers.use('/invoice', invoiceRouter)
// routers.get('/invoice', invoiceController.findAll);

module.exports = routers