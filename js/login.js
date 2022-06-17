function entrar(form) {

  if (form.email.value == "responsavel@gmail.com" && form.senha.value == "a") {
    window.open('https://matheusromano.github.io/projeto-saberes-do-amanha-v2/responsavel/agenda.html');
  }
  if (form.email.value == "professor@gmail.com" && form.senha.value == "a") {
    window.open('https://matheusromano.github.io/projeto-saberes-do-amanha-v2/professor/professor.html');
  }
  if (form.email.value == "aluno@gmail.com" && form.senha.value == "a") {
    window.open('https://matheusromano.github.io/projeto-saberes-do-amanha-v2/aluno/agenda.html');
  }
  if (form.email.value == "secretaria@gmail.com" && form.senha.value == "a") {
    window.open('https://matheusromano.github.io/projeto-saberes-do-amanha-v2/secretaria/matriculas.html');
  }
  if (form.email.value == "financeiro@gmail.com" && form.senha.value == "a") {
    window.open('https://matheusromano.github.io/projeto-saberes-do-amanha-v2/financeiro/financeiro.html');
  }
  else {
    alert("Usuário ou senha inválido!")
  }
}
function forget() {
  if (email.value == "") {
    alert("Por favor, informe seu e-mail de acesso para redefinição de senha")
  } else {
    alert("Dados para redefinicação de senha enviados para " + email.value)
  }
} function login() {
  alert('Por favor, entre em contato com a Secretaria')
}

