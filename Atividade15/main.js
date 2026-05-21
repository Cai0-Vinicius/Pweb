function validar() {
  var form = document.forms.formulario1;
 
  if (form.elements[0].value === "" || form.elements[0].value.length < 10) {
    alert("Preencha o campo NOME com pelo menos 10 caracteres!");
    form.elements[0].focus();
    return false;
  }
 

  if (form.elements["idEmail"].value === "") {
    alert("Preencha o campo E-MAIL corretamente!");
    form.elements["idEmail"].focus();
    return false;
  }
 
 
  if (form.elements.idComentario.value === "" ||
      form.elements.idComentario.value.length < 20) {
    alert("O campo COMENTÁRIO deve ter pelo menos 20 caracteres!");
    form.elements.idComentario.focus();
    return false;
  }
 

  var radios = document.getElementsByName("visita");
  var radioMarcado = false;
  var valorMarcado = "";
 
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      radioMarcado = true;
      valorMarcado = radios[i].value;
    }
  }
 
  if (!radioMarcado) {
    alert("Por favor, responda a PESQUISA!");
    return false;
  }
 

  if (valorMarcado === "nao") {
    alert("Que bom que você voltou a visitar esta página!");
  } else {
    alert("Volte sempre à esta página!");
  }
 
  return true;
}
 