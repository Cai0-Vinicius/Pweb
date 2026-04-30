function calcularIMC(peso, altura) {
    return peso / ((altura / 100) * (altura / 100));
}
 
function classificarIMC(imc) {
    if (imc < 18.5) {
        return { classificacao: "Magreza", grau: "0" };
    } else if (imc < 25.0) {
        return { classificacao: "Normal", grau: "0" };
    } else if (imc < 30.0) {
        return { classificacao: "Sobrepeso", grau: "I" };
    } else if (imc < 40.0) {
        return { classificacao: "Obesidade", grau: "II" };
    } else {
        return { classificacao: "Obesidade Grave", grau: "III" };
    }
}
 
function calcular() {
    let peso   = parseInt(document.getElementById("peso").value);
    let altura = parseInt(document.getElementById("altura").value);
 
    let imc       = calcularIMC(peso, altura);
    let resultado = classificarIMC(imc);
 
    document.getElementById("resultado").innerHTML =
        "<div class='resultado-card'>" +
            "<div class='imc-valor'>" + imc.toFixed(2) + "</div>" +
            "<div class='imc-label'>Seu IMC</div>" +
            "<div class='imc-class'>" + resultado.classificacao + "</div>" +
            "<div class='imc-grau'>Grau de Obesidade: " + resultado.grau + "</div>" +
        "</div>";
}