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

export class Aluno extends Pessoa {}

export class Cliente extends Pessoa {}

const pessoa = new Pessoa('Thalisson', 'Bandeira', 23, '819.655.242-68');
const aluno = new Aluno('Thalisson', 'Bandeira', 23, '819.655.242-68');
const cliente = new Aluno('Thalisson', 'Bandeira', 23, '819.655.242-68');

console.log({ pessoa, aluno, cliente });
