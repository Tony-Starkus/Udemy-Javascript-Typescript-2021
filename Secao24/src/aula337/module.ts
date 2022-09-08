/* eslint-disable @typescript-eslint/no-namespace */

namespace MeuNamespace {
  console.log(11111);
  export const nome = 'Luiz';

  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  const pessoa = new PessoaDoNamespace(nome);
  console.log(pessoa);

  export namespace OutroNamespace {
    export const nome = 'Luiz';
  }
}

const pessoa = new MeuNamespace.PessoaDoNamespace(
  MeuNamespace.OutroNamespace.nome,
);
console.log(pessoa);
