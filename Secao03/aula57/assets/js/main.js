const backgroundColor = getComputedStyle(document.body).backgroundColor;

const paragrafos = document.querySelector(".paragrafos");
const ps = paragrafos.querySelectorAll("p");

ps.forEach(el => {
  el.style.color = "#FFF";
  el.style.backgroundColor = backgroundColor;
})
