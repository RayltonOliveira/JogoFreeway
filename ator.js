//código do ator

let xAtor = 80;
let yAtor = 370;
let colisao = false;
let meusPontos = 0;


function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 25, 25);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
    yAtor += 3;
    }
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      voltaPosicaoInicial();
      somDaColisao.play();
    if (maiorQueZero()){
      meusPontos -= 1;
   }
  }
 }
}
function voltaPosicaoInicial(){
    yAtor = 366;
}
function incluiPontos(){
    textAlign(CENTER);
    textSize(25);
    fill (color(255, 165, 40));
    text(meusPontos, width / 5, 27);
}

function marcaPonto(){
    if (yAtor < 12){
      meusPontos += 1;
      somDoPonto.play();
      voltaPosicaoInicial();
    }
}

function maiorQueZero(){
  return meusPontos > 0;
}
function podeSeMover(){
  return yAtor < 370;
}
