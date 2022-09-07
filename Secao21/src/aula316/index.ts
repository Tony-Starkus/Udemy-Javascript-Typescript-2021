// Encadeamento opcional e Operador de coalescência nula

// coalescência nula = checar se o valor a esquerda do operador é um 'não valor' (null ou undefined)
type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O título',
  texto: 'O texto',
};

console.log(documento.data?.toString());

// coalescência nula
console.log(documento.data?.toString() ?? 'Não existe data');
