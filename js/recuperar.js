document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var email = document.getElementById("email").value;
    var password = getPasswordByEmail(email);
    if (password) {
      document.getElementById("passwordDisplay1").innerHTML = "Sua senha é: " + password;
    } else {
      document.getElementById("passwordDisplay").innerHTML = "Username não encontrado";
    }
  });
  
  function getPasswordByEmail(email) {
    // Aqui você pode implementar a lógica para recuperar a senha do arquivo HTML
    // Por exemplo, você pode usar um objeto JavaScript ou um array para armazenar os pares email-senha
    var users = {
      "exemplo@email.com": "senha123",
      "outroexemplo@email.com": "outrasenha456",
     "CN-Music": "00000",
      "Eduardo" : "00225",
      "Emanuel": "2044",
     "Moniz": "2255",
      "Liliano": "3354",
     "Joel": "3045",
     "Stides": "2225",
     "Djeisan": "2345",
     "Rosana": "3345",
      "Langa": "5503",
   "Bula": "3545",
     "Team Kenzo": "2590",
      "Suzetlayne": "2003",
      "Fernando": "211"
    
    };
    return users[email];
  } 

  