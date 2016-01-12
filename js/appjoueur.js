function joue(){
var b0 = document.getElementById("b00");
var b1 = document.getElementById("b01");
var b2 = document.getElementById("b02");
var b3 = document.getElementById("b03");
var b4 = document.getElementById("b04");
var b5 = document.getElementById("b05");
var b6 = document.getElementById("b06");
var b7 = document.getElementById("b07");
var b8 = document.getElementById("b08");
var b9 = document.getElementById("b09");
var b10 = document.getElementById("b10");
var b11 = document.getElementById("b11");
var b12 = document.getElementById("b12");
var b13 = document.getElementById("b13");
var b14 = document.getElementById("b14");
var b15 = document.getElementById("b15");
  alert("Je passe dans la fonction joue() ");
//declaration des var Img:
//
//
b0.addEventListener("click",jeuDeNim,false);
b1.addEventListener("click",jeuDeNim,false);
b2.addEventListener("click",jeuDeNim,false);
b3.addEventListener("click",jeuDeNim,false);
b4.addEventListener("click",jeuDeNim,false);
b5.addEventListener("click",jeuDeNim,false);
b6.addEventListener("click",jeuDeNim,false);
b7.addEventListener("click",jeuDeNim,false);
b8.addEventListener("click",jeuDeNim,false);
b9.addEventListener("click",jeuDeNim,false);
b10.addEventListener("click",jeuDeNim,false);
b11.addEventListener("click",jeuDeNim,false);
b12.addEventListener("click",jeuDeNim,false);
b13.addEventListener("click",jeuDeNim,false);
b14.addEventListener("click",jeuDeNim,false);
b15.addEventListener("click",jeuDeNim,true);


  messEl.textContent = " à vous de jouer " + (((n+1)%2 === 0) ? name2 : name1);
}

function ordinateur(){

  // batRetirer = nbre de batons a retirer par l'ordinateur
  //res est le nbre de batons restants dans le jeu
  var batRetirer=0, res=0;
  //Strategie ordinateur
  for (var k=0; k<jeu.length;k++){
      if (jeu[k]===1) res++;
  }
  //nbre de batons total modulo4 +1 pour assurer un gain
  ((res%4) === 0 ) ? batRetirer=3 : batRetirer=(res%4)-1;
  if (batRetirer<1) batRetirer=1;
  console.log('sur les '+res+' batons restants, l\'ordinateur en retire '+batRetirer);
  messEl.textContent = "Je retire " + batRetirer + " batons ";
  var l=0;
  while (batRetirer!=0 || l===jeu.length){
      if (jeu[l]===1){
        jeu[l]=0;
        batRetirer--;
      }
      l++;
    }
  affiche(jeu);
  messEl.textContent += " à vous de jouer " + (((n+1)%2 === 0) ? name2 : name1);
  // bascule d'utilisateur
  ((n+1)%2 === 0) ? n=2 : n=1;
  compte=3;
  console.log("if t : " +n);
}
