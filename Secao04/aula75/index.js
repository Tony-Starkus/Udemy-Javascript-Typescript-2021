function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,

    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    // Setter
    set nomeCompleto(valor = 'falando sobre NADA.') {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    },

    fala(assunto) {
      return `${this.nome} está ${assunto}`;
    },

    altura,
    peso,

    // Getter
    get imc() {
      return this.peso / this.altura ** 2;
    },
  };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.7, 70);
console.log(p1.nomeCompleto);
p1.nomeCompleto = 'Thalisson Bandeira Araújo';
console.log(p1.nomeCompleto);
console.log(p1.imc);
console.log(p1.fala('falando sobre Javascript'));
