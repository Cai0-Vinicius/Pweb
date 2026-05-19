function transformar() {
  let texto = document.getElementById("meuTexto");

  if (document.getElementById("maiusculo").checked) {
    texto.value = texto.value.toUpperCase();
  } else if (document.getElementById("minusculo").checked) {
    texto.value = texto.value.toLowerCase();
  }
}
