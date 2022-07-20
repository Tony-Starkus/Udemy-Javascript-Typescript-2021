const path = require('path');
const Cachorro = require('./z/mod2');

new Cachorro('gato').latir();

console.log(__filename);
console.log(__dirname);

console.log(path.resolve(__dirname, '..', '..', 'Secao09', 'aula121'));
