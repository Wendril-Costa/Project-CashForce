const express = require('express');
const cors = require('cors');

require('express-async-errors');

const { invoiceController } = require('../controller/invoiceController');

const router = require('../routes/router')
const app = express();

app.use(cors());

app.use(express.json());
app.use(routes)

app.get('/user', invoiceController.findAll);

module.exports = app;