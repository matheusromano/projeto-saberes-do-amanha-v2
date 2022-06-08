      function entrar(form)
      {
       
       if(form.email.value == "joaquim@gmail.com" && form.senha.value == "a")
        {
          window.open('target.html')
        }
        if(form.email.value == "joaquina@gmail.com" && form.senha.value == "a")
        {
          window.open('target.html')
        }
        if(form.email.value == "eduardo@gmail.com" && form.senha.value == "a")
        {
          window.open('target.html')
        }
       else
       {
         alert("Usuário e senha inválido!")

        }
      }
      function forget()
      {
        if(email.value == "")
        {
          alert("Por favor, informe seu e-mail de acesso para redefinição de senha")
        } else{
        alert("Dados para redefinicação de senha enviados para "+ email.value)
      }
    } function login()
    {
    alert('Por favor, entre em contato com a Secretaria')
    }
  