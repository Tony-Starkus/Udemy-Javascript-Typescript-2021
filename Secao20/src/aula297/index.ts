export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {}

  getNome(): string {
    return this.nome;
  }

  getIdade(): number {
    return this.idade;
  }

  // getCpf(): string {
  //   return this.cpf.replace(/\D/g, '');
  // }

  // setCpf(valor: string): void {
  //   this.cpf = valor;
  // }

  get cpf(): string {
    return this._cpf;
  }

  set cpf(valor: string) {
    this._cpf = valor;
  }
}

const pessoa = new Pessoa('Thalisson', 'Bandeira', 23, '819.655.242-68');
// console.log(pessoa.getCpf());
