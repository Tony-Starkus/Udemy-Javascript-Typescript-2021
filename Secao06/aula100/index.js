const falar = {
  falar() {
    console.log(`${this.nome} está falando`);
  },
};

const comer = {
  comer() {
    console.log(`${this.nome} está comendo`);
  },
};
const beber = {
  beber() {
    console.log(`${this.nome} está bebendo`);
  },
};

const pessoaPrototype2 = Object.assign({}, falar, comer, beber);

function criarPessoa2(nome, sobrenome) {
  return Object.create(pessoaPrototype2, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  });
}

function criaPessoa(nome, sobrenome) {
  const pessoaPrototype = {
    fala() {
      console.log(`${this.nome} está falando`);
    },
    comer() {
      console.log(`${this.nome} está comendo`);
    },
    beber() {
      console.log(`${this.nome} está bebendo`);
    },
  };

  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  });
}

const p1 = criaPessoa('Luiz', 'Otávio');
