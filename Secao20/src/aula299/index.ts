export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
  }

  getNomeCompleto(): string {
    console.log('Fazendo algo antes');
    return super.getNomeCompleto();
  }
}

export class Cliente extends Pessoa {}

const pessoa = new Pessoa('Thalisson', 'Bandeira', 23, '819.655.242-68');
const aluno = new Aluno('Thalisson', 'Bandeira', 23, '819.655.242-68', '001');
const cliente = new Cliente('Thalisson', 'Bandeira', 23, '819.655.242-68');

console.log({ pessoa, aluno, cliente });
console.log(aluno.getNomeCompleto());
