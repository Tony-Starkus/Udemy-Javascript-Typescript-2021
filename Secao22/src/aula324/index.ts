const objeto1: Record<string, string | number> = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};
console.log(objeto1);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

// Required - Tudo obrigatório
type PessoaRequired = Required<PessoaProtocol>;

// Partial - Tudo opcional
type PessoaPartial = Partial<PessoaProtocol>;

// Readonly
type PessoaReadonly = Readonly<PessoaRequired>;

// Pick - Escolhar coisas que quer utilizar
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

type TipoeExclude = Exclude<ABC, CDE>;
type TipoExtract = Extract<ABC, CDE>;

type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: '453tgerg34r3rff',
  nome: 'Luiz',
  idade: 30,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log({ accountApi });

const objeto2: PessoaProtocol = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};
