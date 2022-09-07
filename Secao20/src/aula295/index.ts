export default class Empresa {
  readonly nome: string;
  // private é acessível apenas dentro da classe
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  public adicionarColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }

  public getColaboradores(): Colaborador[] {
    return this.colaboradores;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Samçung', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Thalisson', 'Bandeira');
const colaborador2 = new Colaborador('Woo', 'Young Woo');
const colaborador3 = new Colaborador('Luiz', 'Otávio');
empresa1.adicionarColaborador(colaborador1);
empresa1.adicionarColaborador(colaborador2);
empresa1.adicionarColaborador(colaborador3);
console.log(empresa1);
console.log(empresa1.nome);
empresa1.mostrarColaboradores();
