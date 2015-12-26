$(document).foundation();

// les variables:
var partie = 0, name1,name2,n=1,compte=3;

// 1 : recuperation des elements du DOM
var cibleEl = document.getElementById("cible");
var clicCommencer = document.getElementById("commencer");
// Boutons utilisés pour passer son tour
var clic1Button = document.getElementById("clic1");
var clic2Button = document.getElementById("clic2");
var rJeuEl = document.getElementById("rJeu");
var messEl = document.getElementById("texte");


// 2 : les fonctions
// fonction pour changer l'objet choisi
function jeuDeNim(event) {

    //Partie toujours en cours?
    partie --;
    console.log("Joueur : "+n);
    if (partie > 0) {
        //Allumette utilisée
        this.src = "img/allumette-brulee.png";
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
        rJeuEl.textContent = "Vous avez perdu " +n;
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


function onclickCommencer(){
    messEl.textContent = "A vous de débuter joueur "+ n;
    partie = 16;
    console.log(partie);
    // On detecte les clics sur les batons
    document.getElementById("b0").onclick = jeuDeNim;
    document.getElementById("b1").onclick = jeuDeNim;
    document.getElementById("b2").onclick = jeuDeNim;
    document.getElementById("b3").onclick = jeuDeNim;
    document.getElementById("b4").onclick = jeuDeNim;
    document.getElementById("b5").onclick = jeuDeNim;
    document.getElementById("b6").onclick = jeuDeNim;
    document.getElementById("b7").onclick = jeuDeNim;
    document.getElementById("b8").onclick = jeuDeNim;
    document.getElementById("b9").onclick = jeuDeNim;
    document.getElementById("b10").onclick = jeuDeNim;
    document.getElementById("b11").onclick = jeuDeNim;
    document.getElementById("b12").onclick = jeuDeNim;
    document.getElementById("b13").onclick = jeuDeNim;
    document.getElementById("b14").onclick = jeuDeNim;
    document.getElementById("b15").onclick = jeuDeNim;
    // on passe la main avant trois sélections
    clic1Button.onclick = changeJoueur;
    clic2Button.onclick = changeJoueur;
}

// 3 : addEvent - Demarrer le jeu
clicCommencer.addEventListener("click",onclickCommencer);
