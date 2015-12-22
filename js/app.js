$(document).foundation();

// les variables:
var partie = 0, name1,name2,n=1,compte=3;

// 1 : recuperation des elements du DOM
var cibleEl = document.getElementById("cible");
var clicCommencer = document.getElementById("commencer");
// Boutons ??
var clic1Button = document.getElementById("clic1");
var clic2Button = document.getElementById("clic2");
alert(partie);

// 2 : les fonctions
// fonction pour changer l'objet choisi
function jeuDeNim(event) {
    
    //Quel est le joueur?
    partie --;
    while (partie > 1) {
        //Allumette utilisée 
        this.src = "img/allumette-brulee.png";
        if (n===1) {
            //demander le nom du premier joueur
            if (!name1) {
                    name1 =  prompt("Veuillez entrer votre prénom Joueur1?");
                    clic1Button.textContent = name1;
            }
            // 3 choix:
            do {

                compte--;
            } while (compte<=1 || true)
        } 
        
        
        else {
            //demander le nom du second joueur
            if (!name2) {
                    name2 =  prompt("Veuillez entrer votre prénom Joueur2?");
                    clic2Button.textContent = name2;
            }
            //
        }
    
    //this.style.backgroundColor = 'black';
    }
    document.getElementById(rJeu).innerHTML = "Vous avez perdu!";
}




function onclickCommencer(){
    partie = 16;
    alert(partie);
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
}

// 3 : addEvent
clicCommencer.addEventListener("click",onclickCommencer); 


    



