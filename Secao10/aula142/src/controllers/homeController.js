exports.paginaInicial = (req, res, next) => {
  req.flash('info', 'Olá mundo!');
  req.flash('error', 'Erro');
  req.flash('success', 'Sucesso');
  console.log(req.flash('error'));
  res.render('index');
  return;
};

exports.trataPost = (req, res) => {
  res.send('Ei, sou sua nova rota de post');
};
