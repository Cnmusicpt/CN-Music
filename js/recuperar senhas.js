document.addEventListener('DOMContentLoaded', function() {
    const preloadContainer = document.querySelector('.preload-container');
    const formContainer = document.querySelector('.form-container');
  
    setTimeout(function() {
      preloadContainer.style.display = 'none';
      formContainer.style.display = 'block';
    }, 12000); // 2 segundos de preload
  
    const form = document.getElementById('registration-form');
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Evita o envio padrão do formulário
  
      // Aqui você pode adicionar lógica para enviar os dados do formulário
      // Por exemplo:
      // const formData = new FormData(form);
      // fetch('url-do-backend', {
      //   method: 'POST',
      //   body: formData
      // })
      // .then(response => response.json())
      // .then(data => console.log(data))
      // .catch(error => console.error('Erro:', error));
    });
  });




  function pesquisar() {
    const termoPesquisa = document.getElementById('searchInput').value;
    alert('Você está pesquisando por:' + termoPesquisa);
  }





  
document.addEventListener('DOMContentLoaded', function() {
  const chatBox = document.getElementById('chat-box');
  const userInput = document.getElementById('user-input');
  const sendBtn = document.getElementById('send-btn');

  sendBtn.addEventListener('click', function() {
    const userMsg = userInput.value;
    if (userMsg.trim() !== '') {
      addMessage('sent', userMsg);
      userInput.value = '';
      simulateResponse(userMsg);
    }
  });

  function addMessage(type, text) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('chat-msg', type);
    msgDiv.textContent = text;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function simulateResponse(userMsg) {
    setTimeout(function() {
      const responseMsg = generateResponse(userMsg);
      addMessage('received', responseMsg);
    }, 1000);
  }

  function generateResponse(userMsg) {
    // Aqui você pode adicionar lógica para gerar respostas simuladas com base na mensagem do usuário
    // Por exemplo, você pode ter uma lista de frases pré-definidas sobre música e retornar uma delas aleatoriamente.
    const responses = [
      'Entre em Contacto apartir do nosso email: cnmusicpt.@gmail.com',
      'Entre em Contacto na nossa página do facebook: https://facebook.com/cnmusic.ao',
      'Podes te tornar um membro ou parceiro CN-Music',
      'Fale com o CEO ou Gestor de Marketing',
 'Eu sou assistente de Marketing, Infelizmente não posso ajudar muito. Entre em contacto com um do membro ou parceiro para teres mais informações.ssssss ',
      
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const contentDiv = document.getElementById('content');
  const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

  let index = 2;
  const speed = 240 // Velocidade de escrita em milissegundos

  function writeText() {
      contentDiv.textContent += text[index];
      index++;

      if (index < text.length) {
          setTimeout(writeText, speed);
        
      }
  }

  writeText();
});

 

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  var email = document.getElementById("email").value;
  var password = getPasswordByEmail(email);
  if (password) {
    document.getElementById("passwordDisplay1").innerHTML = "sua senha é: " + password;
  } else {
    document.getElementById("passwordDisplay").innerHTML = "username não encontrado";
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
    "Fernando": "211",
    "Dorivaldo": "2502",
          "Cabrito": "12322",
            "Claúdio": "Tuq1k"
  
  };
  return users[email];
} 

