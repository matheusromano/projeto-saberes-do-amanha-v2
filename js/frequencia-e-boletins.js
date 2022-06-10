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

// Função para chamar outras Funções, no caso as Tabelas com somente a parte desejada do Json ("boletimCursando" ou  "boletimOfertadas")
// function atualizaTabela(boletim){
//     atualizaTabelaBoletim(boletim);
// };

function atualizaTabelaBoletim(boletim) {
    const COLUNA_MATERIA = 0;
    const COLUNA_NOTAS = 1;
    const COLUNA_FALTAS = 2;
    const COLUNA_RESULTADO = 3;
    const table = document.getElementById("tabelaBoletim");

    for (let indice = 0; indice < boletim.length; indice ++) {
                                            
        const disciplina = boletim[indice];
        console.log("Disciplina: ", disciplina);
        
        // Linhas
        const row = table.insertRow(indice +1);

        // Junção de linha com coluna = celula/cell
        const celulaMateria = row.insertCell(COLUNA_MATERIA);
        const celulaNotas = row.insertCell(COLUNA_NOTAS);
        const celulaFaltas = row.insertCell(COLUNA_FALTAS)
        const celulaResultado = row.insertCell(COLUNA_RESULTADO);;
    
        // Add o valor contido no json "Respectivos: materia ou notas ou faltas ou resultado..."
        celulaMateria.innerHTML = disciplina.materia; 
        celulaNotas.innerHTML = disciplina.nota;
        celulaFaltas.innerHTML = disciplina.faltas;
        celulaResultado.innerHTML = disciplina.resultado;
    }
}