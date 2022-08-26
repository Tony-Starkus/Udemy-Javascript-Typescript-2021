/**
 *  \w -> [a-zA-Z]
 *  $1 $2 $3 -> Retrovisores
 */

const { lookahead } = require('./base');

// Positive lookahead (frases que tem active)
console.log(lookahead.match(/.+(?=[^in]active)/gim));

// Positive lookbehind (Frase que começam com online)
console.log(lookahead.match(/(?<=ONLINE\s+)[^\s].*/gim));

// Negative lookbehind (Frase que não começam com online)
console.log(lookahead.match(/^.+(?<!ONLINE.+)$/gim));
