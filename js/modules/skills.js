export default function initSkills() {


// Habilidades
const habilidades = [
    {
        categoria: 'Linguagens',
        habilidade: 'HTML5',
    },
    {
        categoria: 'Linguagens',
        habilidade: 'CSS3',
    },
    {
        categoria: 'Linguagens',
        habilidade: 'JavaScript',
    },
    {
        categoria: 'Design',
        habilidade: 'Figma',
    },
    {
        categoria: 'Design',
        habilidade: 'Adobe XD',
    },
    {
        categoria: 'Design',
        habilidade: 'Photoshop',
    },
    {
        categoria: 'Outros',
        habilidade: 'Git',
    },
    {
        categoria: 'Outros',
        habilidade: 'GitHub',
    },
]

const listaLinguagens = document.querySelector('.linguagens ul');
const listaDesign = document.querySelector('.design ul');
const listaOutros = document.querySelector('.outros ul');

habilidades.forEach((hab) => {
    if (hab.categoria === 'Linguagens') {
        listaLinguagens.innerHTML += `<li>${hab.habilidade}</li>`;
    }

    if (hab.categoria === 'Design') {
        listaDesign.innerHTML += `<li>${hab.habilidade}</li>`;
    }

    if (hab.categoria === 'Outros') {
        listaOutros.innerHTML += `<li>${hab.habilidade}</li>`;
    }
});

}