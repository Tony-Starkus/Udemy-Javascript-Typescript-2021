const pessoas = [
  { id: 3, nome: 'Luiz' },
  { id: 2, nome: 'Maria' },
  { id: 1, nome: 'Helena' },
];

/**
 * O objetivo é colocar o id de cada pessoa como chave no objeto 'novasPessoas'
 *
 * Ex:
 * {
 *  1: {id: 1, nome: 'Helena'},
 *  2: {id: 2, nome: 'Maria'},
 *  3: {id: 3, nome: 'Luiz}
 * }
 */

const novasPessoas = new Map();
for (const pessoa of pessoas) {
  const { id } = pessoa;
  // Map.set(id, object)
  novasPessoas.set(id, { ...pessoa });
}

console.log(novasPessoas);
