//Declarando as variáveis
var tempoSeg = 0;
var estadoRelogio=1;
//Criando os sprites
var relogio = createSprite(200,200);
var ponteiro = createSprite(200,200);
var botaoParar=createSprite(350,350,50,50);
//Definindo animações
relogio.setAnimation("relogio");
ponteiro.setAnimation("ponteiro");
botaoParar.setAnimation("parar");
//Escalando animações
relogio.scale = 0.3;
ponteiro.scale = 0.35;
botaoParar.scale=0.3;
function draw() {
background("black");
//quando o relógio começa
if(estadoRelogio==1)
{
   //calcule os segundos
   tempoSeg = World.seconds;
  //decida o movimento do ponteiro
  ponteiro.rotation = World.seconds*6;
}
  //Valores ao pressionar o botão parar
if(mousePressedOver(botaoParar)){
    estadoRelogio=2;
  }
if(estadoRelogio==2){
    tempoSeg=tempoSeg;
  }
drawSprites();
  //exibir tempo
fill("white");
textSize(40);
text(tempoSeg, 43, 50);
}