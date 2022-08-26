/**
 *  ^  -> Começa com
 *  $ -> Termina com
 * [^] -> Negação
 */

const { cpfs2 } = require('./base');

const cpf = '254.224.877-45';
const cpfRegExp = /^(\d{3}.){2}\d{3}-\d{2}$/g;

console.log(cpf.match(cpfRegExp));
