function maior(a, b, c) {
    if (a >= b && a >= c)
        return a;
    else if (b >= a && b >= c)
        return b;
    else
        return c;
}

function executarMaior() {
    let a = Number(document.getElementById('n1').value);
    let b = Number(document.getElementById('n2').value);
    let c = Number(document.getElementById('n3').value);
    document.getElementById('resMaior').innerHTML = 'Maior: ' + maior(a, b, c);
}

function ordemCrescente(a, b, c) {
    let arr = [a, b, c];
    arr.sort(function(x, y) { return x - y; });
    return arr[0] + ', ' + arr[1] + ', ' + arr[2];
}

function executarOrdem() {
    let a = Number(document.getElementById('o1').value);
    let b = Number(document.getElementById('o2').value);
    let c = Number(document.getElementById('o3').value);
    document.getElementById('resOrdem').innerHTML = 'Ordem crescente: ' + ordemCrescente(a, b, c);
}

function palindromo(palavra) {
    let limpa = palavra.toLowerCase().replace(/ /g, '');
    let invertida = '';
    for (let i = limpa.length - 1; i >= 0; i--)
        invertida += limpa[i];
    if (limpa === invertida)
        return 'É um palíndromo.';
    else
        return 'Não é um palíndromo.';
}

function executarPalindromo() {
    let palavra = document.getElementById('palavra').value;
    document.getElementById('resPalindromo').innerHTML = palindromo(palavra);
}

function subconjunto(p1, p2) {
    if (!p1 || !p2)
        return 'erro';
    if (p1.includes(p2))
        return '"' + p2 + '" é um subconjunto de "' + p1 + '"';
    else
        return '"' + p2 + '" não é um subconjunto de "' + p1 + '"';
}

function executarSubconjunto() {
    let p1 = document.getElementById('p1').value;
    let p2 = document.getElementById('p2').value;
    document.getElementById('resSubconjunto').innerHTML = subconjunto(p1, p2);
}

function diaDaSemana(dataStr) {
    let dias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    let dataCompleta = new Date(dataStr + 'T00:00:00');
    let diaSemana = dataCompleta.getDay();
    return dias[diaSemana];
}

function executarDia() {
    let dataStr = document.getElementById('data').value;
    if (!dataStr) {
        document.getElementById('resDia').innerHTML = 'Informe uma data.';
        return;
    }
    document.getElementById('resDia').innerHTML = 'Dia da semana: ' + diaDaSemana(dataStr);
}