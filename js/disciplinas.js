var requestURL = 'https://mbairo.github.io/page/alunos.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var disciplinas = request.response;
    console.log("Pra entender: ", disciplinas);
    atualizaTabelas(disciplinas);
} 

// Função para chamar outras Funções, no caso as Tabelas com somente a parte desejada do Json ("disciplinasCursando" ou  "disciplinasOfertadas")
function atualizaTabelas(disciplinas){
    atualizaTabelaCursando(disciplinas.disciplinasCursando);
    atualizaTabelaOfertadas(disciplinas.disciplinasOfertadas);
};

function atualizaTabelaCursando(disciplinas) {
    const COLUNA_CODIGO = 0;
    const COLUNA_MATERIA = 1;
    const COLUNA_LINK = 2;
    const table = document.getElementById("tabelaCursosCursando");

    for (let indice = 0; indice < disciplinas.length; indice ++) {
                                            
        const disciplina = disciplinas[indice];
        
        // Linhas
        const row = table.insertRow(indice +1);

        // Junção de linha com coluna = celula/cell
        const celulaCodigo = row.insertCell(COLUNA_CODIGO);
        const celulaMateria = row.insertCell(COLUNA_MATERIA);
        const celulaLink = row.insertCell(COLUNA_LINK);
    
        // Add o valor contido no json "Respectivos: codigo e material"
        celulaCodigo.innerHTML = disciplina.codigo;
        celulaMateria.innerHTML = disciplina.materia; 
        
        // Cria botão e da o nome 
        const btnMaterial = document.createElement('button');
        btnMaterial.textContent = 'Material';
        btnMaterial.id = "backGroundYellow";
        
        // Ao clicar o abrir o link vindo do json "link"
        btnMaterial.addEventListener("click", function(){
          location = disciplina.link;
        });
        
        // Add botão na página na posição do celulaLink (Linha + Coluna)
        celulaLink.appendChild(btnMaterial);       
    }
}

function atualizaTabelaOfertadas(disciplinas) {
    const COLUNA_MATERIA = 0;
    const COLUNA_LINK = 1;
    const table = document.getElementById("tabelaCursosOfertados");
                                          
    for (let indice = 0; indice < disciplinas.length; indice ++) {
                                            
        const disciplina = disciplinas[indice];
        
        //linhas
        const row = table.insertRow(indice +1);

        // Junção de linha com coluna = celula/cell
        const celulaMateria = row.insertCell(COLUNA_MATERIA);
        const celulaLink = row.insertCell(COLUNA_LINK);

        // Add o valor contido no json "Respectivos: material ou link..."
        celulaMateria.innerHTML = disciplina.materia;
    
        // Cria botão e da o nome  
        const btnMatriculese = document.createElement('button');
        btnMatriculese.textContent = 'Matricule-se';
        btnMatriculese.id = "backGroundYellow";
        
        // Ao clicar o abrir o link vindo do json "link"
        btnMatriculese.addEventListener("click", function(){
          window.alert("Parabéns pela iniciativa! Sua solicitação foi enviada para o corpo docente!");
        });
        
        // Add botão na página na posição do celulaLink (Linha + Coluna)
        celulaLink.appendChild(btnMatriculese);
    }
}
