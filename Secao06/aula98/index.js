// Superclass
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if (valor > this.saldo) {
    console.log(`Saldo insuficiente: ${this.saldo.toFixed(2)}`);
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};

Conta.prototype.verSaldo = function () {
  console.log(`Ag/c: ${this.agencia}/${this.conta}`);
  console.log(`Saldo: R$ ${this.saldo.toFixed(2)}`);
};

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.constructor = ContaCorrente;

Conta.prototype.sacar = function (valor) {
  if (valor > this.saldo + this.limite) {
    console.log(`Saldo insuficiente: ${this.saldo.toFixed(2)}`);
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

const conta1 = new Conta(11, 22, 10);
console.log(conta1);
conta1.depositar(11);
conta1.depositar(10);
conta1.sacar(30);

const contaCorrente1 = new ContaCorrente(00, 11, 0, 100);
contaCorrente1.depositar(10);
