document.addEventListener('DOMContentLoaded', function() {
  const navbarToggle = document.getElementById('navbarToggle');
  const navbarLinks = document.querySelector('.navbar-links');

  navbarToggle.addEventListener('click', function() {
    navbarToggle.classList.toggle('active');
    navbarLinks.classList.toggle('active');
  });
});





document.addEventListener('DOMContentLoaded', function() {
  const contentDiv = document.getElementById('benjamim');
  const text = 'A CN-Music, foi fundada em 2021, Para ajudar os artista a distribuirem as suas músicas no mercado nacional e internacional. E hoje a CN-Music conta com mais de 700 usuários satisfeitos, e muito obrigado por nos tornar orgulho da banda e o nosso sonho realidade...';

  let index = 0;
  const speed = 40; // Velocidade de escrita em milissegundos

  function writeText() {
      contentDiv.textContent += text[index];
      index++;

      if (index < text.length) {
          setTimeout(writeText, speed);
      }
  }

  writeText();
});
