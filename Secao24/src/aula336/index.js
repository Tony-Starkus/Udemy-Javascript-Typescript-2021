/* eslint-disable @typescript-eslint/no-namespace */
var MeuNamespace;
(function (MeuNamespace) {
  console.log(11111);
  MeuNamespace.nome = 'Luiz';
  var PessoaDoNamespace = /** @class */ (function () {
    function PessoaDoNamespace(nome) {
      this.nome = nome;
    }
    return PessoaDoNamespace;
  })();
  MeuNamespace.PessoaDoNamespace = PessoaDoNamespace;
  var pessoa = new PessoaDoNamespace(MeuNamespace.nome);
  console.log(pessoa);
  var OutroNamespace;
  (function (OutroNamespace) {
    OutroNamespace.nome = 'Luiz';
  })(
    (OutroNamespace =
      MeuNamespace.OutroNamespace || (MeuNamespace.OutroNamespace = {})),
  );
})(MeuNamespace || (MeuNamespace = {}));
var pessoa = new MeuNamespace.PessoaDoNamespace(
  MeuNamespace.OutroNamespace.nome,
);
console.log(pessoa);
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="module.ts" />
console.log(MeuNamespace.OutroNamespace.nome);
