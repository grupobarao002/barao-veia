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
class JogoDaVelha{
    constructor(Jogador1,jogador2){
        this.Jogador1=Jogador1;
        this.jogador2=Jogador1;
        this.placaJogador1=0;
        this.placaJogador2=0;
        this.JogadorAtual='x';
        this.tabuleiro=Array(9).fill(null);
        this.JogoAtivo=truer;
        this.atualizarverJogador();
    }
    atualizarverjogador(){
        const vezjogador =  this.jogadorAtual === 'x' ? this.jogador1 : this.jogador2
        document.getElementById('vez-jogador')
        .textContent  =  `vez de; $ {vezJogador}  (${this.jogadorAtual})`;
    }
}