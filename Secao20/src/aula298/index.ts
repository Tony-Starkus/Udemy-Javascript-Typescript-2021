export default class Empresa {
  readonly nome: string;
  // Protected pode ser acesso à subclasses. Essa é a diferença do private
  protected readonly colaboradores: Colaborador[] = [];
  // private é acessível apenas dentro da classe
  private readonly cnpj: string;

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

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '11.111.111/0001-11');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}
const empresa1 = new Udemy();
const colaborador1 = new Colaborador('Thalisson', 'Bandeira');
const colaborador2 = new Colaborador('Woo', 'Young Woo');
const colaborador3 = new Colaborador('Luiz', 'Otávio');
empresa1.adicionarColaborador(colaborador1);
empresa1.adicionarColaborador(colaborador2);
empresa1.adicionarColaborador(colaborador3);
empresa1.popColaborador();
