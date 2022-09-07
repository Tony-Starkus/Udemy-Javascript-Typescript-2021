export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  // Receber um ou vários produtos = ...produtos
  inserirProduto(...produtos: Produto[]) {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const carrinhoDeCompras = new CarrinhoDeCompras();

const produto1 = new Produto('Casaca', 49.9);
const produto2 = new Produto('Catraca', 49.9);
const produto3 = new Produto('Caneca', 49.9);
console.log(produto1.nome);
carrinhoDeCompras.inserirProduto(produto1, produto2, produto3);
console.log(carrinhoDeCompras.quantidadeProdutos());
console.log(carrinhoDeCompras.valorTotal());
