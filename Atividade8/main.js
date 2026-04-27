let pessoas = [];

function adicionar() {
    let idade = document.getElementById('idade').value;
    let sexo = document.getElementById('sexo').value;
    let opiniao = Number(document.getElementById('opiniao').value);

    pessoas.push({ idade: idade, sexo: sexo, opiniao: opiniao })
}

function mostrarResultados() {
    if (pessoas.length === 0) {
        document.getElementById('resultado').innerHTML = 'Nenhuma pessoa cadastrada!';
        return;
    }

    let soma = 0;
    for (let i = 0; i < pessoas.length; i++) {
        soma = soma + Number(pessoas[i].idade);
    }
    let media = soma / pessoas.length;

    let maiorIdade = pessoas[0].idade;
    let menorIdade = pessoas[0].idade;
    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].idade > maiorIdade) {
            maiorIdade = pessoas[i].idade;
        }
        if (pessoas[i].idade < menorIdade) {
            menorIdade = pessoas[i].idade;
        }
    }

    let qntPessimo = 0;
    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].opiniao === 1) {
            qntPessimo++;
        }
    }

    let qntBoas = 0;
    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].opiniao === 3 || pessoas[i].opiniao === 4) {
            qntBoas++;
        }
    }
    let percent = (qntBoas / pessoas.length) * 100;

    let qntMulher = 0;
    let qntHomem = 0;
    let qntOutros = 0;
    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].sexo === "feminino") {
            qntMulher++;
        } else if (pessoas[i].sexo === "masculino") {
            qntHomem++;
        } else {
            qntOutros++;
        }
    }

    document.getElementById('resultado').innerHTML =
        'Total de pessoas: ' + pessoas.length + '<br>' +
        'Media de idade: ' + media + '<br>' +
        'Maior idade: ' + maiorIdade + '<br>' +
        'Menor idade: ' + menorIdade + '<br>' +
        'Avaliacoes pessimas: ' + qntPessimo + '<br>' +
        'Porcentagem boas e otimas: ' + percent + '%' + '<br>' +
        'Mulheres: ' + qntMulher + ' | Homens: ' + qntHomem + ' | Outros: ' + qntOutros;
}