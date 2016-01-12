$(document).foundation();

// les variables:
// partie compte les coups - arrivé à 1 fin du jeu
// name1 et 2 pour les noms des joueurs
// n joueur courant
// compte permet un max de 3 coups par joueur
var partie = 0, name1,name2,n=1,compte=3;
//  Jeu stocke le maps du jeu en cours
var jeu = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
// var jeu = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
// 1 : recuperation des elements du DOM
// enplacement du tableau de jeu
var cibleEl = document.getElementById("cible");
// bouton pour lancer le jeu
var clicCommencer = document.getElementById("commencer");
// zone affichage des messages interactifs pendant la partie
var messEl = document.getElementById("texte");
// //declaration des var Img:


// 2 : les fonctions
// fonction qui gere l'affichage du jeu
// recoit la var tableau jeu à chaque entrée joueur
var affiche = function(table) {
    var nbBat = 0;
    for (var j=0; j<table.length;j++){
      // change le contenu de la case choisie et sa classe
       if (j<10) var elt = document.getElementById("b0"+j);
       else var elt = document.getElementById("b"+j);
        // l'element est-il existant? oui je modifie ,
        if (table[j]===1)  {
                elt.src = "img/baton.png";
                elt.alt = "Baton disponible";
                elt.title = "Baton disponible";
                nbBat++;
            }
        else  {
                elt.src = "img/allumette-brulee.png";
                elt.alt = "Baton deja utilisé";
                elt.title = "Baton deja utilisé";
                nbBat++;
            }
    }
    //fin de partie
    if (nbBat===2) partie = false;
};

// affichage initial du jeu
affiche(jeu);

// function joue(){
//   alert("et ici aussi ");
//
// }
// fonction qui gere le choix du joueur
function jeuDeNim(event) {
    // Valider que le baton est disponible
    batonClique = parseInt(this.id.substring(1, 3));
    if (jeu[batonClique]===1){
    // le baton clique est = 1 donc pas encore cliqué

    //Partie toujours en cours?
    partie --;
    console.log("Joueur : " + n);
    console.log("Event : " + this.id);
    if (partie > 0) {
        //Allumette utilisée

        jeu[batonClique]=0;
        console.log(jeu);
        affiche(jeu);
        this.title = partie;
        // this.removeEventListener('clic', jeuDeNim, false);
        compte--;
        if (compte===0) {
          // bascule d'utilisateur
          ((n+1)%2 === 0) ? n=2 : n=1;
            // return;
        }

    //this.style.backgroundColor = 'black';
    }
    else {
        messEl.textContent = "Vous avez perdu Joueur " +n;
        return;
    }
  }// fin du test si baton disponible
  else {
    // le baton clique a deja ete utilisé
    alert("Choix invalide");

  }
}


function gereJoueur() {
// changement couleur bouton commencer
while (partie > 0) {
// var b0 = document.getElementById("b00");
// var b1 = document.getElementById("b01");
// var b2 = document.getElementById("b02");
// var b3 = document.getElementById("b03");
// var b4 = document.getElementById("b04");
// var b5 = document.getElementById("b05");
// var b6 = document.getElementById("b06");
// var b7 = document.getElementById("b07");
// var b8 = document.getElementById("b08");
// var b9 = document.getElementById("b09");
// var b10 = document.getElementById("b10");
// var b11 = document.getElementById("b11");
// var b12 = document.getElementById("b12");
// var b13 = document.getElementById("b13");
// var b14 = document.getElementById("b14");
// var b15 = document.getElementById("b15");
     // fonction pour gérer les joueurs
// utilisateur ordinateur choisi? ???
    console.log("joueur n : " + n);
    if ((n === 1 && name1 === "ordinateur") || ( n === 2 && name2 === "ordinateur")){

//   passer par fonction

      // le joueur 'n'  est l'ordinateur
      ordinateur();

    }

    // Pas d'ordinateur - on laisse les joueurs cliquer
    else if (n===1 || n===2){
            //Quel est le joueur?
                console.log(compte);
                alert("A vous de jouer "+n+" compte :"+compte);
                compte--;
                if (compte===0) {
                  // bascule d'utilisateur
                  ((n+1)%2 === 0) ? n=2 : n=1;
                    // return;
                }
                else {
                  joue();
                  // alert("Je pass ici");
                }
        // else messEl.textContent = "Vous devez faire un choix minimum joueur "+ n;
        //EventListener sur les images
      }
  }
}


