var requestURL = 'https://wesleiads.github.io/json/matriculaextra.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
 var matricula = request.response;

populateBody(matricula);

 }
function populateBody(jsonObj) {
    document.getElementById("numeromatricula").value = jsonObj.numeromatricula
    document.getElementById("nomealuno").value = jsonObj.nome
    
}
function enviar(){
    window.alert('Dados para Atividades extras enviados ');
}   

                    