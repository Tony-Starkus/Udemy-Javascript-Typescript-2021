type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: string };

// OR
type Pessoa1 = TemNome | TemSobrenome | TemIdade;

// AND
type Pessoa2 = TemNome & TemSobrenome & TemIdade;

type AB = 'A' | 'B';
type AC = 'A' | 'C';

type Intersecao = AB & AC;
