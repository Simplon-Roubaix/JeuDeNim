$(document).foundation();

// les variables:
var partie = 0 ;

// 1 : recuperation des elements du DOM
var cibleEl = document.getElementById("cible");
var clicCommencer = document.getElementById("commencer");
alert(partie);

// 2 : les fonctions
var onImgClic = function (n) {
        // Partie ouverte? 
        /*
        */
        {
        b0El.src = "img/allumette-brulee.png";
        b1El.src = "img/allumette-brulee.png";
        }
    }
// fonction pour changer l'objet choisi
function choisie(event) {
     
        //this.style.backgroundColor = 'black';
        this.src = "img/allumette-brulee.png";
    
}

function jeuDeNim(){
    
    partie = 1;
    alert(partie);
    document.getElementById("b0").onclick = choisie;
    
}

// 3 : addEvent
clicCommencer.addEventListener("click",jeuDeNim); 


    



