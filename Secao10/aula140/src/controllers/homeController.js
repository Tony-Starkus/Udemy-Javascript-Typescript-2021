const HomeModel = require('../models/HomeModel');

HomeModel.create({
  titulo: 'Outra coisa qualquer',
  descricao: 'Outra descrição',
})
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

exports.paginaInicial = (req, res, next) => {
  res.render('index');
  next();
};

exports.trataPost = (req, res) => {
  res.send('Ei, sou sua nova rota de post');
};
