enum Cores {
  VERMELHO, // 0
  AZUL, // 1
  AMARELO, // 2
}

// Os dois enums Cores2 vão ser mergeados, por isso não dá erro
enum Cores2 {
  VERMELHO = 10, // 0
  AZUL = 100, // 1
  AMARELO = 200, // 2
  ROXO = 'ROXO',
  VERDE = 201,
}
enum Cores2 {
  ROSA = 'ROSA',
}

console.log(Cores.VERMELHO);
console.log(Cores[0]);

console.log(Cores2[0]);
console.log(Cores2[10]);

function escolaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolaACor(Cores.VERMELHO);
