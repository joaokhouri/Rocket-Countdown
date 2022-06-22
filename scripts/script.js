let diasEl = document.getElementById("dias");
let horasEl = document.getElementById("horas");
let minutosEl = document.getElementById("minutos");
let segundosEl = document.getElementById("segundos");

function startCount() {
  const dataLimite = new Date("2022-10-26");
  let dataAtual = new Date();

  const totalSeconds = (dataLimite - dataAtual) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  diasEl.innerHTML = days;
  horasEl.innerHTML = hours;
  minutosEl.innerHTML = mins;
  segundosEl.innerHTML = seconds;
}
startCount();

setInterval(startCount(), 1000);
