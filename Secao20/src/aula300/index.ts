export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  static falaOi(): void {
    console.log('Oi');
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa1 = new Pessoa('Thalisson', 'Bandeira', 23, '819.655.242-68');
const pessoa2 = Pessoa.criaPessoa('ThaLindo', 'Bandeja');

Pessoa.falaOi();

console.log({ pessoa1, pessoa2 });
