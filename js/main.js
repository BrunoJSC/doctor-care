const menu = document.querySelector('.menu-mobile');
const button = document.querySelector('.bx');
const openMenu = document.querySelector('.open');
const closeMenu = document.querySelector('.close');
const nav = document.getElementById('navbar');

function openBoxMenu() {
  if(menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
    document.body.style = "none"
  } else {
    menu.classList.add('showMenu');
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
    document.body.style.overflow = "hidden";
  }
}

function scroll() {
  if(scrollY >= 10) {
    nav.classList.add('scroll');
  } else {
    nav.classList.remove('scroll');
  }
}

function backToTopButtonScroll() {
  if(scrollY > 500) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}

function onScroll() {
  scroll();
  backToTopButtonScroll();
}

function close() {
  document.body.classList.remove('navbar')
}

button.addEventListener('click', openBoxMenu);
window.addEventListener('scroll', onScroll);
