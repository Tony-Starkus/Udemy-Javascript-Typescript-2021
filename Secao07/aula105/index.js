class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  // Método de instância
  aumentarVolume() {
    this.volume += 2;
  }

  // Método de instância
  diminuirVolume() {
    this.volume -= 2;
  }

  // Método estático
  static trocaPilha() {
    // O 'this' não existe aqui
    console.log('Ok, vou trocar');
  }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.dir(controle1);
// console.log(controle1.trocaPilha());  // TypeError: controle1.trocaPilha is not a function
ControleRemoto.trocaPilha();
