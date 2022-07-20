const express = require('express');
const app = express();

// Express configs
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <form action="/" method="POST">
      Nome: <input type="text" name="nome" />
      <button>Enviar</button>
    </form>
  `);
});

app.post('/', (req, res) => {
  console.log(req.body);
  return res.send(`Olha o body da requisição: ${JSON.stringify(req.body)}`);
});

app.get('/testes/:idUsuarios?/:parametroOpcional?', (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(req.params);
});

app.post('/', (req, res) => {
  res.send('Recebi o formulário');
});

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});
