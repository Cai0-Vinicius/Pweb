
function Retangulo(x, y) {
  this.base = x;
  this.altura = y;
  this.calcularArea = function() {
    return this.base * this.altura;
  };
}

function calcular() {
  let base = parseFloat(document.getElementById("base").value);
  let altura = parseFloat(document.getElementById("altura").value);

  let ret = new Retangulo(base, altura);

  document.getElementById("resultado").innerHTML = "Área do Retângulo: " + ret.calcularArea();
}