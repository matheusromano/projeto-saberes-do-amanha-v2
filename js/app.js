function validateForm() {
  var name =  document.getElementById('name').value;
  if (name == "") {
      document.querySelector('.status').innerHTML = "Seu nome não pode ser vazio";
      return false;
  }
  var email =  document.getElementById('email').value;
  if (email == "") {
      document.querySelector('.status').innerHTML = "Seu email não pode ser vazio";
      return false;
  } else {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(email)){
          document.querySelector('.status').innerHTML = "Formato de email inválido";
          return false;
      }
  }
  var subject =  document.getElementById('subject').value;
  if (subject == "") {
      document.querySelector('.status').innerHTML = "Assunto não pode ser vazio";
      return false;
  }
  var message =  document.getElementById('message').value;
  if (message == "") {
      document.querySelector('.status').innerHTML = "Mensagem não pode ser vazio";
      return false;
  }
  document.querySelector('.status').innerHTML = "Enviando...";
}