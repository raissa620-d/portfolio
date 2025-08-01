const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Ouvre/ferme le menu au clic sur l'icône hamburger
toggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});

// Ouvre/ferme le menu avec clavier (Entrée, Espace)
toggle.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    menu.classList.toggle('open');
  }
});

// Fermer le menu quand on clique sur un lien (utile sur mobile/tablette)
const links = menu.querySelectorAll('a');
links.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
  });
});

// Ferme le menu automatiquement si on agrandit la fenêtre au-delà de 900px (desktop)
window.addEventListener('resize', () => {
  if (window.innerWidth > 900 && menu.classList.contains('open')) {
    menu.classList.remove('open');
  }
});

// Carrousel Responsive
const projets = document.querySelectorAll('.projet');
let currentIndex = 0;
const delay = 3000; // Durée d'affichage de chaque projet en ms

function showProjet(index) {
  projets.forEach((proj, i) => {
    proj.style.display = 'none';
  });
  projets[index].style.display = 'block';
}

function nextProjet() {
  currentIndex = (currentIndex + 1) % projets.length;
  showProjet(currentIndex);
}

function initSlider() {
  if (window.innerWidth <= 900) {
    showProjet(currentIndex);
    setInterval(nextProjet, delay);
  } else {
    projets.forEach(p => p.style.display = 'block');
  }
}

initSlider();

window.addEventListener('resize', () => {
  initSlider();
});
