// Animação Header Background
const principal = document.querySelector('.apresentacao');
principal.addEventListener('mousemove', moverBackground);

function moverBackground(event) {

    let moveX = (event.pageX * -1 / 50);
    let moveY = (event.pageY * -1 / 50);

    this.style.backgroundPosition = `${moveX}px ${moveY}px`;

}


