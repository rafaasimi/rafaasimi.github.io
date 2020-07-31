// Animação Header Background
const principal = document.querySelector('.apresentacao');
principal.addEventListener('mousemove', moverBackground);

function moverBackground(event) {

    let moveX = (event.pageX * -1 / 50);
    let moveY = (event.pageY * -1 / 50);

    this.style.backgroundPosition = `${moveX}px ${moveY}px`;

}

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


repositorios = async function () {
    //Pausa a execucão até pegarRepositorio() retornar um valor ou falhar.
    let repositorio = await pegarRepositorio();

    const listUl = document.querySelector('.lista-projetos ul')

    //Verifica se houve erro
    if (repositorio.error == null) {

        //Caso não houver erros
        repositorio.data.slice(-8).forEach((repo, index) => {
            const listItem = document.createElement('li');

            const repoName = repo.name;
            const repoDescription = repo.description;
            const repoURL = repo.html_url;

            listItem.innerHTML = `
                <li class="projetos-item">
                    <h3>${repoName}</h3>
                    <p>${repoDescription}</p>
                   <div class="btn-projeto"><a href="${repoURL}" target="_blank">Ver projeto <i class="fas fa-angle-right"></i></a></div>
                </li>
    `

            listUl.appendChild(listItem);
        })



    } else {
        //Caso houver erros
        console.error(repositorio.error);
    }

};

async function pegarRepositorio() {
    let gitID = 'rafaasimi';
    let d = {};
    try {
        //Pausa a execução até axios.get() retornar um valor ou falhar
        d = await axios.get(`https://api.github.com/users/${gitID}/repos`, {
            timeout: 3000
        });
    } catch (err) {
        d.error = err;
        console.log('Erro 404 - Usuário não encontrado.');
    }
    return d;
};

repositorios();