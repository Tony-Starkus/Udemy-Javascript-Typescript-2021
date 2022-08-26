/**
 * Quantificadores
 * * -> opcional - 0 ou n === equivale a {0,}
 * + -> obrigatório - 1 ou n === equivale a {1,}
 * ? -> opcional - 0 ou 1 === equivale a {0,1}
 * \ -> Caractere de escape
 * {n,m} -> n: quantas vezes no mínimo vai aparecer | m: máximo de vezes que vai acontecer
 * {10,} -> no mínimo 10
 * {,10} -> de 0 a 10
 * {5,10} -> de 5 a 10
 */

const { arquivos } = require('./base');

// const regExp2 = /\.(jpg|jpeg)/gi;
// const regExp2 = /\.(jpg|jpe?g)/gi;
// const regExp2 = /\.(jpg|jpe{0,}g)/gi;
const regExp2 = /\.(jpg|jp(e|E)?g)/g;

for (const arquivo of arquivos) {
  console.log(arquivo, arquivo.match(regExp2));
}
