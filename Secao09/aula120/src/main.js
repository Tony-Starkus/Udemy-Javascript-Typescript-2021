import GeraCPF from './modules/GeraCPF';

import './assets/css/style.css';

// This function is executed automatically
(function () {
  const gera = new GeraCPF();
  const cpfGerado = document.querySelector('.cpf-gerado');
  cpfGerado.innerHTML = gera.formatado(gera.geraNovoCpf());
})();
