function abrirJanela() {
  document.getElementById("janela").src = "aberta.jpg";
  document.getElementById("titulo").innerHTML = "Janela Aberta";
}

function fecharJanela() {
  document.getElementById("janela").src = "fechada.jpg";
  document.getElementById("titulo").innerHTML = "Janela Fechada";
}

function quebrarJanela() {
  document.getElementById("janela").src = "quebrada.jpg";
  document.getElementById("titulo").innerHTML = "Janela Quebrada";
}