const horas = document.querySelector(".horas");
const minutos = document.querySelector(".minutos");
const segundos = document.querySelector(".segundos");

const relogio = setInterval(function relogioFuncionando(){
    let dataAtual = new Date();
    let hora = dataAtual.getHours();
    let minuto = dataAtual.getMinutes();
    let segundo = dataAtual.getSeconds();


    horas.textContent = hora
    minutos.textContent = minuto
    segundos.textContent = segundo
})