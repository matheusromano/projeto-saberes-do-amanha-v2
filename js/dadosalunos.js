

$(document).ready(function () {
  $("#turmaTable").bootstrapTable({
    data: jsonTurma
  });
  $("#turmaInput").on("keyup", function () {
    var turma = $(this).val().toLowerCase();
    $("#turmaTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(turma) > -1);
    });
  });


    $("#frequenciaTable").bootstrapTable({
    data: jsonFrequencia
  });

  $("#frequenciaInput").on("keyup", function () {
    var frequencia = $(this).val().toLowerCase();
    $("#frequenciaTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(frequencia) > -1);
    });
  });

  $("#financeiroTable").bootstrapTable({
    data: jsonFinanceiro
  });
  $("#financeiroInput").on("keyup", function () {
    var financeiro = $(this).val().toLowerCase();
    $("#financeiroTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(financeiro) > -1);
    });
  });
  
});

var jsonTurma = 
[
  {
    "atividadeextra": "Educação Financeira",
    "n_matricula": "0001",
    "nome": "Carlos Eduardo da Fonseca",
    "anoletivo": "5 ano",
    "periodo": "Manhã",
    "docente": "Prof. Carlos Alberto",
    "status": "Aprovado"
  },
  {
    "atividadeextra": "",
    "n_matricula": "0002",
    "nome": "Maria Alcantra",
    "anoletivo": "5 ano",
    "periodo": "Manhã",
    "docente": "Prof. Carlos Alberto",
    "status": "Aprovado"
  },
  {
    "atividadeextra": "",
    "n_matricula": "0003",
    "nome": "Ricardo Augusto",
    "anoletivo": "5 ano",
    "periodo": "Manhã",
    "docente": "Prof. Carlos Alberto",
    "status": "Aprovado"
  },
  {
    "atividadeextra": "",
    "n_matricula": "0004",
    "nome": "Augusto Vieira",
    "anoletivo": "1 ano fundamental",
    "periodo": "Tarde",
    "docente": "Prof. Carlos Alberto",
    "status": "Aprovado"
  },
  {
    "atividadeextra": "",
    "n_matricula": "0005",
    "nome": "Felipe da silva",
    "anoletivo": "6 ano",
    "periodo": "Tarde",
    "docente": "Prof. Carlos Alberto",
    "status": "Aprovado"
  },
  {
    "atividadeextra": "",
    "n_matricula": "0006",
    "nome": "Jéssica Alencar",
    "anoletivo": "5 ano",
    "periodo": "Manhã",
    "docente": "Prof. Carlos Alberto",
    "status": "Aprovado"
  },

];

