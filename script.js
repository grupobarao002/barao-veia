 let jogo

function iniciajogo(){
    const jogador1= document.getElementById('jogador1').value|| 'jogado1';
    const jogador2= document.getElementById('jogador2').value||'jogado2';

    jogo= new JogoDaVelha(jogador1,jogador2);
    document.getElementById('entrada-nome').classList.add('oculto');
    document.getElementById('jogo-container').classList.remove('oculto');
    jogo.atualizarPlacar();

    document.querySelectorAll('.celula').forEach(celular=>{
        celular.addEventListener('click', function(){
            jogo.jogada(this.getAttribute ('data-index'));
        });
    });
}