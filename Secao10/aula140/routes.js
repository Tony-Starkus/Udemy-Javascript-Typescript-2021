const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoControllers');

function meuMiddleware(req, res, next) {
  req.session = { nome: 'Thalisson', sobrenome: 'Bandeira' };
  console.log('Passei no seu middleware');
  next();
}

// Rotas da home
route.get('/', meuMiddleware, homeController.paginaInicial);
route.post('/', homeController.trataPost);

// Rotas de contato
route.get('/contato', contatoController.paginaInicial);

module.exports = route;
