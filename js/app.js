$(document).foundation();

// 1 : recuperation des elements du DOM
var cibleEl = document.getElementById("cible");
var clicCommencer = document.getElementById("commencer");

// 2 : les fonctions
var onClicButt = function(){
    //cibleEl.textContent = "Je m'affiche ici";
    
}

// 3 : addEvent
clicCommencer.addEventListener("click",onClicButt); 

