
class Conta {
  constructor() {
    this.nomeCorrentista = "";
    this.banco = "";
    this.numeroConta = "";
    this.saldo = 0;
  }

  setNomeCorrentista(v) { this.nomeCorrentista = v; }
  setBanco(v) { this.banco = v; }
  setNumeroConta(v) { this.numeroConta = v; }
  setSaldo(v) { this.saldo = v; }

  getNomeCorrentista() { return this.nomeCorrentista; }
  getBanco() { return this.banco; }
  getNumeroConta() { return this.numeroConta; }
  getSaldo() { return this.saldo; }
}


class Corrente extends Conta {
  constructor() {
    super();
    this.saldoEspecial = 0;
  }

  setSaldoEspecial(v) { this.saldoEspecial = v; }
  getSaldoEspecial() { return this.saldoEspecial; }
}


class Poupanca extends Conta {
  constructor() {
    super();
    this.juros = 0;
    this.dataVencimento = "";
  }

  setJuros(v) { this.juros = v; }
  setDataVencimento(v) { this.dataVencimento = v; }
  getJuros() { return this.juros; }
  getDataVencimento() { return this.dataVencimento; }
}

function criarCorrente() {
  let c = new Corrente();
  c.setNomeCorrentista(document.getElementById("c-nome").value);
  c.setBanco(document.getElementById("c-banco").value);
  c.setNumeroConta(document.getElementById("c-numero").value);
  c.setSaldo(parseFloat(document.getElementById("c-saldo").value));
  c.setSaldoEspecial(parseFloat(document.getElementById("c-especial").value));

  document.getElementById("resultado-corrente").innerHTML =
    "Nome: " + c.getNomeCorrentista() + "<br>" +
    "Banco: " + c.getBanco() + "<br>" +
    "Conta: " + c.getNumeroConta() + "<br>" +
    "Saldo: R$ " + c.getSaldo() + "<br>" +
    "Saldo Especial: R$ " + c.getSaldoEspecial();
}

function criarPoupanca() {
  let p = new Poupanca();
  p.setNomeCorrentista(document.getElementById("p-nome").value);
  p.setBanco(document.getElementById("p-banco").value);
  p.setNumeroConta(document.getElementById("p-numero").value);
  p.setSaldo(parseFloat(document.getElementById("p-saldo").value));
  p.setJuros(parseFloat(document.getElementById("p-juros").value));
  p.setDataVencimento(document.getElementById("p-venc").value);

  document.getElementById("resultado-poupanca").innerHTML =
    "Nome: " + p.getNomeCorrentista() + "<br>" +
    "Banco: " + p.getBanco() + "<br>" +
    "Conta: " + p.getNumeroConta() + "<br>" +
    "Saldo: R$ " + p.getSaldo() + "<br>" +
    "Juros: " + p.getJuros() + "%<br>" +
    "Vencimento: " + p.getDataVencimento();
}
