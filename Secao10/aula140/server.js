require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectionString = process.env.CONNECTION_STRING;

mongoose.connect(connectionString).then(() => {
  console.log('Mongoose conectado');
  app.emit('pronto');
});

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');

// Express configs
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(middlewareGlobal);
app.use(routes);

app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
});
