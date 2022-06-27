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

async function executa() {
  const fase1 = await esperaAi('Fase 1', rand());
  const fase2 = await esperaAi('Fase 2', rand());
  const fase3 = await esperaAi('Fase 3', rand());
}
