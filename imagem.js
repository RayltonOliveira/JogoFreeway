//Imagem do jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;

//Sons do Jogo

let somDoPonto;
let somDaColisao;
let somDaTrilha;

function preload(){
  imagemDaEstrada = loadImage("estrada.png");
  imagemDoAtor = loadImage("ator-1.png");
  imagemCarro1 = loadImage("carro-1.png");
  imagemCarro2 = loadImage("carro-2.png");
  imagemCarro3 = loadImage("carro-3.png");
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3];
  somDoPonto = loadSound("./sons/pontos.wav");
  somDaColisao = loadSound("./sons/colidiu.mp3");
  somDaTrilha = loadSound("./sons/trilha.mp3");
}