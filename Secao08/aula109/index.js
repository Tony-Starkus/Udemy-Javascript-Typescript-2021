function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') {
      reject('ERROR: BAD VALUE');
      return;
    }
    setTimeout(() => {
      resolve(`${msg.toUpperCase()} - PASSEI PELA PROMISE`);
    }, tempo);
  });
}

// Promise.all
const promises1 = [
  'Primeiro valor',
  esperaAi('Promise 1', 3000),
  esperaAi('Promise 2', 500),
  esperaAi('Promise 3', 1000),
  'Outro valor',
];

// Espera todas promises serem resolvidas para então entrar no then.
// Promise.all(promises1)
//   .then(function (valor) {
//     console.log(valor);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Promise.race
const promises2 = [esperaAi('Promise 1', 3000), esperaAi('Promise 2', 500), esperaAi('Promise 3', 1000)];

// Entrega a primeira promise que for resolvida (mesmo que ela seja rejeitada)
Promise.race(promises2)
  .then(function (valor) {
    console.log(valor);
  })
  .catch((error) => {
    console.log(error);
  });

// Promise.resolve
function baixaPagina() {
  const emCache = true;
  if (emCache) {
    return Promise.resolve('Página em cache');
  } else {
    return esperaAi('Baixei a página', 3000);
  }
}
baixaPagina()
  .then((dadosPagina) => console.log(dadosPagina))
  .catch((error) => console.log(error));

// Promise.reject
function baixaPagina2() {
  const emCache = true;
  if (emCache) {
    return Promise.reject('Del erro');
  } else {
    return esperaAi('Baixei a página', 3000);
  }
}
baixaPagina2()
  .then((dadosPagina) => console.log(dadosPagina))
  .catch((error) => console.log(error));
