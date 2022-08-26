/**
 * g - global (encontra todas as ocorrências)
 * i - insensitive (não diferencia maiusculas de minusculas)
 * () - groups
 * | - ou
 */

const { texto } = require('./base');

const regExp1 = /João|Maria/gi;

console.log(texto.match(regExp1));
console.log(texto.replace(regExp1, 'Felipe'));
console.log(texto.replace(/(João|Maria)/gi, '"$1"'));
console.log(texto.replace(/(João|Maria)/gi, '<br>$1</br>'));
console.log(
  texto.replace(/(João|Maria)/gi, function (input) {
    return input.toUpperCase();
  })
);
