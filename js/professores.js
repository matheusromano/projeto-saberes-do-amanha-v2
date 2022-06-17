

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

  $("#presencaTable").bootstrapTable({
    data: jsonPresenca
  });

  $("#presencaInput").on("keyup", function () {
    var presenca = $(this).val().toLowerCase();
    $("#presencaTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(presenca) > -1);
    });
  });

  $("#notasTable").bootstrapTable({
    data: jsonNotas
  });

  $("#relatorioTable").bootstrapTable({
    data: jsonRelatorios
  });

  $("#relatorioInput").on("keyup", function () {
    var relatorio = $(this).val().toLowerCase();
    $("#relatorioTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(relatorio) > -1);
    });
  });

  $("#caTable").bootstrapTable({
    data: jsonCtrlAtividades
  });

  $("#caInput").on("keyup", function () {
    var relatorio = $(this).val().toLowerCase();
    $("#caTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(relatorio) > -1);
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

var jsonPresenca =
[
  {
    "turma": "23A",
    "n_matricula": "1",
    "nome": "João",
    "disciplina": "Matemática",
    "confirmacao_presenca": "Sim ou nao",
    "docente": "Prof. Marcos",
    "data": "01/01/2019",
  },
  {
    "turma": "23B",
    "n_matricula": "2",
    "nome": "Maria",
    "disciplina": "Português",
    "confirmacao_presenca": "Sim ou nao",
    "docente": "Prof. Marcos",
    "data": "01/01/2019",
  },
  {
    "turma": "23C",
    "n_matricula": "3",
    "nome": "Pedro",
    "disciplina": "Física",
    "confirmacao_presenca": "Sim ou nao",
    "docente": "Prof. Marcos",
    "data": "01/01/2019",
  },
];

var jsonNotas =
[
  {
    "n_matricula": "1",
    "nome": "João",
    "disciplina": "Matemática",
    "nota": "10",	
    "docente": "Prof. Marcos",
    "data": "01/01/2019",
  },
  {
    "n_matricula": "2",
    "nome": "Maria",
    "disciplina": "Português",
    "nota": "10",
    "docente": "Prof. Marcos",
    "data": "01/01/2019",
  },
  {
    "n_matricula": "3",
    "nome": "Pedro",
    "disciplina": "Física",
    "nota": "10",
    "docente": "Prof. Marcos",
    "data": "01/01/2019",
  },
];

var jsonRelatorios =
[
  {
    "turma": "23A",
    "n_matricula": "1",
    "nome": "João",
    "disciplina": "Matemática",
    "nota": "10, 5, 3.0",	
    "atividades": "2.0",
    "docente": "Prof. Marcos",
  },
  {
    "turma": "23B",
    "n_matricula": "2",
    "nome": "Maria",
    "disciplina": "Português",
    "nota": "10, 5, 3.0",	
    "atividades": "2.0",
    "docente": "Prof. Marcos",
  },
  {
    "turma": "23C",
    "n_matricula": "3",
    "nome": "Pedro",
    "disciplina": "Física",
    "nota": "10, 5, 3.0",	
    "atividades": "2.0",
    "docente": "Prof. Marcos",
  },
];

var jsonCtrlAtividades =
[
  {
    "n_matricula": "1",
    "nome": "João",
    "atividade_extra": "Algebra 1 40hrs",
    "docente": "Prof. Marcos",
    "status": "Aprovado",
  },
  {
    "turma": "23B",
    "n_matricula": "2",
    "nome": "Maria",
    "atividade_extra": "Algebra 1 40hrs",
    "docente": "Prof. Marcos",
    "status": "Pendente",
  },
  {
    "turma": "23C",
    "n_matricula": "3",
    "nome": "Pedro",
    "atividade_extra": "Algebra 1 40hrs",
    "docente": "Prof. Marcos",
    "status": "Aprovado",
  },
];