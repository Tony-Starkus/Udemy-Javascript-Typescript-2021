const getTimeFromSeconds = (seconds) => {
  return new Date(seconds * 1000).toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "GMT",
  });
};

let segundos = 0;
let timer;
const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");

const startClock = () => {
  timer = setInterval(() => {
    segundos++;
    relogio.innerHTML = getTimeFromSeconds(segundos);
  }, 1000);
};

iniciar.addEventListener("click", () => {
  relogio.classList.remove("pausado");
  clearInterval(timer);
  startClock();
});

pausar.addEventListener("click", () => {
  relogio.classList.add("pausado");
  clearInterval(timer);
});

zerar.addEventListener("click", () => {
  relogio.classList.remove("pausado");
  clearInterval(timer);
  relogio.innerHTML = "00:00:00";
  segundos = 0;
});