var jsonFrequencia =
[
  {
    "atividadeextra": "Educação Financeira",
    "n_matricula": "0001",
    "nome": "Carlos Eduardo da Fonseca",
    "anoletivo": "5 ano",
    "periodo": "Manhã",
    "materia":"Português",
    "docente": "Prof. Carlos Alberto",
    "resultado": "Aprovado",
    "faltas":1,
    "1bim":100,
    "2bim":100,
    "total":200
  },
  {
    "atividadeextra": "Educação Financeira",
    "n_matricula": "0001",
    "nome": "Carlos Eduardo da Fonseca",
    "anoletivo": "5 ano",
    "periodo": "Manhã",
    "materia":"Educação Física",
    "docente": "Prof. Carlos Alberto",
    "resultado": "Aprovado",
    "faltas":1,
    "1bim":90,
    "2bim":90,
    "total":180
  },
  {
    "atividadeextra": "Educação Financeira",
    "n_matricula": "0001",
    "nome": "Carlos Eduardo da Fonseca",
    "anoletivo": "5 ano",
    "periodo": "Manhã",
    "materia":"Matemática",
    "docente": "Prof. Carlos Alberto",
    "resultado": "Reprovado",
    "faltas":15,
    "1bim":80,
    "2bim":80,
    "total":160
  },
  {
    "atividadeextra": "Educação Financeira",
    "n_matricula": "0001",
    "nome": "Carlos Eduardo da Fonseca",
    "anoletivo": "5 ano",
    "periodo": "Manhã",
    "materia":"Educação Financeira",
    "docente": "Prof. Carlos Alberto",
    "resultado": "Aprovado",
    "1bim":90,
    "2bim":60,
    "total":150
  },
  {
    "atividadeextra": "",
    "n_matricula": "0002",
    "nome": "Maria Alcantra",
    "anoletivo": "5 ano",
    "periodo": "Manhã",
    "docente": "Prof. Carlos Alberto",
    "resultado": "Aprovado",
    "periodo": "Manhã",
    "materia":"Português",
    "docente": "Prof. Carlos Alberto",
    "resultado": "Aprovado",
    "faltas":5,
    "1bim":60,
    "2bim":60,
    "total":120
  },
    {
    "atividadeextra": "",
    "n_matricula": "0002",
    "nome": "Maria Alcantra",
    "anoletivo": "5 ano",
    "periodo": "Manhã",
    "docente": "Prof. Carlos Alberto",
    "resultado": "Aprovado",
    "periodo": "Manhã",
    "materia":"Educação Física",
    "docente": "Prof. Carlos Alberto",
    "resultado": "Aprovado",
    "1bim":80,
    "2bim":60,
    "total":140
  },
    {
    "atividadeextra": "",
    "n_matricula": "0002",
    "nome": "Maria Alcantra",
    "anoletivo": "5 ano",
    "periodo": "Manhã",
    "docente": "Prof. Carlos Alberto",
    "resultado": "Aprovado",
    "periodo": "Manhã",
    "materia":"Matemática",
    "docente": "Prof. Carlos Alberto",
    "resultado": "Aprovado",
     "1bim":60,
    "2bim":60,
    "total":120
  },
  
  {
    "atividadeextra": "",
    "n_matricula": "0003",
    "nome": "Ricardo Augusto",
    "anoletivo": "5 ano",
    "periodo": "Manhã",
	"materia":"Educação Física",
    "docente": "Prof. Carlos Alberto",
    "resultado": "Aprovado",
    "1bim":90,
    "2bim":90,
    "total":180
  },
    {
    "atividadeextra": "",
    "n_matricula": "0003",
    "nome": "Ricardo Augusto",
    "anoletivo": "5 ano",
   	"materia":"Matemática",
    "periodo": "Manhã",
    "docente": "Prof. Carlos Alberto",
    "resultado": "Aprovado",
    "1bim":100,
    "2bim":90,
    "total":190
  },
    {
    "atividadeextra": "",
    "n_matricula": "0003",
    "nome": "Ricardo Augusto",
    "anoletivo": "5 ano",
    "periodo": "Manhã",
	"materia":"Português",
    "docente": "Prof. Carlos Alberto",
    "resultado": "Aprovado",
    "1bim":95,
    "2bim":95,
    "total":190
  },

  {
    "atividadeextra": "",
    "n_matricula": "0004",
    "nome": "Augusto Vieira",
    "anoletivo": "1 ano fundamental",
    "materia":"Ensino Fundamental",
    "docente": "Prof. Carlos Alberto",
    "resultado": "Aprovado",
    "1bim":70,
    "2bim":75,
    "total":145
  },
  
  {
    "atividadeextra": "",
    "n_matricula": "0005",
    "nome": "Felipe da silva",
    "anoletivo": "6 ano",
    "periodo": "Tarde",
    "materia":"Matemática",
    "docente": "Prof. Carlos Alberto",
    "resultado": "Aprovado",
    "faltas":5,
    "1bim":80,
    "2bim":60,
    "total":140
  },
  {
    "atividadeextra": "",
    "n_matricula": "0005",
    "nome": "Felipe da silva",
    "anoletivo": "6 ano",
    "periodo": "Tarde",
    "materia":"Português",
    "docente": "Prof. Carlos Alberto",
    "resultado": "Aprovado",
    "faltas":5,
    "1bim":80,
    "2bim":60,
    "total":140
  },
  {
    "atividadeextra": "",
    "n_matricula": "0005",
    "nome": "Felipe da silva",
    "anoletivo": "6 ano",
    "periodo": "Tarde",
    "materia":"Ed. Física",
    "docente": "Prof. Carlos Alberto",
    "resultado": "Aprovado"
  },
  {
    "atividadeextra": "",
    "n_matricula": "0006",
    "nome": "Jéssica Alencar",
    "anoletivo": "5 ano",
    "periodo": "Manhã",
    "materia":"Português",
    "docente": "Prof. Carlos Alberto",
    "resultado": "Aprovado",
    "faltas":5,
    "1bim":60,
    "2bim":60,
    "total":120
  },
  {
    "atividadeextra": "",
    "n_matricula": "0006",
    "nome": "Jéssica Alencar",
    "anoletivo": "5 ano",
    "periodo": "Manhã",
    "materia":"Matemática",
    "docente": "Prof. Carlos Alberto",
    "resultado": "Aprovado",
    "faltas":2,
    "1bim":80,
    "2bim":60,
    "total":140
  },
  {
    "atividadeextra": "",
    "n_matricula": "0006",
    "nome": "Jéssica Alencar",
    "anoletivo": "5 ano",
    "periodo": "Manhã",
    "materia":"Educação Física",
    "docente": "Prof. Carlos Alberto",
    "resultado": "Aprovado",
    "1bim":80,
    "2bim":60,
    "total":140
  },

];
var jsonFinanceiro =
[
  {
    "atividadeextra": "Educação Financeira",
    "vencimentos":"10/07/2022",
    "status":"Em aberto",
    "nomeresp":"Luis Antonio da Fonseca", 
    "n_matricula": "0001",
    "email":'luiscarlosfonseca@gmail.com',
    "nome": "Carlos Eduardo da Fonseca",
    "anoletivo": "5 ano",
    "periodo": "Manhã",
    "materia":"Português",
    "docente": "Prof. Carlos Alberto",
    "resultado": "Aprovado",
    "faltas":1,
    "1bim":100,
    "2bim":100,
    "total":200
  },
  {
    "atividadeextra": "Educação Financeira",
    "n_matricula": "0001",
    "vencimentos":"10/06/2022",
    "status":"Pago",
    "nomeresp":"Luis Antonio da Fonseca", 
    "email":'luiscarlosfonseca@gmail.com',
    "nome": "Carlos Eduardo da Fonseca",
    "anoletivo": "5 ano",
    "periodo": "Manhã",
    "materia":"Educação Física",
    "docente": "Prof. Carlos Alberto",
    "resultado": "Aprovado",
    "faltas":1,
    "1bim":90,
    "2bim":90,
    "total":180
  },
  {
    "atividadeextra": "Educação Financeira",
    "n_matricula": "0001",
    "vencimentos":"10/05/2022",
    "status":"Pago",
    "nomeresp":"Luis Antonio da Fonseca", 
    "email":'luiscarlosfonseca@gmail.com',
    "nome": "Carlos Eduardo da Fonseca",
    "anoletivo": "5 ano",
    "periodo": "Manhã",
    "materia":"Matemática",
    "docente": "Prof. Carlos Alberto",
    "resultado": "Reprovado",
    "faltas":15,
    "1bim":80,
    "2bim":80,
    "total":160
  },
  
  {
    "atividadeextra": "",
    "n_matricula": "0002",
    "nome": "Maria Alcantra",
    "vencimentos":"10/07/2022",
    "nomeresp":"Rubia Alcantra", 
    "email":'rubiaalcantra@gmail.com',  
    "status":"Em aberto",
    "anoletivo": "5 ano",
    "periodo": "Manhã",
    "docente": "Prof. Carlos Alberto",
    "resultado": "Aprovado",
    "periodo": "Manhã",
    "materia":"Português",
    "docente": "Prof. Carlos Alberto",
    "resultado": "Aprovado",
    "faltas":5,
    "1bim":60,
    "2bim":60,
    "total":120
  },
    {
    "atividadeextra": "",
    "n_matricula": "0002",
    "nome": "Maria Alcantra",
    "vencimentos":"10/06/2022",
    "nomeresp":"Rubia Alcantra", 
    "email":'rubiaalcantra@gmail.com',  
    "status":"Pago",
    "anoletivo": "5 ano",
    "periodo": "Manhã",
    "docente": "Prof. Carlos Alberto",
    "resultado": "Aprovado",
    "periodo": "Manhã",
    "materia":"Educação Física",
    "docente": "Prof. Carlos Alberto",
    "resultado": "Aprovado",
    "1bim":80,
    "2bim":60,
    "total":140
  },
    {
    "atividadeextra": "",
    "n_matricula": "0002",
    "nome": "Maria Alcantra",
    "vencimentos":"10/05/2022",
    "nomeresp":"Rubia Alcantra", 
    "email":'rubiaalcantra@gmail.com',  
    "status":"Pago",
    "anoletivo": "5 ano",
    "periodo": "Manhã",
    "docente": "Prof. Carlos Alberto",
    "resultado": "Aprovado",
    "periodo": "Manhã",
    "materia":"Matemática",
    "docente": "Prof. Carlos Alberto",
    "resultado": "Aprovado",
     "1bim":60,
    "2bim":60,
    "total":120
  },
  
  {
    "atividadeextra": "",
    "n_matricula": "0003",
    "nome": "Ricardo Augusto",
    "vencimentos":"10/07/2022",
    "nomeresp":"Flavia Almeida Augusto", 
    "email":'flaviaalm1969@gmail.com',  
    "status":"Em aberto",
    "anoletivo": "5 ano",
    "periodo": "Manhã",
	"materia":"Educação Física",
    "docente": "Prof. Carlos Alberto",
    "resultado": "Aprovado",
    "1bim":90,
    "2bim":90,
    "total":180
  },
    {
    "atividadeextra": "",
    "n_matricula": "0003",
    "nome": "Ricardo Augusto",
    "vencimentos":"10/06/2022",
    "nomeresp":"Flavia Almeida Augusto",
    "email":'flaviaalm1969@gmail.com',  
    "status":"Pago",
    "anoletivo": "5 ano",
	"materia":"Matemática",
    "periodo": "Manhã",
    "docente": "Prof. Carlos Alberto",
    "resultado": "Aprovado",
    "1bim":100,
    "2bim":90,
    "total":190
  },
    {
    "atividadeextra": "",
    "n_matricula": "0003",
    "nome": "Ricardo Augusto",
    "vencimentos":"10/05/2022",
    "nomeresp":"Flavia Almeida Augusto",
    "email":'flaviaalm1969@gmail.com',  
    "status":"Pago",
    "anoletivo": "5 ano",
    "periodo": "Manhã",
  	"materia":"Português",
    "docente": "Prof. Carlos Alberto",
    "resultado": "Aprovado",
    "1bim":95,
    "2bim":95,
    "total":190
  },

  {
    "atividadeextra": "",
    "n_matricula": "0004",
    "nome": "Augusto Vieira",
    "vencimentos":"10/07/2022",
    "nomeresp":"Jorge fernando Vieira",
    "email":'jf_vieira1989@gmail.com',  
    "status":"Em aberto",
    "anoletivo": "1 ano fundamental",
    "periodo": "Tarde",
    "materia":"Ensino Fundamental",
    "docente": "Prof. Carlos Alberto",
    "resultado": "Aprovado",
    "1bim":70,
    "2bim":75,
    "total":145
  },
  
  {
    "atividadeextra": "",
    "n_matricula": "0005",
    "nome": "Felipe da silva",
    "anoletivo": "6 ano",
    "vencimentos":"10/07/2022",
    "nomeresp":"Roberto Aguiar da Silva",
    "email":'robert_osilva@hotmail.com',  
    "status":"Em aberto",
    "periodo": "Tarde",
    "materia":"Matemática",
    "docente": "Prof. Carlos Alberto",
    "resultado": "Aprovado",
    "faltas":5,
    "1bim":80,
    "2bim":60,
    "total":140
  },
  {
    "atividadeextra": "",
    "n_matricula": "0005",
    "nome": "Felipe da silva",
    "vencimentos":"10/06/2022",
    "nomeresp":"Roberto Aguiar da Silva",
    "email":'robert_osilva@hotmail.com',  
    "status":"Pago",
    "anoletivo": "6 ano",
    "periodo": "Tarde",
    "materia":"Português",
    "docente": "Prof. Carlos Alberto",
    "resultado": "Aprovado",
    "faltas":5,
    "1bim":80,
    "2bim":60,
    "total":140
  },
  {
    "atividadeextra": "",
    "n_matricula": "0005",
    "nome": "Felipe da silva",
    "vencimentos":"10/05/2022",
    "nomeresp":"Roberto Aguiar da Silva",
    "email":'robert_osilva@hotmail.com',  
    "status":"Pago",
    "anoletivo": "6 ano",
    "periodo": "Tarde",
    "materia":"Ed. Física",
    "docente": "Prof. Carlos Alberto",
    "resultado": "Aprovado"
  },
  {
    "atividadeextra": "",
    "n_matricula": "0006",
    "nome": "Jéssica Alencar",
    "vencimentos":"10/07/2022",
    "nomeresp":"Rubens de Alencar",
    "email":'rubensdealencar@gmail.com',  
    "status":"Em aberto",
    "anoletivo": "5 ano",
    "periodo": "Manhã",
    "materia":"Português",
    "docente": "Prof. Carlos Alberto",
    "resultado": "Aprovado",
    "faltas":5,
    "1bim":60,
    "2bim":60,
    "total":120
  },
  {
    "atividadeextra": "",
    "n_matricula": "0006",
    "nome": "Jéssica Alencar",
    "vencimentos":"10/06/2022",
    "nomeresp":"Rubens de Alencar",
    "email":'rubensdealencar@gmail.com',  
    "status":"Em aberto",
    "anoletivo": "5 ano",
    "periodo": "Manhã",
    "materia":"Matemática",
    "docente": "Prof. Carlos Alberto",
    "resultado": "Aprovado",
    "faltas":2,
    "1bim":80,
    "2bim":60,
    "total":140
  },
  {
    "atividadeextra": "",
    "n_matricula": "0006",
    "nome": "Jéssica Alencar",
    "vencimentos":"10/05/2022",
    "nomeresp":"Rubens de Alencar",
    "email":'rubensdealencar@gmail.com',  
    "status":"Pago",
    "anoletivo": "5 ano",
    "periodo": "Manhã",
    "materia":"Educação Física",
    "docente": "Prof. Carlos Alberto",
    "resultado": "Aprovado",
    "1bim":80,
    "2bim":60,
    "total":140
  },

];
function mail(){
  window.open('mailto:saberesdoamanha@gmail.com')
}
function pagePrint() {
  window.print();
}
function baixa_excel()
{ 

var tab_text="<table><tr>";
var textRange = ''; 
var j=0;
var tab = document.getElementById('financeiroTable','frequenciaTable'); 

for(j = 0 ; j < tab.rows.length ; j++) 
{     
    tab_text += tab.rows[j].innerHTML+"</tr>";
}

tab_text +="</table>";

var a = document.createElement('a');
var data_type = 'data:application/vnd.ms-excel';
a.href = data_type + ', ' + encodeURIComponent(tab_text);

a.download = 'Dados.xls';

a.click();

e.preventDefault();

}

function baixa_excelfreq()
{ 

var tab_text="<table><tr>";
var textRange = ''; 
var j=0;
var tab = document.getElementById('frequenciaTable'); 

for(j = 0 ; j < tab.rows.length ; j++) 
{     
    tab_text += tab.rows[j].innerHTML+"</tr>";
}

tab_text +="</table>";

var a = document.createElement('a');
var data_type = 'data:application/vnd.ms-excel';
a.href = data_type + ', ' + encodeURIComponent(tab_text);

a.download = 'Dados.xls';

a.click();

e.preventDefault();

}

