var requestURL = 'https://mbairo.github.io/page/boletins.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {

    var boletim = request.response;
    console.log("Pra entender: ", boletim);
//     atualizaTabela(boletim);
    atualizaTabelaBoletim(boletim)
    console.log("Boletim: ", boletim);
} 

function atualizaTabelaBoletim(boletim) {
    const COLUNA_MATERIA = 0;
    const COLUNA_NOTAS = 1;
    const COLUNA_FALTAS = 2;
    const COLUNA_RESULTADO = 3;
    const table = document.getElementById("tabelaBoletim");

    for (let indice = 0; indice < boletim.length; indice ++) {
        if (indice == 2) {
            const disciplina = boletim[indice];
            console.log("Disciplina: ", disciplina);
            
            // Linhas 
            const row = table.insertRow(indice +1);
            // Add #id do css nas linhas 
            row.id = "tr-hover";

            // Junção de linha com coluna = celula/cell
            const celulaMateria = row.insertCell(COLUNA_MATERIA);
            const celulaNotas = row.insertCell(COLUNA_NOTAS);
            const celulaFaltas = row.insertCell(COLUNA_FALTAS)
            const celulaResultado = row.insertCell(COLUNA_RESULTADO);
            celulaResultado.id = "reprovado"
        
            // Add o valor contido no json "Respectivos: materia ou notas ou faltas ou resultado..."
            celulaMateria.innerHTML = disciplina.materia; 
            celulaNotas.innerHTML = disciplina.nota;
            celulaFaltas.innerHTML = disciplina.faltas;
            celulaResultado.innerHTML = disciplina.resultado;            
        } else {
            const disciplina = boletim[indice];
            console.log("Disciplina: ", disciplina);
            
            // Linhas 
            const row = table.insertRow(indice +1);
            // Add #id do css nas linhas 
            row.id = "tr-hover";

            // Junção de linha com coluna = celula/cell
            const celulaMateria = row.insertCell(COLUNA_MATERIA);
            const celulaNotas = row.insertCell(COLUNA_NOTAS);
            const celulaFaltas = row.insertCell(COLUNA_FALTAS)
            const celulaResultado = row.insertCell(COLUNA_RESULTADO);
        
            // Add o valor contido no json "Respectivos: materia ou notas ou faltas ou resultado..."
            celulaMateria.innerHTML = disciplina.materia; 
            celulaNotas.innerHTML = disciplina.nota;
            celulaFaltas.innerHTML = disciplina.faltas;
            celulaResultado.innerHTML = disciplina.resultado;
        }
    }
}