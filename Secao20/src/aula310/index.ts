interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

export const pessoa: Pessoa = {
  nome: 'Thalisson',
  sobrenome: 'Bandeira',
};
