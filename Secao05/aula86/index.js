const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// reduce(função, valor_inicial_do_acumulador)

// Somar tudo
const total = numeros.reduce(function (acumulador, valor, indice, array) {
  console.log(acumulador, valor);
  acumulador += valor;
  return acumulador;
}, 0);
console.log(total);

// Array com valores pares
const pares = numeros.reduce(function (acumulador, valor, indice, array) {
  if (valor % 2 === 0) {
    acumulador.push(valor);
  }
}, []);
console.log(pares);
