/**
 * [] -> Conjuntos
 * [^] -> Exclusão. Informar um conjunto que não é para encontrar
 *
 *
 * [-] -> Range
 * [-] -> de até. Ex: [0-9]
 */

const { alfabeto } = require('./base');

console.log(alfabeto.match(/abc/g)); // ['abc']
console.log(alfabeto.match(/[abc]/g)); // ['a', 'b', 'c']
console.log(alfabeto.match(/[abc]+/g)); // ['abc']
console.log(alfabeto.match(/[abc123]+/g)); // ['abc', '123']
console.log(alfabeto.match(/[^abc123]/g)); // Encontrar tudo menos o conjunto informado
console.log(alfabeto.match(/[0-9]+/g)); // ['0123456789']
console.log(alfabeto.match(/[A-Z]+/g)); // ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
console.log(alfabeto.match(/[a-zA-Z0-9]+/g)); // ['ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz', '0123456789']

console.log(alfabeto.match(/[^a-zA-Z0-9]+/g)); // [ ' ', ' @; ', ' ;' ]
console.log(alfabeto.match(/[\u00A0-\u00BA]+/g));
