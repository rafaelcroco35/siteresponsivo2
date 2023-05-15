const menuHamburger = document.querySelector('.hamburger-menu');
const menu2 = document.querySelector('.menu2');

menuHamburger.addEventListener('click', () => {
    menu2.classList.toggle('ativo');
} );
