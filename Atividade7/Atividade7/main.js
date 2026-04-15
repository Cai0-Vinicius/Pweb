function jogar(jogador) {
    let n = Math.random();
    let computador;
    if (n < 0.33) {
        computador = 'pedra';
    }
    else if (n < 0.66) {
        computador = 'papel';
    }
    else {
        computador = 'tesoura'
    }
    
    let resultado;

    if(jogador === computador){
        resultado = 'Empate'
    }
    else if(
        (jogador === 'pedra'   && computador === 'tesoura') ||
        (jogador === 'tesoura' && computador === 'papel')   ||
        (jogador === 'papel'   && computador === 'pedra')
      ){

        resultado= 'Você Venceu!'
      }else{
        resultado = 'computador venceu'
      }

      document.getElementById('resultado').innerHTML =
        'Você: ' + jogador + ' | Computador: ' + computador + ' -> ' + resultado;
    
}