/**
 * O unknown indica que, para fazer qualquer coisa, é necessário verificar o tipo.
 *
 * No exemplo abaixo, não podemos somar x com y pois não sabemos o que é o x.
 */

let x: unknown;
x = 100;
x = 'Luiz';
x = 900;
x = 10;
const y = 800;

console.log(x + y);
