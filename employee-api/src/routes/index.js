/*
* arquivo: routes/index.js
* descrição: arquivo responsavel pela chamada da API na aplicação no lado do Back-End
* data: 23/01/2023
* author: Lucas
*/

const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Seja Bem Vindo(a) a API Node.js + PostgreSQL + Azure',
    version: '1.0.0'

  });

});

module.exports = router;