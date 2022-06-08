var requestURL = 'https://wesleiads.github.io/json/matricula.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
 var matricula = request.response;

populateBody(matricula);

 }
function populateBody(jsonObj) {
    document.getElementById("nomeextra").value = jsonObj.nome
    document.getElementById("extras").value = jsonObj.extras
    document.getElementById("numeromatricula").value = jsonObj.numeromatricula
    document.getElementById("celular").value = jsonObj.celular
    document.getElementById("nome").value = jsonObj.nome
    document.getElementById("cep").value = jsonObj.cep
    document.getElementById("email").value = jsonObj.email
    document.getElementById("idade").value = jsonObj.idade
    document.getElementById("cpf").value = jsonObj.cpf
    document.getElementById("datanasc").value = jsonObj.datanasc
    document.getElementById("endereco").value = jsonObj.endereco    
    document.getElementById("rg").value = jsonObj.rg
    document.getElementById("nomepai").value = jsonObj.nomepai
    document.getElementById("cpfresp").value = jsonObj.cpfresp
    document.getElementById("rgresp").value = jsonObj.rgresp    
    document.getElementById("cidade").value = jsonObj.cidade
    document.getElementById("telefone").value = jsonObj.telefone
    document.getElementById("turno").value = jsonObj.turno
    document.getElementById("matricula").value = jsonObj.matricula
    document.getElementById("anoletivo").value = jsonObj.anoletivo
      
}
function enviar(){
    window.alert('Dados enviados');
}   

                    