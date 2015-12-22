$(document).foundation();

// les variables:
var partie = 0 ;

// 1 : recuperation des elements du DOM
var cibleEl = document.getElementById("cible");
var clicCommencer = document.getElementById("commencer");
var b0El = document.getElementById("b0");
var b1El = document.getElementById("b1");

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
    

var onClicButt = function(){
    
   partie = 1;
clicCommencer.removeEventListener
    
}

// 3 : addEvent
clicCommencer.addEventListener("click",onClicButt); 

b0El.addEventListener("click",onImgClic(0));
b0El.addEventListener("click",onImgClic(1));

