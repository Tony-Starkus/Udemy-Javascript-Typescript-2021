const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveA = 'Valor A';
objetoA.chaveC = 'Valor C';
objetoA.chaveD = 'Outro Valor';
console.log(objetoA);
