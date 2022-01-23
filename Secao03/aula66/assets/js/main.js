const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

const limparInput = () => {
  inputTarefa.value = "";
  inputTarefa.focus();
};

const salvarTarefas = () => {
  const liTarefas = tarefas.querySelectorAll("li");
  const listaDeTarefas = [];
  liTarefas.forEach((item) => {
    const tarefaTexto = item.innerText.replace(" Apagar", "");
    listaDeTarefas.push(tarefaTexto);
  });

  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem("tarefas", tarefasJSON);
};

const criaTarefa = (texto) => {
  const li = document.createElement("li");
  const botaoApagar = document.createElement("button");
  botaoApagar.innerText = "Apagar";
  botaoApagar.onclick = () => {
    li.remove();
    salvarTarefas();
  };
  li.innerText = `${texto} `;
  li.appendChild(botaoApagar);
  tarefas.appendChild(li);
  limparInput();
  salvarTarefas();
};

inputTarefa.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) btnTarefa.click();
});

btnTarefa.addEventListener("click", (e) => {
  if (!inputTarefa.value.trim()) return;
  criaTarefa(inputTarefa.value);
});

const addicionaTarefasSalvas = () => {
  const tarefas = localStorage.getItem("tarefas");
  const parseTarefas = JSON.parse(tarefas);
  for (let tarefa of parseTarefas) {
    criaTarefa(tarefa);
  }
};

addicionaTarefasSalvas();
