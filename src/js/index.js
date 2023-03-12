/* P1 - Linkagem de HTML ao JS */
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

/* P2 - Identificação de Clique de Botão */
    botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        /* P3 - Troca / Desativação da Marcação de Botão */      
        desativarBotaoSelecionado();

        /* P4 - Marcação do Botão Seleção */
        selecionarBotaoCarrosel(botao);

        /* P5 - Esconde a Imagem de Fundo */
        esconderImagemAtiva();

        /* P6 - Troca da Imagem de Fundo */
        mostrarImagemDeFundo(indice);
    })
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrosel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
