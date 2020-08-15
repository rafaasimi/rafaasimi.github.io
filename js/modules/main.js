export default function initToggleMenu() {
    const navigation = document.querySelector('.navigation');
    const toggle = document.querySelector('[data-menu="menu-mobile"]');


    function menuMobile() {
        navigation.classList.toggle('active');
        toggle.classList.toggle('active');
    }

    toggle.addEventListener('click', menuMobile)

}