const projetos = [
    {
        id: 1,
        nome: 'Alura-flix',
        link: 'https://github.com/lucasfroque/alura-flix',
        descricao: 'O Aluraflix é um projeto desenvolvido durante o Alura Challenge Back-End, que consiste em criar uma API Restful para um sistema de vídeos como a netflix.',
        tecnologias: ['Java', 'Springboot', 'Spring Data', 'JWT', 'JUnit', 'MySQL']
    },
    {
        id: 2,
        nome: 'TrackMe',
        link: 'https://github.com/lucasfroque/TrackMe',
        descricao: 'TrackMe é uma APIRest  que permite cadastrar, buscar, atualizar e deletar um funcionário, além de definir estado, cidade, bairro e endereço através do CEP cadastrado.',
        tecnologias: ['Java', 'Springboot', 'PostgreSQL', 'Swagger', 'JUnit', 'Github Actions']
    },
    {
        id: 3,
        nome: 'Organo',
        link: 'https://github.com/lucasfroque/organo-react',
        descricao: 'Organo é um site que te permite criar times de desenvolvedores através de um formulário.',
        tecnologias: ['React', 'JavaScript', 'HTML', 'CSS']
    }
]

for(let i = 0; i < projetos.length; i++) {
    const cards = document.querySelector('.cards');
    const card = document.createElement('div');
    cards.appendChild(card);
    card.classList.add('card');
    card.onclick = function() {
        window
            .open(projetos[i].link, '_blank')
            .focus();
    }

    const titleDescricao = document.createElement('div');
    card.appendChild(titleDescricao);
    titleDescricao.classList.add('title-descricao');


    const title = document.createElement('h1');  
    title.textContent = projetos[i].nome;
    titleDescricao.appendChild(title);  

    const descricao = document.createElement('p');
    descricao.textContent = projetos[i].descricao;
    titleDescricao.appendChild(descricao);
    
    const projeto = document.createElement('div');
    card.appendChild(projeto);
    projeto.classList.add('projeto');
    
    const stacks = document.createElement('div');
    projeto.appendChild(stacks);
    stacks.classList.add('stacks');

    for(let j = 0; j < projetos[i].tecnologias.length; j++) {
            console.log(j)
            if(projetos[i].tecnologias.length >= 9 && j === 8) {
                const stackDiv = document.createElement('div');
                stacks.appendChild(stackDiv);
                const stack = document.createElement('p');
                stack.textContent = '...';
                stackDiv.appendChild(stack);
                break;
            }
            const stackDiv = document.createElement('div');
            stacks.appendChild(stackDiv);
            const stack = document.createElement('p');
            stack.textContent = projetos[i].tecnologias[j];
            stackDiv.appendChild(stack);
    }
}