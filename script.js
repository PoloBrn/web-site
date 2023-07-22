// Fonction pour faire défiler en douceur vers une section spécifique
function smoothScroll(target) {
  const element = document.querySelector(target);
  const headerHeight = document.querySelector('header').offsetHeight;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition - headerHeight;

  window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
  });
}

// Lorsque la page est chargée, écoutez les clics sur les liens de navigation
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
      link.addEventListener('click', function (event) {
          event.preventDefault(); // Empêche le comportement de lien par défaut

          const target = link.getAttribute('href');

          smoothScroll(target);
      });
  });

  // Initialiser ScrollReveal
  const sr = ScrollReveal();

  // Définir les animations pour les différentes sections
  sr.reveal('section', {
      origin: 'bottom',
      distance: '20px',
      duration: 1000,
      delay: 200,
      opacity: 0,
      reset: true
  });

  sr.reveal('.separator', {
      origin: 'left',
      distance: '100%',
      duration: 1000,
      opacity: 0,
      reset: true
  });

  sr.reveal('.content', {
      origin: 'left',
      distance: '50px',
      duration: 1000,
      opacity: 0,
      reset: true
  });

  sr.reveal('.image img', {
      origin: 'right',
      distance: '50px',
      duration: 1000,
      opacity: 0,
      reset: true
  });
});
