// é uma convenção o arquivo principal do javascript ter esse nome.

// alert('Olá mundo');

// function tocaPom() {
//     document.querySelector('#som_tecla_pom').play();
// }

// Deixando o tocaPom sem os parenteses estamos GUARDANDO a função que reproduz o som no clicar da tecla especificada. Se colocassemos a função com parenteses ela seria executada de imediato, sem uma atribuição.

// document.querySelector('.tecla_pom').onclick = tocaPom;

// Aqui guardamos a NodeList de teclas do teclado do html.
const listaDeTeclas = document.querySelectorAll('.tecla');

// Agora precisamos acessar cada uma das teclas individualmente, para passar o onclick, para isso usamos a notação de array para acessar os elmtos da NodeList.


    // const listaDeSons = document.querySelectorAll('audio');

    // function tocaSom(index) {
    // listaDeSons[index].play(); 
    // }

function tocaSomAlura(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento === null || elemento.localName !== 'audio') console.log('Elemento inválido');
    else {
        elemento.play();
    }
}

let todosOsAudios = document.querySelectorAll('audio');

function pausaTodosOsAudios() {
    todosOsAudios.forEach(audio => audio.load());
}

// function tocaTecla(onclick) {
//     listaDeTeclas[onclick].onclick = listaDeSons[onclick];
// }

// Usando while para fazer a associação das teclas com os sons.

let contador = 0;

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const som = tecla.classList[1];
    
    const idAudio = `#som_${som}`;

    tecla.onclick = function () {
        pausaTodosOsAudios();
        tocaSomAlura(idAudio); 
    }

    tecla.onkeydown = function(evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') tecla.classList.add('ativa'); 
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}

// FUNÇÕES ANÔNIMAS PODEM SER USADAS PARA PASSAR UMA FUNÇÃO POR REFERENCIA SEM CHAMALA DIRETAMENTE.
 
// Não pude associar o contador ao tocaSom() pois deu o erro de que o site não pode emitir sons indesejaveis.

// Ainda não entendi qual foi a diferença entre o tocaSom() e o tocaSomAlura() no final das contas. Acho que é pq eu não conseguia fazer uma associação entre um numero da tecla apertada e o som correspondente.