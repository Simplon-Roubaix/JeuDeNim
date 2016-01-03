$(document).foundation();

// les variables:
// partie compte les coups - arrivé à 16 fin du jeu
// name1 et 2 pour les noms des joueurs
// n joueur courant
// compte permet un max de 3 coups par joueur
var partie = 0, name1,name2,n=1,compte=3;
//  Jeu stocke le maps du jeu en cours
var jeu = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
// 1 : recuperation des elements du DOM
// enplacement du tableau de jeu
var cibleEl = document.getElementById("cible");
// bouton pour lancer le jeu
var clicCommencer = document.getElementById("commencer");
// zone affichage des messages interactifs pendant la partie
var messEl = document.getElementById("texte");


// 2 : les fonctions
// fonction qui gere l'affichage du jeu
// recoit la var tableau jeu à chaque entrée joueur
var affiche = function(table) {
    var nbBat = 0;
    for (var j=0; j<table.length;j++){
       // change le contenu de la case choisie et sa classe
        var elt = document.getElementById("b"+j);
        // l'element est-il existant? oui je modifie ,
        if (table[j]===1)  {
                elt.src = "img/baton.png";
                // elt.className = "button";
                // elt.className += " rempli";
                nbBat++;
            }
        else  {
                elt.src = "img/allumette-brulee.png";
                // elt.className = "button";
                // elt.className += " vide";
            }
    }
    //fin de partie
    if (nbBat===2) partie = false;
};

// affichage initial du jeu
affiche(jeu);

// fonction pour changer l'objet choisi
function jeuDeNim(event) {

    //Partie toujours en cours?
    partie --;
    console.log("Joueur : "+n);
    if (partie > 0) {
        //Allumette utilisée
        this.src = "img/allumette-brulee.png";
        this.alt = "Baton deja utilisé";
        this.id = partie;
        //Quel est le joueur?
        if (n===1) {
            //demander le nom du premier joueur
            if (!name1) {
                    name1 =  prompt("Veuillez entrer votre prénom Joueur1?");
                    clic1Button.textContent = name1;
            }
            // 3 choix max et on change d'utilisateur:
            compte--;
            console.log(compte);
            if (compte===0) {
                changeJoueur();
            }
        }


        else {
            //demander le nom du second joueur
            if (!name2) {
                    name2 =  prompt("Veuillez entrer votre prénom Joueur2?");
                    clic2Button.textContent = name2;
            }
            // 3 choix max et on change d'utilisateur
            compte--;
            console.log(compte);
            if (compte===0) {
               changeJoueur();
            }
        }

    //this.style.backgroundColor = 'black';
    }
    else {
        messEl.textContent = "Vous avez perdu Joueur " +n;
    }
}

function changeJoueur() {
     // fonction pour basculer d'utilisateur
    console.log("Joueur : "+n);
    if (compte !== 3 ) {
        compte=3;
        if (n===2) {
             n=1;
             clic1Button.className = "active";
             clic1Button.className += " button";
             clic2Button.className = "mute";
             clic2Button.className += " small";
             clic2Button.className += " button";
        }
        else {
            n=2;
            clic1Button.className = "mute";
            clic1Button.className += " small";
            clic1Button.className += " button";
            clic2Button.className = "active";
            clic2Button.className += " button";
        }
        messEl.textContent = "A votre tour joueur "+ n;
    }
    else messEl.textContent = "Vous devez faire un choix minimum joueur "+ n;
}


// On recupere les informations sur les joueurs
function onclickCommencer(){
  // champs nom de joueur
  name1 = document.getElementById("nomJ1").value;
// console.log("--" + name1 + "--");
  name2 = document.getElementById("nomJ2").value;
// console.log("--" + name2 + "--");
// choix du type de joueur et qui jouera 1er
 var joueur1 = document.getElementById("j1").value;
 while (joueur1 === "Joueur1" && !name1) {
   messEl.textContent = "Veuillez saisir votre prénom joueur1 ";
   messEl.className += " active";
   return;
 }
 var joueur2 = document.getElementById("j2").value;
 while (  joueur1 === joueur2  || joueur2 === "Joueur2" && !name ) {
   messEl.textContent = "Veuillez saisir votre prénom joueur2 ou modifiez l'un des joueurs !";
   messEl.className += " active";
   return;
 }
 messEl.textContent = "Veuillez choisir de 1 à 3 batons " + name1;
 messEl.textContent += " vous affrontez " + (name2 || "l'ordinateur");

// console.log(name2);
    // messEl.textContent = "A vous de débuter "+ name1;
    // messEl.textContent += " Ensuite "+ name2;
    partie = 16;

    console.log(partie);
    affiche(jeu);
    // On detecte les clics sur les batons
    // document.getElementById("b0").onclick = jeuDeNim;

}

// 3 : addEvent - Demarrer le jeu
clicCommencer.addEventListener("click",onclickCommencer);
