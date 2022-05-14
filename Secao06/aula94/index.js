// // new Object
// const objA = {
//   chaveA: 'A',
//   // __proto__: Object.prototype
// };

// // new Object
// const objB = {
//   chaveB: 'B',
//   // __proto__: Object.prototype
// };

// // Set objA as prototype of objB
// Object.setPrototypeOf(objB, objA);

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - this.preco * (percentual / 100);
};

Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

const p1 = new Produto('Camiseta', 50);
const p2 = {
  nome: 'Caneca',
  preco: 15,
};

Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10);

p1.desconto(100);
p1.aumento(100);
console.log(p1);
console.log(p2);
