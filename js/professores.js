

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

  $("#agendaTable").bootstrapTable({
    data: jsonAtividades
  });

  $("#agendaInput").on("keyup", function () {
    var agenda = $(this).val().toLowerCase();
    $("#agendaTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(agenda) > -1);
    });
  });

  $("#disciplinaTable").bootstrapTable({
    data: jsonDisciplina
  });

  $("#disciplinaInput").on("keyup", function () {
    var agenda = $(this).val().toLowerCase();
    $("#disciplinaTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(agenda) > -1);
    });
  });

  $("#matriculaTable").bootstrapTable({
    data: jsonMatricula
  });

  $("#matriculaInput").on("keyup", function () {
    var agenda = $(this).val().toLowerCase();
    $("#matriculaTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(agenda) > -1);
    });
  });


  
});



var jsonAtividades =
[
  {
    "turma": "23A",
    "n_matricula": "1",
    "nome": "João",
    "disciplina": "Matemática",
    "prova": "Prova 1 periodo",
    "docente": "Prof. Marcos",
    "data": "01/01/2019",
  },
  {
    "turma": "23A",
    "n_matricula": "2",
    "nome": "Maria",
    "disciplina": "Português",
    "prova": "Prova 1 periodo",
    "docente": "Prof. Marcos",
    "data": "01/01/2019",
  },
  {
    "turma": "23B",
    "n_matricula": "3",
    "nome": "Pedro",
    "disciplina": "Física",
    "prova": "Prova 1 periodo",
    "docente": "Prof. Marcos",
    "data": "01/01/2019",
  },
  {
    "turma": "23B",
    "n_matricula": "1",
    "nome": "João",
    "disciplina": "Matemática",
    "prova": "Prova 1 periodo",
    "docente": "Prof. Marcos",
    "data": "01/01/2019",
  },
  {
    "turma": "23B",
    "n_matricula": "2",
    "nome": "Maria",
    "disciplina": "Português",
    "prova": "Prova 1 periodo",
    "docente": "Prof. Marcos",
    "data": "01/01/2019",
  },
  {
    "turma": "23B",
    "n_matricula": "3",
    "nome": "Pedro",
    "disciplina": "Física",
    "prova": "Prova 1 periodo",
    "docente": "Prof. Marcos",
    "data": "01/01/2019",
  },

];

var jsonTurma = 
[
  {
    "turma": "23A",
    "n_matricula": "1",
    "nome": "João",
    "disciplina": "Matemática",
    "atividade_extra": "algebra_1",
    "docente": "Prof. Marcos",
    "status": "Aprovado"
  },
  {
    "turma": "23A",
    "n_matricula": "2",
    "nome": "Maria",
    "disciplina": "Português",
    "atividade_extra": "algebra_2",
    "docente": "Prof. Marcos",
    "status": "Reprovado"
  },
  {
    "turma": "23B",
    "n_matricula": "3",
    "nome": "Pedro",
    "disciplina": "Física",
    "atividade_extra": "algebra_3",
    "docente": "Prof. Marcos",
    "status": "Aprovado"
  },
  {
    "turma": "23B",
    "n_matricula": "1",
    "nome": "João",
    "disciplina": "Matemática",
    "atividade_extra": "algebra_1",
    "docente": "Prof. Marcos",
    "status": "Aprovado"
  },
  {
    "turma": "23B",
    "n_matricula": "2",
    "nome": "Maria",
    "disciplina": "Português",
    "atividade_extra": "algebra_2",
    "docente": "Prof. Marcos",
    "status": "Reprovado"
  },
  {
    "turma": "23B",
    "n_matricula": "3",
    "nome": "Pedro",
    "disciplina": "Física",
    "atividade_extra": "algebra_3",
    "docente": "Prof. Marcos",
    "status": "Aprovado"
  },

];

var jsonDisciplina = 
[
  {
    "cod_disciplina": "123",
    "nome": "João",
    "disciplina": "Matemática",
    "material": "inserir material",
    "docente": "Prof. Marcos",
  },
  {
    "cod_disciplina": "456",
    "nome": "Maria",
    "disciplina": "Português",
    "material": "inserir material",
    "docente": "Prof. Marcos",
  },
  {
    "cod_disciplina": "789",
    "nome": "Pedro",
    "disciplina": "Física",
    "material": "inserir material",
    "docente": "Prof. Marcos",
  },
];

var jsonMatricula =
[
  {
    "n_matricula": "1",
    "nome": "João",
    "disciplina": "Matemática",
    "material": "inserir material",
    "docente": "Prof. Marcos",
    "data": "01/01/2019",
  },
  {
    "n_matricula": "2",
    "nome": "Maria",
    "disciplina": "Português",
    "material": "inserir material",
    "docente": "Prof. Marcos",
    "data": "01/01/2019",
  },
  {
    "n_matricula": "3",
    "nome": "Pedro",
    "disciplina": "Física",
    "material": "inserir material",
    "docente": "Prof. Marcos",
    "data": "01/01/2019",
  },
];
