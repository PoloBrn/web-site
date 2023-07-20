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
  document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Empêche le comportement de lien par défaut
  
        const target = link.getAttribute('href');
  
        smoothScroll(target);
      });
    });
  });
  
  // Fonction pour faire apparaître le texte au fur et à mesure
  function revealText() {
    const sections = document.querySelectorAll('section');
  
    sections.forEach(section => {
      const separator = section.querySelector('.separator');
      const textElements = section.querySelectorAll('p, h2, ul, li');
      let delay = 0;
  
      // Applique une classe pour masquer initialement le texte
      textElements.forEach(element => {
        element.classList.add('hidden');
      });
  
      // Lorsque l'utilisateur fait défiler jusqu'au séparateur, faites apparaître le texte progressivement
      const reveal = function(entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            textElements.forEach((element, index) => {
              setTimeout(function() {
                element.classList.remove('hidden');
              }, index * 200); // Ajuste la vitesse d'apparition du texte (ici, 200 ms entre chaque élément)
            });
  
            separatorObserver.unobserve(separator); // Arrête l'observation une fois le texte révélé
          }
        });
      };
  
      const separatorObserver = new IntersectionObserver(reveal, {
        rootMargin: '0px', // Modifier les marges selon tes préférences pour déclencher l'animation
        threshold: 0
      });
  
      separatorObserver.observe(separator);
    });
  }
  