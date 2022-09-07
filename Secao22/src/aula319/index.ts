interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno1: PessoaProtocolo = {
  nome: 'Thalisson',
  sobrenome: 'Bandeira',
  idade: 30,
};

const aluno2: PessoaProtocolo<number> = {
  nome: 123,
  sobrenome: 345,
  idade: 30,
};

console.log({ aluno1, aluno2 });
