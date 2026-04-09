var nome;
var n1, n2, n3, n4;
var resultado;
var novaMedia;

do{
nome = prompt("Digite o nome:");
n1 = parseFloat(prompt("Digite a nota 1:"));
n2 = parseFloat(prompt("Digite a nota 2:"));
n3 = parseFloat(prompt("Digite a nota 3:"));
n4 = parseFloat(prompt("Digite a nota 4:"));


var calcularMedia = function () {
    return (n1 + n2 + n3 + n4) / 4;
};


resultado = calcularMedia();


alert("nome:"+ nome + "\n Media: "+resultado);
novoMedia = confirm("Deseja realizar outra media?");

} while(novaMedia);