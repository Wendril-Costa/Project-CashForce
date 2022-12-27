const express = require('express');
const getRouter = require('./api.router')

const routers = express.Router();

routers.use('/get', getRouter);

module.exports = routers;