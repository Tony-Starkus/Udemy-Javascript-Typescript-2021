const produto = { nome: 'Caneca', preco: 1.8 };
const outraCoisa = Object.assign({}, produto, { material: 'procelana' });

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

Object.freeze(produto); // Object can't be changed.
outraCoisa.nome = 'Outro nome';
console.log(produto);
console.log(outraCoisa);
console.log(Object.keys(produto));
