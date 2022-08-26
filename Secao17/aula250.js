/**
 * g - global (encontra todas as ocorrências)
 * i - insensitive (não diferencia maiusculas de minusculas)
 * () - groups
 * | - ou
 */

const { texto } = require('./base');

const regExp1 = /(maria|joão|luiz)(, hoje sua esposa)/gi;

console.log(regExp1.exec(texto));
