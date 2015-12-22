$(document).foundation();

// les variables:
var partie = 0 ;

// 1 : recuperation des elements du DOM
var cibleEl = document.getElementById("cible");
var clicCommencer = document.getElementById("commencer");
alert(partie);

// 2 : les fonctions
// fonction pour changer l'objet choisi
function jeuDeNim(event) {
     
        //this.style.backgroundColor = 'black';
        this.src = "img/allumette-brulee.png";
    
}




function onclickCommencer(){
    partie = 1;
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


    



