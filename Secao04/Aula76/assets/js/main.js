function criaCalculadora() {
  return {
    display: document.querySelector('.display'),
    btnClear: document.querySelector('.btn-clear'),

    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    pressionaEnter() {
      this.display.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
          // Código do Enter
          this.realizaConta();
        }
      });
    },

    realizaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if (!conta) {
          alert('Conta inválida');
          return;
        }
        this.display.value = String(conta);
      } catch (e) {
        alert('Conta inválida');
        return;
      }
    },

    clearDisplay() {
      this.display.value = '';
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    cliqueBotoes() {
      // this -> calculadora
      document.addEventListener(
        'click',
        // Se fosse uma arrow function, o this continuaria sendo do objeto, e não do document
        function (e) {
          // this -> document
          const el = e.target;

          if (el.classList.contains('btn-num')) {
            this.btnParaDisplay(el.innerText);
          }

          if (el.classList.contains('btn-clear')) {
            this.clearDisplay();
          }

          if (el.classList.contains('btn-del')) {
            this.apagaUm();
          }

          if (el.classList.contains('btn-eq')) {
            this.realizaConta();
          }
        }.bind(this)
      ); // ao inves de usar o this do document, vai usar o do objeto calculadora
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
