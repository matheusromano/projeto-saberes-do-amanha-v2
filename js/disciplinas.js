var requestURL = 'https://mbairo.github.io/page/alunos.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var alunos = request.response;

populateBody(alunos);
}

function populateBody(jsonObj){

    document.getElementById("codMateria01").value = jsonObj.codMateria01
    document.getElementById("codMateria02").value = jsonObj.codMateria02
    document.getElementById("codMateria03").value = jsonObj.codMateria03

    document.getElementById("matematica").value = jsonObj.matematica
    document.getElementById("portugues").value = jsonObj.portugues
    document.getElementById("edFisica").value = jsonObj.edFisica
    document.getElementById("edFinanceira").value = jsonObj.edFinanceira
    document.getElementById("fisica").value = jsonObj.fisica

    document.getElementById("linkMatematica").value = jsonObj.linkMatematica
    document.getElementById("linkPortugues").value = jsonObj.linkPortugues
    document.getElementById("linkEdFisica").value = jsonObj.linkEdFisica

}


    
    // document.getElementById("matriculeseFinanceira").value = jsonObj.matriculeseFinanceira
    // document.getElementById("matriculeseFisica").value = jsonObj.matriculeseFisica
    // Criar um window.alert  ou um link?


