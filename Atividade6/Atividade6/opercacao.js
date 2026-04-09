var n1, n2;
var resultado;
var r1, r2, r3, r4, r5;
var novoCalculo;

do{
n1 = parseFloat(prompt("Digite o primeiro numero: "));
n2 = parseFloat(prompt("Digite o Segundo numero: "));

var Calculos = function () {
    r1 = n1 + n2;
    r2 = n1 - n2;
    r3 = n1 * n2;
    r4 = n1 / n2;
    r5 = n1 % n2;
}

Calculos();

alert(
    "Os resultados são:\n" +
    "Soma: " + r1 +
    "\nSubtração: " + r2 +
    "\nProduto: " + r3 +
    "\nDivisão: " + r4 +
    "\nResto: " + r5
);

novoCalculo = confirm("Deseja realizar outro calculo?");
}while(novoCalculo);