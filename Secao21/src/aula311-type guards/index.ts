export function add(a: unknown, b: unknown): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a} + ${b}`;
}

type Pessoa = {
  type: 'pessoa';
  nome: string;
};

type Animal = {
  type: 'animal';
  cor: string;
};

type PessoaOuAnimal = Pessoa | Animal;

class Aluno implements Pessoa {
  type = 'pessoa' as const;
  constructor(public nome: string) {}
}

function mostraNome(obj: PessoaOuAnimal) {
  if ('nome' in obj) console.log(obj.nome);

  if (obj instanceof Aluno) console.log(obj.nome);

  switch (obj.type) {
    case 'pessoa':
      console.log(obj.nome);
      break;
    case 'animal':
      console.log(obj.cor);
      break;
  }
}
