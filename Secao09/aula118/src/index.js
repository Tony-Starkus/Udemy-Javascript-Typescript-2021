import { nome as nome2, sobrenome, age, soma, Pessoa } from './modulo1';

const nome = 'João';

console.log(nome, nome2, sobrenome, age);
console.log(soma(5, 5));

const p1 = new Pessoa(nome, sobrenome);
console.log(p1);
