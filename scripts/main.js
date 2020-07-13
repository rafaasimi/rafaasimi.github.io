// Menu Hamburguer - Responsivo
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.menu-principal');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('ativo');
});