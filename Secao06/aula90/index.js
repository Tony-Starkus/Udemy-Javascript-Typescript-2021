function Produto(nome, preco, estoque) {
  // this.nome = nome;
  // this.preco = preco;

  Object.defineProperty(this, 'estoque', {
    enumerable: true, // The property name show the key, but not the value
    value: estoque, // Display the value
    writable: true, // Set if value can be change
    configurable: true, // Set if the property can be deleted or reconfigurable
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true, // The property name show the key, but not the value
      value: nome, // Display the value
      writable: true, // Set if value can be change
      configurable: true, // Set if the property can be deleted or reconfigurable
    },
    preco: {
      enumerable: true, // The property name show the key, but not the value
      value: preco, // Display the value
      writable: true, // Set if value can be change
      configurable: true, // Set if the property can be deleted or reconfigurable
    },
  });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
