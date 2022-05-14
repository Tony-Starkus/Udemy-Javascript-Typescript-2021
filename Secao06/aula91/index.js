function Produto(nome, preco, estoque) {
  // this.nome = nome;
  // this.preco = preco;

  Object.defineProperty(this, 'estoque', {
    enumerable: true, // The property name show the key, but not the value
    configurable: true, // Set if the property can be deleted or reconfigurable
    get: function () {
      return estoque;
    },
    set: function (valor) {
      console.log(valor);
      if (typeof valor !== 'number') {
        console.log('Bad value');
        return;
      }
      estoque = valor;
    },
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true, // The property name show the key, but not the value
      configurable: true, // Set if the property can be deleted or reconfigurable
    },
    preco: {
      enumerable: true, // The property name show the key, but not the value
      configurable: true, // Set if the property can be deleted or reconfigurable
    },
  });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
console.log(p1.estoque);
p1.estoque = 'a';
p1.estoque = 1;
console.log(p1.estoque);
