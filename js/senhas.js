document.addEventListener('DOMContentLoaded', function() {
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');

    // Verifica se há uma senha salva no localStorage
    var savedPassword = localStorage.getItem('savedPassword');

    if (savedPassword) {
        passwordInput.value = savedPassword;
    }

    // Atualiza o localStorage quando a senha for alterada
    passwordInput.addEventListener('input', function() {
        localStorage.setItem('savedPassword', passwordInput.value);
    });
});


function login() {
          var username = document.getElementById('username').value;
          var password = document.getElementById('password').value;
  
          // Lista de usuários e senhas válidos
          var users = [
              { username: 'CN-Music', password: '00000' },
              { username: 'Eduardo', password: '00225' },
              { username: 'Emanuel', password: '2044' },
              { username: 'Moniz', password: '2255' },
              { username: 'Liliano', password: '3354' },
              { username: 'Joel', password: '3045' },
              { username: 'Stides', password: '2225' },
              { username: 'Djeisan', password: '2345' },
              { username: 'Rosana', password: '3345' },
              { username: 'Langa', password: '5503' },
              { username: 'Bula', password: '3545' },
              { username: 'Team Kenzo', password: '2590' },
              { username: 'Suzetlayne', password: '2003' },
              { username: 'Fernando', password: '211' },
              { username: 'Dorivaldo', password: '2502' },
              { username: 'Cabrito', password: '12322' },
              { username: 'Claúdio', password: 'Tuq1k' },
              
              // Adicione mais usuários aqui
          ];
  
          // Verifica se o usuário e a senha correspondem a um dos usuários válidos
          var authenticatedUser = users.find(user => user.username === username && user.password === password);
  
          if (authenticatedUser) {
              window.location.href="../login/pagina_inicial.html"; // Redireciona para a página de dashboard
          } else {
              alert('Nome de Usuário ou Passe Incorrecta. Tente Novamente!');
             
          }
        }

  
        
  
  
      
   
      function passar(){
          
          window.location.href="../index.html";
  
          alert("você decidiu continuar sem sessão")
      }
  
  
      function criarconta(){
          
          window.location.href="../html/creat_acount.html";
  
          alert("Criar a sua nova conta!")
      }



      function createWith(provider) {
        alert("Não foi possível criar conta com " + provider);
      }
      
      document.getElementById("signup-form").addEventListener("submit", function(event) {
        event.preventDefault();
        let username = document.getElementById("username").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        // Aqui você pode adicionar a lógica para criar a conta com os dados fornecidos
        alert("Criando conta com nome de usuário: " + username + ", email: " + email);
      });
      

      