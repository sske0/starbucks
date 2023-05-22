const hamburgerButton = document.getElementById('hamburger-button');
const headerMenu = document.querySelector('.header-menu');
const menuButtons = document.querySelectorAll('.menu-button');
const menu = document.querySelector('.menu');
const body = document.body;

let isOpen = false;
let isMenuOpen = false;

hamburgerButton.addEventListener('click', () => {
  if (isOpen) {
    headerMenu.style.animation = 'slideIn 0.3s forwards';
    menu.style.display = 'none';
    isOpen = false;
    enableScroll();
  } else {
    headerMenu.style.display = 'block';
    headerMenu.style.animation = 'slideOut 0.3s forwards';
    isOpen = true;
    disableScroll();
  }
});

menuButtons.forEach(menuButton => {
  menuButton.addEventListener('click', () => {
    if (isMenuOpen) {
      menu.style.animation = 'slideIn 0.3s forwards';
      isMenuOpen = false;
      enableScroll();
    } else {
      menu.style.display = 'block';
      menu.style.animation = 'slideOut 0.3s forwards';
      isMenuOpen = true;
      disableScroll();
    }
  });
});

function disableScroll() {
  body.classList.add('no-scroll');
  body.addEventListener('touchmove', preventScroll, { passive: false });
}

function enableScroll() {
  body.classList.remove('no-scroll');
  body.removeEventListener('touchmove', preventScroll, { passive: false });
}

function preventScroll(event) {
  event.preventDefault();
}

headerMenu.addEventListener('animationend', () => {
  if (!isOpen) {
    headerMenu.style.display = 'none';
  }
});

menu.addEventListener('animationend', () => {
  if (!isMenuOpen) {
    menu.style.display = 'none';
  }
});
