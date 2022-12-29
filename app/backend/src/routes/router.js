const express = require('express')

const invoiceRouter = require('./invoice.router')

const routers = express.Router()
routers.use('/invoice', invoiceRouter)

module.exports = routers