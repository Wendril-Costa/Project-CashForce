const express = require('express');
const cors = require('cors');

require('express-async-errors');

const routes = require('../routes/router')

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use((err, _req, _res, next) => {
    console.error(err.stack);
    next(err);
  });
  
  // eslint-disable-next-line no-unused-vars
  app.use((err, _req, res, _next) => {
    res.status(500).json({ message: `Algo deu errado! Mensagem: ${err.message}` });
  });
  
module.exports = app;