const express = require('express');
const cors = require('cors');
require('express-async-errors');
const errorMiddleware = require('../middleware/error')
const routes = require('../routes/router')

const app = express();

app.use(express.json());

app.use(cors());

app.use(routes)

app.use(errorMiddleware);

module.exports = app;