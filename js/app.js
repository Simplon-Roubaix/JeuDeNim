$(document).foundation();

// les variables:
var partie = 0, name1,name2,n=1,compte=3;

// 1 : recuperation des elements du DOM
var cibleEl = document.getElementById("cible");
var clicCommencer = document.getElementById("commencer");
// Boutons ??
var clic1Button = document.getElementById("clic1");
var clic2Button = document.getElementById("clic2");
var rJeuEl = document.getElementById("rJeu");


// 2 : les fonctions
// fonction pour changer l'objet choisi
function jeuDeNim(event) {
    
    //Quel est le joueur?
    partie --;
    if (partie > 0) {
        //Allumette utilisée 
        this.src = "img/allumette-brulee.png";
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
                n=2;
                compte=3;
                clic1Button.className = "mute";
                clic2Button.className = "active";
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
                n=1;
                compte=3;
                clic1Button.className = "active";
                clic2Button.className = "mute";
            }
        }
    
    //this.style.backgroundColor = 'black';
    }
    else {
        rJeuEl.textContent = "Vous avez perdu " +n; 
    }
}




function onclickCommencer(){
    partie = 16;
    console.log(partie);
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
    document.getElementById("clic1Button").onclick = jeuDeNim;
    document.getElementById("clic2Button").onclick = jeuDeNim;
}

// 3 : addEvent
clicCommencer.addEventListener("click",onclickCommencer); 


    



