const projetos = [
    {
        id: 1,
        nome: 'Alura-flix',
        link: 'https://github.com/lucasfroque/alura-flix',
        descricao: 'O Aluraflix é um projeto desenvolvido durante o Alura Challenge Back-End, que consiste em criar uma API Restful para um sistema de vídeos como a netflix.',
        tecnologias: ['Java', 'Springboot', 'H2 Database']
    },
    {
        id: 2,
        nome: 'TrackMe',
        link: 'https://github.com/lucasfroque/TrackMe',
        descricao: 'O Aluraflix é um projeto desenvolvido durante o Alura Challenge Back-End, que consiste em criar uma API Restful para um sistema de vídeos como a netflix.',
        tecnologias: ['Java', 'Springboot', 'H2 Database']
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
        const stackDiv = document.createElement('div');
        stacks.appendChild(stackDiv);
        const stack = document.createElement('p');
        stack.textContent = projetos[i].tecnologias[j];
        stackDiv.appendChild(stack);
    }

    const link = document.createElement('a');
    link.href = projetos[i].link;
    link.textContent = 'Ver projeto';
    projeto.appendChild(link);

}