// On recupere les informations sur les joueurs
function onclickCommencer(){
    // champs nom de joueur
      name1 = document.getElementById("nomJ1").value;
    // console.log("--" + name1 + "--");
      name2 = document.getElementById("nomJ2").value;
    // console.log("--" + name2 + "--");
            // document.getElementById("b00").onclick = jeuDeNim;
            // document.getElementById("b01").onclick = jeuDeNim;
            // document.getElementById("b02").onclick = jeuDeNim;
            // document.getElementById("b03").onclick = jeuDeNim;
            // document.getElementById("b04").onclick = jeuDeNim;
            // document.getElementById("b05").onclick = jeuDeNim;
            // document.getElementById("b06").onclick = jeuDeNim;
            // document.getElementById("b07").onclick = jeuDeNim;
            // document.getElementById("b08").onclick = jeuDeNim;
            // document.getElementById("b09").onclick = jeuDeNim;
            // document.getElementById("b10").onclick = jeuDeNim;
            // document.getElementById("b11").onclick = jeuDeNim;
            // document.getElementById("b15").onclick = jeuDeNim;
            // document.getElementById("b12").onclick = jeuDeNim;
            // document.getElementById("b14").onclick = jeuDeNim;
            // document.getElementById("b13").onclick = jeuDeNim;
    // choix du type de joueur et qui jouera 1er
  // b0.addEventListener("click",jeuDeNim,false);
  // b1.addEventListener("click",jeuDeNim,false);
  // b2.addEventListener("click",jeuDeNim,false);
  // b3.addEventListener("click",jeuDeNim,false);
  // b4.addEventListener("click",jeuDeNim,false);
  // b5.addEventListener("click",jeuDeNim,false);
  // b6.addEventListener("click",jeuDeNim,false);
  // b7.addEventListener("click",jeuDeNim,false);
  // b8.addEventListener("click",jeuDeNim,false);
  // b9.addEventListener("click",jeuDeNim,false);
  // b10.addEventListener("click",jeuDeNim,false);
  // b11.addEventListener("click",jeuDeNim,false);
  // b12.addEventListener("click",jeuDeNim,false);
  // b13.addEventListener("click",jeuDeNim,false);
  // b14.addEventListener("click",jeuDeNim,false);
  // b15.addEventListener("click",jeuDeNim,false);
     var joueur1 = document.getElementById("j1").value;
     while (joueur1 === "Joueur1" && !name1) {
       messEl.textContent = "Veuillez saisir votre prénom joueur1 ";
       messEl.className += " texteactif";
       return;
     }
     var joueur2 = document.getElementById("j2").value;
     while (  joueur1 === joueur2  || joueur2 === "Joueur2" && !name2 ) {
       messEl.textContent = "Veuillez saisir votre prénom joueur2 ou modifiez l'un des joueurs !";
       messEl.className += " texteactif";
       return;
     }
     name1 = name1 || "ordinateur";
     name2 = name2 || "ordinateur";
     messEl.className = "";
     messEl.textContent = "Veuillez choisir de 1 à 3 batons " + name1;
     messEl.textContent += " vous affrontez " + name2;
    //La partie est commencée, on prévoit un reset
    // et deux infos joueurs

    // var reset = document.createElement("button");

        partie = 16;
    // On appelle la fonction qui gere la partie

        gereJoueur();


// fonction select user
    // On detecte les clics sur les batons
        console.log(partie);
        // document.getElementById("b0").onclick = jeuDeNim;
// b0.addEventListener("click",jeuDeNim,false);
// b1.addEventListener("click",jeuDeNim,false);
// b2.addEventListener("click",jeuDeNim,false);
// b3.addEventListener("click",jeuDeNim,false);
// b4.addEventListener("click",jeuDeNim,false);
// b5.addEventListener("click",jeuDeNim,false);
// b6.addEventListener("click",jeuDeNim,false);
// b7.addEventListener("click",jeuDeNim,false);
// b8.addEventListener("click",jeuDeNim,false);
// b9.addEventListener("click",jeuDeNim,false);
// b10.addEventListener("click",jeuDeNim,false);
// b11.addEventListener("click",jeuDeNim,false);
// b12.addEventListener("click",jeuDeNim,false);
// b13.addEventListener("click",jeuDeNim,false);
// b14.addEventListener("click",jeuDeNim,false);
// b15.addEventListener("click",jeuDeNim,true);
}

// 3 : addEvent - Demarrer le jeu
clicCommencer.addEventListener("click",onclickCommencer);
